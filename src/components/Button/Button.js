import React from 'react'
import * as Styled from './Button.style'

const Button = ({callBack,children})=> {
    return (
        <Styled.Button onClick={callBack} ><Styled.Title>{children}</Styled.Title></Styled.Button>
    )
}

export default Button
