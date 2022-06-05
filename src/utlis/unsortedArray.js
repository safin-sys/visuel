const unsortedArray = (/** @type {number} */ length, /** @type {number} */ max) => {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * max));
    }
    return array;
};

export default unsortedArray;