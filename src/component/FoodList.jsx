import foods from '../foods.json'
import FoodBox from '../component/FoodBox';
import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function FoodList() {
    const [ food, setFood ] = useState(foods);
    return (
      <div>
        {food.map((foodtem) => {
          return <FoodBox foodItem={foodtem} />;
        })}
      </div>
    );
  }
  export default FoodList;