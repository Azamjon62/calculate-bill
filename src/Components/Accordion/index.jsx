import { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <p>{item.title}</p>
            {activeIndex == index ? (
                    <ion-icon name="chevron-up-outline"></ion-icon> 
                ) : (
                    <ion-icon name="chevron-down-outline"></ion-icon>   
                )
            }
            
          </div>
          <div className={`accordion-content ${activeIndex === index ? 'show' : ''}`}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
      card: PropTypes.node
    })
  ).isRequired,
};

export default Accordion;
