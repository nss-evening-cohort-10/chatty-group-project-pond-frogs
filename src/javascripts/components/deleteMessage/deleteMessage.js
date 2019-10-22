import $ from 'jquery';

import './deleteMessage.scss';


const deleteMessage = (id) => {
  $('button').on('click').find(id.id).remove();
  console.error(id.id);
};

export default { deleteMessage };
