4

<!DOCTYPE html>
<html>
<head>
	<title>this is event 4</title>
</head>
<body>


	<p> this page turns blue when you hold  F key. </p>


	<script>
		
	window.addEventListener("keydown", event => {

     if ( event.key == "v") {

     	document.body.style.background = "blue";

     } 

	});

	window.addeventListener("keyup", event => {

		if (event.key == "v") {

			document.body.style.background = "green";

		}


	});




	
</script>

</body>
</html>