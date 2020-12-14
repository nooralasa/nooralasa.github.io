var theme = '';

function setDarkTheme(styles) {
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

    document.querySelectorAll('.theme-switch').forEach(
        checkBox => { checkBox.checked = true; }
    );
};

function setLightTheme(styles) {
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

    document.querySelectorAll('.theme-switch').forEach(
        checkBox => { checkBox.checked = false; }
    );
}

function switchTheme(checkboxElem) {
    if (checkboxElem.checked) {
        setDarkTheme();
    } else {
        setLightTheme();
    }
}

var currentTime = new Date();
var hours = currentTime.getHours();

// Set to light theme if between 7am and 7pm
if (hours > 6 && hours < 18) {
    setLightTheme();
} else {
    setDarkTheme();
}

// Load or remove tsParticles on random page
var particlesVisible = false;

$('#particle-btn').on('click', function() {
    if (particlesVisible) {
        // remove tsParticles Canvas
        var parent = document.getElementById('tsparticles');
        var child = document.getElementsByTagName('canvas')[0];
        parent.removeChild(child);

        document.getElementById('particle-btn').innerHTML = "<h1>Don't Click Me</h1>";

        particlesVisible = false;
    } else {
        // Load tsParticles
        var particleColor = theme=='light' ? '#656ab8' : '#7B81E1';
        tsParticles.load("tsparticles", {"autoPlay":true,"background":{"color":{},"image":"","position":"50% 50%","repeat":"no-repeat","size":"cover","opacity":1},"backgroundMask":{"composite":"destination-out","cover":{"color":{"value":"#fff"},"opacity":1},"enable":false},"backgroundMode":{"enable":false,"zIndex":-1},"detectRetina":true,"fpsLimit":60,"infection":{"cure":false,"delay":0,"enable":false,"infections":0,"stages":[]},"interactivity":{"detectsOn":"canvas","events":{"onClick":{"enable":true,"mode":"push"},"onDiv":{"selectors":[],"enable":false,"mode":[],"type":"circle"},"onHover":{"enable":true,"mode":"grab","parallax":{"enable":true,"force":60,"smooth":10}},"resize":true},"modes":{"attract":{"distance":200,"duration":0.4,"speed":1},"bounce":{"distance":200},"bubble":{"distance":400,"duration":2,"opacity":0.8,"size":40},"connect":{"distance":80,"links":{"opacity":0.5},"radius":60},"grab":{"distance":400,"links":{"blink":false,"consent":false,"opacity":1}},"light":{"area":{"gradient":{"start":{"value":"#ffffff"},"stop":{"value":"#000000"}},"radius":1000},"shadow":{"color":{"value":"#000000"},"length":2000}},"push":{"quantity":4},"remove":{"quantity":2},"repulse":{"distance":200,"duration":0.4,"speed":1},"slow":{"factor":3,"radius":200},"trail":{"delay":1,"quantity":1}}},"manualParticles":[],"motion":{"disable":false,"reduce":{"factor":4,"value":false}},"particles":{"bounce":{"horizontal":{"random":{"enable":false,"minimumValue":0.1},"value":1},"vertical":{"random":{"enable":false,"minimumValue":0.1},"value":1}},"collisions":{"bounce":{"horizontal":{"random":{"enable":true,"minimumValue":0.1},"value":1},"vertical":{"random":{"enable":true,"minimumValue":0.1},"value":1}},"enable":true,"mode":"bounce"},"color":{"value":particleColor,"animation":{"enable":false,"speed":1,"sync":true}},"life":{"count":0,"delay":{"random":{"enable":false,"minimumValue":0},"value":0,"sync":false},"duration":{"random":{"enable":false,"minimumValue":0.0001},"value":0,"sync":false}},"links":{"blink":false,"color":{"value":particleColor},"consent":false,"distance":150,"enable":true,"frequency":1,"opacity":0.4,"shadow":{"blur":5,"color":{"value":"#00ff00"},"enable":false},"triangles":{"enable":false,"frequency":1},"width":1,"warp":false},"move":{"angle":{"offset":45,"value":90},"attract":{"enable":false,"rotate":{"x":600,"y":1200}},"direction":"none","distance":0,"enable":true,"gravity":{"acceleration":9.81,"enable":false,"maxSpeed":50},"noise":{"delay":{"random":{"enable":false,"minimumValue":0},"value":0},"enable":false},"outModes":{"default":"out","bottom":"out","left":"out","right":"out","top":"out"},"random":false,"size":false,"speed":2,"straight":false,"trail":{"enable":false,"length":10,"fillColor":{"value":"#000000"}},"vibrate":false,"warp":false},"number":{"density":{"enable":true,"area":800,"factor":1000},"limit":0,"value":100},"opacity":{"random":{"enable":true,"minimumValue":0.1},"value":0.5,"animation":{"enable":true,"minimumValue":0.1,"speed":3,"sync":false}},"reduceDuplicates":false,"rotate":{"random":{"enable":false,"minimumValue":0},"value":0,"animation":{"enable":false,"speed":0,"sync":false},"direction":"clockwise","path":false},"shadow":{"blur":0,"color":{"value":"#000000"},"enable":false,"offset":{"x":0,"y":0}},"shape":{"options":{"polygon":{"nb_sides":5},"star":{"nb_sides":5},"image":{"src":"https://cdn.matteobruni.it/images/particles/github.svg","width":100,"height":100},"images":{"src":"https://cdn.matteobruni.it/images/particles/github.svg","width":100,"height":100}},"type":"circle"},"size":{"random":{"enable":true,"minimumValue":1},"value":10,"animation":{"destroy":"none","enable":true,"minimumValue":0.1,"speed":20,"startValue":"max","sync":false}},"stroke":{"width":0,"color":{"value":"#000000","animation":{"enable":false,"speed":1,"sync":true}}},"twinkle":{"lines":{"enable":false,"frequency":0.05,"opacity":1},"particles":{"enable":false,"frequency":0.05,"opacity":1}}},"pauseOnBlur":true,"pauseOnOutsideViewport":false,"themes":[]});
        
        document.getElementById('particle-btn').innerHTML = "<h1>Stop this Madness</h1>";

        particlesVisible = true;
    }  
});