import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const TvDetails = () => {
  const API_KEY = "df5666577955b18078093f6c90aa38c2";
  const params = new URLSearchParams(window.location.search);
  const { id } = useParams();

  const [tv, setTv] = useState(null);

  useEffect(() => {
    const fetchTV = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`
        );
        const data = await response.json();
        setTv(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTV();
  }, [id]);

  if (!tv) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div id="backdrop"></div>
      {/* <!-- Show Details --> */}
      <section className="container mx-auto">
        <div className="back border-2 border-slate-50 hover:text-white hover:bg-black">
          <a
            className="btn border-yellow-500 hover:text-white hover:bg-black"
            href="/shows"
          >
            Back To TV Shows
          </a>
        </div>
        {/* <!-- Show Details Output --> */}
        <div id="show-details">
          <div className="details-top">
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
                className="card-img-top h-auto max-w-lg"
                alt="Show Name"
              />
            </div>
            <div>
              <h2>{tv.original_name}</h2>
              <p>
                <i className="fas fa-star text-primary"></i>
                {tv.vote_average} / 10
              </p>
              <p className="text-muted">Release Date: {tv.last_air_date}</p>
              <p>{tv.overview}</p>
              <h5>Genres</h5>
              <ul className="list-group">
                {tv.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
              <a href="#" target="_blank" className="btn">
                Visit Show Homepage
              </a>
            </div>
          </div>
          <div className="details-bottom">
            <h2>Show Info</h2>
            <ul>
              <li>
                <span className="text-secondary">Number Of Episodes:</span>{" "}
                {tv.number_of_episodes}
              </li>
              <li>
                <span className="text-secondary">Last Episode To Air:</span>{" "}
                {tv.last_episode_to_air.name}
              </li>
              <li>
                <span className="text-secondary">Status:</span> {tv.status}
              </li>
            </ul>
            <h4>Production Companies</h4>
            {tv.production_companies.map((company) => (
              <div className="list-group" key={company.id}>
                {company.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
