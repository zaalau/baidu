import React from 'react'
import Follow from './follow'
import Navigate from './navigate'
import Recommend from './recommend'
import './index.css'

export default function News() {
  const [follow, setFollow] = React.useState(false)
  const [recommend, setRecommend] = React.useState(true)
  const [navigate, setNavigate] = React.useState(false)

  function showFollow() {
    setFollow(true)
    setRecommend(false)
    setNavigate(false)
  }
  function showRecommend() {
    setFollow(false)
    setRecommend(true)
    setNavigate(false)
  }
  function showNavigate() {
    setFollow(false)
    setRecommend(false)
    setNavigate(true)
  }
  return (
    <div className='news'>
      {follow && (
        <div className='news-tab'>
          <div className='tab1' onClick={showFollow}>我的关注</div>
          <div className='tab2' onClick={showRecommend}>推荐</div>
          <div className='tab3' onClick={showNavigate}>导航</div>
        </div>
      )}
      {recommend && (
        <div className='news-tab'>
          <div className='news-tab1' onClick={showFollow}>我的关注</div>
          <div className='news-tab2' onClick={showRecommend}>推荐</div>
          <div className='news-tab3' onClick={showNavigate}>导航</div>
        </div>
      )}
      {navigate && (
        <div className='news-tab'>
        <div className='tab11' onClick={showFollow}>我的关注</div>
        <div className='tab22' onClick={showRecommend}>推荐</div>
        <div className='tab33' onClick={showNavigate}>导航</div>
      </div>
      )}
      <div className='newsBone'>
        {follow && <Follow />}
        {recommend && <Recommend />}
        {navigate && <Navigate />}
      </div>
    </div>
  )
}
