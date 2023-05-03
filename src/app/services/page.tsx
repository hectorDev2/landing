import React from 'react'
import { Banner } from '../shared/components/Banner'
import bannerImage from '../../../public/banner-meeting.jpeg'
const Services = () => {
  return (
    <>
      <Banner
        routeImage={bannerImage}
        title='Services'
        subtitle='Our service'
      />
    </>
  )
}

export default Services
