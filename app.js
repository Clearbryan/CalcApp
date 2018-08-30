/*var test5 = {
	name: 'Brian',
	age: 27,
	btnClick: function () {
		var that = this;
		document.querySelector('.btn').addEventListener('click', function () {
			var str = ''+that.name+' is '+that.age;
			alert(str); 
		});
	}
};
*/

//test5.btnClick();

const test6 = {
	name: 'Clearmind',
	age: 27,
	btnTest: function () {
		document.querySelector('.btn').addEventListener('dblclick', () => {
			let str = `${this.name} is ${this.age} years old`;
			console.log((str));
		});
	}
};
test6.btnTest();

var years = [1990, 1941, 2000, 1991, 1972, 1956];

function arrayCalc (arr, fn) {
	var arrayRes = [];
	for(var i =0; i < arr.length; i++) {
		arrayRes.push(fn(arr[i]));
	};
	return arrayRes;
};

function me (el) {
	return 2018 - el;
};

var one = arrayCalc(years, me);
console.log(one)

