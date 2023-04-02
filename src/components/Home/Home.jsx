
import { useEffect, useState } from 'react';
import EditorList from 'components/EditorList/EditorList';
import Api from '../../service/Api';
import Loader from 'components/Loader/loader';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const FetchTrendingFilms = async () => {
      setLoading(true);
      try {
        const trendingFilms = await Api.fetchTrending();
        setFilms(trendingFilms);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    FetchTrendingFilms();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {films && <EditorList films={films} />}
      {loading && <Loader />}
    </main>
  );
};

export default Home;