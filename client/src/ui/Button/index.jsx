import React from "react";
import ButtonStyle from "./style";

const Button = (props) => {
  return (
    <ButtonStyle
      height={props.height}
      width={props.width}
      tt={props.tt}
      btn={props.btn}
      margin={props.margin}
      data-dismiss={props.dataDismiss}
    >
      <button
        width={props.width}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </ButtonStyle>
  );
};

export default Button;
