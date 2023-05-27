import { useEffect, useState } from "react";
export default function useLandingPage() {
  const [rating, setRating] = useState([]);
  const [genre, setGenre] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showList, setShowList] = useState(false);
  useEffect(() => {
    listFilterHandler();
  }, [searchText, rating.length, genre.length]);
  const list = [
    {
      name: "The Matrix",
      rating: 7.5,
      genre: "Action"
    },
    {
      name: "Focus",
      rating: 6.9,
      genre: "Comedy"
    },
    {
      name: "The Lazarus Effect",
      rating: 6.4,
      genre: "Thriller"
    },
    {
      name: "Everly",
      rating: 5.0,
      genre: "Action"
    },
    {
      name: "Maps to the Stars",
      rating: 7.5,
      genre: "Drama"
    }
  ];

  const onFocus = () => {
    setShowList(true);
  };
  const onChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  const listFilterHandler = () => {
    const isAnyRating = rating.includes(0);
    const isAnyGenre = genre.includes("Any Genre");
    const filteredData = list.reduce((acc, item) => {
      if (
        searchText &&
        !item.name.toLowerCase().includes(searchText.toLowerCase())
      ) {
        return acc;
      }

      if (
        !isAnyRating &&
        rating.length &&
        !rating.includes(Math.round(item?.rating))
      ) {
        return acc;
      }

      if (!isAnyGenre && genre.length && !genre.includes(item.genre)) {
        return acc;
      }

      acc.push(item);

      return acc;
    }, []);
    setFilteredData(filteredData);
  };

  const [isGenreVisible, setIsGenreVisible] = useState(false);
  const [isRatingVisible, setIsRatingVisible] = useState(false);
  const onGenreOpen = () => {
    setIsGenreVisible(!isGenreVisible);
    setIsRatingVisible(false);
  };

  const onRatingOpen = () => {
    setIsRatingVisible(!isRatingVisible);
    setIsGenreVisible(false);
  };

  return {
    onRatingOpen,
    onGenreOpen,
    isGenreVisible,
    isRatingVisible,
    genre,
    setGenre,
    rating,
    setRating,
    filteredData,
    onFocus,
    showList,
    searchText,
    onChangeHandler
  };
}
