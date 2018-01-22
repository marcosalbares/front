// genera una lista de videos
function generaHTMLVideos(videos) {
	var htmlVideos = '';
	if (videos) for (var i = 0; i < videos.length; i++) {
		htmlVideos += '<li><video controls data-idx="' + i + '" src="' + videos[i] + '"></video></li>';
	}
	return htmlVideos;
}

// para todos los videos (los tag que son video),
function stop_all() {
	var videosInHTML = document.getElementsByTagName('video');
	if (videosInHTML) for (var i = 0; i < videosInHTML.length; i++) {
		videosInHTML[i].pause();
	}
}

// llama la funcion stop_all, y deja reproducir el seleccionado
// viene de botonPlay.onclick con valor -1 (para todos los videos) o num_vid -1
// (para todos menos el valor del input que lo reproduce)
function stopPlayVideo(vidIdx) {
	stop_all();
	var videosInHTML = document.getElementsByTagName('video');
	var elVideo = videosInHTML[vidIdx];
	console.log('video:', vidIdx, elVideo);
	if (elVideo) elVideo.play();
}

function playButton() {
	stop_all();
}

var d = document;
var url = "http://www.mocky.io/v2/5a3d258b310000e822b5940a";
var request = new XMLHttpRequest();
var mis_videos = [];
request.open("GET", url);
request.onload = function () {
    if (request.status == 200) {
		mis_videos = JSON.parse(this.response);
d.getElementById('lista_videos').innerHTML = generaHTMLVideos(mis_videos);
	}
};
request.send(null);


// var mis_videos = ['video.mp4', 'video.mp4', 'video.mp4'];
var botonPlay = d.getElementById('player');

// mete la lista de videos creados en html

// coge el numero del input, le aplica un if para dar valor a la funcion stopPlayVideo:
//  si num_vid <= 0 da -1; si num_vid > 0 da num_vid -1
botonPlay.onclick = function (e) {
	var num_vid = document.getElementById('num_vid').value;
	stopPlayVideo(num_vid > 0 ? num_vid - 1 : -1);
}

// coge el event de darle al pause en alguno de los videos...acabar de hacerlo, añadido x mi
// botonPlay.onclick = function (e) {
// 	var num_vid = document.getElementById('num_vid').value;
// 	stopPlayVideo(num_vid > 0 ? num_vid - 1 : -1);
// }