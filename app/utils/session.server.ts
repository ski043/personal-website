import { createCookieSessionStorage } from "@remix-run/node";
import { createThemeSessionResolver } from "remix-themes";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__remix-themes",
    domain:
      process.env.NODE_ENV !== "development"
        ? "https://personal-website-gilt-nine.vercel.app/"
        : null,
    path: "/",
    httpOnly: true,
    sameSites: "lax",
    secrets: ["secert"],
    secure: process.env.NODE_ENV === "development" ? false : true,
  },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
