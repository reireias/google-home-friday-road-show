const axios = require('axios')

const SEARCH_URL = 'https://tv.yahoo.co.jp/api/adapter'

const search = async () => {
  const params = {
    query: '金曜ロードショー',
    siTypeId: '1 3',
    majorGenreId: '',
    areaId: '23',
    duration: '',
    element: '',
    start: 0,
    result: 10,
    sort: '+broadCastStartDate',
  }
  const headers = {
    authority: 'tv.yahoo.co.jp',
    'target-path': '/TVWebService/V2/contents',
    'target-api': 'mindsSiQuery',
  }
  const res = await axios.post(SEARCH_URL, params, { headers })
  for (const item of res.data.ResultSet.Result) {
    console.log(item.title)
  }

  return 'dummy'
}

exports.search = search
