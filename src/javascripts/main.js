import 'bootstrap';
import displayMessages from './displayMessages/displayMessages';

import '../styles/main.scss';
import navbar from './components/navbar/navbar';

const init = () => {
  displayMessages.printMessageCards();
  navbar.printNavbar();
};

init();
