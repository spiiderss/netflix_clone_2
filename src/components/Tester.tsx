import { useTheme } from "next-themes";
import React from "react";

interface TesterProps {}
const Tester: React.FC<TesterProps> = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        TesterTogggle
      </button>
    </div>
  );
};
export default Tester;
