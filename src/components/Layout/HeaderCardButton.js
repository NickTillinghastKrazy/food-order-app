import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context'
import classes from './HeaderCardButton.module.css'

const HeaderCardButton = props => {
    const [ btnIsHighlighted, setbtnIsHighlighted ] = useState(false)
    const cartCtx = useContext(CartContext);
    
    const { items } = cartCtx;
    
    const numberOfCartItems = cartCtx.items.reduce((currentNumber,item) => {
    return currentNumber + item.amount
}, 0);
const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

useEffect(() => {
    if(items.length === 0) {
        return;
    }
    setbtnIsHighlighted(true);
   const timer = setTimeout(() => {
        setbtnIsHighlighted(false)
    }, 300);
    return ( ) => {
        clearTimeout(timer)
    }

}, [items]);

return (
<button className={btnClasses} onClick={props.onClick}>
    <span className={classes.icon}>
        <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}> 
        {numberOfCartItems}
    </span>
</button>
)
}

export default HeaderCardButton;