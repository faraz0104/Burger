Event.js

<!DOCTYPE html>
<html>
<head>
	<title> faraz event 1 </title>
</head>
<body>

<<button>F</button>
<<button>G</button>
<<button>H</button>


</body>
<script>
document.body.addEventListener(t"click"' event => {

	if(event.target.nodeName == "BUTTON"){

console.log("clicked",event.target.textContent);


}else{


	console.log("clicked body");

}
	

	


});

</script>



</html>

