import React from 'react';
import './App.css';
import ProductTable from './components/ProductTable'

const products = [{ price: "100$", name: "smartphone", category: "electronics" },
{ price: "150$", name: "tablet", category: "electronics" },
{ price: "50$", name: "jean", category: "clothes" },
{ price: "120$", name: "t-shirt", category: "clothes" },
]



function App() {
  return (
    <ProductTable tableau={products}  />
  );
}

export default App;
