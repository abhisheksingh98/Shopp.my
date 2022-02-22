import React, { useState, useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DATA from '../../shared/utils/Data';
import ProductColor from '../../components/productColors/productColors';
import Quantity from '../../components/Quantity/Quantity';
import Review from '../../components/Review/Review';
import './Product.scss';
import { useHistory } from 'react-router-dom';
import ProductRow from '../../components/ProductRow/ProductRow';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../shared/store/StoreProvider';

import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
    marginTop: '25px',
  },
  select: {
    borderColor: '#202124',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Product = () => {
  const data = DATA.FEATURED_PRODUCTS;
  const classes = useStyles();
  const [size, setSize] = useState('L');
  const history = useHistory();

  const [product, setProduct] = useState({});
  const { category, productId } = useParams();
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category,
        rating: product.rating,
        imageUrl: product.imageUrl,
      },
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const data = DATA[category.toUpperCase().replace(' ', '_')];
    const product = data.find((data) => data.id == productId);
    setProduct(product);
  }, [category, product]);

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  const colors = ['#ff66b3', '	#d9ffcc', '	#8c66ff'];

  return (
    <div className="product">
      <div className="productArea">
        <div className="productImages">
          <div className="productImage">
            <img src={product?.imageUrl} alt="" />
          </div>
        </div>
        <div className="productDetail">
          <div className="productTitle">
            <h2>{product?.name}</h2>
          </div>
          <div className="priceRating">
            <p className="price">₹ {product?.price}</p>
          </div>
          <div className="productInfo">
            <p>
              {product?.description}
            </p>
            <div className="productSize">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="product-size-select">Size</InputLabel>
                <Select
                  labelId="product-size-select"
                  id="demo-simple-select-outlined"
                  value={size}
                  onChange={handleChange}
                  label="Size"
                  data-test-id="sizeDropdown"
                >
                  <MenuItem value={'X'}>XS</MenuItem>
                  <MenuItem value={'SM'}>SM</MenuItem>
                  <MenuItem value={'M'}>M</MenuItem>
                  <MenuItem value={'L'}>L</MenuItem>
                  <MenuItem value={'XL'}>XL</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="productColors">
              <p>Colors: </p>
              <ProductColor colors={colors} />
            </div>
            <div className="qtyCart">
              <Quantity />
              <div className="addToCart">
                <button className="cartBtn" onClick={addToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="productReview">
        <h3 className="reviewTitle">Read Reviews</h3>
        <Review />
      </div>
      <div className="featuredProducts">
        <ProductRow
          title="Featured Products"
          items={DATA['FEATURED_PRODUCTS']}
        />
      </div>
    </div>
  );
};

export default Product;
