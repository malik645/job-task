import Rating from "@mui/material/Rating";
import { Fragment } from "react";
export default function Dropdown(props) {
  return (
    <Fragment>
      {props?.content.map((item, index) => (
        <div className="dropdownItem" key={index}>
          <input
            type="checkbox"
            onChange={() => props.handleItemSelected(item)}
            checked={props.selected.includes(item)}
          />
          {props.type === "rating" ? (
            <div>
              {item === 0 ? (
                <p style={{ marginLeft: 10 }}>Any Rating</p>
              ) : (
                <Rating
                  name="half-rating-read"
                  defaultValue={item}
                  max={10}
                  precision={0.5}
                  readOnly
                />
              )}
            </div>
          ) : (
            <p style={{ marginLeft: 10 }}>{item}</p>
          )}
        </div>
      ))}
    </Fragment>
  );
}
