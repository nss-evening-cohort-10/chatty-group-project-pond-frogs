import moment from 'moment';

import utilities from '../../helpers/utlities';
import seedData from '../../helpers/data/messages';

import './displayMessages.scss';

const printMessageCards = () => {
  const messages = seedData.messages();
  let domString = '';
  messages.forEach((message) => {
    domString += '<div class="card">';
    domString += '<div class="card-body arrow bottom">';
    domString += `<div class="message-body">${message.message}</div>`;
    domString += `<div>${moment(message.timestamp).format('lll')}</div>`;
    domString += `<button id=${message.id}>x</button>`;
    domString += '</div>';
    domString += '</div>';
  });
  utilities.printToDom('message-field', domString);
};


export default { printMessageCards };
