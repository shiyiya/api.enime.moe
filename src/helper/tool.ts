export const range = ({ from = 0, to = 0, step = 1, length = Math.ceil((to - from) / step) }) =>
    Array.from({ length }, (_, i) => from + i * step);

export const isNumeric = (str) => !isNaN(+str);

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const chunkArray = (arr, size) =>
    arr.length > size
        ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)]
        : [arr];