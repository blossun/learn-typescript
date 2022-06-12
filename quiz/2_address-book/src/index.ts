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

// api
// # 비동기처리 코드에서 반환값은 타입 추론이 안된다.
// Promise<unknown> 으로 나온다.
// Promise에 어떤 타입이 올 것 인지, 비동기처리를 통해서 돌려받을 반환값의 타입이 무엇인지 명시해줘야 한다.
// fetchContacts()를 실행하는 시점에서 ts가 Promise에 들어오는 비동기 코드들에 대해서 알 수가 없다.
function fetchContacts(): Promise<Contact[]> {
  const contacts: Contact[] = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        [PhoneType.Home]: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  contacts: Contact[] = [];

  constructor() {
    this.fetchData();
  }

  fetchData(): void {
    fetchContacts().then(response => {
      this.contacts = response;
    });
  }

  findContactByName(name: string): Contact[] {
    return this.contacts.filter(contact => contact.name === name);
  }

  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter(contact => contact.address === address);
  }

  // phoneType : home, office, studio
  // 문제 - findContactByPhone('homee')과 같은 오탈자 발생 가능성
  // string 타입으로 받고 있는 phoneType 정보를 이넘으로 리팩토링
  findContactByPhone(phoneNumber: number, phoneType: PhoneType): Contact[] {
    return this.contacts.filter(
      contact => contact.phones[phoneType].num === phoneNumber
    );
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  displayListByName(): string[] {
    return this.contacts.map(contact => contact.name);
  }

  displayListByAddress(): string[] {
    return this.contacts.map(contact => contact.address);
  }
  /* ------------------------------------------------ */
}

// -------------------------------------------------------------------------------
// 시작
let addressBook = new AddressBook();
function test() {
  let contactsByName = addressBook.findContactByName('Tony');
  let contactsByAddress = addressBook.findContactByAddress('New York');
  // let contactsByHome = addressBook.findContactByPhone(213423452, 'home'); // 'home'등의 문자열로 작성할 때 오탈자 가능성
  let contactsByHome = addressBook.findContactByPhone(213423452, PhoneType.Home); //이넘으로 리랙토링
  console.log('contactsByName => ', contactsByName); //Tony
  console.log('contactsByAddress => ', contactsByAddress); //Banner
  console.log('contactsByHome => ', contactsByHome); //마동석

  // 연락처 추가
  const solarContact: Contact = {
    name: '솔라',
    address: '서울',
    phones: {
      home: {
        num: 123123, // 콤마(,) 필요
      },
    },
  };
  addressBook.addContact(solarContact);

  console.log('displayListByName => ', addressBook.displayListByName()); //[ 'Tony', 'Banner', '마동석', '솔라' ]
  console.log('displayListByAddress => ', addressBook.displayListByAddress()); // [ 'Malibu', 'New York', '서울시 강남구', '서울' ]

  console.log(solarContact.phones.phones); //undefined - 정의되지 않은 키값 사용
  console.log(solarContact.phones.home); //{ num: 123123 }
}
setTimeout(() => test(), 3000); //전화번호부가 fetch(2초)된 후에 확인해야 하므로
