import $ from 'jquery';

import '../../../styles/themeMaps.scss';

const darkTheme = () => {
  const root = $('#appRoot');
  root.toggleClass('theme-light');
  root.toggleClass('theme-dark');
};

const changeTheme = () => {
  $('#darkThemeCheck').on('change', darkTheme);
};

export default { changeTheme };
