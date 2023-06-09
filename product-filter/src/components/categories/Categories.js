import "./Categories.css";

const capitalize = (word) =>{
  return word.charAt(0).toUpperCase() + word.slice(1)
}
function Categories({categories, filterItems}) {
  return (
    <div className="--flex-center">
      {categories.map((category, index)=>{
        return(
          <button key={index} type="button" className="btn --btn --btn-secondary" 
          onClick={()=>filterItems(category)}>
          {/* {category.toUpperCase()} */}
          {capitalize(category)}

        </button>
        )
      })}
  
    </div>
  );
}

export default Categories;
