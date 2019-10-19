import $ from 'jquery';
import moment from 'moment';
import m from '../../helpers/data/messages';
import aMessage from '../displayMessages/displayMessages';
import './addMessage.scss';

const addMessage = () => {
  $('body').on('keydown', '#message-input', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      // printMessage();
      const newMessage = {
        message: $('#message-input').val(),
        timestamp: moment().format('lll'),
      };
      m.addMessage(newMessage);
      aMessage.printMessageCards();
    }
  });
};
export default { addMessage };
