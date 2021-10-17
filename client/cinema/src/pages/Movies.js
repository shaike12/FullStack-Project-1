import "../App.css";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import AddMovieComp from "../components/movies/AddMovie";
import AllMoviesComp from "../components/movies/AllMovies";
import { Button } from "@material-ui/core";
import EditMovieComp from "../components/movies/EditMovie";
import MoviePageComp from "../components/movies/MoviePage";

function MoviesComp() {
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <>
      <div className='App'>
        <Button variant='contained'>
          <Link to={path}>All Movies</Link>
        </Button>

        <Button variant='contained'>
          <Link to={path + "/add_movie"}>Add Movie</Link>
        </Button>
      </div>
      <Switch>
        <Route exact path={path}>
          <AllMoviesComp />
        </Route>
        <Route path={path + "/add_movie"}>
          <AddMovieComp />
        </Route>
        <Route path={path + "/edit movie/:id"}>
          <EditMovieComp />
        </Route>
        <Route path={path + "/movie_page/:id"}>
          <MoviePageComp />
        </Route>
      </Switch>
    </>
  );
}

export default MoviesComp;
