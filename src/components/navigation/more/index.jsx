import React from 'react'
import './index.css'


export default function More() {
  const [more, setMore] = React.useState([])
  const xhr = new XMLHttpRequest()
  React.useEffect(() => {
    xhr.open('GET', 'http://127.0.0.1:3006/navigation/left/more')
    xhr.send()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          setMore(JSON.parse(xhr.response).data)
        }
      }
    }
  }, [])


  return (
    <div className='moreInput'>
      {
        more.map((moreObj) => {
          return (
            <a key={moreObj.id} className='more-pic' href={moreObj.src} target="_blank"><img className='moreInput-img' src={moreObj.pic} /><div className='more-text'>{moreObj.text}</div></a>
          )
        })
      }
      <div className='moreBottom'>
        <a className='moreBottom-a' href="https://www.baidu.com/more/" target="_blank">查看全部百度产品 &gt;</a>
      </div>
    </div>
  )
}