import 'bootstrap';
import displayMessages from './components/displayMessages/displayMessages';

import '../styles/main.scss';
import navbar from './components/navbar/navbar';
import add from './components/addMessage/addMessage';
import clear from './components/clearButton/clearButton';
import deleteMessage from './components/deleteMessage/deleteMessage';

const init = () => {
  displayMessages.printMessageCards();
  navbar.printNavbar();
  add.addMessage();
  clear.clearButton();
  deleteMessage.removeMssg();
};

init();
