class ClassName {
    private static instance: ClassName | null = null;
    public static getInstance(): ClassName {
        // ClassName 으로부터 만든 object 가 있으면, 그걸 return
        // ClassName 으로부터 만든 object 가 없으면, 만든다.
        if(ClassName.instance === null){
            ClassName.instance = new ClassName();
        }

        return ClassName.instance;
    }
    private constructor() {} // 외부에서 new를 직접 호출 못하도록
}

const a1 = ClassName.getInstance();
const b1 = ClassName.getInstance();

console.log(a === b); // true