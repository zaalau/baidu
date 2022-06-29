import React from 'react'
import More from './more'
import Weather from './weather'
import './index.css'
import Set from './set'
import Person from './person'


export default function Navigation() {
  const [navigationLeft, setNavigationLeft] = React.useState([])
  const [navigationRight, setNavigationRight] = React.useState([])
  const [more, setMore] = React.useState(false)
  const [moreInput, setMoreInput] = React.useState(false)
  const [weather, setWeather] = React.useState(false)
  const [weatherInput, setWeatherInput] = React.useState(false)
  const [set, setSet] = React.useState(false)
  const [setInput, setSetInput] = React.useState(false)
  const [person, setPerson] = React.useState(false)
  const [personInput, setPersonInput] = React.useState(false)
  const xhr = new XMLHttpRequest()
  const xhR = new XMLHttpRequest()
  React.useEffect(() => {
    xhr.open('GET', 'http://127.0.0.1:3006/navigation/left')
    xhr.send()
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          setNavigationLeft(JSON.parse(xhr.response).data)
        }
      }
    }
    xhR.open('GET', 'http://127.0.0.1:3006/navigation/right')
    xhR.send()
    xhR.onreadystatechange = function () {
      if (xhR.readyState === 4) {
        if (xhR.status >= 200 && xhR.status < 300) {
          setNavigationRight(JSON.parse(xhR.response).data)
        }
      }
    }
  }, [])
  function showMore(current) {
    if (current.target.innerText === '更多') {
      setMore(!more)

    }
  }
  function showMoreInput() {
    setMoreInput(!moreInput)
  }

  function showWeather(current) {
    if (current.target.innerText === '杭州') {
      setWeather(!weather)

    }
    if (current.target.innerText === '设置') {
      setSet(!set)

    }
    if (current.target.innerText === 'bobo') {
      setPerson(!person)

    }
  }
  function showWeatherInput() {
    setWeatherInput(!weatherInput)
  }
  function bye(x) {
    setWeather(x)
    setWeatherInput(x)
  }

  function showSetInput() {
    setSetInput(!setInput)
  }
  function showPersonInput() {
    setPersonInput(!personInput)

  }
  return (
    <div>
      <div className='navigation'>
        <div className='navigation-left'>
          <ul className='nav-left'>
            {
              navigationLeft.map((navigationObj) => {
                return (
                  <li className={'navLeft' + navigationObj.id} onMouseEnter={showMore} onMouseLeave={showMore} key={navigationObj.id} ><a key={navigationObj.id} href={navigationObj.src} target="blank">{navigationObj.text}</a></li>
                )
              })
            }
          </ul>

        </div>
        <div className='navigation-right'>
          <ul className='nav-right'>
            {
              navigationRight.map((navigationObj) => {
                return (
                  <li className={'navRight' + navigationObj.id} onMouseEnter={showWeather} onMouseLeave={showWeather} key={navigationObj.id} ><a href={navigationObj.src} target="blank"><img className={'navPic' + navigationObj.id} src={navigationObj.pic} />{navigationObj.text}</a></li>
                )
              })
            }
          </ul>
        </div>

      </div >
      <div onMouseEnter={showMoreInput} onMouseLeave={showMoreInput}>
        {(moreInput || more) && <More />}
      </div>
      <div onMouseEnter={showWeatherInput} onMouseLeave={showWeatherInput}>
        {(weatherInput || weather) && <Weather bye={bye} />}
      </div>
      <div onMouseEnter={showSetInput} onMouseLeave={showSetInput}>
        {(setInput || set) && <Set />}
      </div>
      <div onMouseEnter={showPersonInput} onMouseLeave={showPersonInput}>
        {(personInput || person) && <Person />}
      </div>
    </div>
  )
}