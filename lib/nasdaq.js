
const URL = '';

async function getNasDaqData(date) {
    const url = `https://api.nasdaq.com/api/calendar/earnings?date=${date}`;
    const options = {
        headers: {
            'accept': 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-US,en;q=0.9',
            'origin': 'https://www.nasdaq.com',
            'referer': 'https://www.nasdaq.com/',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 Edg/98.0.1108.56'
        },
        method: 'GET',
        mode: 'cors'
    };
    // console.log(options);

    const res = await fetch(url, options);
    const data = await res.json();
    // console.log(res, data);

    let _date = data.asOf;
    let _data = data.rows;

    return {
        date: _date,
        data: _data,
    };
}

export { getNasDaqData }