export const Questions = [
    {
        "questionName": "Что такое ECMAScript?",
        "questionDescription": "",
        "options": [
            "Новый язык программирования.",
            "Переработанная реализация Javascript.",
            "Спецификация языка Javascript."
        ],
        "answer": ''
    },
    {
        "questionName": "Язык JavaScript является подвидом языка Java – верно?",
        "questionDescription": "",
        "options": [
            "Да",
            "Нет",
            "Наоборот, Java – подвид JavaScript."
        ],
        "answer": ''
    },
    {
        "questionName": "Какая арифметическая операция приводит к ошибке в javascript?",
        "questionDescription": "",
        "options": [
            "Деление на ноль.",
            "Умножение числа на строку.",
            "Корень из отрицательного числа.",
            "Никакая из вышеперечисленных.",
        ],
        "answer": ''
    },
    {
        "questionName": "Каких операторов из этого списка нет в javascript?",
        "questionDescription": "",
        "options": [
            "*",
            "^",
            "%",
            "#",
            "&",
            ">>",
            ">>>",
            "!"
        ],
        "answer": ''
    },
    {
        "questionName": "Чему равно выражение?",
        "questionCode": "0 || \"\" || 2 || undefined || true || falsе",
        "questionDescription": "",
        "options": [
            "0",
            "\"\"",
            "2",
            "undefined",
            "true",
            "false",
        ],
        "answer": ''
    },
    {
        "questionName": "Какое будет выведено значение?",
        "questionDescription": "",
        "questionCode": `var x = 5; \n      alert( x++ );`,
        "options": [
            5,
            6,
            "Другое"
        ],
        "answer": ''
    },
    {
        "questionName": "Что выведет alert?",
        "questionDescription": "",
        "questionCode": `var str = "Hello";
      str.something = 5;
      alert(str.something); // ?`,
        "options": [
            "5",
            "undefined",
            "Будет ошибка."
        ],
        "answer": ''
    },
    {
        "questionName": "Чем является F.prototype?",
        "questionDescription": "",
        "questionCode": `function F() {}`,
        "options": [
            "Обычным объектом.",
            "Функцией.",
            "Равен undefined."
        ],
        "answer": ''
    },
    {
        "questionName": "Что выведет этот скрипт?",
        "questionDescription": "",
        "questionCode": `"use strict";

      a = null + undefined;
      alert(a);`,
        "options": [
            "null",
            "undefined",
            "NaN",
            "В коде ошибка."
        ],
        "answer": ''
    },
    {
        "questionName": "Есть ли различия между проверками:",
        "questionDescription": "",
        "questionCode": `if( x <= 100 ) {...}
      // и
      if( !(x > 100) ) {...}`,
        "options": [
            "Да, существует значение x, для которого они работают по-разному.",
            "Нет, они полностью взаимозаменяемы.",
            "Зависит от браузера."
        ],
        "answer": ''
    },
    {
        "questionName": "Чему будет равен this?",
        "questionDescription": "",
        "questionCode": `"use strict";

      var user = {
        sayHi: function() {
            alert(this);
        }
      };

      (user.sayBye = user.sayHi)();`,
        "options": [
            "null",
            "undefined",
            "Объекту user.",
            "В коде ошибка."
        ],
        "answer": ''
    },
    {
        "questionName": "Какие вызовы parseInt возвратят число?",
        "questionDescription": "",
        "options": [
            'parseInt("1px")',
            'parseInt("-1.2")',
            'parseInt("0 минут")',
            'parseInt("$1.2")'
        ],
        "answer": ''
    },
    {
        "questionName": "Какой результат будет у выражения ниже?",
        "questionDescription": "",
        "questionCode": `null + {0:1}[0] + [,[1],][1][0]`,
        "options": [
            "0",
            "1",
            "2",
            "undefined",
            "NaN"
        ],
        "answer": ''
    },
    {
        "questionName": "Что выведет этот код?",
        "questionDescription": "",
        "questionCode": `if (function f(){}) {
        alert(typeof f);
      }`,
        "options": [
            "undefined",
            "function",
            "null",
            "object",
            "В коде ошибка."
        ],
        "answer": ''
    },
    {
        "questionName": "Чему равно такое выражение?",
        "questionDescription": "",
        "questionCode": `[] + false - null + true`,
        "options": [
            '0',
            'NaN',
            'undefined',
            '1',
            'Будет ошибка'
        ],
        "answer": ''
    },
    {
        "questionName": "Правда ли что a == b?",
        "questionDescription": "",
        "questionCode": `a = [1, 2, 3];
      b = [1, 2, 3];`,
        "options": [
            "Правда.",
            "Неправда.",
            "Как повезёт."
        ],
        "answer": ''
    },
    {
        "questionName": "Что выведет этот код?",
        "questionDescription": "",
        "questionCode": `alert( 20e-1['toString'](2) );`,
        "options": [
            "2",
            "10",
            "20",
            "NaN",
            "В коде ошибка."
        ],
        "answer": ''
    },
    {
        "questionName": "Есть ли разница между вызовами i++ и ++i?",
        "questionDescription": "",
        "options": [
            "Разница в значении, которое возвращает такой вызов.",
            "Разница в значении i после вызова.",
            "Нет никакой разницы.",
        ],
        "answer": ''
    },
    {
        "questionName": "Чему равно значение выражения?",
        "questionDescription": "",
        "questionCode": `4 - "5" + 0xf - "1e1"`,
        "options": [
            "Цифре.",
            "Строке.",
            "NaN"
        ],
        "answer": ''
    },
    {
        "questionName": "Что выведет этот код?",
        "questionDescription": "",
        "questionCode": `alert( "1"[0] );`,
        "options": [
            "0",
            "1",
            "2",
            "undefined",
            "В коде ошибка."
        ],
        "answer": ''
    },
    {
        "questionName": "Что делает оператор ===?",
        "questionDescription": "",
        "options": [
            "Сравнивает по ссылке, а не по значению.",
            "Сравнивает без приведения типа.",
            "Нет такого оператора."
        ],
        "answer": ''
    },
    {
        "questionName": "Какие варианты подключения скрипта соответствуют современному стандарту HTML?",
        "questionDescription": "",
        "questionCode": ``,
        "options": [
            `<script type="text/javascript" src="my.js"></script>`,
            `<script src="my.js"></script>`,
            `<script src="my.js"/>`,
            `<link type="text/javascript" href="my.js"/>`,
        ],
        "answer": ''
    },
    {
        "questionName": "Есть элемент <div id=«elem»><input/></div>. На нём два обработчика. Какой из них сработает раньше при клике на <input>?",
        "questionDescription": "",
        "questionCode": `elem.addEventListener("click", handler1, false);
      elem.addEventListener("click", handler2, true);`,
        "options": [
            "первый.",
            "второй.",
            "ни один.",
            "стандарт не указывает точную последовательность."
        ],
        "answer": ''
    },
    {
        "questionName": "В каких случаях для элемента elem верно elem.firstChild == elem.lastChild?",
        "questionDescription": "",
        "questionCode": ``,
        "options": [
            "Когда у elem нет детей.",
            "Когда у elem единственный потомок.",
            "Когда у elem два или более потомков."        ],
            "answer": '',
            "comment": ''
    },
    {
        "questionName": "Какие из этих обработчиков сработают?",
        "questionDescription": "",
        "questionCode": `div.onclick = function() { alert(1) };
      div.onclick = function() { alert(2) };
      div.addEventListener('click', function() { alert(3) });`,
        "options": [
            "Первый.",
            "Второй.",
            "Третий."
        ],
        "answer": ''
    },
    {
        "questionName": "Сколько детей (дочерних DOM-узлов) у элемента <ul> в примере ниже:",
        "questionDescription": "",
        "questionCode": `<ul>
        <li>Привет</li>
        <li>Мир</li>
      </ul>`,
        "options": [
            1,
            2,
            3,
            4,
            5,
            6
        ],
        "answer": ''
    },
    {
        "questionName": "Вызов setTimeout(func, 0) вызовет func…",
        "questionDescription": "",
        "questionCode": ``,
        "options": [
            "Сразу после setTimeout, до следующей строки кода.",
            "Сразу после текущего скрипта, когда браузер сможет выполнить JavaScript.",
            "Ровно через 4 миллисекунды.",
            "Через 4 миллисекунды или больше, в зависимости от пожеланий браузера."
        ],
        "answer": ''
    },
    {
        "questionName": "Можно ли из JavaScript получить содержимое комментария?",
        "questionDescription": "",
        "questionCode": ``,
        "options": [
            "Да, комментарий – DOM-узел, можно получить.",
            "Нет, комментарии есть в HTML, но отсутствуют в DOM.",
            "Можно получить, но только до окончания загрузки страницы."
        ],
        "answer": ''
    },
    {
        "questionName": "Как правильно вывести приветствие через 5 секунд?",
        "questionDescription": "",
        "questionCode": ``,
        "options": [
            `sleep(5); alert("Привет!");`,
            `sleep(5000); alert("Привет!");`,
            `setTimeout(function() {alert("Привет!")}, 5000);`,
            `setTimeout(function() {alert("Привет!")}, 5);`
        ],
        "answer": ''
    },
    {
        "questionName": "Каков будет результат выполнения следующего кода:",
        "questionDescription": "Как сделать так, чтобы выводило цифры по порядку?",
        "questionCode": `for (var i = 0; i < 10; i++) { 
            setTimeout(function () { 
                console.log(i); 
            }, 0); 
          }`,
        "options": [
        ],
        "answer": ''
    },
    {
        "questionName": "В чем разница между последними двумя строчками:",
        "questionDescription": "",
        "questionCode": `function Person(){}

      var person = Person()
      var person = new Person()`,
        "options": [
        ],
        "answer": ''
    },
    {
        "questionName": "В чем разница между .call и .apply?",
        "questionDescription": "",
        "questionCode": ``,
        "options": [
        ],
        "answer": ''
    },
    {
        "questionName": "Какое значение возвращает данное предложение?",
        "questionDescription": "",
        "questionCode": `~~3.14`,
        "options": [
        ],
        "answer": ''
    },
    {
        "questionName": "Какое значение возвращает данное предложение?",
        "questionDescription": "",
        "questionCode": `"i'm a lasagna hog".split("").reverse().join("");`,
        "options": [
        ],
        "answer": ''
    },
    {
        "questionName": "Чему равно foo.length?",
        "questionDescription": "",
        "questionCode": `var foo = [];
      foo.push(1);
      foo.push(2);`,
        "options": [
        ],
        "answer": ''
    },
    {
        "questionName": "Чему равно foo.length?",
        "questionDescription": "",
        "questionCode": `var foo = {};
      foo.bar = 'hello';`,
        "options": [
        ],
        "answer": ''
    },
    {
        "questionName": "Объясните, как работает наследование в JavaScript?",
        "questionDescription": "",
        "questionCode": ``,
        "options": [
        ],
        "answer": ''
    },
    {
        "questionName": "Напишите пример использования промисов (можно псевдокодом)",
        "questionDescription": "",
        "questionCode": ``,
        "options": [
        ],
        "answer": ''
    },
    {
        "questionName": "Написать метод sum() который работает корректно в обоих случаях представленных ниже:",
        "questionDescription": "",
        "questionCode": `console.log(sum(2,3));   //  5
      console.log(sum(2)(3));  //  5`,
        "options": [
        ],
        "answer": ''
    }

]