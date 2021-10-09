import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
    // the classes variable will add any className that is called on the card component to ensure
    // that all styles are applied to the Card component.
    const classes = styles.card + " " + props.className;

    // props.children will show all of the content between the opening and closing tag of Card
    // see ExpenseItem.js for an example
    return <div className={classes}>{props.children}</div>;
}

export default Card;