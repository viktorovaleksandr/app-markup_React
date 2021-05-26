import { useState } from 'react';
import { useHistory } from "react-router-dom";

export function FiltrGridListComponent() {  
const history = useHistory();

function handleClick1() {
   history.push("/Posts-grid");
}

function handleClick2() {
   history.push("/Posts-lists");
}

   return (
      <>
      <div className="uk-button-group uk-margin-left">
         <button className="uk-button uk-button-default" onClick={handleClick1}>
            <span uk-icon="icon: grid" ></span>
         </button>
         <button className="uk-button uk-button-default" onClick={handleClick2}>
            <span uk-icon="icon: list"></span>
         </button>
      </div>
   </> )
}