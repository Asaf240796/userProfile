import React, { useCallback, useState, useEffect, useContext } from "react";
import { Caption, DropZone, Stack, Thumbnail, Modal } from "@shopify/polaris";
import { NoteMinor } from "@shopify/polaris-icons";
import ImageModal from "./Modal/ImageModal";

// import ReactCrop from 'react-image-crop'

const validImageTypes = ["image/gif", "image/jpeg", "image/png"];

const PhotoUpload = ({ cropImage }) => {
  const [img, setImg] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const handleDropZoneDrop = useCallback(
    (_dropFiles, acceptedFiles, _rejectedFiles) => {
      // crop and get cropped image from acceptedFile
      setImg((img) => {
        return img.length === 0 ? [...img, ...acceptedFiles] : [...img];
      });
    },
    []
  );

  useEffect(() => {
    if (img.length) setIsOpen(true);
  }, [img]);

  const uploadedFiles = img.length > 0 && (
    <Stack vertical>
      {cropImage
        ? img.map((file, index) => (
            <Stack alignment="center" key={index}>
              <img src={cropImage} />
              <div>
                {file.name} <Caption>{file.size} bytes</Caption>
              </div>
            </Stack>
          ))
        : null}
    </Stack>
  );

  return (
    <>
      <DropZone
        onDrop={handleDropZoneDrop}
        accept="image/*"
        allowMultiple={false}
      >
        {/* {<img src={value}/>} */}
        {uploadedFiles}
        {!img.length && <DropZone.FileUpload />}
      </DropZone>
      {img.length ? (
        <ImageModal
          isOpen={isOpen}
          setOpen={setIsOpen}
          img={URL.createObjectURL(img[0])}
        />
      ) : null}
    </>
  );
};
export default PhotoUpload;
