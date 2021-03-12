const axios = require('axios')

const SEARCH_URL =
  'https://tv.yahoo.co.jp/search?q=%E9%87%91%E6%9B%9C+%E3%83%AD%E3%83%BC%E3%83%89%E3%82%B7%E3%83%A7%E3%83%BC'

const search = async () => {
  await axios.get(SEARCH_URL)
  return 'dummy'
}

exports.search = search
