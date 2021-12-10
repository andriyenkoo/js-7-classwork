// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model,producer,year,maxSpeed,engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxspeed = maxSpeed;
//     this.engine = engine;
//     this.drive = function () {
//         document.write(`Їдемо зі швидкістю ${maxSpeed} на годину`)
//     };
//     this.info = function () {
//         document.write(`Модель - ${model}. Виробник - ${producer}. Рік - ${year}. Максимальна шкидкість - ${maxSpeed}.
//         Двигун - ${engine}`);
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed = newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
//
// let infoAboutCar = new Car('3 series','BMW','2003','240','idk');
//
// infoAboutCar.drive();
// infoAboutCar.info();
// infoAboutCar.increaseMaxSpeed(20);
// infoAboutCar.drive();
// infoAboutCar.changeYear(2010)
// infoAboutCar.info();
// infoAboutCar.addDriver('Vasil')

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model,producer,year,maxSpeed,engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     info() {
//         for (let key in this) {
//             console.log(`${key} - ${this[key]}`)
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//
//     changeYear (newValue) {
//         this.year = newValue;
//     }
//
//     addDriver (driver) {
//         this.driver = driver;
//     }
// }
//
// let infoAboutCar = new Car('3 series','BMW','2003','240','idk');
// infoAboutCar.drive();
// infoAboutCar.info();
// infoAboutCar.increaseMaxSpeed(20);
// infoAboutCar.drive();
// infoAboutCar.changeYear(2010);
// infoAboutCar.info();
// infoAboutCar.addDriver('Vasil');

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

class Cinderella {
    constructor(name,age,shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let girls = [
    new Cinderella('oleg',15,32),
    new Cinderella('nina',16,33),
    new Cinderella('oksana',17,34),
    new Cinderella('andriy',18,35),
    new Cinderella('petro',19,36),
    new Cinderella('sasha',20,37),
    new Cinderella('igor',21,38),
    new Cinderella('ivan',22,39),
    new Cinderella('oleksandra',23,41),
    new Cinderella('vitaliy',24,42),
    new Cinderella('stepan',25,43),
]


class Prince {
    constructor(name,age,desiredShoeSize) {
        this.name = name;
        this.age = age;
        this.desiredShoeSize = desiredShoeSize;
    }
}

let oleg = new Prince('oleg',17,34);

for (const girl of girls) {
    if (girl.shoeSize === oleg.desiredShoeSize) {
        console.log(girl);
    }
}

console.log(girls);

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

const emptyPrincess = girls.find((item) => item.shoeSize === oleg.desiredShoeSize);
console.log(emptyPrincess);


