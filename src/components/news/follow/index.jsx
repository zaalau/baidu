import React from 'react'
import './index.css'

export default function Follow() {
  const [follow, setFollow] = React.useState([])
  const [check, setCheck] = React.useState(false)
  const xhr = new XMLHttpRequest()
  React.useEffect(() => {
    xhr.open('GET', 'http://127.0.0.1:3006/news/follow')
    xhr.send()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          setFollow(JSON.parse(xhr.response).data)
        }
      }
    }
  }, [])
  return (
    <div className='followBone'>
      <div className='followBone-top'>
        <div className='followBone-top-left'>我的导航</div>
        <div className='followBone-top-right'>
          <span><input type="checkbox" onClick={() => setCheck(!check)} /> 分类显示</span>
          <span>编辑</span>
        </div>
      </div>
      <div className='followBone-bottom'>
        {check && <div className='tieba'>未分类：</div>}
        <div className='tieba-right'>
          {
            follow.map((followObj) => {
              return (
                <a className='tieba-content' key={followObj.id} href={followObj.src} target='_blank'>
                  <img src={followObj.pic} />
                  <span className='tieba-text'>{followObj.text}</span>
                </a>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
