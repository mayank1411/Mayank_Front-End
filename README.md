Q1. Explain what the simple List component does.
ANS : 
List is a function base component which take props named (items) type array of objects in which each object is having a (text) field as type string. The List components also consist of a useState hook name [selectedIndex, setSelectedIndex] and is used to store the index of selected items.

It also consists of useEffect hook which is having "selectedIndex" in the dependency array which means that the function in useEffect will be fired on page load for the first time and then it will be fired each time when the "selectedIndex" state is changed on the page.

It also have "handleClick" function which is getting passed to the singleList component it gets fired when any of the list item is been Clicked and its functionality is to take the "index" as an argument and checks if the "index" is equal to the selectedIndex if not it changes the selectedIndex to the index value using useState setter function setSelectedIndex(index), if it is equal then it unselect that index by setting the value empty setSelectedIndex()

In return funnction of the List components the array of objects items is beging iterated using map function of JavaScript as a unordered-list <ul></ul> and SingleList is used to as a reusable component taking prop onClickHandler{()=> handleClick(index)} type function and gets fired when any list-item is being clicked and isRequired which means it is a must passed prop. It take text as string and also tag isRequired that means it is also a must passed prop, it also takes index of type number and isSelected which is a Boolean props.

Moreover, both of these component is wrapped in React-memo function which stops the re-render of unnecessary states and optimize the application.


Q2. What problems / warnings are there with code?
1-	The useState hook is used incorrectly and variable selectedIndex and setSelectedIndex should be interchanged 
const [selectedIndex, setSelectedIndex] = useState();
2-	handleClick function should be changed as the index should selected and null when its is clicked again as functionality.
  const handleClick = (index) => {
    if(index === selectedIndex){
      setSelectedIndex()
    }else{
      setSelectedIndex(index);
    }
 };


3-	 while mapping items a unique value should be passed as key which will be index or else it will give a warning.

<SingleListItem
          key={index}
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectedIndex===index}
        />


4-	As isSelected should be an Boolean and should be true when selectedIndex is equal to index and false when selectedIndex is not equal to index.
<SingleListItem
          key={index}
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectedIndex===index}
        />


5-	The array in prop type should Arrayof instead of shapedOf and shapeOf should be shape which gives warning. 
WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })).isRequired,
};


3. Please fix, optimize, and/or modify the component as much as you think is necessary.

ans : 

https://mayank-front-end.netlify.app/ 






