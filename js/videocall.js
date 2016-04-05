$(document).ready(function() {

    // grab the room from the URL
    var room = location.search && location.search.split('?')[1];

    var webrtc = new SimpleWebRTC({
        // the id/element dom element that will hold "our" video
        localVideoEl: 'localVideo',
        // the id/element dom element that will hold remote videos
        remoteVideosEl: '',
                // immediately ask for camera access
        autoRequestMedia: true,
        debug: false,
        detectSpeakingEvents: true,
        autoAdjustMic: false
    });

    // we have to wait until it's ready
    webrtc.on('readyToCall', function () {
        // you can name it anything
        webrtc.joinRoom(room);
    });

    var txt_nombre = $('#txt_nombre');
    var btn_generate = $('#btn_generate');
    var txt_url = $('#text_url');

    function setRoom(name) {
        $('h1').text(name);
        $('#subTitle').text('Link para conectarse: ' + location.href);
    }

    if (room) {
        setRoom(room);
        $('#remoteVideos').css('display','block');
    }

    btn_generate.click(function() {
        var newUrl = location.pathname + '?' + txt_nombre.val();
        history.replaceState({foo: 'bar'}, null, newUrl);
        window.location.reload(true);
    });



});

