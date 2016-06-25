"use strict";

var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];

users.sort(byField('name'));
users.forEach(function(user) {
    console.log( user.name );
}); // Вася, Маша, Петя

users.sort(byField('age'));
users.forEach(function(user) {
    console.log( user.name );
}); // Маша, Вася, Петя


/** Day V **/

function byField(field) {
    return function(a, b) {
        return a[field] > b[field] ? 1 : -1;
    }
}

function makeBuffer(str) {

    var stock = '';

    buffer.clear = function() {
        stock = '';
        return stock;
    }

    function buffer(str){
        if (str != undefined){
            stock += str;
        } else {
            return stock;
        }
    }

    return buffer;

}

function sum(number) {
    var number1 = number;
    return function(number2) {
        return number1 + number2;
    }
}

function applyAll(func) {
    return func.apply(this, [].slice.call(arguments, 1));
}

function sumArgs() {
    var summa = 0;
    [].forEach.call(arguments, function(item){
        summa += item;
    });
    return summa;
}

function CalculatorIntel() {

    var methods = {
        "-": function(a, b) {
            return a - b;
        },
        "+": function(a, b) {
            return a + b;
        }
    };

    this.calculate = function(str) {

        var split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];

        if (!methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return methods[op](+a, +b);
    }

    this.addMethod = function(name, func) {
        methods[name] = func;
    };
}

function Calculator() {
    this.read = function() {
        this.number1 = +prompt('Введите первое слагаемое');
        this.number2 = +prompt('Введите второе слагаемое');
    };
    this.sum = function() {
        return this.number1 + ' + ' + this.number2 + ' = ' + (this.number1 + this.number2);
    };
    this.mul = function() {
        return this.number1 + ' * ' + this.number2 + ' = ' + (this.number1 * this.number2);
    }
}
/** Day IV **/

function formatDateRel(date) {
    var timeAgo = new Date() - date;
    var result = '';
    if (timeAgo < 1000) {
        result = 'только что';
    } else if (timeAgo < 60000) {
        result = timeAgo / 1000 + 'сек. назад';
    } else if (timeAgo < 3600000) {
        result = timeAgo / 60000 + 'мин. назад';
    } else {
        result = formatDate(date);
    }
    return result;
}

