import 'bootstrap';
import displayMessages from './components/displayMessages/displayMessages';
<<<<<<< HEAD
import limit from './helpers/data/messages';
import '../styles/main.scss';
=======
>>>>>>> master
import navbar from './components/navbar/navbar';
import add from './components/addMessage/addMessage';
import clear from './components/clearButton/clearButton';
import defaultThemes from './components/defaultThemes/defaultThemes';

import '../styles/main.scss';

const init = () => {
  navbar.printNavbar();
  displayMessages.printMessageCards();
  add.addMessage();
  defaultThemes.changeTheme();
  clear.clearButton();
  limit.messages();
};

init();
