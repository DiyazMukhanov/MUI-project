import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";
import BasketItem from "./BasketItem";

const Basket = (props) => {
    const {
        cartOpen,
        order = [],
        closeCart,
        removeFromOrder
    } = props
    return (
        <Drawer
        anchor="right"
        open={cartOpen}
        onClose={closeCart}
        >
            <List sx={{width:"400px"}}>
               <ListItem>
                   <ListItemIcon>
                       <ShoppingBasket />
                   </ListItemIcon>
                   <ListItemText primary="Корзина"/>
               </ListItem>
                <Divider />
                {!order.length ? (
                    <ListItem>Корзина пустая</ListItem>
                ) : (
                    order.map((item) => (
                        <BasketItem key={item.name} removeFromOrder={removeFromOrder} {...item}/>
                    ))
                )}
            </List>
        </Drawer>
    )
}

export default Basket