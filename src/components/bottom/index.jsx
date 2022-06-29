import React from 'react'
import './index.css'

export default function Bottom() {
  return (
    <div className='bottom'>
      <a className='bottom-a bottom-text' href="https://home.baidu.com/" target='_blank'>关于百度</a>
      <a className='bottom-a bottom-text' href="https://ir.baidu.com/" target='_blank'>About Baidu</a>
      <a className='bottom-a bottom-text' href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001/" target='_blank'>京公网安备11000002000001号</a>
      <a className='bottom-a bottom-text' href="https://beian.miit.gov.cn//" target='_blank'>京ICP证030173号</a>
      <a className='bottom-text' href="#">药品医疗器械网络信息服务备案（京）网药械信息备字（2021）第00159号</a>
    </div>
  )
}
