var theme = '';

function setDarkTheme() {
    theme = 'dark';

    var styles = document.body.style;
    styles.setProperty('--background', '#1d1e21');
    styles.setProperty('--page-background', '#2C2A2D');
    styles.setProperty('--text', '#e0e0e0');
    styles.setProperty('--text-heading', '#beb7c2');
    styles.setProperty('--text-secondary', '#d1d0d3');
    styles.setProperty('--text-emphasized', '#7B81E1');
    styles.setProperty('--modal-subtle', '#434244');
    styles.setProperty('--modal-dark', '#414376');
    styles.setProperty('--modal-light', '#6063a5');
    styles.setProperty('--icon-secondary', '#4f4f64');
    styles.setProperty('--menu-button', '#a3a0ac');
};

function setLightTheme() {
    theme = 'light';

    var styles = document.body.style;
    styles.setProperty('--background', '#E8E8E8');
    styles.setProperty('--page-background', '#e0e0e0');
    styles.setProperty('--text', '#000000');
    styles.setProperty('--text-heading', '#645f64');
    styles.setProperty('--text-secondary', '#504E50');
    styles.setProperty('--text-emphasized', '#656ab8');
    styles.setProperty('--modal-subtle', '#CDCCCD');
    styles.setProperty('--modal-dark', '#8A8DC3');
    styles.setProperty('--modal-light', '#A0A3DC');
    styles.setProperty('--icon-secondary', '#4a494b');
    styles.setProperty('--menu-button', '#88868a');
};

var currentTime = new Date();
var hours = currentTime.getHours();

// Set to light theme if between 7am and 7pm
if (hours > 6 && hours < 18) {
    setLightTheme();
} else {
    setDarkTheme();
}