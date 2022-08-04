function helloString(message: string): string {
    return message; 
}

function helloNumber(message: number): number {
    return message;
}

// 들어오는 인자와 나가는 인자의 로직이 같음
// 더 많은 반복된 함수들이 생김

// 이러한 문제를 해결하기 위해 any 사용
function hello(message: any): any {
    return message;
}

console.log(hello("Mark").length);
console.log(hello(39).length);
// 들어가는 type을 리턴되는 type에 연관을 시켜주면 좋겠다 하여 나온것이 generic이다.

function helloGeneric<T>(message: T): T {
    return message;
}

console.log(helloGeneric('Mark').length);
console.log(helloGeneric(39));
console.log(helloGeneric(true));