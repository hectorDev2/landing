import React from 'react'
import { Banner } from '../shared/components/Banner'
import bannerImage from '../../../public/banner-meeting.jpeg'
import { Form } from './Form'

const Contact = () => {
  return (
    <div>
      <Banner
        routeImage={bannerImage}
        title='Contact Us'
        subtitle='Our contact'
      />
      <Form />
    </div>
  )
}

export default Contact
