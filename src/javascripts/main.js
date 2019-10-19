import 'bootstrap';
import displayMessages from './components/displayMessages/displayMessages';

import '../styles/main.scss';
import navbar from './components/navbar/navbar';
import add from './components/addMessage/addMessage';

const init = () => {
  displayMessages.printMessageCards();
  navbar.printNavbar();
  add.addMessage();
};

init();
