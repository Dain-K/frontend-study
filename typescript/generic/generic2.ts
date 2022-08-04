function helloBasic<T>(message: T): T {
    return message;
}

// type을 string으로 지정해줌
helloBasic<string>("Mark");
// type을 추론
helloBasic(36);

function helloBasic1<T, U>(message: T, comment: U): T {
    return message;
}

helloBasic1<string, number>("Mark", 9);
helloBasic1(36, 39);