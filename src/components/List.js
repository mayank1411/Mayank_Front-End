import { useEffect, useState, memo } from "react";
import PropTypes from 'prop-types';
import SingleListItem from './SingleList'

const WrappedListComponent = ({
  items,setItems
}) => {
  const [selectedIndex, setSelectedIndex] = useState();
  
  useEffect(() => {
    setSelectedIndex()
  }, [items]);
  
  const handleClick = (index) => {
    if(index === selectedIndex){
      setSelectedIndex()
    }else{
      setSelectedIndex(index);
    }
  };

  const handleDelete = (idToDelete) => {
    const updatedItems = items.filter((item,index) => index !== idToDelete);
    setItems(updatedItems);
  };

  return (
    <ul style={{ textAlign: 'left' , listStyle: "none" ,margin:"15px", display:"flex" , alignItems:"center", flexDirection:"column"}}>
      {items.map((item, index) => (
        <SingleListItem
          key={index}
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectedIndex===index}
          deleteItem={()=>handleDelete(index)}
        />
      ))}
    </ul>
  )
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })).isRequired,
};

WrappedListComponent.defaultProps = {
  items: null,
};

const List = memo(WrappedListComponent);

export default List;
