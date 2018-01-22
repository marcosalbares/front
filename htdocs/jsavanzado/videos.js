function initAll() {
    var url1 = "http://www.mocky.io/v2/5a62141b3100004828de7ed7";

    // agrega titulo video y video importados de la url al html
    function displayVideos(data) {
        $.each(data, function (index, val) {
            $('#lista_videos').append('<li><h2>' + val.title + '</h2><video src="' + val.url + '"></video></li>');
        });
    }

    // crea o reescribe en la memoria local la data de 'videos'
    function saveStorage(data) {
        window.localStorage.setItem('videos', JSON.stringify(data));
    }

    function loadFromLocalStorage() {
        // coje de la memoria local la data de 'videos'
        var data = window.localStorage.getItem('videos');

        // if (data) displayVideos(JSON.parse(data));

        setTimeout(function (argument) {
            $.get(url1, function (data) {
                console.log(data);
                saveStorage(data);
                displayVideos(data);
            });
        }, 300);
    }
    loadFromLocalStorage();
}
initAll();

// $('#btn').click(function (e) {
//     e.preventDefault();
//     var insta = $('#lbltitulo'.value);
//     console.log(insta);
//     console.log('ola');
//     // window.localStorage.setItem('videos', JSON.stringify(data));
// });

