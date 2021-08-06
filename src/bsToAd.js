const { bsData, adStart } = require('./data')

function bsToAd(year, month, day) {
    let daysDiff = 0

    // Calculate the days difference from the start of 1978 to the current Bikram Sambat
    let i = 0
    for (i; i < year - 1978; i++)             daysDiff += bsData[i][12]
    for (let j = 0; j < month - 1; j++)       daysDiff += bsData[i + 1][j]
    daysDiff += day-1

    // Add the start of the AD calendar to the daysDiff to get the conversion
    var start = new Date(adStart)
    start.setDate(start.getDate() + daysDiff)

    return { year: start.getFullYear(), month: start.getMonth()+1, day: start.getDate() }
}

module.exports = bsToAd;
