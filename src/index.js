module.exports = function toReadable (number) {
    let num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen','eighteen', 'nineteen'];
    let tens = ['','', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number < 20) {
      let result = num[number];
      return result
    }
    let reminder = number % 10;
    let digit = number % 100;
    if (number < 100) {
      if (reminder === 0) {
        return tens[Math.floor(number/10)]
      } else {
        return tens[Math.floor(number/10)]+ ' ' + num[reminder]
      }
    }
    if (number < 1000) {
      if (digit === 0) {
        return num[Math.floor(number/100)]+ ' ' +'hundred'
      } else {
        return num[Math.floor(number/100)] +' '+ 'hundred'+ ' ' + toReadable(digit)
      }
    }
}
