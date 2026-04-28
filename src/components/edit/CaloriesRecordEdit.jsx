import { useState } from 'react';
import './CaloriesRecordEdit.css';

function CaloriesRecordEdit() {
  const [maxCalories, setMaxCalories] = useState(0);
  const [dateValue, setDateValue] = useState();
  const [mealValue, setMealValue] = useState();
  const [contentValue, setContentValue] = useState();
  const [caloriesValue, setCaloriesValue] = useState();

  const onDateChangeHandler = (e) => {
    setDateValue(e.target.value);
  };
  const onMealChangeHandler = (e) => {
    setMealValue(e.target.value);
  };
  const onContentChangeHandler = (e) => {
    setContentValue(e.target.value);
  };
  const onCaloriesChangeHandler = (e) => {
    setCaloriesValue(e.target.value);
    if (maxCalories < e.target.value) {
      setMaxCalories(e.target.value);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log({
      date: dateValue,
      meal: mealValue,
      content: contentValue,
      calo: caloriesValue,
      maxCalo: maxCalories,
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>MaxCalories: {maxCalories}</label>
      <label htmlFor="date">Date:</label>
      <input type="date" name="date" id="date" onChange={onDateChangeHandler} />
      <label>Meal:</label>
      <select onChange={onMealChangeHandler}>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
      </select>
      <label htmlFor="Content">Content:</label>
      <input
        type="text"
        name="Content"
        id="Content"
        onChange={onContentChangeHandler}
      />
      <label htmlFor="Calories">Calories:</label>
      <input
        type="number"
        name="Calories"
        id="Calories"
        onChange={onCaloriesChangeHandler}
      />
      <div className="footer">
        <button>Add Record</button>
      </div>
    </form>
  );
}

export default CaloriesRecordEdit;
