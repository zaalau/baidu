import React from 'react'
import './index.css'

export default function Recommend() {
  const [news, setNews] = React.useState([])
  const [hot, setHot] = React.useState([])
  const [firstId, setFirstId] = React.useState(1)
  const [lastId, setLastId] = React.useState(10)
  const xhr = new XMLHttpRequest()
  const XHR = new XMLHttpRequest()
  const xhrr = new XMLHttpRequest()
  React.useEffect(() => {
    xhr.open('GET', 'http://127.0.0.1:3006/news/recommend/news')
    xhr.send()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          setNews(JSON.parse(xhr.response).data)
        }
      }
    }
    XHR.open('GET', `http://127.0.0.1:3006/resou/?firstId=${firstId}&lastId=${lastId}`)
    XHR.send()
    XHR.onreadystatechange = () => {
      if (XHR.readyState === 4) {
        if (XHR.status >= 200 && XHR.status < 300) {
          setHot(JSON.parse(XHR.response).data)
        }
      }
    }
  }, [firstId,lastId])
  function deleteNews(current) {
    xhrr.open('GET', `http://127.0.0.1:3006/news/recommend/news/delete/?b=${current.target.id}`)
    xhrr.send()
    xhrr.onreadystatechange = () => {
      if (xhrr.readyState === 4) {
        if (xhrr.status >= 200 && xhrr.status < 300) {
          xhr.open('GET', 'http://127.0.0.1:3006/news/recommend/news')
          xhr.send()
          xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
              if (xhr.status >= 200 && xhr.status < 300) {
                setNews(JSON.parse(xhr.response).data)
              }
            }
          }
        }
      }
    }
  }
  function nextPage() {
    // console.log(hot[9].id)
    if(hot[0].id === 1) {
      setFirstId(11)
      setLastId(20)
    }
    if(hot[0].id === 11) {
      setFirstId(21)
      setLastId(30)
    }
    if(hot[0].id === 21) {
      setFirstId(1)
      setLastId(10)
    }
  }
  return (
    <div className='recommend'>
      <div className='recommend-left'>
        {
          news.map((newsObj) => {
            return (
              <div className='news-div' key={newsObj.id}>
                <a href={newsObj.src} target='_blank'>
                  <div className='news-container'>
                    <img className='news-container-img' src={newsObj.pic} />
                    <div className='news-right'>
                      <div className='news-text'>{newsObj.text}</div>
                      <div className='news-text-bottom'>{newsObj.author}</div>
                    </div>
                  </div>

                </a>
                <img className={'news-right' + newsObj.id} id={newsObj.id} onClick={deleteNews} src='图片/xx.png' />

              </div>
            )
          })

        }


      </div>
      <div className='recommend-right'>
        <div>
          <span className='hot-pic-left'><a href="https://top.baidu.com/board?platform=pc&sa=pcindex_entry"><img className='hot-pic-left' src="图片/bdrs1645983219312.jpg" /></a></span>

          <span className='hot-pic-right'><img className='hot-pic-right' src="图片/WX20220228-021020@2x.png" onClick={nextPage}/></span>
        </div>
        {
          hot.map((hotObj) => {
            return (
              <div className='hot-container' key={hotObj.id}>
                <a className='hotobj' href={hotObj.src} target='_blank'>
                  <span className={'hhh numColor' + hotObj.id}>{hotObj.id}</span>&nbsp;
                  <span className='span2'>{hotObj.text}</span>
                </a>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}
