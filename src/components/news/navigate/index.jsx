import React from 'react'
import './index.css'

export default function Navigate() {
  const [navigate, setNavigate] = React.useState([])
  const xhr = new XMLHttpRequest()
  React.useEffect(() => {
    xhr.open('GET', 'http://127.0.0.1:3006/news/navigate')
    xhr.send()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          setNavigate(JSON.parse(xhr.response).data)
        }
      }
    }
  }, [])
  return (
    <div className='navigate'>
      {
        navigate.map((navigateObj)=> {
          return(
            <a className='navigate-a' key={navigateObj.id} href={navigateObj.src} target='_blank'>
              <div className='navigatePic'><img src={navigateObj.pic}/></div>
              <div className='navigateText'>{navigateObj.text}</div>
            </a>
          )
        })
      }
    </div>
  )
}
