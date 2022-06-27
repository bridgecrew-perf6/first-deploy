import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser"

const config = {
  input : "src/index.js",
  output : {
    file : "lib/index.js",
    format : "esm",
    name : "RollupTest"
  },
  plugins : [
    babel(), resolve(), commonjs(), 
    process.env.NODE_ENV === "production" && terser(),
  ],
  external : [
    "lodash", "react"
  ]
}

export default config;