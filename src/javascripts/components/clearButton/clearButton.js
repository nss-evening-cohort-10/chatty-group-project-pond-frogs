import $ from 'jquery';

import utilities from '../../helpers/utlities';

const clearButton = () => {
  $('body').on('click', '.clear', (e) => {
    e.preventDefault();
    utilities.printToDom('message-field', '');
  });
};

export default { clearButton };
