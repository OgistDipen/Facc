import styled from "styled-components";

const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => {
    if (props.width) return props.width;
    return "200px;";
  }};

  label {
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.5px;
    width: ${(props) => {
      if (props.width) return props.width;
      return "200px;";
    }};
  }
  input {
    margin: ${(props) => {
      if (props.margin) return props.margin;
      return "0px;";
    }};

    height: ${(props) => {
      if (props.height) return props.height;
      return "40px;";
    }};
    color: #626262;
    font-weight: 400;
    padding: 0px;
    padding-left: 5px;
    outline: none;
    border: 1px solid #c4c4c4;
    font-size: 14px;
    border-radius: 5px;
    transition: all 0.2s;
  }
  input:focus {
    border-color: gray;
  }
  input::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    opacity: 1; /* Firefox */
    font-weight: 300;
    font-size: 13px;
    letter-spacing: 0.3px;
  }
`;

export default InputStyle;
