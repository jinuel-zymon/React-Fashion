import React from 'react'
import Wrapper from '../../partials/Wrapper'
import HomeLatest from './HomeLatest'
import HomeVideo from './HomeVideo'
import WidgetFollow from './widget/WidgetFollow'
import WidgetNewsLetter from './widget/WidgetNewsLetter'

const HomeSticky = () => {

 
  return (
    <section className='py-24'>
      <Wrapper>
        <div className="grid md:grid-cols-[3fr_1fr] gap-6">
          <div className="main">
            <HomeVideo/>

            <HomeLatest/>

          </div>
          <aside className="sidebar sticky top-5 self-start">
            <WidgetFollow/>
            <WidgetNewsLetter/>
          </aside>
        </div>
      </Wrapper>
    </section>
  )


}

export default HomeSticky