import Avatar from '@/components/avatar'
import ContainerPage from '@/components/container'
import Team from '@/components/team'
import TechForge from '@/components/tech-forge'
import TransitionPage from '@/components/transition-page'
import React from 'react'

const PageAboutMe = () => {
  return (
    <>
      <TransitionPage/>
      <ContainerPage>
        <TechForge/>       
        {/* <Avatar/> */}
        <Team/>
      </ContainerPage>
    </>
  )
}

export default PageAboutMe