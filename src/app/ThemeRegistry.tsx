"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["300", "400"],
  style: ["normal"],
  subsets: ["latin"],
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ThemeRegistry(props: { options: any; children: any }) {
  const { children } = props;

  const theme = createTheme({
    palette: {
      primary: {
        light: "#fff3c4",
        main: "#e9f035",
        dark: "#f0b600",
        contrastText: "#fff3c4",
      },
      secondary: {
        light: "#fff3c4",
        main: "#e9f035",
        dark: "#006e24",
        contrastText: "#fff3c4",
      },
    },
    typography: {
      fontFamily: [
        inter.style.fontFamily,
        "Roboto",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
