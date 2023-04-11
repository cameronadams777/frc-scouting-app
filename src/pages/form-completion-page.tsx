import { open } from "@tauri-apps/api/dialog";
import { readTextFile } from "@tauri-apps/api/fs";
import { Component, createSignal, Show } from "solid-js";
import { FormViewer } from "../components/form-viewer";
import { MainLayout } from "../layouts/main-layout";
import { IScoutingForm } from "../types/forms";

const FormCompletionPage: Component = () => {
  const [activeForm, setActiveForm] = createSignal<IScoutingForm>();

  const loadForm = async () => {
    // Use tauri to find file to load
    try {
      const selectedPath = await open({
        filters: [
          {
            name: "Forms",
            extensions: ["json"],
          },
        ],
      });
      // Use tauri to load form
      const contents = await readTextFile(selectedPath as string);
      const formAsJSON: IScoutingForm = JSON.parse(contents);
      setActiveForm(formAsJSON);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainLayout>
      <Show when={activeForm() != null}>
        <FormViewer formValues={activeForm()} />
      </Show>
      <button onClick={loadForm}>Load Form</button>
    </MainLayout>
  );
};

export default FormCompletionPage;
