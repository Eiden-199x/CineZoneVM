import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./MovieDetails.css";

export const MovieDetails = () => {
  const API_KEY = "df5666577955b18078093f6c90aa38c2";
  const params = new URLSearchParams(window.location.search);
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div id="backdrop"></div>
      {/* <!-- Movie Details --> */}
      <section className="container mx-auto">
        <div className="back border-2 border-slate-50 hover:text-white hover:bg-black">
          <a className="btn hover:text-white hover:bg-black" href="index.html">
            Back To Movies
          </a>
        </div>
        {/* <!-- Movie Details Output --> */}
        <div id="movie-details">
          <div className="details-top">
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="card-img-top"
                alt="Movie Title"
              />
            </div>
            <div>
              <h2>{movie.original_title}</h2>
              <p>
                <i className="fas fa-star text-primary"></i>8 / 10
              </p>
              <p id="release-date" className="text-muted">
                Release Date: {movie.release_date}
              </p>
              <p>{movie.overview}</p>
              <h5>Genres</h5>
              <ul id="genres" className="list-group">
                {movie.genres &&
                  movie.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
              </ul>
              <a href="#" target="_blank" className="btn">
                Visit Movie Homepage
              </a>
            </div>
          </div>
          <div className="details-bottom">
            <h2>Movie Info</h2>
            <ul>
              <li>
                <span className="text-secondary">Budget:</span> $ {movie.budget}
              </li>
              <li>
                <span className="text-secondary">Revenue:</span> $
                {movie.revenue}
              </li>
              <li>
                <span className="text-secondary">Runtime:</span> {movie.runtime}{" "}
                minutes
              </li>
              <li>
                <span className="text-secondary">Status:</span> {movie.status}
              </li>
            </ul>
            <h4>Production Companies</h4>
            <div className="list-group">
              {movie.production_companies &&
                movie.production_companies.map((company) => (
                  <span key={company.id}>{company.name}</span>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
