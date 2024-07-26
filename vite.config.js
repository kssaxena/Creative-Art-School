import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.FORM_SERVICE_KEY": JSON.stringify(env.FORM_SERVICE_KEY),
      "process.env.FORM_TEMPLATE_KEY": JSON.stringify(env.FORM_TEMPLATE_KEY),
      "process.env.FORM_PUBLIC_KEY": JSON.stringify(env.FORM_PUBLIC_KEY),
    },
    plugins: [react()],
  };
});
