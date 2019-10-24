import $ from 'jquery';
import utilities from '../../helpers/utlities';

import '../../../styles/themeMaps.scss';

const customThemeModal = () => {
  const domString = `
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Themes</button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <label class="btn">
        <input type="radio" name="themeOptions" id="roseTheme"> Rose
      </label>
      <label class="btn">
        <input type="radio" name="themeOptions" id="summerTheme"> Summer
      </label>
      <label class="btn">
        <input type="radio" name="themeOptions" id="purpleTheme" checked> Purple
      </label>
    </div>
  </div>`;
  utilities.printToDom('customThemeModal', domString);
};

const selectCustomTheme = () => {
  const root = $('#appRoot');
  // function that toggles theme in index based on which option is selected within the dropdown menu
  if ($("input[id='purpleTheme']:checked")) {
    root.removeClass();
    root.toggleClass('theme-purple');
  } else if ($("input[id='summerTheme']:checked")) {
    root.removeClass();
    root.toggleClass('theme-summer');
  } else if ($("input[id='roseTheme']:checked")) {
    root.removeClass();
    root.toggleClass('theme-rose');
  }
};

export default { customThemeModal, selectCustomTheme };
