import React from 'react'
import { Button } from 'antd'
import { downloadByBlob } from '../../util'
import './index.less'

const url = `https://qvs.qiniuapi.com/v1/record/2xenzw2ckda8m/WKA20203400008DCCD0-WOP20203400008DD776-1608640800000_1608641100000clips/1608640800526-1608641100015-297440.mp4?e=1608648594&token=JlXranzCc_KbL1MFIk_xy8lgLsHfAvdpOLuF6dgk:iKYTrkwWlMLvP11joztuEic0w7g`
const flvUrl = `https://qvs.qiniuapi.com/v1/record/2xenzw2ckda8m/WKA20203400008DCCD0-WOP20203400008DD776-1608640800000_1608641100000clips/1608640800526-1608641100015-297440.flv?e=1608648594&token=JlXranzCc_KbL1MFIk_xy8lgLsHfAvdpOLuF6dgk:oaWjq2xgO5YJSt73Z-b3OytPLbE`

const DevicesMapThird = () => {
  return (
    <div>
      <Button onClick={() => downloadByBlob(url)}>download mp4</Button>
      <Button onClick={() => downloadByBlob(flvUrl, 'flv')}>
        download flv
      </Button>
    </div>
  )
}

export default DevicesMapThird
