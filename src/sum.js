"use strict";
/**
 * 数値を合計した値を返します。
 * 一つ以上の数値と共に呼び出す必要があります。
 * @param {...number} values
 * @returns {number}
 **/
function sum(...values) {
    return values.reduce((total, value) => {
        return total + Number(value);
    }, 0);
}
var x = 1, y, z = 10;
console.log(x, y, z);
sum(x, y, z); // => AssertionError