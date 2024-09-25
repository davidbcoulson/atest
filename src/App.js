import React, { useState } from "react";
import { products } from "./data";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import HeaderArea from "./Header";
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import FooterArea from "./Footer";

function App() {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const filteredProducts = products.filter(
    (product) => !filter || product.colors.includes(filter)
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sort === "price") {
      return a.price - b.price;
    } else if (sort === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
  return (
    <>
    <Navigation />
    <UserMenu />
    <HeaderArea/>
    <div>
      <h1>Product Listing Page</h1>
      <div>
        <label>
          Filter by color:
          <select onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
        </label>
        <label>
          Sort by:
          <select onChange={handleSortChange}>
            <option value="">None</option>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
        </label>
      </div>
      <Grid container spacing={3}>
        {sortedProducts.map((product) => (
          <Grid size={4} key={product.id} className="product-card">
            <Item>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <p>Colors: {product.colors.join(", ")}</p>
            </Item>
          </Grid>
        ))}
      </Grid>
    </div>
    <FooterArea/>
    </>
    
  );
}

export default App;
