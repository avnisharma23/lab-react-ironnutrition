import { useState } from "react";
import { Divider, Input } from 'antd';

function AddFoodForm(props){
    const { addNewFood } = props;
    const [name,setName] = useState("");
    const [image,setImage] = useState("");
    const [calories,setCalories] = useState("");
    const [servings,setServings] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault() // prevent the form from reloading the page   
         // Add new food
         
         const newFood = {name, image, calories, servings}
         addNewFood(newFood)
         // empty the form
         setName("");
         setImage("")
         setCalories(0);
         setServings(false);
     }

    return(
        <div>
            <Divider>Add Food Entry</Divider>
            <form>
                <lable>Name</lable>
                 <Input value={name} type="text" name="name" onChange={(event) => setName(event.target.value)} />

                 <label>Image</label>
                 <Input value={image} type="text"  name="image" onChange={(event) => setImage(event.target.value)} />

                 <label>Calories</label>
                 <Input value={calories} type="number" name="calories"  onChange={(event) => setCalories(event.target.value)} />

                 <input>Servings</input>
                 <Input value={servings} type="number" name="servings"  onChange={(event) => setServings(event.target.value)} />
                
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default AddFoodForm;