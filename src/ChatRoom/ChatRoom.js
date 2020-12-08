import React, { useState, useRef, useEffect } from 'react';
import * as Style from './Style';
import { MESSAGE_TYPE } from './Constant';
import { AttchmentIcon } from './Svgs';
import { MESSAGE_TEMPLATES, SUPPORTED_ATTACHMENTS } from './Templates';
import { DisplayPhotoSvgs } from '../Components/ImageUploader/Utils';
import { Breadcrumb } from '../Components/Breadcrumb/Breadcrumb';

const ChatRoom = (props) => {
    const [messages, addMessage] = useState([{
        message: `Hey ${props.userData.name}, Welcome to chat room`,
        type: MESSAGE_TYPE.INCOMING
    }]);
    const [message, setMessage] = useState('');
    const [imgSrc, setImg] = useState(null);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messages.length && scrollToBottom();
    }, [messages]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && message) {
            updateMessageList(message);
        }
    };
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const onFileSelect = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            let file = event.target.files[0];
            let fileType = file.type.split('/')[0];
            if (SUPPORTED_ATTACHMENTS.includes(fileType)) {
                reader.onload = (e) => {
                    updateMessageList(MESSAGE_TEMPLATES[fileType]({ src: e.target.result }));
                };
                reader.readAsDataURL(file);
            }
            
        }
    };
    const getImageTemplate = (userData) => {
        let index = DisplayPhotoSvgs.findIndex(svg => (svg.id == userData.imgSrc));
        if (index == -1) {
            return <Style.ImageAvatar src={userData.imgSrc} />
        } else {
            return DisplayPhotoSvgs[index].svg({ height: '32', width: '32' });

        }
    }
    const updateMessageList = (message) => {
        let allMessages = [...messages];
        allMessages.push({ message: message, type: MESSAGE_TYPE.OUTGOING });
        addMessage(allMessages);
        setMessage('');
    };

    return (
        <React.Fragment>
            <Breadcrumb title={"Chat Room"} />
            <Style.ChatRoomContainer>
                <Style.ChatRoomWrapper>
                    <Style.MessageContainer>
                        {messages.map((item, index) => {
                            return <Style.MessageWrapper ref={messagesEndRef} key={index} customCss={{ justifyContent: item.type == MESSAGE_TYPE.INCOMING ? "flex-start" : "flex-end" }}>
                                <Style.MessageBox >{item.message}</Style.MessageBox>
                                {item.type == MESSAGE_TYPE.OUTGOING && props.userData && getImageTemplate(props.userData)}
                            </Style.MessageWrapper>
                        })
                        }
                    </Style.MessageContainer>
                    <Style.BottomContainer>
                        <Style.TextArea>
                            <Style.InputField autofocus = {true} placeholder={"Type your message"} value={message} onKeyDown={handleKeyDown} onChange={e => { setMessage(e.target.value) }} />
                        </Style.TextArea>
                        <Style.AttchmentIconWrapper>
                            <label htmlFor="myfile"><AttchmentIcon /> <input type="file" id="myfile" name="myfile" onChange={onFileSelect} /></label>
                        </Style.AttchmentIconWrapper>
                    </Style.BottomContainer>
                </Style.ChatRoomWrapper>
            </Style.ChatRoomContainer>
        </React.Fragment>
    )
};

export default ChatRoom;
