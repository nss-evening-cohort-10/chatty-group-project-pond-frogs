import utilities from '../../helpers/utlities';

const printNavbar = () => {
let domString = '<div class="logo"></div>';
  domString += '<form class="form-inline">'
  domString += '<input type="text">'
  domString += '<button class="btn btn-info type="submit">Clear</button>'
  domString += '</form>'
  utilities.printToDom('navbar', domString);
};

export default { printNavbar };

