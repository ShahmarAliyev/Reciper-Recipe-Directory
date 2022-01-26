import "./home.css";

import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/recipeList";

export default function Home() {
  const { data, isPending, error } = useFetch(
    "https://my-json-server.typicode.com/shahmaraliyev/db.json-for-Reciper/recipes"
  );
  // console.log(data);
  return (
    <div className="home">
      {error && <p className="error"> {error} </p>}
      {isPending && <p className="loading">Loading... </p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
