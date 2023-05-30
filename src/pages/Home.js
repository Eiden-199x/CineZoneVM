import React from "react";
import { useState, useEffect } from "react";

export const Home = () => {
  const API_KEY = "df5666577955b18078093f6c90aa38c2";

  const swiperWrapper = document.querySelector(".swiper-wrapper");

  const swiperSlide = document.querySelector(".swiper-slider");

  // const searchTermInput = document.querySelector("#search-term");
  // const searchButton = document.querySelector(".btn");

  // searchTermInput.addEventListener("input", () => {
  //   if (searchTermInput.value.trim() === "") {
  //     searchButton.disabled = true;
  //     searchButton.style.opacity = "0.5";
  //     searchButton.style.cursor = "not-allowed";
  //   } else {
  //     searchButton.disabled = false;
  //     searchButton.style.opacity = "";
  //     searchButton.style.cursor = "";
  //   }
  // });

  // //
  // if (searchTermInput.value.trim() === "") {
  //   searchButton.disabled = true;
  //   searchButton.style.opacity = "0.5";
  //   searchButton.style.cursor = "not-allowed";
  // } else {
  //   searchButton.disabled = false;
  //   searchButton.style.opacity = "";
  //   searchButton.style.cursor = "";
  // }

  const [nowPlaying, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const nowPlayingMovies = "";

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
        );
        const data = await response.json();
        setNowPlayingMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getNowPlayingMovies();
  }, []);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );
        const data = await response.json();
        setPopularMovies(data.results);
        swiperWrapper.appendChild(swiperSlide);
      } catch (error) {
        console.log(error);
      }
    };
    getPopularMovies();
  }, []);

  // // carousel HTML
  // // const $prevButton = document.getElementById('data-carousel-prev');
  // // const $nextButton = document.getElementById('data-carousel-next');

  // // $prevButton.addEventListener('click', () => {
  // //     carousel.prev();
  // // });

  // // $nextButton.addEventListener('click', () => {
  // //     carousel.next();
  // // });
  // return (

  // )

  const hasPoster = (movie) => {
    return movie.poster_path !== null;
  };

  return (
    <main>
      <section className="now-playing">
        <h2>Now Playing</h2>
        <div className="swiper">
          <div className="swiper-wrapper">
            {nowPlayingMovies && nowPlayingMovies.length > 0 ? (
              nowPlayingMovies.map((movie) => (
                <div className="swiper-slide" key={movie.id}>
                  <a href={`movie-details/${movie.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </a>
                  <h4 className="swiper-rating">
                    <i className="fas fa-star text-secondary"></i>{" "}
                    {movie.vote_average} / 10
                  </h4>
                </div>
              ))
            ) : (
              <p>No movies currently playing.</p>
            )}
          </div>
        </div>
      </section>

      <section className="search">{/* Rest of the code */}</section>
      <section className="container mx-auto">
        <h2
          className="text-3xl font-semibold text"
          data-aos="flip-up"
          data-aos-duration="500"
        >
          Popular Movies
        </h2>
        <div id="popular-movies" className="grid-cols-4 gap-4 rounded-md">
          {popularMovies.map((movie) => (
            <div className="card" key={movie.id}>
              <a href={`movie-details/${movie.id}`}>
                {hasPoster(movie) ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="card-img-top rounded-md"
                    alt={movie.title}
                  />
                ) : (
                  <img
                    src="https://placehold.co/600x800/1E293B/e4e4e7?text=CZ&font=roboto"
                    className="card-img-top"
                    alt="No Image Available"
                  />
                )}
              </a>
              <div className="card-body flex flex-col justify-end backdrop-blur-sm bg-gray-400/30 p-5 text-gray-200">
                <h5 className="card-title text-2xl text-bold">{movie.title}</h5>
                <p className="card-text">
                  <small className="text-base">
                    Release: {movie.release_date}
                  </small>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
