declare const maybe: unknown;


// const aNumber: number = maybe;
// unknown 형식은 바로 할당할 수 없음

// type을 한정시켜야 사용할 수 있음
// any 였으면 if 문 선언없이 사용가능
if(maybe === true) {
    const aBoolean: boolean =  maybe;
    // const aString: string = maybe;
}

if(typeof maybe === 'string'){
    const aString: string = maybe;
    // const aBoolean: boolean =  maybe;
}