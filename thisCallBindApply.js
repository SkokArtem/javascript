function hello() {
  console.log('Hello', this) //передвет в контекст, что стоит до точки
}

const person = {
  name: 'Artem',
  age: 28,
  sayHello: hello,
  sayHelloWindow: hello.bind(window), // передаем тот контекст, который привязан к функции
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`)
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
    console.log(`Job is ${job}`)
    console.log(`Phone is ${phone}`)
    console.groupEnd()
  }
}


const lena = {
    name: 'Elena',
    age: 28
}
//person.logInfo.bind(lena)() //вызывает то, что мы хотим и нужно вызвать еще функцию ()
//const fnLenaInfoLog = person. logInfo.bind(lena,'Frontend', '3809774543366')() //возвращает новую функ и можно вызвать когда нам будет удобно
//person.logInfo.call(lena,'Frontend', '3809774543366') //задает контекст и параметры через запятую. он еще и вызывает сам функцию сразу!
person.logInfo.apply(lena,['Frontend', '3809774543366']) //можно передавать только 2 параметра и сразу вызывает функцию

////=======
const array = [1, 2, 3, 4, 5]

// function multBy(arr,n) {
// return array.map(function(i) {
//     return i * n
// })
// }

Array.prototype.multBy = function(n) {
    return this.map(function(i) {
    return i * n
})
   // console.log('multBy', this) //this является этим масивом в которого мы вызываем метод
}

//console.log(multBy(array, 5))

console.log(array.multBy(2))