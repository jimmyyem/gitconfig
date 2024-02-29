// functions.js

function add(a,b) {
    return a+b;
}

function sub(a,b) {
    return a-b;
}

function addOneDay(date, days = 1) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate.toISOString().split('T')[0];
}

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

function extractDateSimple(dateString) {
    // 使用正则表达式提取日期部分
    const [, month, day, year] = dateString.match(/(\w+) (\d+), (\d+)/);

    // 使用月份简写到月份数字的映射表
    const monthMapping = {
        Jan: "01",
        Feb: "02",
        Mar: "03",
        Apr: "04",
        May: "05",
        Jun: "06",
        Jul: "07",
        Aug: "08",
        Sep: "09",
        Oct: "10",
        Nov: "11",
        Dec: "12",
    };

    // 补全一位数日期和月份
    const paddedDay = day.length === 1 ? `0${day}` : day;
    const paddedMonth = monthMapping[month].length === 1 ? `0${monthMapping[month]}` : monthMapping[month];

    return `${year}-${paddedMonth}-${paddedDay}`;
}

export { add, sub, addOneDay, sleep, extractDateSimple }
