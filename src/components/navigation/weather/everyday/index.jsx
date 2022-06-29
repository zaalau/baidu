import React from 'react'
import './index.css'

export default function Everyday(props) {
  const [weather, setWeather] = React.useState([])
  const [city, setCity] = React.useState(true)
  const month = new Date().getMonth() + 1
  const date = new Date().getDate()
  const omonth = new Date(Date.now() - 2505600000).getMonth() + 1
  const oDate = new Date(Date.now() - 2505600000).getDate()
  const xhr = new XMLHttpRequest()
  React.useEffect(() => {
    xhr.open('GET', 'http://127.0.0.1:3006/navigation/right/weather')
    xhr.send()
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          setWeather(JSON.parse(xhr.response).data)
        }
      }
    }
  }, [])
  function showCity() {
    setCity(!city)
    props.x(city)
  }
  return (
    <div>
      <div className='weatherTop'>
        <span className='weatherTop-date1'>{month + '月' + date + '日'}</span>
        <span className='weatherTop-date2'>农历  {omonth + '月' + oDate + '日'}</span>
        <a target='_blank' href="http://www.weather.com.cn/weather/101210101.shtml#7d"><span className='weatherTop-text3'>未来七天天气</span></a>
        <span className='weatherTop-text4' onClick={showCity}>切换</span>
      </div>
      <div className='weatherBottom'>
        {
          weather.map((weatherObj) => {
            return (
              <a key={weatherObj.id} target='_blank' href='https://www.baidu.com/s?tn=baidutop10&rsv_idx=2&wd=%E6%9D%AD%E5%B7%9E%E5%A4%A9%E6%B0%94%E9%A2%84%E6%8A%A5' className='weatherBottom-day'>
                <div>{weatherObj.text1}</div>
                <img src={weatherObj.pic} />
                <div className='weather-bottom-text1'>{weatherObj.text2}</div>
                <div className='weather-bottom-text2'>{weatherObj.text3}</div>
                <div className='weather-bottom-text3'>{weatherObj.text4}</div>
              </a>
            )
          })
        }
      </div>
    </div>
  )
}
