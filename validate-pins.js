/*
https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
Instructions: ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 
6 digits. If the function is passed a valid PIN string, return true, else return false.
Notes:
Example:  
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
Params: given string
Return: return true/false
Concerns: is it always false for letters? Or just when mixed? Could 'aaaa' be a valid pin? (Number.isInteger(pin)
Solutions: check length first and then check for numbers 
Given Code: 
function validatePIN (pin) {
  //return true or false
}
*/


function validatePIN(pin) {
    //check pin length first
    if (pin.length === 4 || pin.length === 6) {
      // if pin is either 4 or 6 long, then will check for if it's number or not
       return /^\d+$/.test(pin)
    }
    return false
  }