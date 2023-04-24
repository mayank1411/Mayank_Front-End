import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const WrappedSingleListItem = ({
  index,
  isSelected,
  onClickHandler,
  text,
  deleteItem
}) => {
  console.log(isSelected);
  return (
    <li
      style={{ backgroundColor: (isSelected) ? 'green' : 'red' , padding: "25px", margin: "10px", width:"50vw", borderRadius:"10px", display:"flex", justifyContent:"space-between"}}
      onClick={()=>onClickHandler(index)}>
      {text}
      
      <i className="fa-solid fa-trash" style={{cursor:"pointer"}} onClick={()=>deleteItem(index)}></i>
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

export default SingleListItem