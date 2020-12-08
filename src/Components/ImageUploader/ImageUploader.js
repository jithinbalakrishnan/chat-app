import React, { useState} from 'react';
import * as Style from './Style';
import {ImageUploadButton , DisplayPhotoSvgs} from './Utils'


const ImageUploader = (props) => {
    const [isOpen, toggleModal] = useState(false);
    const [selectedImg, selectImg] = useState(DisplayPhotoSvgs[0].id);
    const [selectedFile , setFile] =  useState(null);
    const getImg = (svgId) => {
        let index = DisplayPhotoSvgs.findIndex(svg => (svg.id == svgId));
        if (index == -1 ) {
            return <Style.ImageWrapper><img src={selectedFile}/></Style.ImageWrapper>;
        } else {
            return DisplayPhotoSvgs[index].svg({height:'170', width: '200'});
        }
    };
    const updateSvg = (data) => {
        selectImg(data.id);
        props.hanldeImageChange(data.id);
        setFile(null);
    }; 
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let reader = new FileReader();
          reader.onload = (e) => {
                selectImg("");
                setFile(e.target.result);
                props.hanldeImageChange(e.target.result);
          };
          reader.readAsDataURL(event.target.files[0]);
        }
    };    
    return (
        <Style.Container>
            <Style.SvgContainer>
                {getImg(selectedImg)}
            </Style.SvgContainer>
            <Style.SvgRow>
                 <ImageUploadButton onImageChange = {onImageChange}/>
                 {DisplayPhotoSvgs.map((item, index) => {
                     return <Style.SvgWrapper key= {index} borderColor = {item.id == selectedImg ? "rgb(100, 217, 168)" : "#b1b1b126"} 
                    onClick={updateSvg.bind(this, item)}> {item.svg(  {height:item.height, width:item.width})}</Style.SvgWrapper>
                })}
            </Style.SvgRow>
        </Style.Container>
    )

};

export default ImageUploader;