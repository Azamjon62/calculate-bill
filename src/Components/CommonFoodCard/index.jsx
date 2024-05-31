import PropTypes from "prop-types";
import './style.css'

const CommonFoodCard = ({commonFood}) => {
  return (
    <>
      {commonFood.length > 0 && (
        <div className="commonFood-container">
          <div>
            <h2 className="text-center1">
              Common Food
            </h2>
          </div>
          {commonFood.map((food, index) => (
            <div key={food.id} className="commonFood-item">
              <hr />
              <div className="commonFood-details">
                <h3>{food.foodName}</h3>
                <p>x {food.numOfFood} </p>
              </div>

              <div className="commonFood-price">
                <p>Price: {food.price}</p>
              </div>

              {index === commonFood.length - 1 && (
                <p className="text-center2">
                  Amount:{" "}
                  {commonFood.reduce((total, food) => {
                    const itemAmount =
                      parseInt(food.numOfFood, 10) * parseInt(food.price);

                    return total + itemAmount;
                  }, 0)}{" "}
                  so&rsquo;m
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

CommonFoodCard.propTypes = {
    commonFood: PropTypes.any.isRequired,
};



export default CommonFoodCard;
