import styled from "styled-components";

const TextareaStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props) => {
    if (props.margin) return props.margin;
    return "0px;";
  }};
  label {
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.5px;
  }
  textarea {
    margin: ${(props) => {
      if (props.margin) return props.margin;
      return "0px;";
    }};
    width: ${(props) => {
      if (props.width) return props.width;
      return "100%;";
    }};
    height: ${(props) => {
      if (props.height) return props.height;
      return "120px;";
    }};
    color: rgba(0, 0, 0, 0.9);
    font-weight: 400;
    padding: 10px 5px;
    outline: none;
    border: 1px solid #c4c4c4;
    font-size: 14px;
    border-radius: 5px;
    transition: all 0.2s;
  }
  textarea:focus {
    border-color: gray;
  }
  textarea::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    opacity: 1; /* Firefox */
    font-weight: 300;
    font-size: 13px;
    letter-spacing: 0.3px;
  }
`;

export default TextareaStyle;
