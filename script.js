// ===================================== chapter 08 ======================================


// ===================================== DATE METHOD ======================================

// ======================== creating date ========================

// let date = new Date();
// console.log(date);

// ================ Methods to get and set the elements of a date ===============

// ---------- .getDay() -----------

// let d = new Date();
// console.log("Day of Week:", d.getDay());

// ---------- .getDate() -----------

// let d = new Date();
// console.log("Day of Month:", d.getDate());

// ---------- .getMonth() -----------

// let d = new Date();
// console.log("Month:", d.getMonth());

// ---------- .getfullyear() -----------

// let d = new Date();
// console.log("Years:", d.getFullYear());

// ---------- .getSeconds() -----------

// let d = new Date();
// console.log("Seconds:", d.getSeconds());

// ---------- .getMilliseconds() -----------

// let d = new Date();
// console.log("Milliseconds:", d.getMilliseconds());

// ---------- .getTime() -----------

// let d = new Date();
// console.log("Time:", d.getTime());


// ========================== Converting a date to a string ========================

// ------------- .toDateString() ----------------

// let d = new Date();
// console.log(d.toDateString());

// ------------- .toLocaleDateString() ----------------

// let d = new Date();
// console.log(d.toLocaleDateString());



// ===================================== STRING METHOD ======================================

// -------------------- combining string ---------------------

// -------------- .concat -------------

// let s1 = 'hello ';
// let s2 = 'javascript';
// let result = s1.concat(s2);
// console.log(result);

// -------------- .split -------------

// let result = 'hell javascript';
// let arrResult = result.split(" ");
// console.log(arrResult);

// -------------- .join -------------

// let letters = ['a', 'b', 'c', 'd'];
// let result = letters.join();
// console.log(result);


// -------------------- Working with index & position ---------------------

// -------------- .indexOf -------------

// let poem = "Roses are red, violets are blue, if I can do JS";
// let index_re = poem.indexOf("re");
// console.log(index_re);

// -------------- .lastIndexOf -------------

// let poem = "Roses are red, violets are blue, if I can do JS";
// let index_re = poem.lastIndexOf("re");
// console.log(index_re);

// -------------- .charAt -------------

// let poem = "Roses are red, violets are blue, if I can do JS";
// let index_re = poem.charAt("15");
// console.log(index_re);

// -------------- .search -------------

// let str = "when i see my fellow";
// let position = str.search("m");
// console.log(position);


// =================== Creating substring =====================

// ------------- .slice --------------

// let str = 'create a substring';
// let substring1 = str.slice(5);
// let substring2 = str.slice(0,3);
// console.log(substring1);
// console.log(substring2);

// ------------- .replace --------------

// let hi = 'Hi Buddy';
// let newHi = hi.replace('Buddy', 'Pascal');
// console.log(newHi);

// ------------- .toUpperCase --------------

// let low = 'bye!';
// let up = low.toUpperCase();
// console.log(up);

// ------------- .toLowerCase --------------

// let caps = 'HI HOW ARE YOU ?';
// let fixedCaps = caps.toLowerCase();
// console.log(fixedCaps);

// ------------- .startsWith --------------

// let work = 'you are doin great';
// let boolStart = work.startsWith('you');
// console.log(boolStart);

// ------------- .endsWith --------------

// let work = 'you are doin great';
// let boolEnd = work.endsWith('you');
// console.log(boolEnd);


// ===================================== MATH METHOD ======================================


// ---------------------- Finding the highest and lowest number --------------------


// ----------------- Math.max() -----------------

// let highest = Math.max(2, 56, 12, 1, 233, 4);
// console.log(highest);

// ----------------- Math.min() -----------------

// let lowest = Math.min(2, 56, 12, 1, 233, 4);
// console.log(lowest);

// ----------------- NaN -----------------

// let highestOfWords = Math.max("hi", 3, "bye");
// console.log(highestOfWords);

// ----------------- Math.sqrt() -----------------

// let result = Math.sqrt(64);
// console.log(result);

// ----------------- Math.pow() -----------------

// let result2 = Math.pow(5,3);
// console.log(result2)


// ========================== Turning decimals into integers =============================


// ----------------- Math.round() -----------------

// let x = 6.78;
// let y = 5.34;
// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y));

// ----------------- Math.ceil() -----------------

// let x = 6.78;
// let y = 5.34;
// console.log("X:", x, "becomes", Math.ceil(x));
// console.log("Y:", y, "becomes", Math.ceil(y));

// ----------------- Math.floor() -----------------

// let x = 6.78;
// let y = 5.34;
// console.log("X:", x, "becomes", Math.floor(x));
// console.log("Y:", y, "becomes", Math.floor(y));

// ----------------- Math.trunc() -----------------

// let x = 6.78;
// let y = 5.34;
// console.log("X:", x, "becomes", Math.trunc(x));
// console.log("Y:", y, "becomes", Math.trunc(y));