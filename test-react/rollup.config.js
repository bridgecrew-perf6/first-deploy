// ts-check
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";

const config = {
  input : "src/index.js",
  output : {
    file: "lib/index.js",
    format: "cjs",
    name: "spDraftEditor3"
  },
  plugins :[
    babel({
      extensions: [".js"],
      exclude: ["node_modules/**"]
    }),
    commonjs(),
  ],
  external: ["react", "react-dom", "draft-js", "styled-components"]
}

export default [config]