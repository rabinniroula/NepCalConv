const converter = require('../index')

console.log('\n\nFor AD to BS \n')
console.log(converter.adToBs(2021, 8, 6))
console.log(converter.adToBs(2021, 4, 14))
console.log(converter.adToBs(2021, 8, 21))
console.log(converter.adToBs(2022, 4, 13))
console.log(converter.adToBs(2021, 1, 1))
console.log(converter.adToBs(2021, 4, 13))
console.log(converter.adToBs(2021, 4, 13))
console.log(converter.adToBs(2021, 4, 13))
console.log(converter.adToBs(2021, 4, 13))

console.log('\n\nFor BS to AD \n')
console.log(converter.bsToAd(2078, 4, 20))
console.log(converter.bsToAd(2078, 5, 20))
console.log(converter.bsToAd(2078, 6, 20))
console.log(converter.bsToAd(2078, 4, 23))
console.log(converter.bsToAd(2078, 4, 26))
console.log(converter.bsToAd(2078, 9, 18))
console.log(converter.bsToAd(2078, 4, 29))
console.log(converter.bsToAd(2078, 5, 22))
console.log(converter.bsToAd(2078, 10, 14))
console.log(converter.bsToAd(1978, 1, 1))


console.log(converter.getday(2021, 8, 6))
console.log(converter.getToday())
console.log(converter.getTodayInBS())
console.log(converter.getBsMonthInfo(2078, 4))