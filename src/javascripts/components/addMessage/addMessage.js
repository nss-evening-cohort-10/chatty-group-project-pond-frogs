import $ from 'jquery';
import moment from 'moment';
import m from '../../helpers/data/messages';
import aMessage from '../displayMessages/displayMessages';
import './addMessage.scss';

const getNumMessages = () => m.seedData.length;
let numMessages = m.seedData.length;
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
      numMessages = getNumMessages();
      console.log(numMessages);
      if (numMessages > 19) {
        m.seedData.shift();
      }
    }
  });
};

// limitMessages = () => {
// console.log(n.numMessages);
// if (numMessages > 20) {
// console.error($('.card:last')).html();
// }
// };

export default { addMessage, numMessages };
