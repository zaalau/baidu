import React from 'react'
import { nanoid } from 'nanoid'
import './index.css'

export default function City(props) {
  const [pro, setPro] = React.useState([])
  const [city, setCity] = React.useState([])
  const [select, setSelect] = React.useState('浙江')
  const [select2, setSelect2] = React.useState('杭州')
  const [showDrop, setShowDrop] = React.useState(false)
  const [showDrop2, setShowDrop2] = React.useState(false)
  const [everyday, setEveryday] = React.useState(false)
  const [bye, setBye] = React.useState(false)
  const xhr = new XMLHttpRequest()
  const xHr = new XMLHttpRequest()
  React.useEffect(() => {
    xhr.open('GET', 'http://127.0.0.1:3006/navigation/right/pro')
    xhr.send()
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          setPro(JSON.parse(xhr.response).data)
        }
      }
    }
    xHr.open('GET', `http://127.0.0.1:3006/navigation/right/city/first`)
    xHr.send()
    xHr.onreadystatechange = function () {
      if (xHr.readyState === 4) {
        if (xHr.status >= 200 && xHr.status < 300) {
          setCity(JSON.parse(xHr.response).data)
        }
      }
    }
  }, [])
  function gotLi(current) {
    setSelect(current.target.innerText)
    setShowDrop(!showDrop)
    xHr.open('GET', `http://127.0.0.1:3006/navigation/right/city/?a=${current.target.innerText}`)
    xHr.send()
    xHr.onreadystatechange = function () {
      if (xHr.readyState === 4) {
        if (xHr.status >= 200 && xHr.status < 300) {
          setCity(JSON.parse(xHr.response).data)
          setSelect2(JSON.parse(xHr.response).data[0][`${current.target.innerText}`])
        }
      }
    }
  }
  function gotLi2(current) {
    setSelect2(current.target.innerText)
    setShowDrop2(!showDrop2)
  }
  function showEveryday() {
    setEveryday(!everyday)
    props.x(everyday)
  }
  function goodbye() {
    setBye(!bye)
    props.bye(bye)
  }
  return (
    <div>
      <div className='city-top'>选择您所在的地区：</div>
      <div className='select select1'>
        <div className='city-select' onClick={() => setShowDrop(!showDrop)}>{select}</div>
        <div className='select-drop'>
          {
            showDrop && (
              <ul className='select-ul'> 
              {
                pro.map((proObj) => {
                  return (
                    <li className='select-li' onClick={gotLi} value={proObj.pro} key={proObj.id}>{proObj.pro}</li>
                  )
                })
              }
            </ul>
            )
          }
        </div>
      </div>
      <div className='select select2'>
        <div className='city-select' onClick={() => setShowDrop2(!showDrop2)}>{select2}</div>
        <div className='select-drop'>
          {
            showDrop2 && (
              <ul className='select-ul'>
              {
                city.map((cityObj) => {
                  return (
                    <li className='select-li' onClick={gotLi2} value={cityObj[`${select}`]} key={nanoid()}>{cityObj[`${select}`]}</li>
                  )
                })
              }
            </ul>
            )
          }
        </div>
      </div>
      <div className='city-checkBox'><input type="checkbox" />极端天气提醒</div>
      <div className='city-grayWord'>出现大雨、大雪、冰雹等极端天气时，我们将提前在百度首页通知您</div>
      <span className='button1' onClick={showEveryday}>取消</span><span className='button2' onClick={goodbye}>保存选项</span>
    </div>
  )
}
