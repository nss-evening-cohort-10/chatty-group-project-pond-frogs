import $ from 'jquery';

import utilities from '../../helpers/utlities';
import data from '../../helpers/data/messages';

const disableButton = () => {
  $('.clear').attr('disabled', true);
};


const clearButton = () => {
  $('body').on('click', '.clear', (e) => {
    const newArr = data.messages();
    newArr.splice(0, newArr.length);
    e.preventDefault();
    disableButton();
    utilities.printToDom('message-field', '');
  });
};


export default { clearButton };
