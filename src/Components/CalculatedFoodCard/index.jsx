import "./style.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { SharedStateContext } from "../SharedStateContext";

const CalculatedFoodCard = ({ calculatedEatenFood, calculatedPaidForAll }) => {

    const {
        totalCommonFoodAmount
    } = useContext(SharedStateContext);

    const commonExpenseValue = totalCommonFoodAmount / calculatedEatenFood.length;


  return (
    <div className="wrapper">
      <div>
        {calculatedEatenFood.length ? <h2>Those who will pay</h2> : null}
        {calculatedEatenFood.map((person) => (
          <div key={person.id} className="person-container">
            <div className="person-header">
              <h3>{person.name}</h3>
              <p>
                <span>Σ</span>{" "}
                {person.foodItems.reduce((total, foodItem, index, array) => {
                    const itemAmount = parseInt(foodItem.numOfFood, 10) * parseInt(foodItem.price);
                    if (index === array.length - 1) {
                        // Add commonExpenseValue once after processing all items
                        return total + itemAmount + commonExpenseValue;
                    }
                    return total + itemAmount;
                }, 0)}

                {/* {person.foodItems.map((foodItem, index) => (
                    <code key={index+12} >{(foodItem.price * foodItem.numOfFood) + commonExpenseValue}</code>
                ))} */}
                {/* 
                {person.foodItems.reduce((total, foodItem) => (
                    const itemAmount = (parseInt(food.numOfFood, 10) * parseInt(food.price) + commonExpenseValue)
                    return total + itemAmount
                ) 0)}
                
                
                {person.foodItems.reduce((total, food) => {

                  const itemAmount =
                    parseInt(food.numOfFood, 10) * parseInt(food.price);
                    
                  return total + itemAmount;
                }, 0)}{" "} */}
                so&rsquo;m
              </p>
            </div>
            {person.foodItems.map((foodItem, index) => (
              <div key={`${foodItem.id}-${index}`} className="calFood-item">
                <hr />
                <div className="calFood-details">
                  <p> {foodItem.foodName}</p>
                  <code>x {foodItem.numOfFood} </code>
                </div>

                <div className="calFood-price">
                  <p>
                    <span className="text-sm">Price: </span> 
                    <code>{parseInt(foodItem.numOfFood, 10) * parseInt(foodItem.price)}</code>
                    {" "}
                    so&rsquo;m
                  </p>
                  <p>
                    {person.paid.length ? (
                        <>
                            <span>Paid:</span> {" "}
                            <code className="text-sm">
                                {person.paid} 
                            </code>
                            {" "}
                            so&rsquo;m
                        </>

                    ) : null}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {calculatedPaidForAll.length ? (
        <>
          <h2 className="heading">Those who take money</h2>
          <div className="paid-container">
            {calculatedPaidForAll.map((item) => (
              <div key={item.id} className="item">
                <hr />
                <div className="item-details">
                  <p>{item.name}</p>

                  <p>
                    <ion-icon name="add-outline"></ion-icon>
                    {" "}
                    <code>:{item.paid}</code>
                    {" "}
                    so&rsquo;m
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

CalculatedFoodCard.propTypes = {
  calculatedEatenFood: PropTypes.any.isRequired,
  calculatedPaidForAll: PropTypes.any.isRequired,
};

export default CalculatedFoodCard;
