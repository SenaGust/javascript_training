Javascript training

- All of the exercises will be done considering a node environment.

Setup

Setup your environment with
+ VSCode
+ Node (latest stable version)
+ yarn (latest stable version)

Hello world

  Create your first file.Write code to log a message on the console.Run this code using the terminal.

Exercise 2

  Given the array below, write code that logs one message for each item.
  [
    { name: 'John', age: 30 },
    { name: 'Marie', age: 22 },
    { name: 'August', age: 30 }
  ]

  Expected output:
    John is 30 years old
    Marie is 22 years old
    August is 30 years old

  Google a bit about javascript template literals and try to use them here.

Exercise 3

  Write the body of theFunction, shown below. It uses passes the second argument to the first and logs the result.The function passed as parameter receives one integer argument and returns a number.

  function power(num) {
    return num * num
  }

  function tenTimes(num) { 
    return 10 * num
  }

  function theFunction(fn, num) {
    // ??????
  }

  theFunction(power, 10);
  theFunction(tenTimes, 7);

  // expected output
  // 100
  // 70

Exercise 4

  Write and test a function that performs multiplication between two numbers passed as arguments. If one of the arguments is not a number, throw an error.

Exercise 5

  Write and test a function that, given a string and two numbers, returns the same string concatenated with the multiplication of the numbers. The multiplication must be done using the function of the last exercise.

  Make sure your function handles the case where the multiplication function throws an error.

  Are your tests truly unitary? To check this, go to the multiplication function code and break it somehow. If only the multiplication test fails, your tests are unitary. If both of them break, you need to fix them

Exercise 6

  Change the function on the last exercise. Now, if both numbers are even return the string concatenated with the result of the sum of the square root of the arguments. Update your tests.

  Run the coverage report and check if you are testing every possible condition.Make sure you are handling the error scenario

  Consider refactoring the login that calculate the sum of the square roots into a separate function with their own tests.

Exercise 7

  Consider the function below:

  function getName() {
      return Promise.resolve('Arceus');
  }

  Create a function that calls it and logs 'Arceus' on the console.This function does not need tests. Obviously, you should not do console.log('Arceus').

Exercise 8

  Create two functions that return 'Hello ' concatenated with the return of the getName() function.

  One of them should use the then syntax and the other one the async/await syntax.

Exercise 9

  Use the Breaking Bad API and write a function that returns the number of characters that existe on this TV show.

Exercise 10

  Use the Breaking Bad API to return all of the name of the characters, sorted alphabetically.

Exercise 11

  Use the  Breaking Bad API and return the name of the episodes grouped by the first letter. Ignore the letter that have no episodes. For instance, given the episode names:

  "Something", "Something 2", "Especial delivery"

  the expect return would be

  {
    "E": 1,
    "S": 2
  }

Exercise 12

  Repeate the exercises 9, 10 and 11 but this time using the `lodash` library.