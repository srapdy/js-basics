const numbers = [1, 2, 3, 4, 5];

const output = move(numbers, 1, -1); // move element with index 1 to 1 position left

console.log(output);

function move(array, index, offset) {
    let position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset.');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);

    return output;
}