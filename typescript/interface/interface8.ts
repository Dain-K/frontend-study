interface Person8 {
    name: string;
    age?: number;
    readonly gender: string;
}

const p81: Person8 = {
    name: "Mark",
    gender: "male",
};

// readonly를 사용하여 수정이 불가능함
// p81.gender = "fmaale";