
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Api from '../../service/Api';
import Loader from 'components/Loader/loader';
import EditorList from 'components/EditorList/EditorList';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({});
  const queryMovie = searchParams.get('query');

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: event.target.elements.query.value.toLowerCase() });
  };

  useEffect(() => {
    if (queryMovie) {
      const onSearchMovie = async () => {
        setLoading(true);
        try {
          const searchMovie = await Api.fetchSearchByKeyword(queryMovie);
          setSearchFilms(searchMovie);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      onSearchMovie();
    }
  }, [queryMovie]);

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" autoFocus />
        <button type="submit">Search</button>
      </form>
      {loading && <Loader />}
      {searchFilms && <EditorList films={searchFilms} />}
    </main>
  );
};

export default Movies;