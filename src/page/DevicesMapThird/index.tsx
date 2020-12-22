import React from 'react'
import { Button } from 'antd'
import { GET_CITY } from '../../gql/city'
import useBaseQuery from '../../hooks/useBaseQuery'
import './index.less'

const url = `https://qvs.qiniuapi.com/v1/record/2xenzw2ckda8m/WKA20203400008DCCD0-WOP20203400008DD776-1608640800000_1608641100000clips/1608640800526-1608641100015-297440.mp4?e=1608648594&token=JlXranzCc_KbL1MFIk_xy8lgLsHfAvdpOLuF6dgk:iKYTrkwWlMLvP11joztuEic0w7g`
const flvUrl = `https://qvs.qiniuapi.com/v1/record/2xenzw2ckda8m/WKA20203400008DCCD0-WOP20203400008DD776-1608640800000_1608641100000clips/1608640800526-1608641100015-297440.flv?e=1608648594&token=JlXranzCc_KbL1MFIk_xy8lgLsHfAvdpOLuF6dgk:oaWjq2xgO5YJSt73Z-b3OytPLbE`

export const downloadMp3 = (filePath: string, sub = 'mp4') => {
  fetch(filePath)
    .then((res) => res.blob())
    .then((blob) => {
      const a = document.createElement('a')
      document.body.appendChild(a)
      a.style.display = 'none'
      // 使用获取到的blob对象创建的url
      const url = window.URL.createObjectURL(blob)
      a.href = url
      // 指定下载的文件名
      a.download = 'test.' + sub
      a.click()
      document.body.removeChild(a)
      // 移除blob对象的url
      window.URL.revokeObjectURL(url)
    })
}

const DevicesMapThird = () => {
  const { data } = useBaseQuery({
    query: GET_CITY,
    variables: { req: { city: 2 } },
  })
  console.log(data)

  return (
    <div>
      <Button onClick={() => downloadMp3(url)}>download mp4</Button>
      <Button onClick={() => downloadMp3(flvUrl, 'flv')}>download flv</Button>
    </div>
  )
}

export default DevicesMapThird
