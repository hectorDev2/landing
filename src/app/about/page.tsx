import React from 'react'
import { Banner } from '../shared/components/Banner'
import bannerImage from '../../../public/banner-meeting.jpeg'
import Team from '../components/team/Team'
import { Section } from './Section'
import imageSection1 from '../../../public/feature-about.png'
import imageSection2 from '../../../public/banner-travel.png'
import { SayAbout } from '../components/SayAbout'
const About = () => {
  return (
    <>
      <Banner
        routeImage={bannerImage}
        title='About us'
        subtitle='We’re more than 5 years old in digital industry'
      />
      <Section
        title={'agency That Helps your business generate ultimate wealth'}
        content={
          'Sed tempus tristique mauris, non finibus mi tincidunt id. Maecenas dictum libero ac tellus lacinia pellentesque. Sed elementum, libero sit amet pulvinar laoreet, nunc lorem mollis est, id rutrum ante velit interdum diam. '
        }
        image={imageSection1}
      />
      <Section
        title={'agency That Helps your business generate ultimate wealth'}
        content={
          'Sed tempus tristique mauris, non finibus mi tincidunt id. Maecenas dictum libero ac tellus lacinia pellentesque. Sed elementum, libero sit amet pulvinar laoreet, nunc lorem mollis est, id rutrum ante velit interdum diam. '
        }
        image={imageSection2}
        invert={true}
        buttonWarning={'Services'}
      />
      <Team />
      <SayAbout />
    </>
  )
}

export default About
