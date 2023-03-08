import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/deepa-birari-887b03a5/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/deepa5053' target="_blank"><BsGithub /></a>
        <a href='https://www.facebook.com/deepa.birari/' target="_blank"><AiFillFacebook /></a>
    </div>
  )
}

export default HeaderSocials