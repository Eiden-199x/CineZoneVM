import React, { useEffect, useState } from "react";
import "./Shows.css";

export const Shows = () => {
  const API_KEY = "df5666577955b18078093f6c90aa38c2";
  const [popularShows, setPopularShows] = useState([]);

  useEffect(() => {
    const fetchPopularShows = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`
        );
        const data = await response.json();
        setPopularShows(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPopularShows();
  }, []);

  const hasPoster = (show) => {
    return show.poster_path !== null;
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-4">Popular TV Shows</h2>
      <div className="grid-cols-4 gap-4">
        {popularShows.map((show) => (
          <div key={show.id} className="bg-blue-900 rounded overflow-hidden">
            <a href={`tv-details/${show.id}`} className="block">
              {hasPoster(show) ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
                  className="card-img-top rounded-md"
                  alt={show.title}
                />
              ) : (
                <img
                  src="https://placehold.co/600x800/1E293B/e4e4e7?text=CZ&font=roboto"
                  className="card-img-top rounded-md"
                  alt="No Image Available"
                />
              )}
            </a>
            <div className="card-body backdrop-blur-sm bg-gray-400/30 p-5 text-gray-200">
              <h5 className="card-title text-2xl text-bold">{show.name}</h5>
              <p className="card-text">
                <small className="text-muted text-base">
                  Release: {show.first_air_date}
                </small>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
