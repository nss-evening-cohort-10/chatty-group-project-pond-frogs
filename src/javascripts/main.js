import 'bootstrap';

import displayMessages from './components/displayMessages/displayMessages';
import limit from './helpers/data/messages';
import '../styles/main.scss';
import navbar from './components/navbar/navbar';
import add from './components/addMessage/addMessage';
import clear from './components/clearButton/clearButton';
import defaultThemes from './components/defaultThemes/defaultThemes';
import customThemeSelector from './components/customThemes/customThemes';

const init = () => {
  navbar.printNavbar();
  displayMessages.printMessageCards();
  displayMessages.deleteMessage();
  add.addMessage();
  clear.clearButton();
  limit.messages();
  defaultThemes.changeTheme();
  customThemeSelector.customThemeModal();
//  customThemeSelector.selectCustomTheme();
};

init();
