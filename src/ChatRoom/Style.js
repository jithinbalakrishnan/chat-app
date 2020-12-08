import styled, { css } from "styled-components";

const ChatRoomContainer = styled.div`
    background-color: #f7f4f4eb;
    height: 600px;
    width: 40%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 7px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.26);
    min-width: 400px;
`;
const ChatRoomWrapper = styled.div`
   
`;
const TextArea = styled.div`
    height: 50px;
    background: #fff;
    width: 90%;
`;
const MessageContainer = styled.div`
    height: 550px;
    overflow: auto;
`;
const InputField = styled.input`
    height: 50px;
    border: none;
    padding: 10px;
    font-size: 15px;
    color: #00000096;
    width: 100%;
    
    &:focus {
        outline-color: #fff;
       
    }
`;
const MessageBox = styled.div`
    text-align: right;
    font-size: 14px;
    min-height: 20px;
    border-radius: 5px;
    padding: 9px;
    background: #5553b7;
    box-shadow: 0 1px 2px rgba(0,0,0,.15);
    color: #fff;
    width: auto;
    min-width: 30px;
    max-width: 330px;
    text-align: left;
    margin: 3px 0;

`;
const MessageWrapper = styled.div`
    padding: 5px;
    margin: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: ${props => props.customCss.justifyContent};

    & svg {
        margin-left: 4px;
    }
`;

const AttchmentIconWrapper = styled.div`
     width: 10%;
     background: #fff;
     display: flex;
    justify-content: center;
    align-items: center;

    & input {
        display: none;
    }
    :hover {
        cursor : pointer;
    };
    & svg:hover {
        cursor : pointer;
    };
`;
const BottomContainer = styled.div`
    display: flex;
`;
const ImageTemplate = styled.img`
    width: 100%;
`;
const ImageAvatar = styled.img`
    height: 32px;
    width: 32px;
    border-radius: 50%;
    margin-left: 5px;
`;
export {
    ChatRoomContainer,
    ChatRoomWrapper,
    TextArea,
    MessageContainer,
    InputField,
    MessageBox,
    MessageWrapper,
    AttchmentIconWrapper,
    BottomContainer,
    ImageTemplate,
    ImageAvatar
};