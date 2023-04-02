import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Api from '../../service/Api';
import Loader from 'components/Loader/loader';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
     const onActorsOfMovie = async () => {
      setLoading(true);
      try {
        const actors = await Api.fetchActors(movieId);
        setActors(actors);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    onActorsOfMovie();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      <ul>
        {actors.map(actor => (
          <li key={actor.id}>
            <img
              width="200px"
              // src={'https://image.tmdb.org/t/p/w500' + actor.profile_path}
              src={actor.profile_path ? ('https://www.themoviedb.org/t/p/original' + actor.profile_path) : ("https://i.stack.imgur.com/FJ65f.png")}
              alt={actor.original_name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;