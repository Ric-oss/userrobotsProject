import React from 'react';
import './Popups.css';

const Popup=(props)=>{
   return(
       <div className="popup--back">
           <div className="popup--content">
              <div className="popup--close" onClick={props.closePops}>X</div>
           </div>
       </div>
   )
}
export default Popup;