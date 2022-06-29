import React from 'react'
import './index.css'

export default function Person() {
  return (
    <div className='person'>
            <a target='_blank' href="https://www.baidu.com/my/index" className="person1">个人中心</a>
            <a target='_blank' href="https://passport.baidu.com/v6/ucenter?_t=1655420300" className="person2">帐号设置</a>
            <a href="#" className="person3">切换账号</a>
            <a href="#" className="person1">退出登录</a>
        </div>
  )
}
