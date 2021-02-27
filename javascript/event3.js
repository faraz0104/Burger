2

<!DOCTYPE html>
<html>
<head>
	<title>this event 3</title>
</head>
<body>


<<a href="https://www.facebook.com/">FB</a>

<script>


	let link = document.query("a");

	link.addEventListener("click", event => {

		console.log("No input");

		event.stopPropagation();

	});
	



</script>








</body>
</html>