import { babel } from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import pkg from "./package.json" assert { type: "json" };
import css from "rollup-plugin-import-css";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "esm",
      sourcemap: false,
    },
  ],
  plugins: [
    peerDepsExternal(),
    css(),
    commonjs(),
    nodeResolve(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: "./tsconfig.json",
    }),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**/*.(ts|tsx|js|jsx)",
      include: "src/**/*.(ts|tsx|js|jsx)",
      extensions: [".ts", ".tsx", ".js", ".jsx", ".es", ".es6", ".mjs"],
    }),
  ],
};
