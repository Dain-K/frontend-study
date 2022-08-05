type HelloFunctionGeneric1 = <T>(message: T) => T;

const hellofunction1: HelloFunctionGeneric1 =  <T>(message: T) : T => {
    return message;
}

interface HelloFunctionGeneric2 {
    <T>(message: T) : T;
}

const hellofunction2: HelloFunctionGeneric2 = <T>(message: T) : T => {
    return message;
}