import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = () =>(
  <ul className={classes.NavigationItems}>
      <NavigationItem link='/' active>BurgerBuilder</NavigationItem>
      <NavigationItem >CheckOut</NavigationItem>
  </ul>

);

export default navigationItems;
