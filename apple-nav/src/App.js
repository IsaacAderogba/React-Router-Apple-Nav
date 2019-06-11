import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { menuItems } from "./data";
import NavItem from "./components/NavItem";
import SubNavItem from "./components/SubnavItem";

// Sub Nav Component
function SubNav(props) {
  const { title } = props.match.params;
  const subNavigation = menuItems.find(menuItem => menuItem.title === title);

  return (
    <>
      {subNavigation.subNav.map(subItem => {
        return (
          <Link key={subItem} to={`${props.match.url}/${subItem}/`}>
            <SubNavItem subItem={subItem} />
          </Link>
        );
      })}
    </>
  );
}

// Main Nav Component
function MainNav() {
  return (
    <>
      <div className="nav-items">
        {menuItems.map(menuItem => {
          return (
            <Link key={menuItem.title} to={`/${menuItem.title}/`}>
              <NavItem menuItem={menuItem} />
            </Link>
          );
        })}
      </div>
      <div className="sub-nav-items">
        <Route path="/:title" component={SubNav} />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <MainNav />
      </div>
    </Router>
  );
}

export default App;
