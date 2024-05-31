import Accordion from "../Components/Accordion";
import AccordionAddCommonFood from "../Components/AccordionAddCommonFood";
import AccordionAddFood from "../Components/AccordionAddFood";
import AccordionAddPerson from "../Components/AccordionAddPerson";
import FoodCard from "../Components/FoodCard";
import TabPanel from "../Components/TabPanel";
import { useContext } from "react";
import { SharedStateContext } from "../Components/SharedStateContext";
import CommonFoodCard from "../Components/CommonFoodCard";
import CalculatedFoodCard from "../Components/CalculatedFoodCard";

// import { Input } from "../Components/Ui";

const Main = () => {

  const {
    foods, 
    commonFood,
    calculatedEatenFood,
    calculatedPaidForAll 
} = useContext(SharedStateContext);

  const FoodTab = [
    {
      title: 'Add Food',
      content: <AccordionAddFood />
    },
    {
      title: 'Add Person',
      content: <AccordionAddPerson />
    },
  ];

  const CommonTab = [
    {
      title: 'Add Common Food',
      content: <AccordionAddCommonFood />
    }
  ];


  const tabs = [
    {
      label: 'Food',
      content: <Accordion items={FoodTab} />,
      card: <FoodCard foods={foods} />
    },
    {
      label: 'Common',
      content: <Accordion items={CommonTab} />,
      card: <CommonFoodCard commonFood={commonFood} />
    },
    {
      label: 'Total',
      content: null,
      card: <CalculatedFoodCard calculatedEatenFood={calculatedEatenFood}  calculatedPaidForAll={calculatedPaidForAll}  />
      
    },
  ];

  
  return (
    <div>
      <TabPanel tabs={tabs} />
    </div>
  )
}

export default Main