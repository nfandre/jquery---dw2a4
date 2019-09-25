$(document).ready(function(){
	$("#nome").text("André Nascimento de Freitas");	
	$("#email").text("andrelive.05@hotmail.com");
	$("#telefone").text("11 51458477");
	
	$("#resumoQualificacoes").append("<h3>Resumo Qualificações</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ");
	$("#formacao").text("Formação academica ");
	$("#idioma").text("Inglês");
	
	
	//css
//	$("body").css({
//		"margin":"0px";
//	})
	$("title").text("Curriculo");
	$("header").css({

		"width":"100%",
		"background":"#1abc9c",
		"height":"100px",
		"text-align" : "center",
		"position" : "fixed",
		"top":"0"

	});
	$("main").css({
		"width":"100%",
                "background":"#82FF9F",
                "height":"600px",
		"position" : "static",
		"top":"100"
	});
	$("#experiencias").append("<h3> Experiências </h3>");

	const estExperiencias = "<div class='empresa'> </div> <div class='periodo'></div> <div class='atividade'> </div>";

	$("#experiencias").append("<div id='empresa1'>" +estExperiencias+ "</div>");
	$("#empresa1 .empresa").append("<h4> Gertec </h4");
	$("#empresa1 .periodo").append("<p> 18 de julho de 2019 até 18 de julho de 2020</p>");
	$("empresa1 .atividade").append("<p> Prestar suporte aos clientes</p>");

});
