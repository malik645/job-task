import React from "react";
const DropdownHOC = (OriginalComponent) => {
  function NewComponent(props) {
    const {
      selected,
      setSelected,
      onRatingOpen,
      onGenreOpen,
      isGenreVisible,
      isRatingVisible
    } = props;

    const handleItemSelected = (newSelected) => {
      if (selected.length) {
        if (selected?.includes(newSelected)) {
          const updatedSelection = selected?.filter(
            (item) => item !== newSelected
          );
          setSelected(updatedSelection);
        } else {
          setSelected([...selected, newSelected]);
        }
      } else {
        setSelected((oldSelected) => [...oldSelected, newSelected]);
      }
    };
    return (
      <OriginalComponent
        isGenreVisible={isGenreVisible}
        isRatingVisible={isRatingVisible}
        onGenreOpen={onGenreOpen}
        onRatingOpen={onRatingOpen}
        handleItemSelected={handleItemSelected}
        selected={selected}
      />
    );
  }
  return NewComponent;
};
export default DropdownHOC;
