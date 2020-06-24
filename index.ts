const name = "sukjun.sagong";
const age = 24;
const gender = "male";

// argument 에 ? 를 붙이면 optional parameter 로 만들 수 있다.
// 붙이지 않으면 호출할때 parameter 가 부족하면 에러가 발생한다.
const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name} you are ${age}. you are a ${gender}`);
};

sayHi(name, age);

export {}; // 이것이 모듈임을 표현하는 typescript 문법
