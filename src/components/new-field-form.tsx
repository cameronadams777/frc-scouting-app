import { Component, createSignal } from "solid-js";
import { InputFieldType, IScoutingFormField } from "../types/forms";

export const defaultField: IScoutingFormField = {
  name: "",
  type: "text_input",
  required: false,
};

interface NewFieldFormProps {
  fieldData: IScoutingFormField;
  onComplete: (field: IScoutingFormField) => void;
}

export const NewFieldForm: Component<NewFieldFormProps> = ({
  fieldData,
  onComplete,
}) => {
  const [newField, setNewField] = createSignal(fieldData);
  return (
    <div>
      <label>Field Name</label>
      <input
        type="text"
        value={newField().name}
        onInput={(ev) =>
          setNewField({
            ...newField(),
            name: (ev.target as HTMLInputElement).value,
          })
        }
      />
      <label>Choose Input Type</label>
      <select
        onChange={(ev) => {
          setNewField({
            ...newField(),
            type: (ev.target as HTMLSelectElement).value as InputFieldType,
          });
        }}
      >
        <option disabled>Choose Form Input</option>
        <option value="text_input">Text Input</option>
        <option value="number_input">Number Input</option>
        <option value="checkbox">Checkbox</option>
        <option value="dropdown_select">Dropdown Select</option>
      </select>
      <label>Is Field Required</label>
      <input
        type="checkbox"
        checked={newField().required}
        onChange={(ev) =>
          setNewField({
            ...newField(),
            required: (ev.target as HTMLInputElement).checked,
          })
        }
      />
      <button onClick={() => onComplete(newField())}>Add</button>
    </div>
  );
};
