import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import eslint from "@rollup/plugin-eslint";
// import strip from "@rollup/plugin-strip";

export default defineConfig({
  // base: "/build/dist/",

  build: {
    // output dir for production build
    outDir: path.resolve(__dirname, "../web/build/dist"),
    emptyOutDir: true,

    // emit manifest so PHP can find the hashed files
    manifest: true,

    rollupOptions: {
      input: "./src/entry-landing.ts",
    },
  },

  resolve: {
    // ---------------------------------------------------------------------------
    // Set custom aliases for imports, see  https://vitejs.dev/config/#resolve-alias
    // ---------------------------------------------------------------------------
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      { find: "@css", replacement: path.resolve(__dirname, "./src/assets/css") },
      { find: "@img", replacement: path.resolve(__dirname, "./src/assets/img") },
      { find: "@lib", replacement: path.resolve(__dirname, "./src/lib") },
      { find: "@old", replacement: path.resolve(__dirname, "./src/legacyjs") },
      { find: "@yui", replacement: path.resolve(__dirname, "./src/legacyjs/yui2-build") },
      // {
      //   find: "@assets",
      //   replacement: path.resolve(__dirname, "./src/assets"),
      // },
      // {
      //   find: "@styles",
      //   replacement: path.resolve(__dirname, "./src/assets/styles"),
      // },
    ],
  },

  plugins: [
    // ---------------------------------------------------------------------------
    // @vitejs/plugin-vue
    // ---------------------------------------------------------------------------
    vue({
      include: [/\.vue$/, /\.md$/],
    }),

    // ---------------------------------------------------------------------------
    // @rollup/plugin-eslint
    //   Run eslint, but only on build (also configure ESLint extension in VSCode)
    // ---------------------------------------------------------------------------
    // {
    //   ...eslint({
    //     include: "./src/**/*.(vue|js|jsx|ts|tsx)",
    //   }),
    //   enforce: "pre",
    //   apply: "build",
    // },

    // ---------------------------------------------------------------------------
    // @rollup/plugin-strip
    //   Removes all the console.assert/error/warn() from build
    //   https://github.com/rollup/plugins/tree/master/packages/strip
    // ---------------------------------------------------------------------------
    // {
    //   ...strip({ include: "./src/**/*.(js|ts)" }),
    //   apply: "build",
    // },
  ],

  server: {
    // make Vite dev server reachable from outside container (same as `vite --host`)
    host: true,
  },
});
