import utilities from '../../helpers/utlities';
import seedData from '../../helpers/data/messages';

import './displayMessages.scss';

const printMessageCards = () => {
  const messages = seedData.messages();
  let domString = '';
  messages.forEach((message) => {
    domString += '<div class="card col-5">';
    domString += '<div class="card-body arrow bottom">';
    domString += `<div class="message-body">${message.message}</div>`;
    domString += `<div>${message.timestamp}</div>`;
    domString += '</div>';
    domString += '</div>';
  });
  utilities.printToDom('message-field', domString);
};


export default { printMessageCards };
