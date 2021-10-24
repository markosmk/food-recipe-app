import { useState } from 'react';
import axios from 'axios';
import { APP_URI } from './config/constants';
import CardRecipe from './components/CardRecipe';
import Footer from './components/Footer';
import Header from './components/Header';
import FormRecipes from './components/FormRecipes';

export default function App() {
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      const { data } = await axios.get(API_FETCH);
      setRecipies(data.hits);
      console.log(data);
      setLoading(false);
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
    <>
      <Header />
      <main className="main">
        <FormRecipes
          stateField={stateField}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <section className="recipes">
          <div className="container">
            {error ? (
              <div className="show-message">{error}</div>
            ) : recipies.length > 0 ? (
              loading ? (
                <div className="loading">
                  <div className="dots">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              ) : (
                <div className="recipe-list">
                  {recipies.map((recipe, index) => (
                    <CardRecipe key={index} recipe={recipe} />
                  ))}
                </div>
              )
            ) : (
              <div className="empty">
                <h3 className="center">No recipes to display 😦</h3>
              </div>
            )}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
