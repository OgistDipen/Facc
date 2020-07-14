import React from "react";
import InputStyle from "./style";

const Input = (props) => {
  return (
    <InputStyle margin={props.margin} height={props.height} width={props.width}>
      {props.label ? <label>{props.label}</label> : null}
      <input
        type={props.type}
        width={props.width}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value || ""}
        onClick={props.onClick}
        name={props.name}
        onBlur={props.onBlur}
        readOnly={props.readOnly}
        disabled={props.disabled}
        defaultValue={props.defaultValue}
      />
    </InputStyle>
  );
};

export default Input;
