import { useState } from 'react';

import CalorieRecordDate from '../CalorieRecordDate';
import StyledRecordCell from '../common/StyledRecordCell';
import './CalorieRecord.css';

function CalorieRecord(props) {
  const [currentCalories, setCurrentCalories] = useState(
    Number(props.calories)
  );

  const caloriesHandler = () => {
    // console.log(currentCalories);
    setCurrentCalories(currentCalories + 10);
    // setCurrentCalories((count) => count + 10);
    // console.log(currentCalories);
  };
  console.log(currentCalories);
  return (
    <ul className="record">
      <li>
        <CalorieRecordDate date={props.date}></CalorieRecordDate>
      </li>
      <li>{props.meal}</li>
      <li>{props.content}</li>
      <li className="record-calories" onClick={caloriesHandler}>
        <StyledRecordCell>{currentCalories}</StyledRecordCell>
      </li>
    </ul>
  );
}

export default CalorieRecord;
