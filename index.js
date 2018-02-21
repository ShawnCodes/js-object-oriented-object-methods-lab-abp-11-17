function BoardMember(name, homeState, training) {
  this.name = name
  this.homeState = homeState
  this.training = training

function veto() {
  console.log('No, I must disagree');
}

function approve() {
  console.log('You can do that!');
}
function doCharity() {
  console.log('I like to help people.');
}

function releasePressStatement() {
  console.log('You will see great things from Scuber');
}

function sayHi() {
  console.log('Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.');
}
