import { Component, For } from "solid-js";
import { IScoutingForm } from "../types/forms";
import { FormElement } from "./form-element";

interface FormViewerProps {
  formValues: IScoutingForm;
}

export const FormViewer: Component<FormViewerProps> = ({ formValues }) => {
  return (
    <For each={formValues.fields}>
      {(field) => <FormElement field={field} />}
    </For>
  );
};
