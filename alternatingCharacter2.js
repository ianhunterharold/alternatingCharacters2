// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
  let deletions = 0;

  for (let i =0,j=1; i< s.length, j < s.length;i++, j++){

    if (s[i] === s[i + 1]){
      deletions++;
      console.log(deletions)
    }
  }

  return deletions; 
}
const str="AAABBB"
alternatingCharacters(str)


// s is a string that alternates

//as a human 
// look at the string and count the number of deletions that are not in order to leave a string of ABABAB alternating characters

//as a dev
// look at the characters line by line, if the next character is the same as the current one, increase count by one 
//return count at the end 