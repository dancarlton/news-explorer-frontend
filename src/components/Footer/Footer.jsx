import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__copyright'>
        © 2025{' '}
        <a
          href='https://www.dancarlton.com'
          target='_blank'
          rel='noopener noreferrer'
          className='footer__link'
        >
          Dan Carlton
        </a>
        , Powered by News API
      </p>

      <div className='footer__right'>
        <nav className='footer__nav'>
          <a href='/' className='footer__link'>
            Home
          </a>
          <a
            href='https://tripleten.com'
            target='_blank'
            rel='noreferrer'
            className='footer__link'
          >
            TripleTen
          </a>
        </nav>

        <a
          href='https://github.com/dancarlton'
          target='_blank'
          rel='noreferrer'
          className='footer__icon'
          aria-label='GitHub'
        ></a>
      </div>
    </footer>
  )
}
