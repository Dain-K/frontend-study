interface IPerson1 {
    name: string;
    age?: number;
    hello(): void;
}

class Person implements IPerson1 {
    name: string;
    age?: number | undefined;

    constructor(name: string) { // 생성자를 지정해주어야 오류가 안뜸
        this.name = name;
    }
    hello(): void {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }
    
}

const person: IPerson1 = new Person("Mark");
// IPerson1로 부터 생성된 Person 이므로 IPerson1을 명시해주어야 함
person.hello()