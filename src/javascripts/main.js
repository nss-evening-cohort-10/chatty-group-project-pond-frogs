import 'bootstrap';
import displayMessages from './components/displayMessages/displayMessages';

import '../styles/main.scss';
import navbar from './components/navbar/navbar';
import add from './components/addMessage/addMessage';
import clear from './components/clearButton/clearButton';
import mssg from './helpers/data/messages';

const init = () => {
  displayMessages.printMessageCards();
  navbar.printNavbar();
  mssg.deleteMessage();
  add.addMessage();
  clear.clearButton();
};

init();
