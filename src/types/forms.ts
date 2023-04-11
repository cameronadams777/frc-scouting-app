export type InputFieldType =
  | "text_input"
  | "number_input"
  | "checkbox"
  | "dropdown_select";

export interface IScoutingFormField {
  name: string;
  type: InputFieldType;
  required: boolean;
}

export type FieldType = keyof IScoutingFormField;

export interface IUpdateFieldArgs {
  field: FieldType;
  value: string | InputFieldType | boolean;
}

export interface IScoutingForm {
  formId: string;
  formName: string;
  fields: Array<IScoutingFormField>;
}
