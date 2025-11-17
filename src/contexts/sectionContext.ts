import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";
export const sectionContext = createContext<{
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
}>({
  activeSection: "intro-section",
  setActiveSection: () => {},
});
