5

<!DOCTYPE html>
<html>
<head>
	<title>this is event 5</title>
</head>
<body>

	<<p> press Control-Space to continue.</p>

	<script>
	  
	  window.addEventListener("keydown", event => {

	  	if (event.key == " "  && event.ctrlkey ){

	  		console.log("continuing");
	  	}
	  });


	</script>


</body>
</html>