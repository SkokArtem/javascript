const person = new Object({
    name: 'Artem',
    age: 28,
    greet: function () {
      console.log(Greet)
    },
  })

  Object.prototype.sayHello = function() {
    console.log('Hello!')
  }

  const lena = Object.create(person)
lena.name = 'Elena'
lena.age = 25

const str = new String('i am string')