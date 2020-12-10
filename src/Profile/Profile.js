

import React, { useState } from 'react';
import ImageUploader from '../Components/ImageUploader/ImageUploader';
import * as Styles from './Style';
import { Breadcrumb } from '../Components/Breadcrumb/Breadcrumb';
import {DisplayPhotoSvgs} from '../Components/ImageUploader/Utils';
import { useHistory } from 'react-router-dom';

const Profile = (props) => {
    const [name, setName] = useState('');
    const [img, setImg] = useState(null);
    const history = useHistory();

    const hanldeSubmit = () => {
        props.handleUserData({name: name, imgSrc: (img || DisplayPhotoSvgs[0].id), authenticated: true});
        history.push("/chat-room");
    };
    const hanldeImageChange = (selectedImg) => setImg(selectedImg);

    return <React.Fragment>
        <Breadcrumb title= {"Set-up your profile"} />
        <h2 className= "title">Version Test {process.env.REACT_APP_VERSION}</h2>
        <Styles.Container>
            <Styles.Label htmlFor="fname">Name <sup>*</sup></Styles.Label>
            <Styles.Input type="text" id="fname" name="fname" placeholder="Enter your name" onChange={event => {
                setName(event.target.value)
            }}></Styles.Input>
            <ImageUploader hanldeImageChange={hanldeImageChange} />
            <Styles.Button disabled={!name} onClick={hanldeSubmit}> Submit</Styles.Button>

        </Styles.Container>
    </React.Fragment>

};

export default Profile;
