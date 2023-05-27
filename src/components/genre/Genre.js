import DropdownHOC from "../../HOC's/dropdownHOC";
import Dropdown from "../dropdown/Dropdown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Fragment } from "react";

function Genre(props) {
  const genereList = ["Any Genre", "Action", "Comedy", "Drama", "Thriller"];
  const { isGenreVisible, onGenreOpen, handleItemSelected, selected } = props;
  return (
    <Fragment>
      <div className="dropHeader" onClick={onGenreOpen}>
        <p>Genre</p>
        {isGenreVisible ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </div>
      {isGenreVisible && (
        <div className="dropdownContent genreContent">
          <Dropdown
            content={genereList}
            handleItemSelected={handleItemSelected}
            selected={selected}
            type="genre"
          />
        </div>
      )}
    </Fragment>
  );
}

export default DropdownHOC(Genre);
