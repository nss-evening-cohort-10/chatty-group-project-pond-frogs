import $ from 'jquery';

import './deleteMessage.scss';

const removeMssg = () => {
  $('.delete').click(() => {
    console.error('you clicked the X');
  });
};

export default { removeMssg };
