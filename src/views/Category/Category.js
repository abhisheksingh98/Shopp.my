import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDeck from "../../components/ProductDeck/ProductDeck";
import Sidebar from "../../components/Sidebar/Sidebar";
import DATA from '../../shared/utils/Data';
import { useHistory } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import PageNotFound from '../../components/PageNotFound/PageNotFound'

import "./Category.scss";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Category() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const classes = useStyles();
  const [productCategory, setProductCategory] = React.useState("");
  const [productSorting, setProductSorting] = React.useState(" ");

  const handleChange = (e) => {
    setProductCategory(e.target.value);
    let categoryUrl;
    switch (e.target.value) {
      case "men":
        categoryUrl = "/products/men";
        break;
      case "women":
        categoryUrl = "/products/women";
        break;
      case "kids":
        categoryUrl = "/products/kids";
        break;
      case "footwear":
        categoryUrl = "/products/footwear";
        break;
      default:
        categoryUrl = "";
        break;
    }
    history.push(categoryUrl);
  };


  const history = useHistory();

  useEffect(() => {
    if (category === "men") setProducts(DATA["MEN"]);
    else if (category === "women") setProducts(DATA["WOMEN"]);
    else if (category === "kids") setProducts(DATA["KIDS"]);
    else if (category === "footwear") setProducts(DATA["FOOTWEAR"]);
    else {
      setProducts(
        DATA["ALL_PRODUCTS"].filter((product) =>
          product.name.toLowerCase().includes(category.toLowerCase())
        )
      );
    }
  }, [category]);

  return (
    <div className="category">
      <div className="categorySubHeader">
        <div className="categoryDropdown">
          <FormControl variant="outlined" className={classes.formControl} size="small">
            <InputLabel id="demo-simple-select-outlined-label">
              category
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={productCategory}
              onChange={handleChange}
              label="Category"
            >
              <MenuItem value={"men"}>{"men"}</MenuItem>
              <MenuItem value={"women"}>{"women"}</MenuItem>
              <MenuItem value={"kids"}>
                {"kids"}
              </MenuItem>
              <MenuItem value={"footwear"}>{"Footwear"}</MenuItem>
            </Select>
          </FormControl>
        </div>

      </div>
      {products.length == 0 ? <PageNotFound /> : (<div className="categoryBody">
        <Sidebar />
        <ProductDeck category={category} products={products} />
      </div>)}
    </div>
  );
}

export default Category;
