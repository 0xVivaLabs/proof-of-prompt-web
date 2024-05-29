import { defineConfig, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "fontshare",
      fonts: {
        sans: "Oswald",
        mono: "Poppins",
      },
    }),
  ],
  theme: {
    colors: {
      primary: "#FFA736",
      secondary: "#FFF1B2",
      dark: "#001228",
      light: "#FFF0D6",
      accent: "#AB032E",
      inverse: "#10B1E6",
    },
    boxShadow: {
      box: "4px 4px 0px #001228",
      button: "2px 2px 0px #001228",
    },
    borderRadius: {
      custom: "10px",
    },
  },
  shortcuts: [
    {
      btn: "bg-primary hover:bg-accent disabled:bg-inverse border-2 border-dark rounded-custom text-dark py-2 px-4 shadow-button font-sans focus:outline-none",
      box: "bg-secondary border-2 border-dark border-solid rounded-custom text-dark py-2 px-4 shadow-box font-mono",
      "data-row": "flex w-full justify-between",
      connect: "flex flex-row justify-between gap-x-1",
    },
  ],
});
