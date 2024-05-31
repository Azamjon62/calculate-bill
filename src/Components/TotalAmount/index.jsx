import PropTypes from "prop-types";
import './style.css'

const TotalAmount = ({ foods, commonFood }) => {

  const totalAmount = () => {
    const totalPeopleAmount = foods.reduce((total, person) => {
      const personAmount = person.personItems.reduce(
        (personTotal, foodItem) =>
          personTotal +
          parseInt(foodItem.numOfFood, 10) * parseInt(foodItem.price),
        0
      );

      return total + personAmount;
    }, 0);

    const totalCommonFoodAmount = commonFood.reduce(
      (total, foodItem) =>
        total + parseInt(foodItem.numOfFood, 10) * parseInt(foodItem.price),
      0
    );

    return totalPeopleAmount + totalCommonFoodAmount;
  };

  return (
    <>
      {foods.length > 0 || commonFood.length > 0 ? (
        <div className="total-amount">
          <h3>Total Amount</h3>
          <p>{totalAmount()} so’m</p>
        </div>
      ) : null}
    </>
  );
};

TotalAmount.propTypes = {
  foods: PropTypes.any,
  commonFood: PropTypes.any,
};

export default TotalAmount;
