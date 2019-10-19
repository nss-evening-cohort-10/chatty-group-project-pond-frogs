import $ from 'jquery';

import utilities from '../../helpers/utlities';

const disableButton = () => {
  $('.clear').attr('disabled', true);
};

const clearButton = () => {
  $('body').on('click', '.clear', (e) => {
    e.preventDefault();
    disableButton();
    utilities.printToDom('message-field', '');
  });
};

export default { clearButton };
