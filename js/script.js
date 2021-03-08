//Global Scope Below
//==============================================
let giphyData;
//Cached Elements Below
//=============================================
const $type = $('#type');
const $data = $('#data');
const $url = $('#url');
const $source = $('#source');
const $title = $('#title');
const $import_datetime = $('#import_datetime');
const $images = $('#images');
const $input = $('input[type="text"]');
const API_KEY = "faDIY2s2qEE7TYxt8LFtNyGnHAfmvFyA";
const BASE_URL = "https://api.giphy.com/v1/gifs/search";
const $refresh= $('#refresh');



//Event Listeners Below
//====================================
$('form').on('submit', handleSubmit);
$refresh.click(function() {
  location.reload();
});

// Functions below is to collect data from the AJAX request and render to the DOM
//==============================
function handleSubmit(evt) {
  evt.preventDefault();

  const term = $input.val();
  $input.val('');

$.ajax(BASE_URL + "?api_key=" + API_KEY + "&q=" + term)
  .then(function(data) {
  
    giphyData = data;
    render();
    console.log('giphyData', giphyData);
  }, function(error) {

  });
  $.ajax(
		'https://api.giphy.com/v1/gifs/search?api_key=faDIY2s2qEE7TYxt8LFtNyGnHAfmvFyA&q=' +
			term +
			'&limit=25&offset=0&rating=g&lang=en'
	)
  
}



function render () {
  if(giphyData) {
    $data.text(giphyData.data.url);
    $type.text(giphyData.type);
    $url.text(giphyData.data[0].url);
    $title.text(giphyData.data[0].title);
    $import_datetime.text(giphyData.import_datetime);
    $images.attr({ src: giphyData.data[0].images.downsized_large.url});

    
  }
}
