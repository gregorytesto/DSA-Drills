// Callback Functions

// For loop

// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// }

// CallStacks

// function a() {
// 	console.log("Logging before b"); // 2
// 	b();
// 	console.log("Logging after b"); // 6
// }

// function b() {
// 	console.log("Logging before c"); // 3
// 	c();
// 	console.log("Logging after c"); // 5
// }

// function c() {
// 	console.log("Logging from c"); // 4
// }

// console.log("Logging before a"); // 1
// a();
// console.log("Logging after a"); // 7

// Recursion

// What is it?

// Example

// const myIterativeFunc = () => {
// 	let count = 0;
// 	while (count < 4) {
// 		count++;
// 	}
// };
// myIterativeFunc();

// const myRecursiveFunc = (count = 0) => {
// 	// console.log(count);

// 	// Base Case
// 	if (count > 3) return count;

// 	count++;
// 	// Call itself
// 	console.log("Before Ran:", count);
// 	myRecursiveFunc(count);
// 	console.log("After Ran:", count);
// };
// myRecursiveFunc();

// Call stack
// myRecursiveFunc(0)
// myRecursiveFunc(1)
// myRecursiveFunc(2)
// myRecursiveFunc(3)
// myRecursiveFunc(4)

// Big O Notation

// What is it?

// *Time complexity
// Space complexity

// O(1) // Constant Time
// function constFunc(num1, num2) {
// 	for (let i = 0; i < 1000000; i++) {
// 		return num1 + num2;
// 	}

// 	if (num1 > num2 && num1 > 10) {
// 		if (num1 + num2 > 20) {
// 			console.log(num1 + num2);
// 			num1 + num2;
// 		}
// 	}
// 	if (num1 > num2 && num1 > 10) {
// 		if (num1 + num2 > 20) {
// 			console.log(num1 + num2);
// 			num1 + num2;
// 		}
// 	}
// 	if (num1 > num2 && num1 > 10) {
// 		if (num1 + num2 > 20) {
// 			console.log(num1 + num2);
// 			num1 + num2;
// 		}
// 	}
// }

// O(log(n)) Logarithmic Time - Log base 10

// function logFunc(num) {
// 	for (let i = num; i >= 1; i = i / 2) {
// 		console.log(i);
// 	}
// }
// logFunc(100);

// O(n) // Linear Time
// function linearFunc(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		console.log(i);
// 	}
// }
// linearFunc([1, 2, 3, 4, 5, 6]);

function linearFunc(num) {
	for (let i = 0; i < num; i++) {
		console.log(i);
	}
}
// O(100n)

linearFunc(224);

// function linearFunc(str) {
// 	for (let i = 0; i < str.length; i++) {
// 		console.log(i);
// 	}
// }
// linearFunc("sdkjf");

// O(nLog(n))

// O(n^2)

// function quadTime(num) {
// 	for (let i = 0; i < num; i++) {
// 		for (let j = 0; j < num; j++) {
// 			console.log(j);
// 		}
// 	}
// }
// quadTime(10);

function quadTime(arr) {
	arr.sort(); // o(nlog(n))
	let result = arr.map((str) => str + " kitty cats"); // n
	let newResult = result.filter((str) => str.includes("three")); // n^2
	console.log(newResult);
}
quadTime(["two", "three", "four"]);

// O(n^2)

// Context (this)

// OOP
// Class
// Inheritance
// Methods

// Linked Lists

// Create
// Inserting
// Get Kth
// Search
// Size
