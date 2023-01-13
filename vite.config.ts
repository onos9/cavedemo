import { sveltekit } from "@sveltejs/kit/vite";
import UnoCSS from "unocss/vite";
import UnocssIcons from "@unocss/preset-icons";
import type { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [
    UnoCSS({
      presets: [UnocssIcons()],
    }),
    sveltekit(),
  ],
};

export default config;
