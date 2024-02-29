// regex.js

const dateString = 'Jan, Feb 1, 2024';

export function formatDate(dateString) {
    const [, month, day, year] = dateString.match(/(\w+) (\d+), (\d+)/);

    console.log(month, day, year);

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

    const paddedDay = day.length == 1 ? `0${day}` : day;
    const paddedMonth = monthMapping[month];

    console.log(monthMapping[month]);
    console.log(`${year}-${paddedMonth}-${paddedDay}`);
}
