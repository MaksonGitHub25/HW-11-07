const btn = document.querySelector('button');

const listOfUsers = [];

// class User {
//     constructor(name, surname, age, isAdmin) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.isAdmin = isAdmin;
//     }
// }

function funcHandler() {
    // userChoosenFunc = prompt('Какую функцию выберем?');
    userName = prompt('Введите ваше имя');
    userSurname = prompt('Введите вашу фамилию');
    userAge = prompt('Введите ваш возраст');
    isUserAdmin = confirm('Вы Админ?');

    // const userData = new User(userName, userSurname, userAge, isUserAdmin);
    
    user = {
        name: userName,
        surname: userSurname,
        age: userAge,
        isAdmin: isUserAdmin
    };
    console.log(user);
    listOfUsers.push(user);
    
    willFilter = confirm('Отфильтровать массив?');
    
    if (willFilter && checkDataOnEmpty(userName, userSurname, userAge)) {
        listOfUsers.forEach(function (elem, index) {
            console.log(`
                user ${index+1}
                `);
            if (checkNameLenght(elem.name)) {
                console.log(`name: ${elem.name}`);
            }
            if (checkSurnameOnNumber(elem.surname)) {
                console.log(`surname: ${elem.surname}`);
            } 
            if (checkAgeOfUser(elem.age)) { 
                console.log(`age: ${elem.age}`);
            }
            if (checkIsAdmin(elem.isAdmin)) {
                console.log(`isAdmin: ${elem.isAdmin}`);
            }
        });
    } else {
        console.log('damn');
    }
}

function checkNameLenght(name) {
    if (name.length <= 2) {
        return;
    } else {
        return 1;
    }
}

function checkSurnameOnNumber(surname) {
    console.log(surname.search(/\d/));
    if (surname.search(/\d/) == -1) {
        return 1;
    } else {
        return;
    }
}

function checkAgeOfUser(age) {
    if (age > 32) {
        return;
    } else {
        return 1;
    }
}

function checkIsAdmin(isAdmin) {
    if (isAdmin != true) {
        return;
    } else {
        return 1;
    }
}

function checkOnEmptyHandler(name, surname, age) {
    checkDataOnEmpty(name);
    checkDataOnEmpty(surname);
    checkDataOnEmpty(age);
}

function checkDataOnEmpty(text) {
    if (text === '') {
        return;
    } else {
        return 1;
    }
}

btn.addEventListener('click', funcHandler);


//* 1) Создать функцию которая регестрирует юзеров
//* 2) Юзеры после регистрации попадают в массив в виде объектов
//* 3) с помощью функции промпт , после каждого нового зарегестрированного пользователя нам предлагают фильтровать массив
//* 4) Валидация данных => написать функции которые будут анализировать каждого юзера который зареган
//* 5) Если массив фильтруется - на экран попадают только те польз. у которых заполнены такие свойства как : имя , фамилия , возраст , неАдмин
//* 5.1 - Если имя меньше , чем 2 буквы (включительно) - этот объект не выводится
//* 5.2 Если фамилия включает в себя числа - объект не выводится
//* 5.3 Если юзер старше 32 он не попадает в console.log()
//* 6) Все остальные выводятся на экран
// Следовательно , когда пользователь попадает к нам в программу , у него просят ввести свои данные со след. оч.:  имя , фамилия , возраст , неАдмин