import React, { useCallback, useContext, useState } from "react";
import { Modal } from "@shopify/polaris";
import * as Styled from "./ImageModal.style";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import CropImage from "./CropImage";
import { ImageContext } from "../UserProfileEdit/UserProfileEdit";

const ImageModal = ({ isOpen, setOpen, img }) => {
  const [completedCrop, setCompletedCrop] = useState(null);
  const [url, setUrl] = useState();
  const [files, setFiles] = useContext(ImageContext);
  const toggleActive = useCallback(() => setOpen((active) => !active), []);

  const handleSave = () => {
    setFiles(url);
    setOpen((active) => !active);
  };

  return (
    <Modal
      large
      open={isOpen}
      onClose={toggleActive}
      title="Crop image"
      primaryAction={{
        content: "upload Image",
        onAction: handleSave,
      }}
      secondaryActions={[
        {
          content: "Cancel",
          onAction: toggleActive,
        },
      ]}
    >
      (
      <CropImage
        completedCrop={completedCrop}
        setCompletedCrop={setCompletedCrop}
        img={img}
        setUrl={setUrl}
      />
      )
    </Modal>
  );
};

export default ImageModal;
