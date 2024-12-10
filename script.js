let isGoPressed = false;
let isLeftPressed = false;
let isRightPressed = false;
let isBackPressed = false;

function sendRequest(action) {
  // Sends HTTP request to control the motor or servo (mock function)
  console.log(`Action: ${action}`);
}

function startGo() {
    isGoPressed = true;
    document.getElementById('goBtn').src = "static/go.gif";  // GIFを再生
    checkButtons();
}

function stopGo() {
    isGoPressed = false;
    document.getElementById('goBtn').src = "static/go_still.png";  // GIFを停止
    stopMovement();
}

function startLeft() {
    isLeftPressed = true;
    checkButtons();
}

function stopLeft() {
    isLeftPressed = false;
    stopMovement();
}

function startRight() {
    isRightPressed = true;
    checkButtons();
}

function stopRight() {
    isRightPressed = false;
    stopMovement();
}

function startBack() {
    isBackPressed = true;
    checkButtons();
}

function stopBack() {
    isBackPressed = false;
    stopMovement();
}

function checkButtons() {
    if (isGoPressed) {
        sendRequest('/GoPress');
    }
    if (isLeftPressed) {
        sendRequest('/LeftPress');
    }
    if (isRightPressed) {
        sendRequest('/RightPress');
    }
    if (isBackPressed) {
        sendRequest('/BackPress');
    }
}

function stopMovement() {
    sendRequest('/StopMovement');
}
