import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';

function NavBar(){
    return(
      
        <div className="NavBar">
           
            <NavLink className="Link" exact={true} activeClassName='is-active' to="/">Home</NavLink>
            {/* <NavLink activeClassName='is-active' to="/currentvehicle">Current Vehicles</NavLink>
            <NavLink activeClassName='is-active' to="/sellvehicle">Sale Vehicle</NavLink>
            <NavLink activeClassName='is-active' to="/buyvehicle">Buy Vehicle</NavLink> */}
            <NavLink activeClassName='is-active' to="/services">Services</NavLink>
            <NavLink activeClassName='is-active' to="/about">Employees</NavLink>
            <NavLink activeClassName='is-active' to="/us">About Us</NavLink>
        </div>
        
    )
}

export default NavBar;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './NavBar.css';

// function NavBar() {
//   return (
//     <div className="NavBar">
//      <NavLink className="Link" exact={true} activeClassName='is-active' to="/">Home</NavLink>
//       <NavLink className="Link" exact="true" activeClassName="is-active" to="/currentservices">
//         Current Services
//       </NavLink>
//       <NavLink activeClassName="is-active" to="/addservice">
//         Add Service
//       </NavLink>
//       <NavLink activeClassName="is-active" to="/vehiclesunderservice">
//         Vehicles Under Service
//       </NavLink>
//       <NavLink activeClassName="is-active" to="/deleteservice">
//         Delete Service
//       </NavLink>
//       <NavLink activeClassName='is-active' to="/about">Employees</NavLink>
//     </div>
//   );
// }

// export default NavBar;
