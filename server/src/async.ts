const getValue1 = (): Promise<string> => {
    return new Promise(resolve =>
        setTimeout(() => resolve("value 1"), 5000)
    );
}

const getValue2 = (): Promise<string> => {
    return new Promise(resolve =>
        setTimeout(() => resolve("value 2"), 3000)
    );
}


const asyncTest = async () => {
    const value1  =  getValue1();
    value1.then ((value)=>{
        console.log(value);
    });
    const value2  =  getValue2();
    value2.then ((value)=>{
        console.log(value);
    });
    //console.log(value2);
}

export default asyncTest