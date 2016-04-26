function buttonPressed() {
	console.log("hello");
    $.ajax({
        url: '/buttonPressed',
        dataType: 'JSON',
        success: function (data, status, jqXHR) {
        	console.log("world");
            $('#status').html("Ok");
            setTimeout(function() {
	            $('#status').html("Ready");
            }, 1000);
        }
    });
}
