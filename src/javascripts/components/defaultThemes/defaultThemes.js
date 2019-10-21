import $ from 'jquery';

import '../../../styles/themeMaps.scss';

const darkTheme = () => {
  console.log('clicked button');
  const root = $('#appRoot');
  root.toggleClass('theme-light');
  root.toggleClass('theme-dark');
};

const changeTheme = () => {
  $('#darkThemeCheck').on('change', darkTheme);
};

export default { changeTheme };
