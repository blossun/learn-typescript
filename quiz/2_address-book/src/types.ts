// PhoneNumberDictionary
// key-value 형식의 map
// key : string 타입, key이름이 담기는 변수: phone
// 실제 값객체({num: number))에 접근할 때, 지정한 key속성명으로 접근하면 된다.
// value : number타입의 num 속성이 있는 객체
interface PhoneNumberDictionary {
  [phone: string]: {
    //key가 되는 속성명을 (phone 변수에) 동적으로 지정할 수 있다.
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}
// phoneType : home, office, studio

enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}

export { PhoneNumberDictionary, Contact, PhoneType };
