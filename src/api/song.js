import jsonp from 'common/js/jsonp'
import {commonParams, options} from "./config"
import axios from 'axios'

export function getLyric(mid) {
  const url = "api/lyric"

  const data = Object.assign({}, commonParams, {
    g_tk: 5381,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    format: 'json',
    nobase64: 1,
    musicid: mid,
    loginUin: 0,
    inCharset: "utf-8",
    outCharset: "utf-8",
    notice: 0,
    platform: "yqq",
    needNewCode: 0
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
