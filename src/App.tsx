import { lazy } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import { HomePage } from "./pages/home-page";
const FormCompletionPage = lazy(() => import("./pages/form-completion-page"));
const NewFormPage = lazy(() => import("./pages/new-form-page"));

function App() {
  return (
    <Routes>
      <Route path="/" component={HomePage} />
      <Route path="/new-form" component={NewFormPage} />
      <Route path="/complete-form" component={FormCompletionPage} />
    </Routes>
  );
}

export default App;
