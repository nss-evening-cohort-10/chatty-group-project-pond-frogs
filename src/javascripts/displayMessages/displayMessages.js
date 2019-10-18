import utilities from '../helpers/utlities';
import seedData from '../helpers/data/messages';

import './displayMessages.scss';

const printMessageCards = () => {
  const messages = seedData.messages();
  let domString = '';
  messages.forEach((message) => {
    domString += '<div class="card col-3">';
    domString += '<div class="card-body">';
    domString += `<div>${message.message}</div>`;
    domString += '</div>';
    domString += '</div>';
  });
  utilities.printToDom('message-field', domString);
};

export default { printMessageCards };
