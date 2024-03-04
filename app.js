// ================================   Array ==================

// Q 1: Declare an empty array using JS literal notation to store
// student names in future.
// Ans:
// var studentName = [];

// Q 2:    Declare an empty array using JS object notation to store
//     student names in future
// Ans:
// var studentName = {}
// Q 3 Declare and initialize a strings array.
// Ans:

// var name = ["shehbaz", "habib", "zuahir"];

// Q 4: Declare and initialize a numbers array
// Ans:
//  var number = [23, 34,55,54];

// Q 5 Declare and initialize a boolean array
// Ans:

// var boolean = []
//     for (var i = 0; i<4 ;i++){
//         boolean.push(true);
//     }
//     console.log (boolean);

// Q 6:    Declare and initialize a mixed array
// Ans:
// var mixArr = ["Islamabad","Rawalpindi", 2,4]
// alert(mixArr);

// Q 7:Declare and Initialize an array and store available mobile
//     networks in Pakistan
// Ans:

// let network = ['Jazz', 'Zong', 'Ufone', 'Telenor'];
// alert(network);

// Q 8:    Declare and Initialize an array and store available education
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,
// M. Phil., PhD). Show the listed qualifications in your browser
// like:
// Ans:

//    const orderList = document.querySelector('ol');
//    function listitems(arg){
//     for (let i=0; i<arg.length; i++){
//         orderList.innerHTML += ` <li> ${qualifications[i]}</li>`;
//     }

//    }
//    const qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// listitems(qualifications)

// Q 9 Declare and initialize an empty array to store top movies of
// 2015. Add movies one by one in an array. Display the elements
// & length of array in your browser. (Use array’s length method)
// // Ans:

//     const movieName = [];
//     movieName.push('Avengers: age of Ultron');
//     movieName.push('Spectre');
//     movieName.push('Jurassic World');
//     movieName.push('Inside Out');
//     const storeMovies = document.querySelector ('ol');
//     const storeLength = document.querySelector('h3');
//     const  movieLength = movieName.length;
//      function showMovie(){
//         for(let i = 0; i < movieName.length; i++){
//             storeMovies.innerHTML += `<li>${movieName[i]}</li>`;
//         }
//     storeLength.innerHTML =  `Length of the array: ${movieLength}`;
//      }
//      showMovie()

// Q 10:   Declare and Initialize an array with your favorite cars. Show
// a. First index of the array
// b. Car at first index of the array
// c. Last index of the array
// d  Car at last index of the array
// Ans:

// const cars = ['Audi', 'Volvo', 'Ford', 'Lamborghini'];
//     const firstIndex = 0;
//     const lastIndex = cars.length-1;
// document.write(`<h2>Favorite cars</h2>${cars} <br><br>First Index of the array: ${firstIndex}
// <br>car at first index of the array: ${cars[firstIndex]} <br> Last index of the array: ${lastIndex}
// <br> Car at last index of the array: ${cars[lastIndex]}`);

// Q 11:   Write a program to store 3 student names in an array. Take another array to store
// score of these three students. Assume that total marks are 500 for each student, display
// the scores & percentages of students like
// Ans:
// const studentName = ["shehbaz", "Yasir", "Habib"];
// const studentMarks = [350, 459, 390];
// const totalMarks = 500;

// function result() {
//   for (let i = 0; i < studentMarks.length; i++) {
//     const percenatge = (studentMarks[i] / totalMarks) * 100;
//     // console.log(percenatge)
//     document.write(
//       `Score of ${studentName[i]} is ${studentMarks[i]}. Percentage:${percenatge}%<br>`
//     );
//   }
// }

// result()
// ++++++++++++++++++++++++=  Second method ++++++++++++++++++++++++++++++++++++=
// const stdName = [];
// const studentMarks = [];
// const totalMarks = 600;
// function  main(){
//     const stdno = prompt('How many students you want to add');
//     for(let i = 0; i < stdno; i++){
//         const nameStd = prompt(`Enter Student Name: ${i+1} ` )
//         stdName.push(nameStd)
//         const scorestd = +prompt(`Enter Student Marks: ${i+1}`);
//         studentMarks.push(scorestd);
//     }

//     for( let i = 0; i<stdno; i++)
//     {
//         const percenatge = studentMarks[i] /totalMarks*100;
//            document.write(`Score of ${stdName[i]} is ${studentMarks[i]} and percentage is ${percenatge.toFixed(2)} %<br>`) 

//     } 
// }

// main()
// +++++++++++++++++++++++++++++++++++ Second method end+++++++++++++++++++++++++++++


