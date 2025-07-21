import './About.css'

export default function About() {
  return (
    <div className='about'>
      <img src='' alt='' className='about__image' />
      <div className='about__container'>
        <h1 className='about__title'>About the author</h1>
        <p className='about__paragraph about__paragraph-1'>
          <strong>This project was built by Daniel Carlton</strong>, a UX/UI
          designer and full stack developer. NewsExplorer uses the NewsAPI to
          deliver real-time headlines and was created as part of my final
          project for the TripleTen bootcamp. The app helped me level up my
          skills in React, API integration, and responsive design.
        </p>

        <p className='about__paragraph'>
          I&apos;m passionate about building clean, user-focused web apps that make
          information more accessible. If you&apos;re interested in collaborating or
          learning more, feel free to{' '}
          <a
            href='https://www.linkedin.com/in/daniel-louis-carlton/'
            target='_blank'
            rel='noopener noreferrer'
          >
            connect with me on LinkedIn
          </a>
          .
        </p>
      </div>
    </div>
  )
}
