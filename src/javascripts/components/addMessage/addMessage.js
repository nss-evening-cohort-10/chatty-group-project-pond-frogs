import $ from 'jquery';
import utilities from '../../helpers/utlities';

let domString = '';

const printMessage = () => {
  domString += $('#message-input').val();
  utilities.printToDom('message-flow', domString);
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
