class Person {} // 클래스 생성

const p1 = new Person(); //  object 생성

console.log(p1); // 출력: Person {}

/////////////////////////////////////////////////////////////

class Person1 {
    name;
    constructor(name: string){
        this.name = name;
    }
} 

const p2 = new Person1("Mark");

/////////////////////////////////////////////////////////////

class Person2 { 
    // stict가 true로 되어있기 때문에 초기값을 선언해주어야함
    name: string = "Mark";
    age!: number;
} 

const p3: Person2 = new Person2(); //  default 생성자만 호출
p3.age = 39; // !를 적어줬으므로 무조건 초기값을 선언해주어야 함
console.log(p3); // 출력: Person {}

/////////////////////////////////////////////////////////////

class Person3 { 
    name: string = "Mark";
    age: number;

    constructor(age: number) {
        this.age = age;
    }
} 

const p4: Person3 = new Person3(39); 
console.log(p4); 

/////////////////////////////////////////////////////////////

class Person4 { 
    name: string = "Mark";
    age: number;

    constructor(age?: number) {
        if(age === undefined){
            this.age = 20;
        } else{
            this.age = age;
        }
    }
} 

const p5: Person4 = new Person4(39); 
const p6: Person4 = new Person4(); 
console.log(p5); 

/////////////////////////////////////////////////////////////

class Person5 { 
    public name: string = "Mark";
    private _age: number;

    constructor(_age?: number) {
        if(_age === undefined){
            this._age = 20;
        } else{
            this._age = _age;
        }
    }
    public async init() {}
} 

/////////////////////////////////////////////////////////////

class Person6 { 
    constructor(public name: string, private age?: number) {}
} 

const p7: Person6 = new Person6("Mark", 39); 

/////////////////////////////////////////////////////////////

class Person8 { 
    constructor(private _name: string, private age?: number) {}
    
    get name() { // return을 반드시 해줘야 함
        //
        // console.log("get")
        return this._name + " Lee";
    }

    set name(n: string) { // 인자를 받아서 설정해주어야 함
        // console.log("set")
        this._name = n;
    }
} 

const p8: Person8 = new Person8("Mark", 39); 
console.log(p8.name); // get을 하는 함수 getters
p8.name = "Kevin"; // set 을 하는 함수 setters
console.log(p8.name);

/////////////////////////////////////////////////////////////

class Person9 { 
    // readonly
    // 밖에서 name을 바꾸려고 하면 에러 발생
    // 초기화 되는 영역에서만 바꿀 수 있음
    public readonly name: string = "Mark"; 
    private readonly country: string = "Korea"; 

    constructor(private _name: string, private age?: number) {
        this.country = "China";
    }

    // hello(){
    //     this.country = "China";
    // } 오류 발생
} 

const p9: Person9 = new Person9("Mark", 39); 