(function() {
    let main_container = document.getElementById('video-container');
    main_container.innerHTML += "<video id='video' width='640' height='365' controls='controls'></video>";
    main_container.innerHTML += "<div id='video-controls'><button type='button' id='play-pause'>Play</button><input type='range' id='seek-bar' value='0'><button type='button' id='mute'>Mute</button><input type='range' id='volume-bar' min='0' max='1' step='0.1' value='1'><button type='button' id='full-screen'>Full</button></div>";
})()