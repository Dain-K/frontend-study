interface IPerson2 {
    name: string;
    age?: number;
}

interface IKorean extends IPerson2{ // 상속관계로 인터페이스 표현
    city: string;
}

const k: IKorean = {
    name: "김다인",
    city: "서울"
}

HTMLDivElement