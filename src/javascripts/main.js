import 'bootstrap';

import '../styles/main.scss';
import navbar from './components/navbar/navbar';
import add from './components/addMessage/addMessage';

const init = () => {
  navbar.printNavbar();
  add.addMessage();
};

init();
