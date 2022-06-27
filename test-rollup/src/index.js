import {add, substract} from "./math";
import {isNumber} from "lodash";
import Button from "./components/Button"

const a = 3;

const sum = isNumber(a) ? add(3,4) : 0;
export { sum, }