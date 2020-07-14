import React from "react";
import TextareaStyle from "./style";

const Textarea = (props) => {
  return (
    <TextareaStyle
      margin={props.margin}
      height={props.height}
      width={props.width}
    >
      {props.label ? <label>{props.label}</label> : null}
      <textarea
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value || ""}
        onClick={props.onClick}
        name={props.name}
        onBlur={props.onBlur}
      />
    </TextareaStyle>
  );
};

export default Textarea;
