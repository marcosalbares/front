// genera una lista de videos
function generaHTMLVideos(videos) {
	var htmlVideos = '';
	if (videos) for (var i = 0; i < videos.length; i++) {
		htmlVideos += '<li><video controls data-idx="' + i + '" src="' + videos[i] + '"></video></li>';
	}
	return htmlVideos;
}

// para todos los videos (los tag que son video),
function stop_all_except_one(the_one_idx) {
	var videosInHTML = document.getElementsByTagName('video');
	if (videosInHTML) for (let i = 0; i < videosInHTML.length; i++) {
		if (i != the_one_idx){
			 videosInHTML[i].pause();
			 videosInHTML[i].className = "nored";
		}
		
	}
}

// llama la funcion stop_all, y deja reproducir el seleccionado
// viene de botonPlay.onclick con valor -1 (para todos los videos) o num_vid -1
// (para todos menos el valor del input que lo reproduce)
function stopPlayVideo(vidIdx) {
	stop_all_except_one(vidIdx);
	var videosInHTML = document.getElementsByTagName('video');
	var elVideo = videosInHTML[vidIdx];
	console.log('video:', vidIdx, elVideo);
	if (elVideo) elVideo.play();
	if (elVideo) elVideo.className = "pulse";
}


function asociatePlayToStopToVideos() {
	var videosInHTML = document.getElementsByTagName('video');
	if (videosInHTML) for (var i = 0; i < videosInHTML.length; i++) {
		videosInHTML[i].onplay = function (evnt) {
			var idx = parseInt(this.getAttribute('data-idx'));
			document.getElementById('num_vid').value = idx + 1;
			stop_all_except_one(idx);
this.className ="pulse";
		};
	}
}

var d = document;
var mis_videos = ['video.mp4', 'video.mp4', 'video.mp4'];
var botonPlay = d.getElementById('player');

// mete la lista de videos creados en html
d.getElementById('lista_videos').innerHTML = generaHTMLVideos(mis_videos);
asociatePlayToStopToVideos();

// coge el numero del input, le aplica un if para dar valor a la funcion stopPlayVideo:
//  si num_vid <= 0 da -1; si num_vid > 0 da num_vid -1
botonPlay.onclick = function (e) {
	var num_vid = document.getElementById('num_vid').value;
	stopPlayVideo(num_vid > 0 ? num_vid - 1 : -1);
}