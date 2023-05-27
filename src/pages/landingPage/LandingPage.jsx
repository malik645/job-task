import Genre from "../../components/genre/Genre";
import Rating from "../../components/rating/Rating";
import MoviesList from "../../components/moviesList/MoviesList";
import useLandingPage from "./useLandingPage";

export default function LandingPage() {
  const {
    onRatingOpen,
    onGenreOpen,
    isGenreVisible,
    isRatingVisible,
    genre,
    setGenre,
    rating,
    setRating,
    filteredData,
    showList,
    onFocus,
    searchText,
    onChangeHandler
  } = useLandingPage();

  return (
    <div className="container">
      <div className="listContainer">
        <input
          placeholder="Enter movie name"
          className="movieInput"
          value={searchText}
          onFocus={onFocus}
          onChange={onChangeHandler}
        />
        {showList && <MoviesList list={filteredData} />}
      </div>
      <div className="dropdownContainer">
        <div className="dropdown">
          <Rating
            selected={rating}
            setSelected={setRating}
            onRatingOpen={onRatingOpen}
            isRatingVisible={isRatingVisible}
          />
        </div>
        <div className="dropdown genreDrop">
          <Genre
            selected={genre}
            setSelected={setGenre}
            onGenreOpen={onGenreOpen}
            isGenreVisible={isGenreVisible}
          />
        </div>
      </div>
    </div>
  );
}
