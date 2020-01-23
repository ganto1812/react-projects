import React from 'react';
import './retail.css';

export default function Retail() {
	return (
		<div>
			<div className='container'>
				<div className='nav'>
					<ul>
						<li>
							<a href='/'>Login /</a>
						</li>
						<li>
							<a href='/'>Sign Up</a>
						</li>
					</ul>
				</div>
				<div className='section1'>
					<div>
						<span style={{ fontSize: '5em' }} role='img' aria-label='user'>
							👩🏻
						</span>
						<p>Welcome!</p>
						<button type='submit'>Do something</button>
					</div>
				</div>
				<div className='main'>
					<h1>Welcome to Super Store</h1>
					<p>We have so many products on stock</p>
					<p>Take a look!</p>
					<p name='return'></p>
				</div>
				<div className='aside'>
					<span style={{ fontSize: '5em' }} role='img' aria-label='trolley'>
						🛒
					</span>
					<p>Your trolley</p>
					<button id='checkout' onClick={changeColour}>
						Checkout
					</button>
				</div>
			</div>
		</div>
	);
}

// const windowReturn = document.getElementById('return');

const changeColour = e => {
	console.log(e.target);
	// e.target.toggle.content = 'Done';
};

const list = ['water', 'cereal', 'eggs', 'butter', 'sugar'];

const loopTrough = list => {
	list.forEach((element, id) => {
		console.log(`Thing: ${element} with ID: ${id}.`);
	});
};
loopTrough(list);

const iLike = list.map(thing => {
	return 'I like ' + thing;
});

function Person(name, age, hairColour) {
	this.name = name;
	this.age = age;
	this.hairColour = hairColour;
}

const Anto = new Person('Anto', 28, 'Brown');
console.log(Anto);

Person.prototype.sayName = function() {
	console.log(`My name is ${this.name}!`);
};

Anto.sayName();

// console.log(windowReturn);
// windowReturn.createTextNode(iLike);

class ShoppingList {
	constructor(items, number) {
		this.items = items;
		this.number = number;
	}
	sayList() {
		console.log(`You have ${this.number} item(s) and they are: ${this.items}.`);
	}
}

const todayShopping = new ShoppingList(['Mayo, Egg, Other'], 3);
console.log(todayShopping);

class Product extends ShoppingList {
	constructor(items, number, amount, cost) {
		super(items, number);
		this.amount = amount;
		this.cost = cost;
	}
}

const product = new Product(['Redbull, Choco, Water'], 3, 2, 20);

function getData(data, callback) {
	console.log('reading from the database...');
	setTimeout(() => {
		callback({ data: data });
	}, 2000);
}
getData(5, function(data) {
	console.log(data);
});

const prom = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({ user: 'Anto', pass: '32jr23f8s8hd8fh7' });
	}, 2000);
});

prom.then(data => {
	console.log(data);
});

// function sum(a, b) {
// 	return Promise(function(resolve, reject) {
// 		setTimeout(function() {
// 			// send the response after 1 second
// 			if (typeof a !== 'number' || typeof b !== 'number') {
// 				// testing input types
// 				return reject(new TypeError('Inputs must be numbers'));
// 			}
// 			resolve(a + b);
// 		}, 1000);
// 	});
// }

// let myPromise = sum(10, 5);
// myPromise
// 	.then(function(result) {
// 		document.write(' 10 + 5: ', result);
// 		return sum(null, 'foo'); // Invalid data and return another promise
// 	})
// 	.then(function() {
// 		// Won't be called because of the error
// 	})
// 	.catch(function(err) {
// 		// The catch handler is called instead, after another second
// 		console.error(err); // => Please provide two numbers to sum.
// 	});

const posts = [
	{ title: 'Post One', body: 'This is post one' },
	{ title: 'Post Two', body: 'This is post two' }
];

function getPost() {
	setTimeout(() => {
		let output = '';
		posts.forEach(post => {
			output += `<li>${post.title}</li>`;
		});
		document.body.innerHTML = output;
	}, 1000);
}

const promise1 = Promise.resolve('Hello there!');
const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 4000, 'Goodbye');
});
const promise3 = 34996;

Promise.all([promise1, promise2, promise3]).then(values => console.log(values));

async function fetchUsers() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();
	console.log(data);
}

fetchUsers();

const fetchUsers2 = new Promise((res, rej) => {});
