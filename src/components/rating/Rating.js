import DropdownHOC from "../../HOC's/dropdownHOC";
import Dropdown from "../dropdown/Dropdown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Fragment } from "react";

function Rating(props) {
  const { isRatingVisible, onRatingOpen, handleItemSelected, selected } = props;
  const ratingList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Fragment>
      <div className="dropHeader" onClick={onRatingOpen}>
        <p>Rating</p>
        {isRatingVisible ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </div>
      {isRatingVisible && (
        <div className="dropdownContent">
          <Dropdown
            content={ratingList}
            handleItemSelected={handleItemSelected}
            selected={selected}
            type="rating"
          />
        </div>
      )}
    </Fragment>
  );
}
export default DropdownHOC(Rating);
