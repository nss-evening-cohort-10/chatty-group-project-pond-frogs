import 'bootstrap';
import displayMessages from './components/displayMessages/displayMessages';

import '../styles/main.scss';
import navbar from './components/navbar/navbar';
import add from './components/addMessage/addMessage';
import clear from './components/clearButton/clearButton';
import mssg from './components/deleteMessage/deleteMessage';

const init = () => {
  displayMessages.printMessageCards();
  navbar.printNavbar();
  add.addMessage();
  clear.clearButton();
  mssg.deleteMessage();
};

init();
