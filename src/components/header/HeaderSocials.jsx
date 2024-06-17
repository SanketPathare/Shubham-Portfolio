
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/shubham-tawale-b6a9b8200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/SRT82" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials