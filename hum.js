var video=document.querySelector('#videoEl');
function accam(){
navigator.mediaDevices.getUserMedia({video: true}).then(function (stream){
        video.srcObject=stream;
        video.play();
    }).catch(function(err){
        console.log(err.name+':'+err.message);
    });
}

function Vidstop(e) {
    var stream = video.srcObject;
    var tracks = stream.getTracks();  
    for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        track.stop();
    } 
    video.srcObject = null;
}