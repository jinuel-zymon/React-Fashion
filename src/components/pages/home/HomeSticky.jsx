import React from 'react'
import Wrapper from '../../partials/Wrapper'
import HomeLatest from './HomeLatest'
import HomeVideo from './HomeVideo'

const HomeSticky = () => {

 
  return (
    <section className='py-24'>
      <Wrapper>
        <div className="grid grid-cols-[3fr_1fr] gap-20">
          <div className="main">
            <HomeVideo/>

            <HomeLatest/>

          </div>
          <aside className="sidebar">xxxx</aside>
        </div>
      </Wrapper>
    </section>
  )


}

export default HomeSticky