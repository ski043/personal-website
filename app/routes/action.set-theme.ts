import { createThemeAction } from "remix-themes";
import { themeSessionResolver } from "~/utils/session.server";

export const action = createThemeAction(themeSessionResolver);
