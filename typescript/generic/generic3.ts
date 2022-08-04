function helloArray<T>(message: T[]): T {
    return message[0];
}

helloArray(["Hello", "World"]);