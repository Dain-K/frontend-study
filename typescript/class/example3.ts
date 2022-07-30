class Person10 {
    private static CITY = "Seoul";
    public static hello() {
        console.log("안녕하세요", Person10.CITY);
    }
}

const p10 = new Person10();

// p10.hello();

Person10.hello(); // static 키워드를 적으면 사용가능

////////////////////////////////

class Person11 {
    private static CITY = "Seoul";
    public hello() {
        console.log("안녕하세요", Person11.CITY);
    }
    public change() {
        Person11.CITY = "LA";
    }
}

const p12 = new Person11();
const p13 = new Person11();

p12.hello();
p13.hello();
p13.change();
p13.hello();
