import { Component, For } from "solid-js";
import { createStore, SetStoreFunction } from "solid-js/store";
import { IScoutingForm, IScoutingFormField } from "../types/forms";
import { NewFieldForm, defaultField } from "./new-field-form";

interface NewFormProps {
  formValues: IScoutingForm;
  updateForm: SetStoreFunction<IScoutingForm>;
}

export const NewForm: Component<NewFormProps> = ({
  formValues,
  updateForm,
}) => {
  const [newFields, setNewFields] = createStore<IScoutingFormField[]>([]);

  return (
    <div>
      <For each={newFields}>
        {(field, idx) => (
          <NewFieldForm
            fieldData={field}
            onComplete={(updatedField) => {
              setNewFields([
                ...newFields.slice(0, idx()),
                ...newFields.slice(idx() + 1),
              ]);
              updateForm("fields", [...formValues.fields, updatedField]);
            }}
          />
        )}
      </For>
      <button onClick={() => setNewFields([...newFields, defaultField])}>
        New Field
      </button>
    </div>
  );
};
