import { useContext } from 'react'
import '../../../styles/aboutMe.css'
import { LanguageContext } from '../../context/LanguageContext'
import { AboutMeText } from './AboutMeText'
import { SkillsSection } from './SkillsSection'

export const AboutMe = () => {
  const { languagePage } = useContext(LanguageContext)

  return (
    <section
      id='aboutMe'
      className='container min-vh-100 d-flex flex-column justify-content-md-center align-items-center '
    >
      <div
        className='container-fluid d-flex flex-column align-items-center '
        id='title_about_me'
      >
        <p style={{ color: 'var(--color-secondary-text)' }} className='m-0'>
          {languagePage.acerca_de_mi__text_title}
        </p>
        <h1 style={{ fontSize: '3rem', fontWeight: '600' }}>
          {languagePage.acerca_de_mi}
        </h1>
        <div className='vbar'></div>
      </div>
      <div className=' d-flex flex-column' style={{ width: 'fit-content' }}>
        <div className='d-flex flex-column flex-lg-row mb-4'>
          <div className='container-fluid d-flex justify-content-center align-items-center col-lg-5'>
            <img
              src={require('../../../assets/profile.webp')}
              alt='profile'
              className='img-profile img-fluid mt-4'
            />
          </div>
          <div className='d-flex justify-content-center align-items-center ms-3 col-lg-7'>
            <span
              className='d-flex align-items-center flex-column flex-md-row mt-4'
              style={{
                fontSize: '1.3rem',
              }}
            >
              <AboutMeText />
            </span>
          </div>
        </div>
        <SkillsSection languagePage={languagePage} />
      </div>
    </section>
  )
}
