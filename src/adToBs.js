const { bsData, adStart } = require('./data.js')
const {dateString} = require('./helper')

function adToBs(year, month, day) {
    const start = new Date(adStart)
    const end = new Date(dateString(year, month, day))

    //const end = new Date(year, month - 1, day + 1)
    // console.log(end)

    // Calculate the difference between the end and start in days
    daysDiff = Math.floor((end.getTime() - start.getTime()) / 86400000)
    //console.log(daysDiff)

    // // Now get the BS date that matches the day difference from bs Start
    let dd = 0, endYear = 0, endMonth = 0, endDay = 0, flag = 0, i = 0, j = 0

    for (i; i < bsData.length; i++) {
        dd += bsData[i][12]
        if (dd > daysDiff) {
            dd -= bsData[i][12]
            for (j; j < 12; j++) {
                dd += bsData[i][j]
                if (dd > daysDiff) {
                    flag = true
                    dd -= bsData[i][j]
                    break
                }
            }
        }
        if (flag) break
    }
    //console.log(dd)
    endYear = 1978 + i
    endMonth = j + 1
    endDay = daysDiff - dd + 1
    return { year: endYear, month: endMonth, day: endDay }
}

module.exports = adToBs;