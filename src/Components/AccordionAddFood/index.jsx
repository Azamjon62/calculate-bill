import { useContext } from "react";
import { Input } from "../Ui"
import { SharedStateContext } from "../SharedStateContext";

const AccordionAddFood = () => {

    const {
        foods, setFoods,
        people, setPeople,
        newPersonName, setNewPersonName,
        newFoodName, setNewFoodName,
        numOfFood, setNumOfFood,
        newPrice, setNewPrice,
        paidAmount, setPaidAmount
    } = useContext(SharedStateContext);
    
    const addPerson = (e) => {
        e.preventDefault();
        if (newFoodName.trim() !== "" && newPersonName.trim() !== "") {
          const newFood = {
            id: Date.now(),
            foodName: newFoodName,
            personItems: [
              {
                id: Date.now() + 1,
                name: newPersonName,
                numOfFood,
                price: newPrice,
                paid: paidAmount,
              },
            ],
          };
    
          setPeople([...people, ...newFood.personItems]);
          setFoods([...foods, newFood]);
          setNewFoodName("");
          setNewPersonName("");
          setNumOfFood("");
          setNewPrice("");
          setPaidAmount("");
        }

    };

return (
    <div>
        <form onSubmit={(e) => addPerson(e)} >
            <div className="inputForm">
                <ion-icon name="pizza-outline"></ion-icon>
                <Input type={"text"} state={newFoodName} setState={setNewFoodName} placeholder={"Enter food"} />   
            </div>
            <br />
            <div className="inputForm">
                <ion-icon name="person-outline"></ion-icon>
                <Input type={"text"} state={newPersonName} setState={setNewPersonName} placeholder={"Enter name"} />   
            </div>
            <br />
            <div className="inputForm">
                <ion-icon name="stats-chart-outline"></ion-icon>
                <Input type={"number"} state={numOfFood} setState={setNumOfFood} placeholder={"Enter count"} />   
            </div>
            <br />
            <div className="inputForm">
                <ion-icon name="cash-outline"></ion-icon>
                <Input type={"number"} state={newPrice} setState={setNewPrice} placeholder={"Enter price"} />   
            </div>
            <br />
            <div className="inputForm">
                <ion-icon name="receipt-outline"></ion-icon>
                <Input type={"number"} state={paidAmount} setState={setPaidAmount} placeholder={"Enter paid"} required={false} />   
            </div>
            <div>
                <button type='submit' className="button-submit"> Add Food </button>
            </div>
        </form>
  </div>
)};

export default AccordionAddFood