import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";

function Header({handleCart}){
    return (
        <AppBar position='static'>
           <Toolbar>
               <Typography
               variant='h6'
               component='span'
               sx={{ flexGrow: 1 }}
               >
                   MUI app
               </Typography>
               <IconButton
               color='inherit'
               onClick={handleCart}
               >
                   <ShoppingBasket />
               </IconButton>
           </Toolbar>
        </AppBar>
    )
}

export default Header