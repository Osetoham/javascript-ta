// complete the function
function palindrom(str){
  let newString = str.slice(-str);
  let palindromeStr =newString.split('').reverse('').join('');
  
  if(str === palindromeStr){
      console.log(`${str} is a palindrome`);
  }else{
      console.log(`${str} is not a palindrome`);
  }
}
function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
