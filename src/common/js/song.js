import {getVkey} from "api/singer"

export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
}

export function createSong(musicData) {
  /*let filename = "C400" + musicData.songmid + ".m4a"
  getVkey(musicData.songmid, filename, _getGuid()).then((res) => {
    console.log(res.data.items)
  })*/

  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: `http://dl.stream.qqmusic.qq.com/${musicData.songid}.m4a?vkey=927C721D272189FED484EF874A8D646C6B13C20C53277FB99D496DA6804CDF1B64C33A4F049D24FFC4366605DB4755A6E9AB632AA770C09A&guid=${_getGuid()}&uin=0&fromtag=66`
  })
}

function filterSinger(singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}

function _getGuid() {
  var t = (new Date).getUTCMilliseconds();
  return Math.round(2147483647 * Math.random()) * t % 1e10
}
