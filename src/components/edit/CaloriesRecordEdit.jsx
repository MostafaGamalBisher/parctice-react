function CaloriesRecordEdit() {
  return (
    <form>
      <label>Date:</label>
      <input type="date" />
      <label>Meal:</label>
      <select>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack"></option>
      </select>
      <label>Content:</label>
      <input type="text" />
      <label>Calories</label>
      <input type="number" />
    </form>
  );
}

export default CaloriesRecordEdit;
