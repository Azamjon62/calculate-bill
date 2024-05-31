import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const SharedStateContext = createContext();

const SharedStateProvider = ({ children }) => {
  const [foods, setFoods] = useState([]);
  const [people, setPeople] = useState([]);

  const [calculatedEatenFood, setCalculatedEatenFood] = useState([]);
  const [calculatedPaidForAll, setCalculatedPaidForAll] = useState([]);

  const [commonFood, setCommonFood] = useState([]);
  const [serviceList, setServiceList] = useState([]);

  const [newPersonName, setNewPersonName] = useState("");
  const [newFoodName, setNewFoodName] = useState("");
  const [numOfFood, setNumOfFood] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [paidAmount, setPaidAmount] = useState("");

  const [service, setService] = useState("");

  const [token, setToken] = useState('');

  const totalCommonFoodAmount = commonFood.reduce(
    (total, foodItem) =>
      total + parseInt(foodItem.numOfFood, 10) * parseInt(foodItem.price),
    0
  );

  return (
    <SharedStateContext.Provider value={{         
        foods, setFoods,
        people, setPeople,

        calculatedEatenFood, setCalculatedEatenFood,
        calculatedPaidForAll, setCalculatedPaidForAll,

        commonFood, setCommonFood,
        serviceList, setServiceList,

        newPersonName, setNewPersonName,
        newFoodName, setNewFoodName,
        numOfFood, setNumOfFood,
        newPrice, setNewPrice,
        paidAmount, setPaidAmount,

        service, setService,

        totalCommonFoodAmount,
        
        token, setToken
    }}
    >
      {children}
    </SharedStateContext.Provider>
  );
};

SharedStateProvider.propTypes = {
    children: PropTypes.node,
  };

export { SharedStateProvider, SharedStateContext };
