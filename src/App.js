import { useState } from 'react';
import axios from 'axios';
import { APP_URI } from './config/constants';
import CardRecipe from './components/CardRecipe';
import Footer from './components/Footer';

export default function App() {
  const [recipies, setRecipies] = useState([]);
  const [stateField, setStateField] = useState({
    query: '',
    health: '',
    cuisineType: '',
    mealType: '',
  });
  const [error, setError] = useState(null);

  const { query, health, cuisineType, mealType } = stateField;
  const pushHealth = health ? `&health=${health}` : '';
  const pushCuisine = cuisineType ? `&cuisineType=${cuisineType}` : '';
  const pushMeal = mealType ? `&mealType=${mealType}` : '';

  // build all query uri api
  const API_FETCH = `${APP_URI}&q=${query + pushHealth + pushCuisine + pushMeal}`;

  // process request to api with axios
  const getRecipes = async () => {
    try {
      const { data } = await axios.get(API_FETCH);
      setRecipies(data.hits);
    } catch (err) {
      // console.log(Object.keys(err), err.message);
      setError(
        'Requests to the API are limited, the daily limit will be exceeded, try again tomorrow'
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  const handleChange = ({ target: { name, value } }) => {
    setStateField({ ...stateField, [name]: value });
  };

  return (
    <div className="container">
      <h1>Food Recipe App</h1>
      <form className="recipe-search" onSubmit={handleSubmit}>
        <input
          className="recipe-input"
          type="text"
          name="query"
          value={stateField.query}
          onChange={handleChange}
        />
        <select name="health" onChange={handleChange} value={stateField.health}>
          <option value="">Select Health</option>
          <option value="alcohol-cocktail"> alcohol-cocktail </option>
          <option value="alcohol-free"> alcohol-free </option>
          <option value="celery-free"> celery-free </option>
          <option value="crustacean-free"> crustacean-free </option>
          <option value="dairy-free"> dairy-free </option>
          <option value="DASH"> DASH </option>
          <option value="egg-free"> egg-free </option>
          <option value="fish-free"> fish-free </option>
          <option value="fodmap-free"> fodmap-free </option>
          <option value="gluten-free"> gluten-free </option>
          <option value="immuno-supportive"> immuno-supportive </option>
          <option value="keto-friendly"> keto-friendly </option>
          <option value="kidney-friendly"> kidney-friendly </option>
          <option value="kosher"> kosher </option>
          <option value="low-potassium"> low-potassium </option>
          <option value="low-sugar"> low-sugar </option>
          <option value="lupine-free"> lupine-free </option>
          <option value="Mediterranean"> Mediterranean </option>
          <option value="mollusk-free"> mollusk-free </option>
          <option value="mustard-free"> mustard-free </option>
          <option value="no-oil-added"> no-oil-added </option>
          <option value="paleo"> paleo </option>
          <option value="peanut-free"> peanut-free </option>
          <option value="pescatarian"> pescatarian </option>
          <option value="pork-free"> pork-free </option>
          <option value="red-meat-free"> red-meat-free </option>
          <option value="sesame-free"> sesame-free </option>
          <option value="shellfish-free"> shellfish-free </option>
          <option value="soy-free"> soy-free </option>
          <option value="sugar-conscious"> sugar-conscious </option>
          <option value="sulfite-free"> sulfite-free </option>
          <option value="tree-nut-free"> tree-nut-free </option>
          <option value="vegan"> vegan </option>
          <option value="vegetarian"> vegetarian </option>
          <option value="wheat-free"> wheat-free </option>
        </select>
        <select name="cuisineType" onChange={handleChange} value={stateField.cuisineType}>
          <option value="">Select Type Cuisine</option>
          <option value="American"> American </option>
          <option value="Asian"> Asian </option>
          <option value="British"> British </option>
          <option value="Caribbean"> Caribbean </option>
          <option value="Central Europe"> Central Europe </option>
          <option value="Chinese"> Chinese </option>
          <option value="Eastern Europe"> Eastern Europe </option>
          <option value="French"> French </option>
          <option value="Indian"> Indian </option>
          <option value="Italian"> Italian </option>
          <option value="Japanese"> Japanese </option>
          <option value="Kosher"> Kosher </option>
          <option value="Mediterranean"> Mediterranean </option>
          <option value="Mexican"> Mexican </option>
          <option value="Middle Eastern"> Middle Eastern </option>
          <option value="Nordic"> Nordic </option>
          <option value="South American"> South American </option>
          <option value="South East Asian"> South East Asian </option>
        </select>

        <select name="mealType" onChange={handleChange} value={stateField.mealType}>
          <option value="">Select Type Meal</option>
          <option value="Breakfast"> Breakfast </option>
          <option value="Dinner"> Dinner </option>
          <option value="Lunch"> Lunch </option>
          <option value="Snack"> Snack </option>
          <option value="Teatime"> Teatime </option>
        </select>
        <button disabled={!stateField.query} type="submit">
          Search
        </button>
      </form>
      {error ? (
        <div className="show-message">{error}</div>
      ) : (
        <div className="recipe-list">
          {recipies.map((recipe, index) => (
            <CardRecipe key={index} recipe={recipe} />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}
