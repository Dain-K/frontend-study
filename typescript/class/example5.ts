class Parent {
    constructor (protected _name: string, private _age: number) {}
    // protected: 외부에서 접근할수 없지만 상속 받는 관계에 있는 경우 접근 가능

    public print(): void {
        console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다`);
    }

    protected printName(): void {
        console.log(this._name);
    }
}

// const p = new Parent("Mark", 39);
// p.print();

class Child extends Parent {
    public _name = "Mark Jr."; // 위의 name을 오버라이딩
    public gender = "male";

    constructor (age: number) {
        super("Mark Jr.", age);

        this.printName();
    };
}

// const c = new Child("Son", 5); // Parent의 형식을 지켜야 한다.
const c = new Child(5);
c.gender;
c._name;
c.print();