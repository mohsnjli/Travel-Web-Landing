let userInfo = [{
    id: 1,
    fname: "mohsen",
    lname: "jalali",
    phoneNumber: "09913173341",
    email: "mohsnjli1380@gmail.com",
    password: "123456789"
},
{
    id: 2,
    fname: "ali",
    lname: "mehrabi",
    phoneNumber: "09125547755",
    email: "alimehrabi@gmail.com",
    password: "123456789"
},
{
    id: 3,
    fname: "javad",
    lname: "saeedi",
    phoneNumber: "09913358877",
    email: "javadsaeedi@gmail.com",
    password: "123456789"
},
{
    id: 4,
    fname: "hosein",
    lname: "nosouhi",
    phoneNumber: "09125587336",
    email: "hsnosuhi@gmail.com",
    password: "123456789"
},
{
    id: 5,
    fname: "alireza",
    lname: "karimi",
    phoneNumber: "09965542214",
    email: "alireak@gmail.com",
    password: "123456789"
},
{
    id: 6,
    fname: "dorsa",
    lname: "aghababaei",
    phoneNumber: "09135524119",
    email: "dorsaaqb@gmail.com",
    password: "123456789"
},
{
    id: 7,
    fname: "rasool",
    lname: "bahrami",
    phoneNumber: "09125548963",
    email: "irasool@gmail.com",
    password: "123456789"
},
]
let zero = 0; 
let userLenght = userInfo.length;
let country = document.querySelector(".countries-statistics");
let tickets = document.querySelector(".tickets-statistics");
let users = document.querySelector(".users-statistics");
let counter = setInterval(function () {
    let z = zero++;
    if (zero === userLenght+1) {
        clearInterval(counter)
    }
    users.innerHTML = z;
    country.innerHTML = z;
    tickets.innerHTML = z;
   
} , 10);

