(function() {
    var video_cont = document.getElementById("video-container");
    var video = document.getElementById("video");
    var playButton = document.getElementById("play-pause");
    var muteButton = document.getElementById("mute");
    var fullScreenButton = document.getElementById("full-screen");
    var controlls = document.getElementById("video-controls");
    var seekBar = document.getElementById("seek-bar");
    var volumeBar = document.getElementById("volume-bar");

    function hlsStreamVideo() {
        var videoSrc = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
        if (Hls.isSupported()) {
            var hls = new Hls();
            hls.loadSource(videoSrc);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function() {
                video.play();
            });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = videoSrc;
            video.addEventListener('loadedmetadata', function() {
                video.play();
            });
        }
    }

    playButton.addEventListener("click", function() {
        if (video.paused == true) {
            video.play();
            playButton.innerHTML = "Pause";
        } else {
            video.pause();
            playButton.innerHTML = "Play";
        }
    });

    fullScreenButton.addEventListener("click", function() {
        if (video_cont.requestFullscreen) {
            video_cont.requestFullscreen();
        } else if (video_cont.mozRequestFullScreen) {
            video_cont.mozRequestFullScreen(); // мозила
        } else if (video_cont.webkitRequestFullscreen) {
            video_cont.webkitRequestFullscreen(); // хром сафари
        }
    });

    seekBar.addEventListener("change", function() {
        var time = video.duration * (seekBar.value / 100);

        video.currentTime = time;
    });

    video.addEventListener("timeupdate", function() {
        var value = (100 / video.duration) * video.currentTime;

        seekBar.value = value;
    });

    seekBar.addEventListener("mousedown", function() {
        video.pause();
    });

    seekBar.addEventListener("mouseup", function() {
        video.play();
    });

    volumeBar.addEventListener("change", function() {
        video.volume = volumeBar.value;
    });

    muteButton.addEventListener("click", function() {
        if (video.volume > 0) {
            video.volume = 0;
            muteButton.innerHTML = "Sound";
            volumeBar.value = video.volume;
        } else if (video.volume == 0) {
            video.volume = 1;
            muteButton.innerHTML = "Mute";
            volumeBar.value = video.volume;
        }
    });

    video.addEventListener("click", function() {
        if (video.paused == true) {
            video.play();
            playButton.innerHTML = "Pause";
        } else {
            video.pause();
            playButton.innerHTML = "Play";
        }
    })

    video.addEventListener("dblclick", function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen(); // мозила
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen(); // хром сафари
        }
    })

    hlsStreamVideo();
})()