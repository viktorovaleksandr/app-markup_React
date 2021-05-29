import { useState } from 'react';
import { NavLink } from "react-router-dom";

export function FiltrGridListComponent() {
   const isActive = location.pathname;

   return (
      <div className="uk-button-group uk-margin-left">
        <NavLink to="/"
          activeClassName={isActive === "/Posts-grid" ? "uk-active" : ""}
          className="uk-button uk-button-default" >
          <span uk-icon="icon:  grid"></span>
        </NavLink>
        <NavLink to="/Posts"
          activeClassName={isActive === "/Posts-lists" ? "uk-active" : ""}
          className="uk-button uk-button-default" >
          <span uk-icon="icon:  list"></span>
        </NavLink>
      </div> )
}