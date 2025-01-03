//1//
let arr1=[1,2,3,4,5];
 document.write(arr1.length);
document.writeln("<br>");


//2//
let numbers = [1, 2, 3, 4, 5];
for(let number of numbers){
    document.writeln(number);}
    document.writeln("<br>");
      

//3// 
let num = [1, 2, 3, 4, 5];
for(let index in num){
    document.writeln(num[index]); }
    document.writeln("<br>");


//4// 
let arr2=[1, 2, 3, 4, 5];{
document.writeln(Array.isArray(arr2)); }
document.writeln("<br>");


//5// 
let x = {0: "a", 1: "b", 2: "c", length: 3};
let array =Array.from(x);
document.write(array);
document.writeln("<br>");

//6// 
const n = [1, 2, 3, 4, 5];
  n.forEach(function(n){
  document.write(n);})
document.writeln(n.push(5))
document.writeln("<br>")

////////////// Mid/////////////// 

//1//
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
document.write(array1.concat(array2));
document.writeln("<br>");


 //2//
 let items=[1,2,3,4,5];
 let item=prompt ("enter the number");
 document.write(items.indexOf(item)+1);
 document.writeln("<br>")


//3//
let num1 = [1, 2, 3, 4, 5, 6];
 part1=num1.slice(0,2);
 part2=num1.slice(4);
document.write(part1.concat(part2));
document.writeln("<br>");


//4//
let num2 = [1, 2, 3, 4, 5, 6];
element1=num2.splice(0,1);
elelement2=num2.splice(1,4);
document.write(num2);
document.writeln("<br>")


//5//
let a = "1, 2, 3, 4, 5 "
document.write(a.split(','));
document.writeln("<br>");


//6//
 let num3 = [1, 2, 3, 4, 5];
document.write(num3.join( ).split(',').pop());
document.writeln("<br>");

//7//
document.write(Array.of(1,2,3) );
document.writeln("<br>");


//8//
let arr3=[1, 2, 3, 4, 5];
document.writeln(arr3.fill(0,0,3));
document.writeln("<br>");

//9//
let arr4=[1, 2, 3, 4, 5];
document.writeln(arr4.copyWithin(1, 0, 2));
document.writeln("<br>");


//10//
let fruits = ["apple", "banana", "cherry"];
document.write(fruits.sort());
document.writeln("<br>");

//11//
let fruit = ["apple", "banana", "cherry"];
document.write(fruit.reverse());
document.writeln("<br>");

////////////////Advanced ////////////////////////


//1//
let arr=[1,2,3,4,5];
let result=arr.map(num => num * 2);
document.write(result);
document.writeln("<br>");


//2//
let array3= [1, 2, 3, 4, 5]; 
let result1=array3.filter((num => num % 2 === 0));
document.write(result1);
document.writeln("<br>");


//3//
let array4= [1, 2, 3, 4, 5];
let result2= array4.reduce((sum, current) => sum + current, 0);
document.write(result2);
document.writeln("<br>");


