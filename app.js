/** Write a for loop that loops through 1-20
 * if Number % 3 = 0, print "frontend"
 * if Number % 5 = 0, print "simplified"
 * if Number % 3 = 0 && Number % 5 = 0, print "frontend simplified"
 * if Number % 3 or Number % 5 !== 0, print Number
 *  */ 

for (i = 1; i <= 20; ++i) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} --> frontend simplified`)
    }
    else if (i % 3 === 0) {
        console.log(`${i} --> frontend`)
    }
    else if (i % 5 === 0) {
        console.log(`${i} --> simplified`)
    }
    else {
        console.log(`${i} --> ${i}`)
    }
}

/** Print out every character from the string
 * "Frontend Simplified"
 */

const str = 'Frontend Simplified'

for (i = 0; i < str.length; ++i) {
    console.log(str[i])
}

// Functions Definition

function welcomeToFES (firstName, lastName) {
    console.log(`Welcome to FES ${firstName} ${lastName}`)
}

// Call the function
welcomeToFES('Chase', 'Mitchem')



//Another Problem


//

function fn() {
    return 5
    console.log('my function')
}

console.log(fn());

// Anotther Problem 

//

function sumOfTwoNumbers (num1, num2) {
    return num1 + num2
}

console.log(sumOfTwoNumbers(5, 10))

/** Create a function that converts celsius to Fahrenheit
 * 
 * F = C X 1.8 + 32
 */

function cToF (celsius) {
    let Fahrenheit = celsius * 1.8 + 32
    return Fahrenheit
}

console.log(cToF(10))

// Same problem but with Const and an ARROW FUNCTION

const celsiusToF = (celsius) => {
    return celsius *1.8 + 32
}

console.log(celsiusToF(10))

// ARRAYS = Data structeres that can hold multiple data values in one variable 


//


let arr = [20, 30, 40, 50, 100]

// First element of array:
console.log(arr[0])

// Last element of array;
console.log(arr[arr.length - 1])

// Adding elements onto the array 

arr.push(200)

console.log(arr)

// Array FILTER METHOD - 
// Have to put a CALLBACK function when using the filter method - 
// AND have to make a RETURN True statment
// AND need to make a New Array with the filter method

let newArr = arr.filter((element) => {
    console.log(element)
    return true
})

console.log(newArr)

// Filter out all of the expensive items

let newArr2 = arr.filter((element) => {
    console.log(element)
    if (element < 50) {
        return true;
    }
})

console.log(newArr2)

// Filter method SHORTENED 
// Only available when you have one variable inside of the function

let newArr3 = arr.filter(element => element < 50)

console.log(newArr3)

/** Filter out all the 'FAIL' elements in an array
 * 
 * ['A+', 'A', 'FAIL'} => ['A+', 'A']
 * ['FAIL', 'FAIL', 'B'] => ['B']
 * ['FAIL'] => []
 */

let arr2 = ['A+', 'A', 'FAIL']

let newArr4 = arr2.filter ((elem) => {
    return elem !== 'FAIL'
})

console.log(newArr4)

// Same Problem with Shortened version

let newArr5 = arr2.filter (elem => elem !== 'FAIL')

console.log(newArr5)

// Same Problem but looping over the array

let grades = ['A+', 'A', 'FAIL']

for (let i = 0; i < grades.length; ++i) {
    console.log(grades[i])
}

// Same Problem as above but cannot use the filter method to remove all the 'FAIL' grades
// Using For loops
// Must create a new array and make it empty, then push the array onto that new array

let myGrades = ['A+', 'A', 'B', 'C', 'FAIL']

let myGradesArr = []

for (i = 0; i < myGrades.length; ++i) {
    if (myGrades[i] !== 'FAIL') {
        myGradesArr.push(myGrades[i])
    }
}

console.log(myGradesArr)

// Array Map Function - Uses Callback Function 
// Used when you want to change each element in the array into a different value

let arr6 = [1, 4, 9, 16]

let newArr6 = arr6.map((elem) => {
    console.log(elem)
    return undefined;
})

console.log(newArr6)

// Now reduce it to 1 line of code 

let arr7 = [1, 4, 9, 16]

let newArr7 = arr7.map(element => element * 2)

console.log(newArr7)

/** Turn each element in the array from dollars into cents
 * 
 * [1, 5, 8, 9] => [100, 500, 800, 900]
 * Do it short way then long way
 * 
 */

let arr8 = [1, 5, 8, 9]

let newArr8 = arr8.map(element => element * 100)

console.log(newArr8)

let arr9 = [1, 5, 8, 9]

let newArr9 = arr9.map((element) => {
return element * 100
})

console.log(newArr9)

// Now do the exact problem as about WITHOUT USING THE MAP METHOD - USING FOR LOOPS

let arr10 = [1, 5, 8, 9]

let newArr10 = []

for (i = 0; i < arr10.length; ++i) {
    newArr10.push(arr10[i] * 100)
}

console.log(newArr10)

/** OBJECTS - used to store multiple properties in one variable
 * 
 * Create a regiester function that creates 
 * - username
 * - email
 * - password
 * - subscription Status
 * - Discord Id
 * - Lessons Completed
 * 
 * Inside your register function: 
 * 1. Create a user object 
 * 2. Push that users object onto the array you have as let users =
 */

let users = [
    {
    username: 'Chase Mitchem',
    email: 'Chase.mitchem0855@gmail.com',
    password: 'test123',
    subscriptionStatus: 'VIP',
    discordId: 'ChaseM001',
    lessonsCompleted: [0, 1, 2],
    },
    {
    username: 'Dad Mitchem',
    email: 'Dad.mitchem0855@gmail.com',
    password: 'Dad123',
    subscriptionStatus: 'Regular',
    discordId: 'DadM001',
    lessonsCompleted: [0, 1, 2, 3],
    },
    { 
    username: 'Mom Mitchem',      
    email: 'Mom.mitchem0855@gmail.com',
    password: 'Mom123',
    subscriptionStatus: 'VIP',
    discordId: 'MomM001',
    lessonsCompleted: [0, 1,],
}
]

function register(username, email, passowrd, subscriptionStatus, discordId, lessonsCompleted) {
    let user = {
        username: username, 
        email: email, 
        passowrd: passowrd,
        subscriptionStatus: subscriptionStatus,
        discordId: discordId, 
        lessonsCompleted: lessonsCompleted,
    }
    users.push(user)
}

register('Sis Mitchem', 'Sis@email', 'Sis123', 'VIP', 'Sis001', [0, 1, 2, 3, 4])

console.log(users)

// Now we want to only accept one argument inside of the register function instead of 6 bc that is better practice
// Notice how the resister2 has only one object all wrapped in the purple brackets
// Also notice how you didn't have to write the user in the function definition anymore, because the user is defined in the calling of the function
// Just makes the whole thing much cleaner

function register2(user) {
    users.push(user)
}

register2({username: 'Sis Mitchem',email: 'Sis@email',password: 'Sis123',subscriptionStatus: 'VIP',discordId: 'Sis001',lessonsCompleted: [0, 1, 2, 3, 4]})

console.log(users)

// Now you can also Login a user using their email and passowrd 
// Need to loop through the users and find their email and password, is they both match what is in the function calling then log the user in
// or else tell the user they cannot log in 

function login(email, password) {
    for (i = 0; i < users.length; ++i) {
        if (users[i].email === email) {
            if (users[i].password === password) {
                console.log('Successfully Logged User In')
            }
        }
        else {
            console.log('Login Details incorrect - try again')
        }
        return;
    }
    console.log('Could not find a user that matches')
}

login('Chase.mitchem0855@gmail.com', 'test123')

/** DOM 
 * Document Object Model
 * 
 * Allows you to access and change the styling and content of elements on your website
 * 
 * Created a H1 tag in the HTML to do this example
 */

// Two Ways of Accessing an element 

// 1) Very Common way
console.log(document.querySelector('#title'))
// At this point we won't see what we need to because our Javacript is running before the HTML
// To remedy this you can either put your script tag in the HTML at the end of the body tag
// But better practice is to write the word defer in the script tag

// 2) Also very common method but only works if the element has an ID
console.log(document.getElementById('title'))

// To access a class use a . to access an ID use a #

// Use this to change the H1 title into something else 
document.querySelector('#title').innerHTML = 'Frontend Simplified'
// And you can write += instead of the plus to keep what you originally had in the HTML and ADD on the string you wanted to add with innerHTML

// That was all to change the HTML, 
// Now let's change the CSS 

document.querySelector('#title').style.color = 'red'
document.querySelector('#title').style.fontSize = '50px'

// Now that's done
// Let's see how to make a button do something when you click it
// It's called Click Listener 

// Button was created in the HTML file 
// We want to change the title to red when we click the button
// But you have to link the JS function to the HTML button you created
// To do this go to the button tag and write onclick then put inside of it the function name you wrote in JS with a () after the name

function changeTitleToRed () {
    console.log('clicked')
    document.querySelector('#title').style.color = 'black'
}

// The console.log('clicked') is just to show each time you click the button that pops up in the console