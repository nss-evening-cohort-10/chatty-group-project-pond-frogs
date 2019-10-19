import $ from 'jquery';

const clearButton = () => {
  $().remove('#message-field').click('.clear');
};

export default { clearButton };
