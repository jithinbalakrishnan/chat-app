
import React from 'react';
import { DefaultImageAvatar, WomenSvg, ManSvg, UploadIcon } from './Svgs';
import * as Style from './Style';

export const DisplayPhotoSvgs = [
    {svg: (props) => <DefaultImageAvatar {...props}/>, id: "default" , height:70, width: 70 },
    {svg: (props) => <WomenSvg {...props} />, id: "women", height:60, width: 60},
    {svg: (props) => <ManSvg {...props}/>, id: "man", height:60, width: 60 }
];

export const ImageUploadButton = (props) => (
    <label htmlFor="image-upload">
    <Style.ImageUploadButton>
        <UploadIcon /> <Style.UploadText>Upload</Style.UploadText> 
        <input type="file" id="image-upload"  accept="image/*" onChange = {props.onImageChange}/>
    </Style.ImageUploadButton></label>
);
