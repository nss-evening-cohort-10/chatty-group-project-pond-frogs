import 'bootstrap';
import displayMessages from './components/displayMessages/displayMessages';
import limit from './helpers/data/messages';
import navbar from './components/navbar/navbar';
import add from './components/addMessage/addMessage';
import clear from './components/clearButton/clearButton';
import defaultThemes from './components/defaultThemes/defaultThemes';

import '../styles/main.scss';

const init = () => {
  navbar.printNavbar();
  // mssg.deleteMessage();
  displayMessages.printMessageCards();
  add.addMessage();
  defaultThemes.changeTheme();
  clear.clearButton();
  limit.messages();
};

init();
