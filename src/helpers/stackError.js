'use strict';

export default function (stack) {
    const stackArray = stack.split('\n');

    const msg = stackArray[0];
    const line = stackArray[1].trim();

    return msg + ' ' + line;
}