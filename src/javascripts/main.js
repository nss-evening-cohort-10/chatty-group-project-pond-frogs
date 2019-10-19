import 'bootstrap';
import displayMessages from './components/displayMessages/displayMessages';

import '../styles/main.scss';
import navbar from './components/navbar/navbar';
import add from './components/addMessage/addMessage';
import limit from './components/messageLimit/messageLimit';
import clear from './components/clearButton/clearButton';

const init = () => {
  displayMessages.printMessageCards();
  navbar.printNavbar();
  add.addMessage();
  limit.limitMessages();
  clear.clearButton();
};

init();
