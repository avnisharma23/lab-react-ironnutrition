import foods from './foods.json'
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import './App.css';
import { useState } from 'react';
import FoodBox from './component/FoodBox';
import FoodList from './component/FoodList';
import AddFoodForm from './component/AddFoodForm';

function App() {
  const [foodItem, setfoodItem] = useState(foods);
    
  return (
    <div className="App">

       {/* <AddFoodForm setfoodItem={setfoodItem} foodItem = {foodItem}/> */}

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        <FoodList />
      </Row>


      {/* <h1>Food List</h1>
      {food.map((foodlist) => (
        <div className="foodlist">
          <p> {foodlist.name}</p>
          <img src={foodlist.image} alt="Food-list" width={150}></img>
        </div>
        
      ))}
      <FoodBox food={ {
                name: "Orange",
                calories: 85,
                image: "https://i.imgur.com/abKGOcv.jpg",
                servings: 1
              }} /> */}
    </div>
  );
}

export default App;
