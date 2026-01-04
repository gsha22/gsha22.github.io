"use client";

import { PropsWithChildren, useMemo, useState } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CssBaseline, ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";

// Dedicated registry to inject Emotion/MUI styles during the app router server render.
function createEmotionCache() {
  const cache = createCache({ key: "mui", prepend: true });
  cache.compat = true;
  return cache;
}

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: "var(--font-dm-sans), var(--font-inter), system-ui, -apple-system, sans-serif",
    },
  })
);

export default function ThemeRegistry({ children }: PropsWithChildren) {
  const [cache] = useState(createEmotionCache);

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{ __html: Object.values(cache.inserted).join(" ") }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
