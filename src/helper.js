const { bsStart, bsData } = require('./data')

// daysEN = {
//     0: 'Sunday',
//     1: 'Monday',
//     2: 'Tuesday',
//     3: 'Wednesday',
//     4: 'Thursday',
//     5: 'Friday',
//     6: 'Saturday'
// }

// daysNP = {
//     0: 'आइतबार',
//     1: 'सोमबार',
//     2: 'मंगलबार',
//     3: 'बुधबार',
//     4: 'बिहिबार',
//     5: 'शुक्रबार',
//     6: 'शनिबार'
// }

function dateString(year, month, day) {
    return `${year}-${month > 9 ? month : '0' + month}-${day > 9 ? day : '0' + day}`
}

function getToday() {
    date = new Date()
    return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate(), weekDay: date.getDay() }
}

function getday(year, month, day) {
    date = new Date(dateString(year, month, day))
    return date.getDay()
}

module.exports = {
    getday,
    dateString,
    getToday
}