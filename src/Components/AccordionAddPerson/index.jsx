import { useContext } from "react";
import { SharedStateContext } from "../SharedStateContext";
import { Input } from "../Ui";

const AccordionAddPerson = () => {
    const {
        foods, setFoods,
         setPeople,
        newPersonName, setNewPersonName,
         setNewFoodName,
        numOfFood, setNumOfFood,
        newPrice, setNewPrice,
        paidAmount, setPaidAmount
    } = useContext(SharedStateContext);

    const addPersonItem = (foodId, e) => {
        e.preventDefault();
        const selectedFoodIndex = foods.findIndex((food) => food.id === foodId);
    
        if (selectedFoodIndex !== -1) {
          const selectedFood = foods[selectedFoodIndex];
    
          if (
            newPersonName.trim() !== "" &&
            numOfFood.trim() !== "" &&
            newPrice.trim() !== ""
          ) {
            const updatedFoodItems = selectedFood.personItems.concat({
              id: Date.now(),
              name: newPersonName,
              numOfFood,
              price: newPrice,
              paid: paidAmount,
            });
    
            const updatedFoods = [...foods];

            updatedFoods[selectedFoodIndex] = {
              ...selectedFood,
              personItems: updatedFoodItems,
            };
            console.log(updatedFoods);
    
            setFoods(updatedFoods);
    
            const newPersonItem = {
              id: Date.now(),
              name: newPersonName,
              numOfFood,
              price: newPrice,
              paid: paidAmount,
            };
    
            setPeople((prevPeople) => [...prevPeople, newPersonItem]);
            setNewFoodName("");
            setNumOfFood("");
            setNewPrice("");
            setPaidAmount("");
            setNewPersonName("");
            // setModalOpen(true);
          }
        }
      };



  return (
    <div>
        <form onSubmit={(e) => addPersonItem(foods[foods.length - 1].id, e)} >
            <div className="inputForm">
                <ion-icon name="person-outline"></ion-icon>
                <Input type={"text"} state={newPersonName} setState={setNewPersonName} placeholder={"Enter name"} />   
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
            <br />
            <div className="inputForm">
                <ion-icon name="receipt-outline"></ion-icon>
                <Input type={"text"} state={paidAmount} setState={setPaidAmount} placeholder={"Enter paid"} required={false} />   
            </div>
            <div>
                <button type='submit' className="button-submit"> Add Person </button>
            </div>
        </form>
    </div>
  )
}

export default AccordionAddPerson