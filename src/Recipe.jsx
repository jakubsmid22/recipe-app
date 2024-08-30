const Recipe = ({ recipe }) => {
    const { calories, image, ingredientLines, label, url } = recipe;
  
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={label} className="w-full h-48 object-cover" />
        </a>
        <div className="p-4">
          <h1 className="text-xl font-semibold mb-2">{label}</h1>
          <ol className="list-decimal pl-6 mb-4">
            {ingredientLines.map((ingredient, index) => (
              <li key={index} className="text-gray-700 text-sm">
                {ingredient}
              </li>
            ))}
          </ol>
          <p className="text-gray-500 text-sm">Calories: {Number(calories).toFixed(2)}</p>
        </div>
      </div>
    );
  };
  
  export default Recipe;
  