import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

// styles
import "./recipe.css";

export default function Recipe() {
  const { id } = useParams();
  const url =
    "https://my-json-server.typicode.com/shahmaraliyev/db.json-for-Reciper/recipes/" +
    id;
  const { error, isPending, data: recipe } = useFetch(url);

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
}
