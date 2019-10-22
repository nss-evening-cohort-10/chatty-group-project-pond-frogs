import $ from 'jquery';
import moment from 'moment';
import m from '../../helpers/data/messages';
import aMessage from '../displayMessages/displayMessages';
import './addMessage.scss';

const addMessage = () => {
  $('body').on('keydown', '#message-input', (e) => {
    if (e.keyCode === 13) {
      $('.clear').attr('disabled', false);
      e.preventDefault();
      const id = Math.floor((Math.random() * 100) + 1000);
      const newMessage = {
        message: $('#message-input').val(),
        timestamp: moment().format('lll'),
        id: `A${id}`,
      };
      m.addMessage(newMessage);
      aMessage.printMessageCards();
    }
  });
};

export default { addMessage };