function formatDate(date) {
    var result;
    result = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '.';
    result += (date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '.';
    result += date.getFullYear() + ' ';
    result += (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + '.';
    result += (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()) + '.';
    return result;
}

function getSecondsToday() {
    var date = new Date();
    var seconds = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    return seconds;
}

function getLastDayOfMonth(year, month) {
    var date = new Date(year, month + 1, 0);
    return date.getDate();
}

function getDateAgo(date, number) {
    var newDate = new Date(date);
    newDate.setDate(newDate.getDate() - number);
    return newDate;
}

function getWeekLocalDay(date) {
    switch (date.getDay()) {
        case 0:
            return '7';
            break;
        case 1:
            return '1';
            break;
        case 2:
            return '2';
            break;
        case 3:
            return '3';
            break;
        case 4:
            return '4';
            break;
        case 5:
            return '5';
            break;
        case 6:
            return '6';
            break;
    }
}

function getWeekDay(date) {
    switch (date.getDay()) {
        case 0:
            return 'Вс';
        break;
        case 1:
            return 'Пн';
            break;
        case 2:
            return 'Вт';
            break;
        case 3:
            return 'Ср';
            break;
        case 4:
            return 'Чт';
            break;
        case 5:
            return 'Пт';
            break;
        case 6:
            return 'Сб';
            break;
    }
}


/** Day III */

function getSums(arr) {
    var result = [];
    var total = arr.reduce(function(sum, current, i) {
        result.push(sum);
        return sum + current;
    });
    result.push(total);
    return result;
}

function unique(array) {
    var obj = {};
    for (var i = 0; i < array.length; i++) {
        var temp = array[i];
        obj[temp] = true;
    }
    return Object.keys(obj);
}

function aClean(array) {
    var obj = {};
    var sorted;
    for (var i = 0; i < array.length; i++) {
        sorted = array[i].toLowerCase().split('').sort().join('');
        obj[sorted] = array[i];
    }

    var result = [];
    for (var key in obj) {
        result.push(obj[key]);
    }
    return result;
}

function rPrintListCycle(list) {
    var array = new Array(0);
    var obj = list;
    array.unshift(obj.value);
    do {
        obj = obj.next;
        array.unshift(obj.value);
    } while(!(obj.next === null))
    for(var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

function rPrintListRecursion(list) {
    if(list.next === null) return console.log(list.value);
    rPrintListRecursion(list.next);
    console.log(list.value);
}

function printListRecursion(list) {
    if(list.next === null) return console.log(list.value);
    console.log(list.value);
    printListRecursion(list.next);
}

function printListCycle(list) {
    var obj = list;
    console.log(obj.value);
    do {
        obj = obj.next;
        console.log(obj.value);
    } while(!(obj.next === null))
}

function comparePeople(people1, people2) {
    return people1.age - people2.age;
}

function filterRangeInPlace(array, min, max) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min || array[i] > max) {
            array.splice(i, 1);
            --i;
        }
    }
}

function removeClass(obj, str) {
    var array = obj.className.split(' ');
    while(array.indexOf(str) != -1) {
        array.splice(array.indexOf(str), 1);
    }
    obj.className = array.join(' ');
}

function camelize(str) {
    var array = str.split('-');
    for(var i = 1; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    console.log(array.join(''));
    return array.join('');
}

function addClass(obj, str) {
    var array = obj.className.split(' ');
    if(array.indexOf(str) == -1) {
        obj.className += (' ' + str);
    }
}

/** Day I **/

function factorial (number) {

    if(number == 1 || number == 0) return 1;

    return number * factorial(number -1);

}

function pow(number, degree) {

    if(degree == 0) return 1;

    return number * pow(number, degree - 1);

}

function sumTo(number) {

    if(number == 0) return 0;

    return number + sumTo(number - 1);

}

function getFibonacci(number) {

    if (number == 1 || number == 2) return 1;
    var last = 1, current = 1, temp;

    for (var i = 3; i <= number; i++) {
        temp = current;
        current +=last;
        last = temp;
    }

    return current;

}

/** Day II **/

function getDecimal(number) {

    var strNumber = '' + number;
    var dotIndex = strNumber.indexOf('.');
    if(dotIndex == -1) {
        return 0;
    } else {
        return +strNumber.slice(dotIndex);
    }

}

function getFibonacciBeen(number) {

    var goldenSection = (1 + Math.sqrt(5)) / 2;

    return Math.pow(goldenSection, number) / Math.sqrt(5);

}

function checkSpam(str) {

    var mask1 = 'viagra', mask2 = 'xxx';

    var input = str.toLowerCase();

    return !!(~input.indexOf(mask1) || ~input.indexOf(mask2));

}

function truneCate(str, maxLength) {

    var result;

    if(str.length > maxLength) {
        return result = str.slice(0, maxLength - 3) + '...';
    } else return str;

}

function isEmpty(obj) {

    for (var key in obj) {
        return false;
    }

    return true;

}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function multiplyNumeric() {
    for (var key in menu) {
        if(isNumeric(menu[key])) {
            menu[key] *= 2;
        }
    }
}

function getArraySumma(array) {
    var result = 0;
    for(var i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}

function find(array, value) {

    for (var i = 0; i < array.length; i++) {
        if(array[i] === value) {
            return i;
        }
    }

    return -1;

}

function printArray(array) {
    var result = '';
    for (var i = 0; i < array.length; i++) {
        result += array[i] + ' ';
    }
    return result.trim();
}

function filterRange(array, a, b) {
    var resultArray = new Array(0);
    for (var i = 0; i < array.length; i++) {
        if(array[i] <= b && array[i] >= a) {
            resultArray[resultArray.length] = array[i];
        }
    }
    return resultArray;
}

function createErathosfen(number) {
    var erathArr = new Array(number + 1);
    erathArr.fill(true);
    erathArr[0] = false;
    erathArr[1] = false;

    for (var i = 2; i < erathArr.length; i++) {
        if (erathArr[i]) {
            for (var j = i * 2; j < erathArr.length; j += i) {
                erathArr[j] = false;
            }
        }
    }


    return erathArr;
}

function getAllPrimes(number) {
    var allPrimes = new Array(0);
    var erathArr = createErathosfen(number);
    for (var i = 0; i < erathArr.length; i++) {
        if(erathArr[i]) allPrimes[allPrimes.length] = i;
    }
    return allPrimes;
}

function getMaxSubSum(array) {
    var maxSumma = 0, partSumma = 0;
    for (var i = 0; i < array.length; i++) {
        partSumma +=array[i];
        if(partSumma < 0) partSumma = 0;
        maxSumma = Math.max(maxSumma, partSumma);
    }
    return maxSumma;
}