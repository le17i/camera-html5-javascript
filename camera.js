var video, canvas, context, localMediaStream;
	
	//Tira foto.
	function snapshot(){
		if (localMediaStream) {
     		context.drawImage(video, 0, 0, canvas.width, canvas.height);
			document.querySelector('img').src = canvas.toDataURL('image/webp');
		  }
	}
	
	//Fallback de erro a função getUserMedia.
	function userMediaError(){
		console.log("Camera HTML5+JS", "Desculpa! Seu navegador não apresenta suporte.");
	}
	
	window.onload = function()
	{
		if(!!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia)){
			video = document.getElementById('video');
			canvas = document.getElementById('canvas');
			context = canvas.getContext('2d');
		}
		else
		{
			alert("Desculpa! Seu navegador não apresenta suporte.");
		}
	};
	
	navigator.getMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);
					   
	navigator.getMedia({video: true}, function(stream) {
	  video.src = window.URL.createObjectURL(stream);
	  localMediaStream = stream;
	}, userMediaError());