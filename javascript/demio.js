demo1

<!DOCTYPE html>
<html>
<head>
	<title>this is a demo</title>
</head>
<body>

<<div id="parent_div">
	i am parent

	<<div id="child_div">
		i am child
		<<button>Button</button>
	</div>
	
</div>

<script>
	let button = document.querySelector("button")
	button.addEventListener("mousedown",(event) =>{
	 
    console.log("button clicked");


	});
	

	let child_div = document.querySelector("#child_div")
	child_div.addEventListener("mousedown",(event)  => ){
		console.log("child_div clicked");
		evcent.stopPropagation();

	});

   let parent_div = document.querySelector("#parent_div")
   parent_div.addEventListener("mousedown",(event) =>){

   	console.log("parent clicked");

   });



</script>

</body>
</html>