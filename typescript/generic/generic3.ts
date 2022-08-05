function helloArray<T>(message: T[]): T {
    return message[0];
}

helloArray(["Hello", "World"]); // [string, string]
helloArray(["Hello", 5]); // [string, number]

function helloTuple<T, K>(message: [T, K]): T{
    return message[0];
}

helloTuple(["Hello", "World"]); // [string, string]
helloTuple(["Hello", 5]); // [string, string]