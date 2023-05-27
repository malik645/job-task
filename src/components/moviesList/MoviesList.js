import Rating from "@mui/material/Rating";
export default function (props) {
  const { list } = props;
  return (
    <div className="moviesList">
      {list?.length ? (
        list?.map((item, index) => (
          <div key={index}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <p
                style={{
                  color: "#000000",
                  fontWeight: "bold",
                  marginBottom: "2px"
                }}
              >
                {item?.name}
              </p>
              <p
                style={{
                  color: "#777777",
                  fontWeight: "bold",
                  marginBottom: "2px"
                }}
              >
                {item?.genre}
              </p>
            </div>
            <div>
              <Rating
                name="half-rating-read"
                value={item?.rating}
                max={10}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
        ))
      ) : (
        <div>
          <p className="noMatchTxt">No Match Found!</p>
        </div>
      )}
    </div>
  );
}
