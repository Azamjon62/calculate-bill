// src/TabPanel.js
import { useState, useContext } from "react";
import { SharedStateContext } from "../SharedStateContext";
import PropTypes from "prop-types";
import "./style.css";
import TotalAmount from "../TotalAmount";

const TabPanel = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const {
    foods, 
    commonFood,
     setCalculatedEatenFood,
     setCalculatedPaidForAll,
     serviceList, 
     totalCommonFoodAmount
    } = useContext(SharedStateContext);

  const handleTabClick = (index) => {
    if (index !== activeTab) {
      setActiveTab(index);
    }
  };




  const calculatePrice = () => {
    if (foods.length) {
      const updatedItems = foods.flatMap((item) => {
        if (item.personItems.length) {
          return item.personItems.map((personItem) => ({
            id: personItem.id,
            name: personItem.name,
            paid: personItem.paid,
            foodItems: [
              {
                id: item.id,
                foodName: item.foodName,
                numOfFood: personItem.numOfFood,
                price: personItem.price,
              },
            ],
          }));
        }
        return [];
      });


      const processedNames = [];
      const updatedItems2 = updatedItems.map((item, index) => {
          if (!processedNames.includes(item.name)) {
            processedNames.push(item.name);

            const matchingElements = updatedItems.filter((element2, i) => {
              return i !== index && item.name === element2.name;
            });

            const combinedPaid = matchingElements.reduce((total, element) => {
                return total + (element.paid ? parseInt(element.paid, 10) : "");
            }, item.paid ? parseInt(item.paid, 10) : "");
              

            if (matchingElements.length > 0) {
              const uniqueItem = {
                ...item,
                paid: combinedPaid,
                foodItems: [
                  ...item.foodItems,
                  ...matchingElements.flatMap((matchingElement) => matchingElement.foodItems),
                ],
              };

              return uniqueItem;
            } else {
              return item;
            }
          } else {
            return null;
          }
        })
        .filter(Boolean);

      const commonExpenseValue = totalCommonFoodAmount / updatedItems2.length;


      const updated = updatedItems2.map((item) => {
        return {
          ...item,
          foodItems: item.foodItems.map((foodItem) => {
            const updatedPrice = parseInt(foodItem.price);

            let serviceAmount = 0;
            if (serviceList.length > 0) {
              const servicePercentage = serviceList[0].percentage;
              serviceAmount = (servicePercentage / 100) * updatedPrice;
            }

            return {
              ...foodItem,
              price: updatedPrice + serviceAmount,
            };
          }),
        };
      });


      setCalculatedEatenFood(updated);

      const updatedPayments = updatedItems2.map((payment) => {
        const matchingItem = updated.find((item) => item.name == payment.name && item.paid !== "");


        if (matchingItem) {

            const totalFoodAmount = matchingItem.foodItems.reduce((total, foodItem) => {
                return total + (parseInt(foodItem.numOfFood, 10) * parseInt(foodItem.price));
              }, 0);

          return {
            ...payment,
            paid:
              parseInt(payment.paid) - totalFoodAmount - commonExpenseValue,
          };
        }
        return payment;
      });

      setCalculatedPaidForAll(
        updatedPayments.filter((item) => (item.paid !== undefined && item.paid !== "" && item.paid !== null && item.paid !== 0))
      );
      setActiveTab(2)
    }
  };




  return (
    <div className="tab-panel">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${index === activeTab ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="panels">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`panel ${index === activeTab ? "active" : ""}`}
          >
            {tab.content}

            <div>{tab.card}</div>

            <div>
              <TotalAmount foods={foods} commonFood={commonFood} />
            </div>

            <div className="panelBtn">
              <button type="submit" onClick={calculatePrice} className="button-submit">
                Calculate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

TabPanel.propTypes = {
  tabs: PropTypes.any,
};

export default TabPanel;
