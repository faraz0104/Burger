js2

<!DOCTYPE html>
<html>
<head>
	<title>this is event 2</title>
	</title>
</head>
<body>
<<span>
	this is spam
	<<p>
		a paragraph with 
		<<button> Button</button>
	</p>
</span>

<<script>
	

let para = document.querySelector("p");
let button = document.query("button");
let spam = document.query("spam");

 span.addEventListener("mousedown", () => {  
 	console.log("click for spam");


 });

button.addEventListener("mousedown",() =>{
	console.log("click fore button);

});

	para.addeventListener("mousedown", event => {
		console.log("click fo para");
		event.stopPropagation();
	});





</script>

</body>
</html>