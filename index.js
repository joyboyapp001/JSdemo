let start = 1;
let end = 49;
let lottos = [];
//函式表達式(把寒是當作變數使用)
const getRandNumber = (start, end) => Math.floor(Math.random() * (end - start + 1)) + start;


//document.write("<h2>大樂透號碼</h2>");
for (let i = 0; i < 5; i++) {
    lotto.push(getLotto(start, end));
    lottos.push(lotto);
}

let a = 10;
let b = 20;
let c = 0;

c = a > b ? a + b : a - b;

console.log(c);

for (let i = 0; i < lottos.length; i++) {
    //document.write(`<li style =${i % 2 == 0 ? "color:red" : "color:blue"}>${lotto[i].join(",")}</li>`);
}


//lottos.forEach((x) => document.write(`<li style ="color:blue">${x.lotto.join(",")}</li>`));

console.log(lottos);

//函式宣告
function getLotto(start, end, count = 6) {
    let lotto = [];
    for (let i = 0; i < count;) {
        number = getRandNumber(start, end);
        //1.不重複
        if (!lotto.includes(number)) {
            lotto.push(number);
            i++;
        }
    }

    //2.排序
    lotto.sort((a, b) => a - b);

    return lotto;
}

let user = {
    name: 'jason',
    email: 'jason@gmail.com',
    password: '12345678'
}

console.log(user);
console.log(user.name);
console.log(user.email);
console.log(user["name"]);

let users = [
    {
        name: 'jason',
        email: 'jason@gmail.com',
        password: '12345678'
    },
    {
        name: 'mary',
        email: 'jason@gmail.com',
        password: '12345678'
    },
    {
        name: 'kevin',
        email: 'jason@gmail.com',
        password: '12345678'
    }
]

//console.log(users);
//console.log(user[0]);

//使用for 迴圈取值,姓名跟email輸出document
// for (let i = 0; i < users.length; i++) {
//     document.write(`${user[i].name}-${user[i], email}<br>`);
// }

// user.forEach(user => document.write(`${user.name}-${user, email}<br>`));

//使用forEach取值,姓名跟email輸出document