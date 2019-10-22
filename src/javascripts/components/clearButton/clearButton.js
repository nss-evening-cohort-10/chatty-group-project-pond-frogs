import $ from 'jquery';

import utilities from '../../helpers/utlities';
import data from '../../helpers/data/messages';

const disableButton = () => {
  $('.clear').attr('disabled', true);
};


const clearButton = () => {
  $('body').on('click', '.clear', (e) => {
    e.preventDefault();
    data.clearMessages();
    disableButton();
    utilities.printToDom('message-field', '');
  });
};


export default { clearButton };
