import { useContext } from "react";
import { SharedStateContext } from "../SharedStateContext";
import { Input } from "../Ui";

const AccordionAddCommonFood = () => {
    const {
        // foods, setFoods,
        people, setPeople,
        // newPersonName, setNewPersonName,
        commonFood, setCommonFood,
        // serviceList, setServiceList,
        newFoodName, setNewFoodName,
        numOfFood, setNumOfFood,
        newPrice, setNewPrice,
        paidAmount, setPaidAmount
    } = useContext(SharedStateContext);


    const addCommonFoods = (e) => {
        e.preventDefault();
        const newCommonFood = {
          id: Date.now(),
          foodName: newFoodName,
          numOfFood,
          price: newPrice,
          paid: paidAmount,
        };
    
        setCommonFood([...commonFood, newCommonFood]);
        setPeople([...people, newCommonFood]);
        setNewFoodName("");
        setNumOfFood("");
        setNewPrice("");
        setPaidAmount("");
        // setInputOpen(false);
      };



  return (
    <div>
        <form onSubmit={(e) => addCommonFoods(e)}>
            <div className="inputForm">
                <ion-icon name="pizza-outline"></ion-icon>
                <Input type={"text"} state={newFoodName} setState={setNewFoodName} placeholder={"Enter food"} />   
            </div>
            <br />
            <div className="inputForm">
                <ion-icon name="stats-chart-outline"></ion-icon>
                <Input type={"text"} state={numOfFood} setState={setNumOfFood} placeholder={"Enter count"} />   
            </div>
            <br />
            <div className="inputForm">
                <ion-icon name="cash-outline"></ion-icon>
                <Input type={"text"} state={newPrice} setState={setNewPrice} placeholder={"Enter price"} />   
            </div>
            <div>
                <button type='submit' className="button-submit"> Add Common Food </button>
            </div>
        </form>
    </div>
  )
}

export default AccordionAddCommonFood