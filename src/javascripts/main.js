import 'bootstrap';
import displayMessages from './displayMessages/displayMessages';

import '../styles/main.scss';

const init = () => {
  console.error('hi');
  displayMessages.printMessageCards();
};

init();
