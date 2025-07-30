import About from '../components/About/About'
import Main from '../components/Main/Main'
import Preloader from '../components/Preloader/Preloader'
import SearchResults from '../components/SearchResults/SearchResults'

export default function HomePage({
  onSearch,
  articles,
  savedArticles,
  isLoggedIn,
  onLoginClick,
  onArticleSave,
  showResults,
  isLoading,
}) {
  return (
    <>
      <Main onSearch={onSearch} />
      {isLoading && (
        <Preloader isLoading={isLoading} articles={articles} />
      )}
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
