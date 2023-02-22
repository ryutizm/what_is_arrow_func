// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

'use strict';

let mutableText = "変更前";
mutableText = "変更後";
// console.log(mutableText);

const mutableArray = [1, 2, 3];
mutableArray.push(4);
// console.log(mutableArray);

const mutableObject = {
  id : "hoge",
  value : "fuga"
}
mutableObject["name"] = "Sato";
// console.log(mutableObject);

function namedFunc(message) {
  console.log(message);
}

const arrowFunc = (message) => {
  console.log(message)
}

const oneLineFunc = (message) => console.log(message);

// namedFunc("これは名前付きです");
// arrowFunc("これはアロー関数です");
// oneLineFunc("これは１行で書いたアロー関数です");
const users = {
  name: "hoge",
  id: "nice"
}
const getUserName = (userID) => users[userID];

const userName1 = getUserName("id"); //keyを入れる
console.log(userName1);