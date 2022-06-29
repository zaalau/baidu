import React from 'react'
import './index.css'

export default function Middle() {
  return (
    <div>
      <div className='baiduPic'>
        <a href="https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6%E7%83%AD%E6%90%9C&sa=ire_dl_gh_logo_texing&rsv_dl=igh_logo_pc" target="blank"><img src="图片/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"/></a>
      </div>
      <div className='search'>
        <input className='searchInput' type="text" />
        <div className='twoPic'>
          <a href="#"><img className='pics' src="图片/俩图.png"/></a>
        </div>
        <input type="submit" value="百度一下" className="baiduBtn"/>
      </div>
    </div>
  )
}
