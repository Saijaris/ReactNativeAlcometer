import { darkTheme } from "./DarkTheme";
import { LightTheme } from "./Styles";

export const useStyle = (dark) => dark ? darkTheme : LightTheme;
