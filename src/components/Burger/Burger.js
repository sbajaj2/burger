import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {

    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>
            });
        });

    console.log("props coming from burger builder", props.ingredients);

    console.log("Object.keys from props", Object.keys(props.ingredients));


    console.log("converting Object to Array of length = value of item", Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]}));

    console.log("Converted object into array with values", Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>
            });
        }));

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;