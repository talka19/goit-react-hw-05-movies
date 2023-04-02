import { Routes, Route, Navigate, NavLink } from "react-router-dom"
import { lazy, Suspense } from "react"
import css from './App.module.css'

const Home = lazy(() => import('components/Home/Home'))
const Movies = lazy(() => import('components/Movies/Movies'))
const MovieDetails = lazy(() => import('components/MovieDetails/MovieDetails'))
const Cast = lazy(() => import('components/Cast/Cast'))
const Reviews = lazy(() => import('components/Reviews/Reviews'))


export const App = () => {
  return (
   <div className={css.container}>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? css.active : css.link)}>
          Home
        </NavLink>
        <NavLink to="/movies" className={({ isActive }) => (isActive ? css.active : css.link)}>
          Movies
        </NavLink>
      </nav>
        <Suspense fallback="loading...">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} >
            <Route path="/movies/:movieId/cast" element={<Cast />}/>
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to='/' />} />
      </Routes>
        </Suspense>
   </div>
  );
};
