import { Component } from "solid-js";
import { InputFieldType, IScoutingFormField } from "../types/forms";
import { GenericFormInput } from "./generic-form-input";

interface FormElementProps {
  field: IScoutingFormField;
}

export const FormElement: Component<FormElementProps> = ({ field }) => {
  const fieldViewByType = () => {
    const htmlByFieldType: Record<InputFieldType, Element> = {
      text_input: (
        <GenericFormInput
          id={field.name}
          name={field.name}
          type="text"
          required={field.required}
        />
      ),
      number_input: (
        <GenericFormInput
          id={field.name}
          name={field.name}
          type="number"
          required={field.required}
        />
      ),
      checkbox: (
        <GenericFormInput
          id={field.name}
          name={field.name}
          type="checkbox"
          required={field.required}
        />
      ),
      dropdown_select: <div></div>,
    };

    return htmlByFieldType[field.type];
  };

  return <div>{fieldViewByType()}</div>;
};
