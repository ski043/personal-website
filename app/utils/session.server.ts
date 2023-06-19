import { createCookieSessionStorage } from "@remix-run/node";
import { createThemeSessionResolver } from "remix-themes";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__remix-themes",
    domain:
      process.env.NODE_ENV == "production" &&
      "https://personal-website-xi-lac.vercel.app/",
    path: "/",
    httpOnly: true,
    sameSites: "lax",
    secrets: ["secert"],
    secure: process.env.NODE_ENV === "development" && true,
  },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
