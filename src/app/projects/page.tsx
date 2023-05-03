import React from 'react'
import { Banner } from '../shared/components/Banner'
import bannerImage from '../../../public/banner-meeting.jpeg'
import { Section } from '../about/Section'
import imageSection1 from '../../../public/feature-about.png'
import imageSection2 from '../../../public/banner-travel.png'

const Projects = () => {
  return (
    <>
      <Banner
        routeImage={bannerImage}
        title='Nuestros Proyectos'
        subtitle='Past clients and work'
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
    </>
  )
}

export default Projects
