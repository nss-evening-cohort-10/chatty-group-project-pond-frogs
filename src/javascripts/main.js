import 'bootstrap';
import displayMessages from './components/displayMessages/displayMessages';
// import limit from './components/messageLimit/messageLimit';
import '../styles/main.scss';
import navbar from './components/navbar/navbar';
import add from './components/addMessage/addMessage';
import clear from './components/clearButton/clearButton';

const init = () => {
  displayMessages.printMessageCards();
  navbar.printNavbar();
  add.addMessage();
  clear.clearButton();
  // limit.limitMessages();
};

init();
