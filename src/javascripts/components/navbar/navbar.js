import utilities from '../../helpers/utlities';
import './navbar.scss';

const printNavbar = () => {
  let domString = '<div id="nav-row-1" class="row">';
  domString += '<div id="logo-holder" class="col-4">';
  domString += '<a id="logo" class="navbar-brand">Logo</a>';
  domString += '</div>';
  domString += '<div id="message-holder" class="col-8">';
  domString += '<form class="form-inline">';
  domString += '<input id="message-input" class="form-control mr-sm-2" type="search" placeholder="Your message here" aria-label="Search">';
  domString += '<button class="btn btn-info my-2 my-sm-0" type="submit">Clear</button>';
  domString += '</form>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div id="nav-row-2" class="row">';
  domString += '<div class="checkboxHolder">';
  domString += '<input type="checkbox" class="large-text-input" id="largeTextCheck">';
  domString += '<label class="" for="largeTextCheck">Large Text</label>';
  domString += '</div>';
  domString += '<div class="checkboxHolder">';
  domString += '<input type="checkbox" class="large-text-input" id="darkThemeCheck">';
  domString += '<label class="" for="darkThemeCheck">Dark Mode</label>';
  domString += '</div>';
  domString += '</div>';
  utilities.printToDom('navigation', domString);
};

export default { printNavbar };
