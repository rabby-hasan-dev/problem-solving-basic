//   ---------- Assignment-4 Problem Solution --------

// ---- Problem No-1 -----

//  Description: There are some mathematical operation such as addition , subtraction, multiplication and division . 


function mindGame(number){
    const multiplication= number*3;
    const addition=multiplication+10;
    const division=addition/2;
    const subtraction=division-5;
    return subtraction;

}
const inputNumber= mindGame(5);
console.log( 'The result of mindGame is', inputNumber);




// --- Problem No-2 ---

//  Description: There are even and odd number find out mathematical operations.

function evenOdd(stringValue){
    const totalCharacter= stringValue.length;
    const reminder= totalCharacter % 2;
    const  evenNumber='Even Number';
    const oddNumber='Odd Number';
    if (reminder ==0){
        return evenNumber;
    }
    else{
        return oddNumber;
    }
  
 }
 const stringName= evenOdd('phero');
 console.log(stringName);


// ------- Problem No-3 -------

// Description: This mathematical operations is depend on overall Seven number. 

function isLGSeven(number){
    const subtract= number-7;
    if(subtract>=7){
        const toCount= subtract*2;
       
        return toCount;
    }
     else{
      
        return subtract;
    }

}
const isLGSevenInputNumber=isLGSeven(6);
console.log( 'isLGSeven result is', isLGSevenInputNumber);




// ---Problem No-4 ---

// Description: This mathematical operation is  finding negative value and counting negative value in array.

function findingBadData(array) {

    let count = 0;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (array[i] < 0) {
            count++;
        }
    }
    return count;

}
const myArray = [4, -5, 0, 2, -67, 8, 10, -34,-45];
console.log(findingBadData(myArray));




//  Problem No-5

//  Description: There are some mathematical operations and condition .

function gemsToDiamond(firstFGem, secondFGem, thirdFGem) {
    const firstFGemTotal = firstFGem * 21;
    const secondFGemTotal = secondFGem * 32;
    const thirdFGemTotal = thirdFGem * 43;
    const totalGems = firstFGemTotal + secondFGemTotal + thirdFGemTotal;
    const doubleThousand = 1000 * 2;

    if (totalGems >= doubleThousand) {

        const minusTotalGems = totalGems - doubleThousand;
         return minusTotalGems;
    }
    else {
        return totalGems;
    }
    }
      

const perFGem = gemsToDiamond(20, 200, 50);
 console.log(perFGem);



