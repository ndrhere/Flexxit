import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Recommendation from "./Recommendation";
import { useRef } from "react";
import RecommendationTV from "./RecommendationTV";
import RecommendationThriller from './RecommendationThriller';
import RecommendationComedy from './RecommendationComedy';

const API = () => {
  const [recommend, setRecommend] = useState([]);
  const [recommends, setRecommends] = useState([]);
  const [recommendss, setRecommendss] = useState([]);
  const [recommendsss, setRecommendsss] = useState([]);
  const baseImageUrl = "https://image.tmdb.org/t/p/w200";
  const sliderRef = useRef(null);
  const sliderRefs = useRef(null);
  const sliderRefss = useRef(null);
  const sliderRefsss = useRef(null);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=73aa236fd95713e5219f38bd2742d323"
      );
      const data = await response.json();
      console.log(data);
      setRecommend(data.results);
    };
    fetchdata();
  }, []);

  useEffect(() => {
    const fetchapi = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=73aa236fd95713e5219f38bd2742d323"
      );
      const data = await response.json();
      setRecommends(data.results);
    };
    fetchapi();
  }, []);
  useEffect(() => {
    const fetchapi = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=73aa236fd95713e5219f38bd2742d323&with_genres=53"
      );
      const data = await response.json();
      setRecommendss(data.results);
    };
    fetchapi();
  }, []);
  useEffect(() => {
    const fetchapi = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=73aa236fd95713e5219f38bd2742d323&with_genres=35"
      );
      const data = await response.json();
      setRecommendsss(data.results);
    };
    fetchapi();
  }, []);

  const handleScrollLeft = () => {
    sliderRef.current.scrollLeft -= 700;
  };
  const handleScrollRight = () => {
    sliderRef.current.scrollLeft += 700;
  };

  const handleScrollLefts = () => {
    sliderRefs.current.scrollLeft -= 700;
  };

  const handleScrollRights = () => {
    sliderRefs.current.scrollLeft += 700;
  };
  const handleScrollLeftss = () => {
    sliderRefss.current.scrollLeft -= 700;
  };

  const handleScrollRightss = () => {
    sliderRefss.current.scrollLeft += 700;
  };
  const handleScrollLeftsss = () => {
    sliderRefsss.current.scrollLeft -= 700;
  };

  const handleScrollRightsss = () => {
    sliderRefsss.current.scrollLeft += 700;
  };

  return (
    <>
      <div className="my-3 title">
        <h3>
          <span id="app">Flexxit</span> - Recommended movies
        </h3>
      </div>
      <div className="container">
        <div className="slider">
          <div className="slider-container" ref={sliderRef}>
            {recommend.map((element) => {
              return (
                <div id={element.id}>
                  <Recommendation
                    videoId= {element.id}
                    language={element.original_language}
                    title={element.original_title}
                    overview={element.overview}
                    poster={baseImageUrl + element.poster_path}
                    releaseDate={element.release_date}
                    vote={element.vote_count}
                  />
                </div>
              );
            })}

            <div className="slider-controls">
              <button className="slider-button" onClick={handleScrollLeft}>
                {"<"}
              </button>
              <button className="slider-button" onClick={handleScrollRight}>
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="my-3 title">
        <h3>
          <span id="app">Flexxit</span> - Recommended TV shows
        </h3>
      </div>
      <div className="container">
        <div className="slider">
          <div className="slider-container" ref={sliderRefs}>
            {recommends.map((element) => {
              return (
                <div id={element.id}>
                  <RecommendationTV
                    videoId={element.id}
                    language={element.original_language}
                    title={element.original_title}
                    overview={element.overview}
                    poster={baseImageUrl + element.poster_path}
                    releaseDate={element.release_date}
                    vote={element.vote_count}
                  />
                </div>
              );
            })}

            <div className="slider-controls">
              <button className="slider-button" onClick={handleScrollLefts}>
                {"<"}
              </button>
              <button className="slider-button" onClick={handleScrollRights}>
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="my-3 title">
        <h3>
          <span id="app">Flexxit</span> - Recommended Top thriller
        </h3>
      </div>
      <div className="container">
        <div className="slider">
          <div className="slider-container" ref={sliderRefss}>
            {recommendss.map((element) => {
              return (
                <div id={element.id}>
                  <RecommendationThriller
                    videoId={element.id}
                    language={element.original_language}
                    title={element.original_title}
                    overview={element.overview}
                    poster={baseImageUrl + element.poster_path}
                    releaseDate={element.release_date}
                    vote={element.vote_count}
                  />
                </div>
              );
            })}

            <div className="slider-controls">
              <button className="slider-button" onClick={handleScrollLeftss}>
                {"<"}
              </button>
              <button className="slider-button" onClick={handleScrollRightss}>
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>



      <div className="my-3 title">
        <h3>
          <span id="app">Flexxit</span> - Recommended Top comedy
        </h3>
      </div>
      <div className="container">
        <div className="slider">
          <div className="slider-container" ref={sliderRefsss}>
            {recommendsss.map((element) => {
              return (
                <div id={element.id}>
                  <RecommendationComedy
                    videoId={element.id}
                    language={element.original_language}
                    title={element.original_title}
                    overview={element.overview}
                    poster={baseImageUrl + element.poster_path}
                    releaseDate={element.release_date}
                    vote={element.vote_count}
                  />
                </div>
              );
            })}

            <div className="slider-controls">
              <button className="slider-button" onClick={handleScrollLeftsss}>
                {"<"}
              </button>
              <button className="slider-button" onClick={handleScrollRightsss}>
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default API;
