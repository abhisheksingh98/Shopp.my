import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Search from '../Search/Search';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';
import './Navbar.scss';
import { useStateValue } from "../../shared/store/StoreProvider";

import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [{ user, cart, wishlist }, dispatch] = useStateValue();
  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'desktopProfileMenu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Order History</MenuItem>
      <MenuItem >Sign Out</MenuItem>
    </Menu>
  );

  return (
    <nav className="navbar">
      <Link className="navbar__link" to="/">
        <img
          src="https://i.pinimg.com/originals/1e/29/77/1e2977ca1225981e307ad8d2c26a9040.png"
          alt="logo"
          id="logo"
        />
      </Link>

      <div className="navbar_right">
        <Search className="search__input" />
        <div className="navbar_desktopMenu">

            <Link to="/wishlist" data-test-id="wishlist">
              <Tooltip title="Favourite" aria-label="Favourite">
                <IconButton className={classes.root}>
                  <Badge badgeContent={wishlist.length} color="secondary">
                    <FavoriteBorderIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
            </Link>
          <Link to="/cart" data-test-id="cart">
            <Tooltip title="Cart" aria-label="Cart">
              <IconButton className={classes.root}>
                <Badge badgeContent={cart.length} color="secondary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            </Tooltip>
          </Link>
        </div>
      </div>
      {renderMenu}

    </nav>
  );
};

export default Navbar;
