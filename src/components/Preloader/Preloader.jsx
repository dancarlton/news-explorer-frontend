import './Preloader.css'

export default function Preloader({ isLoading, articles }) {
  const noResults = !isLoading && articles.length === 0

  return (
    <div className='preloader'>
      {isLoading && (
        <div className='preloader__content'>
          <div className='preloader__circle'></div>
          <p className='preloader__text'>Searching for news...</p>
        </div>
      )}

      {noResults && (
        <div className='preloader__content'>
          <div className='preloader__image'></div>
          <h1 className='preloader__not-found'>Nothing found</h1>
          <p className='preloader__not-found--text'>
            Sorry, but nothing matched your search terms.
          </p>
        </div>
      )}
    </div>
  )
}
