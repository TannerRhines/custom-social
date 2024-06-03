const loginContainer = document.getElementById('loginContainer');

function getRandomSize() {
    const minSize = 300; // Minimum width and height
    const maxSize = 500; // Maximum width and height
    return Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
}


// get random colors from array 
function getRandomColor() {
    const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6fs'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomOpacity() {
    const minOpacity = 0.25; // Minimum opacity (25%)
    const maxOpacity = 1.0; // Maximum opacity (100%)
    return (Math.random() * (maxOpacity - minOpacity) + minOpacity).toFixed(2);
}

// apply random colors to login container
function applyRandomStyles() {
    const width = getRandomSize();
    const height = getRandomSize();
    const backgroundColor = getRandomColor();
    const opacity = getRandomOpacity();
    loginContainer.style.width = `${width}px`;
    loginContainer.style.height = `${height}px`;
    loginContainer.style.backgroundColor = backgroundColor;
    loginContainer.style.opacity = opacity;
}

// Apply initial random styles
applyRandomStyles();

// Change styles every 3 seconds by calling applyRandomStyles every 3 seconds. lol 
setInterval(applyRandomStyles, 3000);
