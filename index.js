function hasTargetSum(array, target) {
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/
function hasTargetSum(array, target){
  let result = [] 
  let numIndex = new Map (); //This will hold indexes of the array as they are looped through

  for (i = 0; i < array.length; i++){
    let num = array[i];
    let compliment = target - num

    if(numIndex.has(compliment)){
      result[0]=numIndex.get(compliment);
      result[1]=i;

      if(result.length > 0){
        return true
      }   
    }

    numIndex.set(num,i) //adds the element of the array, and its index, to Map
   //debugger;
  }
  //debugger;
  return false

};

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
