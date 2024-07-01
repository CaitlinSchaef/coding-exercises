/*
https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

Instructions: Complete the solution so that it reverses the string passed into it.
Notes: 
Example:  
'world'  =>  'dlrow'
'word'   =>  'drow'

Params: given string
Return: returns string 
Concerns: will it always be letters? does it need to be case sensitive?
Solutions: 
Given Code: 
function solution(str){
  
}
*/

function solution(str){
    let split = str.split("")
    console.log('SPLIT: ', split)
    let reverse = split.reverse()
    console.log('REVERSE: ', reverse)
    let join = reverse.join('')
    console.log('JOIN: ', join)
    return join
}

/* 
You could do it all together like this:
function solution(str){
  return str.split('').reverse().join('');  
}
*/