import './NewsCards.css'

export default function NewsCards({ article }) {
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    'en-US',
    options
  )
  const formattedAuthor = article.author ? article.author.toUpperCase() : ''

  return (
    <div className='card'>
      <div className='card__image--wrapper'>
        <img
          src={article.urlToImage}
          alt={article.source.name}
          className='card__image'
        />
        {/* <a href='' className='card__bookmark'></a> */}
      </div>
      <div className='card__content'>
        <h4 className='card__date'>{formattedDate}</h4>
        <h2 className='card__title'>{article.title}</h2>
        <p className='card__description'>{article.description}</p>
        <h4 className='card__publisher'>{formattedAuthor}</h4>
      </div>
    </div>
  )
}
