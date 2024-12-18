let isGoPressed = false;
    let isLeftPressed = false;
    let isRightPressed = false;
    let isBackPressed = false;

    function sendRequest(action) {
      console.log(`Action: ${action}`);
    }

    function startGo() {
        isGoPressed = true;
        document.getElementById('goBtn').src = "gif/go.gif";  // GIFを再生
        sendRequest('Go');  // Goボタンが押された時に即座にコマンドを送信
    }

    function stopGo() {
        isGoPressed = false;
        document.getElementById('goBtn').src = "gif/go_still.png";  // GIFを停止
        sendRequest('StopMovement');  // Goボタンが離された時、移動を停止
    }

    function startLeft() {
        isLeftPressed = true;
        sendRequest('←');  // 左ボタンが押された時に即座にコマンドを送信
    }

    function stopLeft() {
        isLeftPressed = false;
        sendRequest('StopLeft');  // 左ボタンを離した時に停止コマンドを送信
    }

    function startRight() {
        isRightPressed = true;
        sendRequest('→');  // 右ボタンが押された時に即座にコマンドを送信
    }

    function stopRight() {
        isRightPressed = false;
        sendRequest('StopRight');  // 右ボタンを離した時に停止コマンドを送信
    }

    function startBack() {
        isBackPressed = true;
        sendRequest('↓');  // 下ボタンが押された時に即座にコマンドを送信
    }

    function stopBack() {
        isBackPressed = false;
        sendRequest('StopBack');  // 下ボタンを離した時に停止コマンドを送信
    }
