interface HelloPerson {
    (name: string, age?: number): void;
}

// HelloPerson 형식에 맞춰야함
const helloPerson: HelloPerson = function (name: string) {
    console.log(`안녕하세요! ${name} 입니다.`);
}

helloPerson("Mark", 39);