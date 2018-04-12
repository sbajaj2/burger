import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>
            });
        }).reduce((arr, el) => {
            return arr.concat(el)
        });

    console.log(transformedIngredients);

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

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients!!</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;