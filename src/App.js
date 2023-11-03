import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Item from './components/Item';
import CreateList from './components/Grocerylist';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Row} from 'react-bootstrap'
import './index.css'


function App() {
  const [inventory,setInventory] = useState([
    { id: 1, name: 'Tomato',quantity:10, imgSrc: require('./images/toamto.jpg') },
    { id: 2, name: 'Onion',quantity:6, imgSrc: require('./images/onion.jpeg') },
    { id: 3, name: 'Eggs',quantity:18, imgSrc: require('./images/egg.png') },
    { id: 4, name: 'Bread',quantity:10, imgSrc: require('./images/bread.jpeg') },
    { id: 5, name: 'Garlic',quantity:2, imgSrc: require('./images/garlic.jpg') },
    // Add more items as needed
  ]);
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid pt-3">
        <Search />
        <h1 className="pt-4 display1">Inventory</h1>
        <container fluid>
          <Row>
        {inventory.map((item) => (
          <Item details = {item} />
        ))}
        </Row>
        </container>
      </div>
      <CreateList/>
    </div>
  );
}

export default App;
