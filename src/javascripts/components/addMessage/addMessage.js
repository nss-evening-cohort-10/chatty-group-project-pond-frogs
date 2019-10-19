import $ from 'jquery';
import utilities from '../../helpers/utlities';
import './addMessage.scss';

let domString = '';

const printMessage = () => {
  domString += '<div id="message-bubble">';
  domString += '<div class="arrow bottom right"></div>';
  domString += $('#message-input').val();
  domString += '</div>';
  utilities.printToDom('message-field', domString);
};

const addMessage = () => {
  $('body').on('keydown', '#message-input', (e) => {
    console.log(e.key);
    if (e.keyCode === 13) {
      e.preventDefault();
      printMessage();
    }
  });
};
export default { printMessage, addMessage };
