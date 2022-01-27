import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";
import { useTheme } from "../../hooks/useTheme";

// styles
import "./recipe.css";

export default function Recipe() {
  const { id } = useParams();
  const { mode } = useTheme();

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore
      .collection("recipes")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setRecipe(null);
          setIsPending(false);
          setError("Could not find that recipe");
        }
      });

    return () => unsub();
  }, [id]);

  const handleClick = () => {
    projectFirestore.collection("recipes").doc(id).update({
      title: "Something  completely different",
    });
  };
  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className={`page-title ${mode}`}>{recipe.title}</h2>
          <p className={`time ${mode}`}>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li className={`ing ${mode}`} key={ing}>
                {ing}
              </li>
            ))}
          </ul>
          <p className={`method ${mode}`}>{recipe.method}</p>
          <button onClick={handleClick}>Update me</button>
        </>
      )}
    </div>
  );
}
