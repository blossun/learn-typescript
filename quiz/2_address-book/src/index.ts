// PhoneNumberDictionary
// key-value 형식의 map
// key : string 타입, key이름: phone
// value : number타입의 num 속성이 있는 객체
interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
function fetchContacts(): Promise<Contact[]> {
  // TODO: 아래 변수의 타입을 지정해보세요.
  const contacts: Contact[] = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
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
  // TODO: 아래 변수의 타입을 지정해보세요.
  contacts: Contact[] = [];

  constructor() {
    this.fetchData();
  }

  fetchData() {
    fetchContacts().then(response => {
      this.contacts = response;
    });
  }

  /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
  findContactByName(name: string): Contact[] {
    return this.contacts.filter(contact => contact.name === name);
  }

  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter(contact => contact.address === address);
  }

  findContactByPhone(phoneNumber: number, phoneType: string): Contact[] {
    return this.contacts.filter(
      contact => contact.phones[phoneType].num === phoneNumber
    );
  }

  addContact(contact: Contact) {
    this.contacts.push(contact);
  }

  displayListByName() {
    return this.contacts.map(contact => contact.name);
  }

  displayListByAddress() {
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
  let contactsByHome = addressBook.findContactByPhone(213423452, 'home');
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
}
setTimeout(() => test(), 3000); //전화번호부가 fetch(2초)된 후에 확인해야 하므로
