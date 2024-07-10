import React from 'react'
import '../styles/Aboutus.css';
import {content1,ourStory,ourValues,choose} from '../content'

const Aboutus = () => {
  return (
    <div>
      <div className='AboutPageHeroSec'>
        <div className='AboutPageHeroSecLeft'>
          <p className='title'>{content1.title}<span className='title2'>{content1.title2}</span></p>
          <p className='subtitle'>{content1.subtitle}</p>
          <button>{content1.buttonContent}</button>
        </div>
        <div className='AboutPageHeroSecRight'></div>
      </div>
      <div className='AboutPageOurStory'>
        <div className='AboutPageOurStoryLeft'></div>
        <div className='AboutPageOurStoryRight'>
          <p className='title'>{ourStory.title}</p>
          <p className='subtitle'>{ourStory.subtitle}</p>
        </div>
      </div>
      <div className='ourValues'>
        <p className='title'>{ourValues.title}</p>
        <p className='subtitle'>{ourValues.subtitle}</p>
      </div>
      <div className='visionMission'>
        <div className='vision'>
          <p className='title'>{ourValues.visionTitle}</p>
          <p className='subtitle'>{ourValues.visionSubtitle}</p>
        </div>
        <div className='mission'>
          <p className='title'>{ourValues.missionTitle}</p>
          <p className='subtitle'>{ourValues.missionSubtitle}</p>
        </div>
      </div>
      <div className='choose'>
        <div className='chooseLeft'>
          <p className='title'>{choose.title}</p>
          <p className='subtitle'>{choose.subtitle}</p>
        </div>
        <div className='chooseRight'></div>
      </div>
    </div>
    


  )
}

export default Aboutus