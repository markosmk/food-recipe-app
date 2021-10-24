import React from 'react';
import styles from './FormRecipes.module.css';

export default function FormRecipes(props) {
  const { stateField, handleChange, handleSubmit } = props;
  return (
    <section>
      <div className="container">
        <h1 className="center">Search Recipes</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            value={stateField.query}
            onChange={handleChange}
            required
            placeholder="write an ingredient to search here..."
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
          <select
            name="cuisineType"
            onChange={handleChange}
            value={stateField.cuisineType}
          >
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
          <button className="btn" disabled={!stateField.query} type="submit">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
