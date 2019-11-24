//
// 11/24/2019
// Fahad Alturkistani

////// ex1

function calculateCube(num){
    return Math.pow(num,3);
    };
    
calculateCube(5);

////// ex2

function isAVowel(input){
    if (input.length>1 || typeof input !== 'string'){
      return "invalid input";
    }
    lowInput = input.toLowerCase();
    if (lowInput=="a" || lowInput=="i" || lowInput=="o" || lowInput=="u" || lowInput=="e"){
      return true;
    }
    else 
    return false
    };
isAVowel("a");
    
////// ex3

function getTwoLengths(str1,str2){
    if (typeof str1 !== 'string' || typeof str2 !== 'string'){
        return "invalid input";
        }
    arr = [];
    arr.push(str1.length);
    arr.push(str2.length);
    return arr;
    };
getTwoLengths('Fahad',"Ali")

////// ex4

function getMultipleLengths(arrayOfStrings){
    totalLengths = [];
    i=0;
    while(i<arrayOfStrings.length){
    totalLengths.push(arrayOfStrings[i].length);
    i++;
    }
    return totalLengths;  
    };
getMultipleLengths(["Ali", "Fahad","Mohe"]);

////// ex5

function maxOfThree(num1,num2,num3){
    return Math.max(num1,num2,num3);
        };
maxOfThree(421,1,234);

// OR

function maxOfThree(num1,num2,num3){
    array = [num1,num2,num3];
    max = 0;
    i=0;
    while(i<3){
      if (array[i]>max){
        max = array[i];
      }
    i++;
    }
    return max;
  };
  //maxOfThree(1,3,2);
  //maxOfThree(4,3,2);
  maxOfThree(1,3,5);
        
////// ex6

function printLongestWord(arrayOfStrings){
    totalLengths = [];
    i=0;
    while(i<arrayOfStrings.length){
      totalLengths.push(arrayOfStrings[i].length);
      i++;
      }
    maxLength = Math.max(... totalLengths);
    longIndex = totalLengths.indexOf(maxLength);
    return arrayOfStrings[longIndex];
    };
  
  printLongestWord(["BoJack", "Princess", "Diaaaane", "a", "Max", "big", "blob"]);

  ////// ex7

  function transmogrify(num1,num2,num3){
    return Math.pow(num1*num2,num3);
  };
  transmogrify(5,3,2);


//OR

function transmogrify(num1,num2,num3){

    multiplied = num1*num2;
  
    product = 1;
    i=0;
    while(i<num3){
      product *= multiplied;
      i++;
    }
    return product;
  };
  transmogrify(5,3,2);


  ////// END OF SOLUTIONS //////