import styled, {css} from "styled-components";

const SvgContainer = styled.div`
    display: flex;
    align-items: center;
    height: inherit;
    margin-bottom: 25px;

    & svg {
        margin: 0 auto;
        display: block; 
        height: 170;
        width: 200;
    }
`;

const Container = styled.div`
    margin: 20px 20px;
`;
const SvgRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ImageUploadButton = styled.div`
    border: 1px solid rgb(202, 211, 227);
    color: rgb(202, 211, 227);
    border-radius: 50%;
    width: 64px;
    height: 64px;
    margin-right: 16px;

    & input {
        display: none;
    };

    & svg {
        margin-top: 9px;
        margin-left: 24px;
    };
    :hover {
        cursor : pointer;
    };
`;

const UploadText = styled.div`
    text-align: center;
`;
const SvgWrapper = styled.div`
    border: 3px solid ${props => props.borderColor};
    color: rgb(202,211,227);
    border-radius: 50%;
    width: 73px;
    height: 73px;
`;

const imgSize = css`
    height: 180px;
    width: 180px;
`;

const ImageWrapper = styled.div`
    ${imgSize}
    margin-left: auto;
    margin-right: auto;
    display: block;

    & img {
        ${imgSize}
        border-radius: 50%;
    }
`;
export {
    SvgContainer,
    Container,
    SvgRow,
    ImageUploadButton,
    UploadText,
    SvgWrapper,
    ImageWrapper
}