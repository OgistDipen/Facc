import styled from "styled-components";

const ButtonStyle = styled.div`
  width: ${(props) => {
    if (props.width) return props.width;
    return "201px;";
  }};
    margin: ${(props) => {
      if (props.margin) return props.margin;
      return "0px";
    }};
  button {
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    width: ${(props) => {
      if (props.width) return props.width;
      return "201px;";
    }};
    max-width: ${(props) => {
      if (props.width) return props.width;
      return "201px;";
    }};
    height: ${(props) => {
      if (props.height) return props.height;
      return "40px;";
    }};
    background: ${(props) => {
      if (props.background) return props.height;
    }};
   
    color: #000;
    font-weight: 500;
    letter-spacing: 1px;
    padding: 0px;
    outline: none;
    border: 1px solid #c4c4c4;
    font-size: 14px;
    border-radius: 5px;
    ${(props) => {
      switch (props.btn) {
        case "negative":
          return `background: #DF5B5B; color: #fff ; border-color: transparent;`;
        case "confirm":
          return `background: #489150; color: #fff ; border-color: transparent;`;
        case "info":
          return `background: #5BB3DF; color: #fff ; border-color: transparent;`;
        default:
          return `background:#fff; color: #555555;`;
      }
    }}
      text-transform: ${(props) => {
        if (props.tt) return props.tt;
        return "none";
      }};
      cursor: pointer;
      
    transition:all 0.2s;
    :active {
      filter: brightness(90%);
    }

    :hover {
      filter: brightness(95%);
    }
  }
 
`;

export default ButtonStyle;
