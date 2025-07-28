import About from '../components/About/About'
import Main from '../components/Main/Main'
import SearchResults from '../components/SearchResults/SearchResults'

export default function HomePage({
  onSearch,
  articles,
  savedArticles,
  isLoggedIn,
  onLoginClick,
  onArticleSave,
  showResults,
}) {
  return (
    <>
      <Main onSearch={onSearch} />
      {showResults && (
        <SearchResults
          articles={articles}
          savedArticles={savedArticles}
          isLoggedIn={isLoggedIn}
          onLoginClick={onLoginClick}
          onArticleSave={onArticleSave}
        />
      )}
      <About />
    </>
  )
}
