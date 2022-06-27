import { isNumber } from 'lodash';
import 'react';

var add = function add(a, b) {
  return a + b;
};

var a = 3;
var sum = isNumber(a) ? add(3, 4) : 0;

export { sum };
