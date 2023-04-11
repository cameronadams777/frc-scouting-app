import { Component, JSX } from "solid-js";

interface GenericFormInput extends JSX.InputHTMLAttributes<HTMLInputElement> {}

export const GenericFormInput: Component<GenericFormInput> = (props) => {
  return (
    <div>
      <label>{props.name}</label>
      <input {...props} />
    </div>
  );
};
