import { createCookieSessionStorage } from "@remix-run/node";
import { createThemeSessionResolver } from "remix-themes";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__remix-themes",
    domain: process.env.DEPLOYED == "DEPLOYED" ? "asdf" : null,
    path: "/",
    httpOnly: true,
    sameSites: "lax",
    secrets: ["secert"],
    secure: process.env.DEPLOYED === "DEPLOYED" ? true : false,
  },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
