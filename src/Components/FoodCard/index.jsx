// src/components/Card.js
import PropTypes from "prop-types";
import "./style.css"; // Import the CSS file for styling

const FoodCard = ({ foods }) => {
  return (
    <div className="">
      {foods.map((person) => (
        <div key={person.id} className="food-item">
            <div className="food-header">
              <h2>{person.foodName}</h2>
              <p className="food-amount">
                Amt:{" "}
                {person.personItems.reduce((total, food) => {
                  const itemAmount =
                    parseInt(food.numOfFood, 10) * parseInt(food.price);
                  return total + itemAmount;
                }, 0)}{" "}
                so&rsquo;m
              </p>
            </div>
            {person.personItems.map((foodItem) => (
              <div key={foodItem.id} className="person-item">
                <hr />
                <div className="person-details">
                  <h3>{foodItem.name}</h3>
                  <p>x {foodItem.numOfFood} </p>
                </div>

                <div className="price-details ">
                  <p>Price: {foodItem.price} so&rsquo;m</p>
                  <p>
                    {foodItem.paid.length ? (
                      <span className="paid-amount">
                        Paid: {foodItem.paid} so&rsquo;m
                      </span>
                    ) : null}
                  </p>
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

FoodCard.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default FoodCard;
