
import React, { useState } from 'react';

import ItemsCarousel from 'react-items-carousel';
import { Link } from 'react-router-dom';
import "./Carouselmulti.css";


export default  (props) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 50;
  return (
    <div style={{ padding: `0 ${chevronWidth}px`, }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={20}
        leftChevron={<button className="slider-button">{'<'}</button>}
        rightChevron={<button className="slider-button">{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {props.data.map(e=>{
          return (
            <Link to={{
              pathname: "/CardCollection",
              state:{
                 category: e.categoryName,
              },
               }}>
            <div className="borderShadow" style={{ height: 200,width: 250}}>
              <img style={{height: "83%",width:"100%" }} src={e.thumbnailImage}></img>
              {e.categoryName}
            </div>
           </Link>   
          )
        })}
      </ItemsCarousel>
    </div>
  );
};