import { children, Component, JSX } from "solid-js";
import { NavBar } from "../components/nav-bar";

interface MainLayoutProps {
  childWrapperClassNames?: string;
  layoutClassNames?: string;
  children: JSX.Element;
}

export const MainLayout: Component<MainLayoutProps> = (props) => {
  const childrenNodes = children(() => props.children);
  return (
    <div class={props.layoutClassNames}>
      <NavBar />
      <div class={props.childWrapperClassNames}>{childrenNodes()}</div>
    </div>
  );
};
