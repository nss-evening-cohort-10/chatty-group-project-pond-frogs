import $ from 'jquery';
import utilities from '../../helpers/utlities';
import seedData from '../../helpers/data/messages';
import './displayMessages.scss';

const printMessageCards = () => {
  const messages = seedData.messages();
  let domString = '';
  messages.forEach((message) => {
    domString += '<div class="card col-5">';
    domString += '<div class="card-body arrow bottom">';
    domString += `<button class="btn delete" id="${message.id}"><i class="fas fa-times-circle"></i></button>`;
    domString += `<div class="message-body">${message.message}</div>`;
    domString += `<div>${message.timestamp}</div>`;
    domString += '</div>';
    domString += '</div>';
  });
  utilities.printToDom('message-field', domString);
};


const deleteMessage = () => {
  $('body').on('click', '.delete', (e) => {
    let messageId = '';
    if (e.target.classList.contains('fas')) {
      messageId = $(e.target).parent()[0].id;
    } else {
      messageId = e.target.id;
    }
    seedData.deleteMessage(messageId);
    printMessageCards();
  });
};


export default { printMessageCards, deleteMessage };
