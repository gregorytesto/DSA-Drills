// Callback / Higher Order Functions
// What are they?
// Provide an example

// CallStacks
// What is it?
// Provide an example

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
// Provide an example
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
// Call stack example of recursive function
// myRecursiveFunc(4)
// myRecursiveFunc(3)
// myRecursiveFunc(2)
// myRecursiveFunc(1)
// myRecursiveFunc(0)
//
// function myFunc(num) {
// 	console.log(num);
// 	if (num > 3) return num;
// 	let result = myFunc(num + 1);
// 	return result + num;
// }
// let sum = myFunc(0);

// Big O Notation / Time complexity / Space complexity
// What is it?
// Provide an example:

// O(1) // Constant Time
// function constFunc(num1, num2) {
// 	return 10; // Constant
// 	return num1 + num2; // Constant
// }

// O(n) // Linear Time
// function linearStringFunc(str) {
// 	for (let i = 0; i < str.length; i++) {
// 		console.log(i);
// 	}
// }
// linearStringFunc("word");
// function linearArrayFunc(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		console.log(i);
// 	}
// }
// linearArrayFunc([1, 2, 3, 4, 5, 6]);

// O(n^2) // Quadratic
// function quadTime(num) {
// 	for (let i = 0; i < num; i++) {
// 		for (let j = 0; j < num; j++) {
// 			console.log(j);
// 		}
// 	}
// }
// quadTime(10);

// Context (this)
// What is it?
// Provide an example

// OOP / Class / Inheritance / Properties / Methods
// What is it?
// Provide an example

// Linked Lists
// What is it?
// Provide an example
// insert O(1)
// delete O(1)

// Stack
// What is it?
// Provide an example
class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Stack {
	constructor(top = null) {
		this.top = top;
	}
	// push O(1)
	push(value) {
		const newNode = new Node(value);
		newNode.next = this.top;
		this.top = newNode;
	}
	// pop O(1)
	pop() {
		if (this.top === null) return null;
		let temp = this.top;
		this.top = temp.next;
		return temp.data;
	}
}

// Queue
// What is it?
// Provide an example
// enqueue
// dequeue

// Tree
// What is it?
// Provide an example
// class Node {
// 	constructor(data) {
// 		this.data = data;
// 		this.children = [];
// 	}
// }

// class Tree {
// 	constructor(root = null) {
// 		this.root = root;
// 	}
// }
// insert
// remove

// Binary Tree
// What is it?
// Provide an example
// class Node {
// 	constructor(data) {
// 		this.data = data;
// 		this.left = null;
// 		this.right = null;
// 	}
// }

// class BinaryTree {
// 	constructor(root = null) {
// 		this.root = root;
// 	}
// }
// insert
// remove

// Trie
// What is it?
