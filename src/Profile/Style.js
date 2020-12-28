import styled, {css} from "styled-components";

const Container = styled.div`
    width: 40%;
    border: 1px solid #dad2d2;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 16px;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    min-width: 400px;
    background: #b1b1b126
`;

const CommonStyle = css`
     display: block;
     width: 100%;
`;

const Input = styled.input`
    ${CommonStyle}
    font: inherit;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #ccc;
    outline: none;
    background: #b1b1b105;
    :hover {
        outline: none;
    }
`;
const Label = styled.label`
    ${CommonStyle}

    & sup {
      color: red;
      font-size: 14px;
      vertical-align: top;
    }
`;

const Button = styled.button`
  font: inherit;
  background:  ${props => props.disabled ? "#b5b4b4" : "#ff2058"};
  padding: 8px 30px;
  color: white;
  border: 1px solid ${props => props.disabled ? "#b5b4b4" : "#ff2058"};
  margin: 1px 0;
  border-radius: 5px;
  cursor: pointer;
  float: right;
  &hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
  };
  &active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26); 
  };
  & focus {
  outline: none;
  };
`;

export {
    Container,
    Input,
    Label,
    Button,

}