$('#btn').bind("click", function (evnt) {
    evnt.preventDefault();
    var arr = [];
    $('input , input:checked').each(function () { console.log(this.name, this.value);
        arr.push = this.value;
     });
     console.log(arr);
});


// JS de Ricardo
// http://jsbin.com/zazisonozo/1/edit?html,js,output
// var valores={};
// $('form button').click(function(evnt){
// 	evnt.preventDefault();

//Para inputs chkbox y radio
// 	$('form input:checked[type=checkbox],form input:checked[type=radio]').each(function(){
// 		valores[this.name]=(valores[this.name]?valores[this.name]+',':'')+this.value;
// 	});

//Resto de inputs
// 	$('form input').not('form input[type=checkbox],form input[type=radio]').each(function(){
// 		valores[this.name]=(valores[this.name]?valores[this.name]+',':'')+this.value;
// 	});
// 	$('form textarea,form select').each(function(){
// 		valores[this.name]=this.value;
// 	});
// 	console.log(valores);
// })


// HTML de Ricardo
// <!DOCTYPE html>
// <html lang="en">
// <head>
// 	<meta charset="UTF-8">
// 	<title>Document</title>
// 	<link rel="stylesheet" href="css/styles.css">
// </head>
// <body>

// 	<h1>Título de la página</h1>

// 	<section>
// 		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, fugit, voluptatum. Aperiam aliquid quam fugit, perspiciatis sint ad, neque animi illo, et laboriosam cum in nostrum eius architecto, rem velit?</p>
// 		<article>
// 			<h3>gatito 1</h3>
// 			<img src="imgs/gatito1.jpg" alt="Gato 1">
// 			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, fugit, voluptatum. Aperiam aliquid quam fugit, perspiciatis sint ad, neque animi illo, et laboriosam cum in nostrum eius architecto, rem velit?</p>
// 		</article>
// 		<article>
// 			<h3>gatito 2</h3>
// 			<img src="imgs/gatito2.jpg" alt="Gato 2">
// 			<p>Eos impedit, alias, officiis nisi sapiente explicabo! Aperiam quas illum tempora harum perferendis odio nesciunt dolore voluptatum. Reprehenderit facilis, dolorum culpa ducimus, asperiores inventore optio quae placeat doloremque rerum quidem.</p>
// 		</article>
// 		<article>
// 			<h3>gatito 3</h3>
// 			<img src="imgs/gatito3.jpg" alt="Gato 3">
// 			<p>Iure at nihil repudiandae, perferendis nulla cupiditate assumenda voluptates. Sapiente iste atque eligendi nemo itaque, magnam hic labore, nobis corrupti saepe, libero! Dolor temporibus, dolorem excepturi incidunt accusamus molestias rerum.</p>
// 		</article>
// 		<article>
// 			<h3>gatito 4</h3>
// 			<img src="imgs/gatito4.jpg" alt="Gato 4">
// 			<p>Quisquam labore, aliquid aperiam maiores nesciunt dolorum consectetur nisi sequi dicta officia ab temporibus adipisci iure, consequatur officiis voluptates ipsum voluptatum possimus odit incidunt tempore deserunt quasi velit doloribus architecto!</p>
// 		</article>
// 		<article>
// 			<h3>gatito 5</h3>
// 			<img src="imgs/gatito5.jpg" alt="Gato 5">
// 			<p>Obcaecati nam beatae fugiat labore ducimus suscipit rem explicabo voluptatum eius autem tempore animi ipsum, numquam vero aspernatur officiis porro, odio doloribus, ipsam dolore perferendis. Aperiam alias ad magni recusandae!</p>
// 		</article>
// 	</section>

// 	<section>
// 		<form action="direccion_envio.html" method="GET" autocomplete="off">

			
// 			<div>
// 				<label for="idnombre">Tu nombre</label>
// 				<input type="text" name="nombre" id="idnombre" placeholder="nombre" value="Ric" maxlength="30" pattern="[A-Z][a-z]*"  spellcheck>
// 			</div>

// 			<div>
// 				<label for="idedad">Tu edad</label>
// 				<input type="number" name="edad" id="idedad" placeholder="Tu edad" min="14" max="99" value="33" autofocus>
// 			</div>

// 			<div>
// 				<label for="idemail">Tu Email</label>
// 				<input type="email" name="email" id="idemail" placeholder="email" required="true" value="e@e">
// 			</div>

// 			<div>
// 				<label for="idvida">Tu vida</label>
// 				<textarea name="vida" id="idvida">rrrr</textarea>
// 			</div>
			
// 			<div>
// 				<label for="idempl">Num empleados</label>
// 				<select name="empleados" id="idempl" >
// 					<option value="2345">Arturo</option>
// 					<option value="1345" selected="true">Ginebra</option>
// 					<option value="9876">Lancelot</option>
// 				</select>
// 			</div>

// 			<div>
// 				<h3>Tu color favorito:</h3>
// 				<div>
// 					<label for="idrojo">rojo</label>
// 					<input type="checkbox" name="color" id="idrojo" value="rojo">
// 				</div>
// 				<div>
// 					<label for="idazul">azul</label>
// 					<input type="checkbox" name="color" id="idazul" value="azul">
// 				</div>
// 				<div>
// 					<label for="idverde">verde</label>
// 					<input type="checkbox" name="color" id="idverde" value="verde">
// 				</div>
// 			</div>


// 			<div>
// 				<h3>Tu color favorito:</h3>
// 				<div>
// 					<label for="idrojor">rojo</label>
// 					<input type="radio" name="colorfab" id="idrojor" value="rojo">
// 				</div>
// 				<div>
// 					<label for="idazulr">azul</label>
// 					<input type="radio" name="colorfab" id="idazulr" value="azul">
// 				</div>
// 				<div>
// 					<label for="idverder">verde</label>
// 					<input type="radio" name="colorfab" id="idverde"r value="verde">
// 				</div>
// 			</div>


// 			<button>Enviar</button>
// 		</form>
	
// </body>
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  
// </html>