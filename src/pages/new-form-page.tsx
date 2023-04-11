import { BaseDirectory, writeTextFile } from "@tauri-apps/api/fs";
import { Component } from "solid-js";
import { createStore } from "solid-js/store";
import { FormViewer } from "../components/form-viewer";
import { NewForm } from "../components/new-form";
import { MainLayout } from "../layouts/main-layout";
import { IScoutingForm } from "../types/forms";

const defaultForm: IScoutingForm = {
  formId: "1234-5678-01234",
  formName: "",
  fields: [
    {
      name: "Team Number",
      type: "number_input",
      required: true,
    },
  ],
};

const NewFormPage: Component = () => {
  const [newForm, setNewForm] = createStore<IScoutingForm>(defaultForm);

  const createScoutingForm = () => {
    writeTextFile(`${newForm.formId}.json`, JSON.stringify(newForm), {
      dir: BaseDirectory.Desktop,
    });
  };

  return (
    <MainLayout childWrapperClassNames="w-full h-full flex flex-col justify-center items-center">
      <h2>Create New Form</h2>
      <FormViewer formValues={newForm} />
      <NewForm formValues={newForm} updateForm={setNewForm} />
      <button onClick={createScoutingForm}>Submit</button>
    </MainLayout>
  );
};

export default NewFormPage;