// Q 12:   Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the 
// beginning of the array. Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of 
// the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your 
// browser
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the
//  color to desired position/index. Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors 
// he/she wants to delete. Then remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your browser.
/*
const color = ['Red', 'Blue', 'Green'];
 document.write (`<strong>Orignal Array : </strong>${color}<br>`);

 function addColor(){
    // Ask the user what color he/she wants to add to the beginning & add that color to the 
    // beginning of the array. Display the updated array in your browser.  
const userColor = prompt('Which color do you want to add in the begnning ?');
if(color.includes(userColor)){
    document.write('Color already exist')
}
else
{
    color.unshift(userColor);
    const showArr = color.join(', ');
    document.write(`<strong>Array after adding color at the beginning:</strong> ${showArr} <br>`)
}

// b. Ask the user what color he/she wants to add to the end & 
// add that color to the end of the array. Display the updated 
// array in your browser.

   const colorAfter = prompt("'Which color do you want to add in the end ? ")
   if(color.includes(colorAfter)){
    document.write (`Color already exist`);
   }
   else{
        color.push(colorAfter);
        const showAfter = color.join(', ');
        document.write(`<strong>Array after adding color at the end: </strong>${showAfter}<br>`)
   }


//    Add two more color to the beginning of the array. Display 
// the updated array in your browser.

   for (let i=0; i<2; i++)
   {
    const twoColor = prompt(`Enter two color to add at the beginning ${i+1}`);

    color.unshift(twoColor);
    // console.log(color);
}
    document.write(`<strong>Array after adding two color at the beginnig: </strong>${color}<br>`)

//  d. Delete the first color in the array. Display the updated 
// array in your browser.
    color.shift();
    document.write(`<strong>Array after Delete the first element: </strong>${color}<br>`)

// e. Delete the last color in the array. Display the updated array in your browser.
        color.pop()
        document.write(`<strong>Array after Delete the last element: </strong>${color}<br>`)

// f. Ask the user at which index he/she wants to add a color & color name. Then add the 
// color to desired position/index. 
//  Display the updated array in your browser
   const whereToAdd = +prompt('At which index you want to add the color');
   const colorAdd = prompt("Enter color name to add");
    color.splice(whereToAdd,0,colorAdd);
    document.write(`<strong>Array after add element at index ${whereToAdd}: </strong>${color}<br>`)
   
//  g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she
// wants to delete. Then remove the same number of color(s) from user-defined position/index.
// Display the updated array in your browser.
   const fromToDelete = +prompt('At which index you want to delete the color ?');
   const whereToDelete = +prompt('How many colors you want to delete from the index');
   color.splice(fromToDelete,whereToDelete);
    document.write(`<strong>Array after deleting color from index (${fromToDelete}, ${whereToDelete}): ${color}</strong>`);

 }
 addColor()

 */

//  Q 13:  Write a program to store student scores in an array & sort the array in ascending order 
//  using Array’s sort method.
// Ans:
    // const arrToSort = [240,210,180,350,450,110];
    // arrToSort.sort();
    // document.write(arrToSort);

// Q 14:   Write a program to sort the below mentioned array:
// var fruits = [“strawberry”, “apple”, “orange”, “banana”];

// const fruits = ['strawberry', 'apple', 'orange', 'banana'];
// document.write(`<strong>Fruits list:</strong><br> ${fruits}<br><br>`);

// fruits.sort();
// document.write(`<strong>Ordered fruits list:</strong><br> ${fruits}`);

// Q 15Write a program to initialize an array with city names. Copy 
// 3 array elements from cities array to selectedCities array. 
// Ans:
    //    const cityName = ['Karachi', 'Lahore', 'Islamabad','Quetta', 'Peshwar'];
    //     const selectedCities = [];
    //     selectedCities.push(cityName[2], cityName[3])
    //     document.write(`<strong> Cities List:</strong><br> ${cityName} <br>
    //     <strong>selected Cities List:</strong> <br> ${selectedCities}`);

//  16. Write a program to create a single string from the below mentioned array:
//  var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
// Ans  
    // const arr = ['This', 'is', 'my', 'cat'];
    // document.write(`<strong>Array:</strong><br> ${arr}<br>`);
    // const newArr = arr.join(" ");
    // document.write(`<strong>String: </strong><br> ${newArr}`);


// Q 17:   Create a new array. Store values one by one in such a wat that you can access the 
// values in the order in which they were  stored. (FIFO-First In First Out)
    
// Ans:
//    const fifoArr = [];
   
//    function insert(value){
//     fifoArr.push(value)
    
// }
// function fifo(){
//     for (let i=0; i< fifoArr.length; i++){
//         console.log(fifoArr[i]);
//      return fifoArr.shift();
//     }
// }
//   insert('computer');
//   insert('mouse'); 
//  document.write(`${fifoArr}<br>`);
 
//   const fifoResult =fifo()
//   document.write(fifoResult);


// Q  18. Create a new array. Store values one by one in such a way 
// that you can access the values in reverse order. (Last In-First 
// Out)
// Ans:
        // const arr = [];

        // function pop(value){
        //     arr.push(value)
        // }
        
        // function lifo(){
        //      return arr.pop();
        

        // }
        // pop('keyboard');
        // pop('mouse');
        // pop('moniter');
        // console.log (arr);

        // const showLifo = lifo()
        // document.write(showLifo)

// Q : 19 . Write a program to store phone manufacturers (Apple, Samsung, Motorola, 
//     Nokia, Sony & Haier) in an array. Displaythe following dropdown/select menu in 
//     your browser using document.write() method:

// // Ans:
     
        // const manufacturers = ['Apple', 'Samsung','Motorolla','Nokia','sony','Haier'];

        // document.write(`<select>`);
        // for(let i = 0; i < manufacturers.length; i++){
            
        // document.write(`<option value = ${manufacturers[i]}>${manufacturers[i]}</option>`)
        // }
        // document.write(`<select>`);
    
        
// Q 20     Declare and initialize an empty multidimensional array.(Array of arrays)

// Ans:    

            // const multiArray = [];
            //   multiArray.push([1,2,3]);
            //   multiArray.push([4,5,6]);
            //   multiArray.push([7,8,9]);
            // document.write(multiArray)

//  Q 21:Declare and initialize a multidimensional array representing the following matrix:
// Ans:
            const arr  =[];
            arr.push([0,1,2,3])
            arr.push([1,0,1,2])
            arr.push([2,1,0,1])

            console.log(arr)
            document.write(arr)


  