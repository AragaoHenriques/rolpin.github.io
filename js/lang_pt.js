/*
Theme Name: Oli
Description: Coming Soon
Author: Bluminethemes
Theme URI: http://bluminethemes.com/preview/themeforest/html/oli/
Author URI: http://themeforest.net/user/Bluminethemes
Version: 1.3.1
*/

(function ($) {
	"use strict";

	
	//BEGIN DOCUMENT.READY FUNCTION
	jQuery(document).ready(function($) {

		
        document.getElementById('initLabel').innerHTML = "Início";
        document.getElementById('compLabel').innerHTML = "Empresa";
        document.getElementById('prodLabel').innerHTML = "Produtos";
        document.getElementById('contLabel').innerHTML = "Contactos";
        document.getElementById('sugsLabel').innerHTML = "Sugestões";
        
        /*document.getElementById('missaoLbl').innerHTML = "Missão:";
        document.getElementById('missaoTextLbl').innerHTML = "Fornecer os melhores e mais atuais produtos do setor no mercado nacional e internacional.";
        document.getElementById('visaoLbl').innerHTML = "Visão:";
        document.getElementById('visaoTextLbl').innerHTML = " Expandir continuamente o volume de negócios com vista na contínua conquista do mercado nacional e dos mercados de exportação.";
        document.getElementById('objLbl').innerHTML = "Objectivo:";
        document.getElementById('objTextLbl').innerHTML = " Fazer chegar aos nossos clientes produtos de elevada qualidade, adaptados às suas necessidades e sempre ao preço mais competitivo.";*/
        
        document.getElementById('companyFirst').innerHTML = "Com 20 anos de experiência e 2000 m2 de instalações equipadas com a tecnologia mais vanguardista a nível nacional, a ROLPIN foi já considerada PME líder por 3 anos consecutivos e PME excelência em 2014, sendo a empresa número 1 do setor.";
        document.getElementById('companySecond').innerHTML = "Entre o fim dos anos 80 e o início dos anos 90, da produção artesanal de garagem dos fundadores, começava a surgir um negócio familiar na área da indústria de rolos de pintura e acessórios destinados à construção civil. Muito trabalho e dedicação, que de resto são princípios pelos quais a empresa se pauta, proporcionaram a expansão do modesto armazém inicial de 300 m2.";
        document.getElementById('companyThird').innerHTML = "Atualmente, sediada na zona industrial de Gulpilhares e com uma capacidade de produção superior a 2 milhões de unidades anuais, oferece uma ampla gama de produtos, garantindo a máxima qualidade desde a matéria-prima ao embalamento." ;
        
		
		
		document.getElementsByName('descr')[0].innerHTML = "Descrição:";
        document.getElementsByName('descr')[1].innerHTML = "Descrição:";
        document.getElementsByName('descr')[2].innerHTML = "Descrição:";
        document.getElementsByName('descr')[3].innerHTML = "Descrição:";
        document.getElementsByName('descr')[4].innerHTML = "Descrição:";
        document.getElementsByName('descr')[5].innerHTML = "Descrição:";
        document.getElementsByName('descr')[6].innerHTML = "Descrição:";
        document.getElementsByName('descr')[7].innerHTML = "Descrição:";
        document.getElementsByName('descr')[8].innerHTML = "Descrição:";
        document.getElementsByName('descr')[9].innerHTML = "Descrição:";
        document.getElementsByName('descr')[10].innerHTML = "Descrição:";
        //document.getElementsByName('descr')[11].innerHTML = "Descrição:";
        
        
		document.getElementsByName('spTecido')[0].innerHTML = "Tecido";
        document.getElementsByName('spTecido')[1].innerHTML = "Tecido";
        document.getElementsByName('spTecido')[2].innerHTML = "Tecido";
        document.getElementsByName('spTecido')[3].innerHTML = "Tecido";
        document.getElementsByName('spTecido')[4].innerHTML = "Tecido";
        document.getElementsByName('spTecido')[5].innerHTML = "Tecido";
        document.getElementsByName('spTecido')[6].innerHTML = "Tecido";
        document.getElementsByName('spTecido')[7].innerHTML = "Tecido";
        document.getElementsByName('spTecido')[8].innerHTML = "Tecido";
        document.getElementsByName('spTecido')[9].innerHTML = "Tecido";
        document.getElementsByName('spTecido')[10].innerHTML = "Tecido";
        //document.getElementsByName('spTecido')[11].innerHTML = "Tecido";
		
		document.getElementsByName('spAltura')[0].innerHTML = "Altura";
        document.getElementsByName('spAltura')[1].innerHTML = "Altura";
        document.getElementsByName('spAltura')[2].innerHTML = "Altura";
        document.getElementsByName('spAltura')[3].innerHTML = "Altura";
        document.getElementsByName('spAltura')[4].innerHTML = "Altura";
        document.getElementsByName('spAltura')[5].innerHTML = "Altura";
        document.getElementsByName('spAltura')[6].innerHTML = "Altura";
        document.getElementsByName('spAltura')[7].innerHTML = "Altura";
        document.getElementsByName('spAltura')[8].innerHTML = "Altura";
        document.getElementsByName('spAltura')[9].innerHTML = "Altura";
        document.getElementsByName('spAltura')[10].innerHTML = "Altura";
        //document.getElementsByName('spAltura')[11].innerHTML = "Altura";
        
		
		document.getElementsByName('spCor')[0].innerHTML = "Cor";
        document.getElementsByName('spCor')[1].innerHTML = "Cor";
        document.getElementsByName('spCor')[2].innerHTML = "Cor";
        document.getElementsByName('spCor')[3].innerHTML = "Cor";
        document.getElementsByName('spCor')[4].innerHTML = "Cor";
        document.getElementsByName('spCor')[5].innerHTML = "Cor";
        document.getElementsByName('spCor')[6].innerHTML = "Cor";
        document.getElementsByName('spCor')[7].innerHTML = "Cor";
        document.getElementsByName('spCor')[8].innerHTML = "Cor";
        document.getElementsByName('spCor')[9].innerHTML = "Cor";
        document.getElementsByName('spCor')[10].innerHTML = "Cor";
        //document.getElementsByName('spCor')[11].innerHTML = "Cor";
		
		document.getElementsByName('spApp')[0].innerHTML = "Aplicação:";
        document.getElementsByName('spApp')[1].innerHTML = "Aplicação:";
        document.getElementsByName('spApp')[2].innerHTML = "Aplicação:";
        document.getElementsByName('spApp')[3].innerHTML = "Aplicação:";
        document.getElementsByName('spApp')[4].innerHTML = "Aplicação:";
        document.getElementsByName('spApp')[5].innerHTML = "Aplicação:";
        document.getElementsByName('spApp')[6].innerHTML = "Aplicação:";
        document.getElementsByName('spApp')[7].innerHTML = "Aplicação:";
        document.getElementsByName('spApp')[8].innerHTML = "Aplicação:";
        document.getElementsByName('spApp')[9].innerHTML = "Aplicação:";
        document.getElementsByName('spApp')[10].innerHTML = "Aplicação:";
        //document.getElementsByName('spApp')[11].innerHTML = "Aplicação:";
		
		document.getElementsByName('spRoloR')[0].innerHTML = "Rolo";
        document.getElementsByName('spRoloR')[1].innerHTML = "Rolo";
        document.getElementsByName('spRoloR')[2].innerHTML = "Rolo";
        document.getElementsByName('spRoloR')[3].innerHTML = "Rolo";
        document.getElementsByName('spRoloR')[4].innerHTML = "Rolo";
        document.getElementsByName('spRoloR')[5].innerHTML = "Rolo";
        document.getElementsByName('spRoloR')[6].innerHTML = "Rolo";
        document.getElementsByName('spRoloR')[7].innerHTML = "Rolo";
        document.getElementsByName('spRoloR')[8].innerHTML = "Rolo";
        document.getElementsByName('spRoloR')[9].innerHTML = "Rolo";
        document.getElementsByName('spRoloR')[10].innerHTML = "Rolo";
        //document.getElementsByName('spRoloR')[11].innerHTML = "Rolo";
        
		document.getElementsByName('spRoloC')[0].innerHTML = "Carga Rolo";
        document.getElementsByName('spRoloC')[1].innerHTML = "Carga Rolo";
        document.getElementsByName('spRoloC')[2].innerHTML = "Carga Rolo";
        document.getElementsByName('spRoloC')[3].innerHTML = "Carga Rolo";
        document.getElementsByName('spRoloC')[4].innerHTML = "Carga Rolo";
        document.getElementsByName('spRoloC')[5].innerHTML = "Carga Rolo";
        document.getElementsByName('spRoloC')[6].innerHTML = "Carga Rolo";
        document.getElementsByName('spRoloC')[7].innerHTML = "Carga Rolo";
        document.getElementsByName('spRoloC')[8].innerHTML = "Carga Rolo";
        document.getElementsByName('spRoloC')[9].innerHTML = "Carga Rolo";
        document.getElementsByName('spRoloC')[10].innerHTML = "Carga Rolo";
        //document.getElementsByName('spRoloC')[11].innerHTML = "Carga Rolo";
        
		document.getElementsByName('spRoloM')[0].innerHTML = "Mini Rolo";
        document.getElementsByName('spRoloM')[1].innerHTML = "Mini Rolo";
        document.getElementsByName('spRoloM')[2].innerHTML = "Mini Rolo";
        document.getElementsByName('spRoloM')[3].innerHTML = "Mini Rolo";
        document.getElementsByName('spRoloM')[4].innerHTML = "Mini Rolo";
        document.getElementsByName('spRoloM')[5].innerHTML = "Mini Rolo";
        document.getElementsByName('spRoloM')[6].innerHTML = "Mini Rolo";
        document.getElementsByName('spRoloM')[7].innerHTML = "Mini Rolo";
        //document.getElementsByName('spRoloM')[8].innerHTML = "Mini Rolo";
        //document.getElementsByName('spRoloM')[9].innerHTML = "Mini Rolo";
        //document.getElementsByName('spRoloM')[10].innerHTML = "Mini Rolo";
        //document.getElementsByName('spRoloM')[11].innerHTML = "Mini Rolo";
        
		document.getElementsByName('spRoloCM')[0].innerHTML = "Carga Mini";
        document.getElementsByName('spRoloCM')[1].innerHTML = "Carga Mini";
        document.getElementsByName('spRoloCM')[2].innerHTML = "Carga Mini";
        document.getElementsByName('spRoloCM')[3].innerHTML = "Carga Mini";
        document.getElementsByName('spRoloCM')[4].innerHTML = "Carga Mini";
        document.getElementsByName('spRoloCM')[5].innerHTML = "Carga Mini";
        document.getElementsByName('spRoloCM')[6].innerHTML = "Carga Mini";
        document.getElementsByName('spRoloCM')[7].innerHTML = "Carga Mini";
        //document.getElementsByName('spRoloCM')[8].innerHTML = "Carga Mini";
        //document.getElementsByName('spRoloCM')[9].innerHTML = "Carga Mini";
        //document.getElementsByName('spRoloCM')[10].innerHTML = "Carga Mini";
        //document.getElementsByName('spRoloCM')[11].innerHTML = "Carga Mini";
        
		document.getElementsByName('tableCod')[0].innerHTML = "Código";
        document.getElementsByName('tableCod')[1].innerHTML = "Código";
        document.getElementsByName('tableCod')[2].innerHTML = "Código";
        document.getElementsByName('tableCod')[3].innerHTML = "Código";
        document.getElementsByName('tableCod')[4].innerHTML = "Código";
        document.getElementsByName('tableCod')[5].innerHTML = "Código";
        document.getElementsByName('tableCod')[6].innerHTML = "Código";
        document.getElementsByName('tableCod')[7].innerHTML = "Código";
        document.getElementsByName('tableCod')[8].innerHTML = "Código";
        document.getElementsByName('tableCod')[9].innerHTML = "Código";
        document.getElementsByName('tableCod')[10].innerHTML = "Código";
        //document.getElementsByName('tableCod')[11].innerHTML = "Código";
        
        
		document.getElementsByName('tableDesc')[0].innerHTML = "Descrição";
        document.getElementsByName('tableDesc')[1].innerHTML = "Descrição";
        document.getElementsByName('tableDesc')[2].innerHTML = "Descrição";
        document.getElementsByName('tableDesc')[3].innerHTML = "Descrição";
        document.getElementsByName('tableDesc')[4].innerHTML = "Descrição";
        document.getElementsByName('tableDesc')[5].innerHTML = "Descrição";
        document.getElementsByName('tableDesc')[6].innerHTML = "Descrição";
        document.getElementsByName('tableDesc')[7].innerHTML = "Descrição";
        document.getElementsByName('tableDesc')[8].innerHTML = "Descrição";
        document.getElementsByName('tableDesc')[9].innerHTML = "Descrição";
        document.getElementsByName('tableDesc')[10].innerHTML = "Descrição";
        //document.getElementsByName('tableDesc')[11].innerHTML = "Descrição";
        
		document.getElementsByName('tableUnit')[0].innerHTML = "Uni./Emb.";
        document.getElementsByName('tableUnit')[1].innerHTML = "Uni./Emb.";
        document.getElementsByName('tableUnit')[2].innerHTML = "Uni./Emb.";
        document.getElementsByName('tableUnit')[3].innerHTML = "Uni./Emb.";
        document.getElementsByName('tableUnit')[4].innerHTML = "Uni./Emb.";
        document.getElementsByName('tableUnit')[5].innerHTML = "Uni./Emb.";
        document.getElementsByName('tableUnit')[6].innerHTML = "Uni./Emb.";
        document.getElementsByName('tableUnit')[7].innerHTML = "Uni./Emb.";
        document.getElementsByName('tableUnit')[8].innerHTML = "Uni./Emb.";
        document.getElementsByName('tableUnit')[9].innerHTML = "Uni./Emb.";
        document.getElementsByName('tableUnit')[10].innerHTML = "Uni./Emb.";
        //document.getElementsByName('tableUnit')[11].innerHTML = "Uni./Emb.";
        
        document.getElementById('angoraTitle').innerHTML = "Angorá";
        document.getElementById('rightTitleAng').innerHTML = "Angorá";
        
        document.getElementById('tecDescAng').innerHTML = "100% Lã pura";
        document.getElementById('altDescAng').innerHTML = " 4,5 mm ";
        document.getElementById('corDescAng').innerHTML = "Cru";
        document.getElementById('spAppDescAng').innerHTML = "Esmaltes e vernizes sintéticos em superfícies lisas, como madeiras e metais.";
        
        
        document.getElementById('antigotaTitle').innerHTML = "Antigota";
		document.getElementById('rightTitleAnt').innerHTML = "Antigota";
        
        document.getElementById('tecDescAnt').innerHTML = "100% Polamida";
        document.getElementById('altDescAnt').innerHTML = " 12 mm ";
        document.getElementById('corDescAnt').innerHTML = "Branca e risca amarela.";
        document.getElementById('spAppDescAnt').innerHTML = "Tintas plásticas lisas aquosas em paredes e tetos lisos (interiores).";
        
        document.getElementById('antigotaVTitle').innerHTML = "Antigota Verde";
		document.getElementById('rightTitleAntV').innerHTML = "Antigota Verde";
        
        document.getElementById('tecDescAntV').innerHTML = "100% poliamida";
        document.getElementById('altDescAntV').innerHTML = " 12 mm ";
        document.getElementById('corDescAntV').innerHTML = "Branca e dupla risca amarela/verde";
        document.getElementById('spAppDescAntV').innerHTML = "Tintas plásticas lisas em paredes e tetos lisos (interiores).";
        
		
        
        document.getElementById('cromadoTitle').innerHTML = "Cromado";
		document.getElementById('rightTitleCro').innerHTML = "Cromado";
        
        document.getElementById('tecDescCro').innerHTML = "100% Poliéster";
        document.getElementById('altDescCro').innerHTML = " 24 mm ";
        document.getElementById('corDescCro').innerHTML = "Branca";
        document.getElementById('spAppDescCro').innerHTML = "Tintas plásticas lisas ou areadas em fachadas e muros.";
        
        document.getElementById('espumaTitle').innerHTML = "Espuma";
		document.getElementById('rightTitleEsp').innerHTML = "Espuma";
        
        document.getElementById('tecDescEsp').innerHTML = "Espuma Poliéster";
        document.getElementById('altDescEsp').innerHTML = " 4,5 mm ";
        document.getElementById('corDescEsp').innerHTML = "Branca";
        document.getElementById('spAppDescEsp').innerHTML = "Tintas e esmaltes aquosos em muros, fachadas e paredes (interiores e exteriores).";
        
        document.getElementById('juniorTitle').innerHTML = "Júnior";
		document.getElementById('rightTitleJun').innerHTML = "Júnior";
        
        document.getElementById('tecDescJun').innerHTML = "100% Poliéster";
        document.getElementById('altDescJun').innerHTML = " 14 mm ";
        document.getElementById('corDescJun').innerHTML = "Branca";
        document.getElementById('spAppDescJun').innerHTML = "Tintas aquosas em paredes lisas.";
        
        document.getElementById('microfibraTitle').innerHTML = "Microfibra";
		document.getElementById('rightTitleMic').innerHTML = "Micofibra";
        
        document.getElementById('tecDescMic').innerHTML = "100% Poliamida";
        document.getElementById('altDescMic').innerHTML = " 10 mm ";
        document.getElementById('corDescMic').innerHTML = "Branca e dupla risca castanha";
        document.getElementById('spAppDescMic').innerHTML = " Tintas aquosas em paredes e tetos lisos.";
        
        

        
        document.getElementById('ravelTitle').innerHTML = "Ravel";
		document.getElementById('rightTitleRav').innerHTML = "Ravel";
        
        document.getElementById('tecDescRav').innerHTML = "100% Poliamida";
        document.getElementById('altDescRav').innerHTML = " 18 mm ";
        document.getElementById('corDescRav').innerHTML = "Verde";
        document.getElementById('spAppDescRav').innerHTML = "Tintas plásticas lisas ou areadas em fachadas e muros.";
        
        
        document.getElementById('rugoTitle').innerHTML = "Rugo";
		document.getElementById('rightTitleRug').innerHTML = "Rugo";
        
        document.getElementById('tecDescRug').innerHTML = "Espuma Poliéster";
        document.getElementById('altDescRug').innerHTML = "";
        document.getElementById('corDescRug').innerHTML = "Amarela";
        document.getElementById('spAppDescRug').innerHTML = "Esmaltes e vernizes sintéticos em superfícies lisas, como madeiras e metais.";
        
        
        document.getElementById('superTitle').innerHTML = "Super";
		document.getElementById('rightTitleSup').innerHTML = "Super";
        
        document.getElementById('tecDescSup').innerHTML = "100% Poliéster";
        document.getElementById('altDescSup').innerHTML = " 16 mm ";
        document.getElementById('corDescSup').innerHTML = "Amarela";
        document.getElementById('spAppDescSup').innerHTML = "Tintas aquosas em superfícies areadas, rugosas e lisas.";
        
        
        
        document.getElementById('merinoTitle').innerHTML = "Merino";
		document.getElementById('rightTitleMer').innerHTML = "Merino";
        
        document.getElementById('tecDescMer').innerHTML = " 100% Lã pura de merino";
        document.getElementById('altDescMer').innerHTML = " 25 mm ";
        document.getElementById('corDescMer').innerHTML = "Branca";
        document.getElementById('spAppDescMer').innerHTML = "Tintas plásticas lisas ou areadas em fachadas e muros.";
		
        document.getElementById('accesoriosTitle').innerHTML = "Acessórios";
		document.getElementById('rightTitleAce').innerHTML = "Acessórios";
        
        
        
        document.getElementById('accArmacoesN').innerHTML = "Armações";
		document.getElementById('accTabuleirosN').innerHTML = "Tabuleiros";
		document.getElementById('accBetumadeiraN').innerHTML = "Betumadeira";
		document.getElementById('accBaldeN').innerHTML = "Balde";
		document.getElementById('accGrelhaN').innerHTML = "Grelha";
		document.getElementById('accCoberturasN').innerHTML = "Coberturas";
		
        
        //Menu 18
		$('#openModelAngoraImg').click(function() {
			document.getElementById("rbRoloAngora").click();
		});
        
        
		
		
		$('#rbRoloAngora').click(function() {
			$("#rightImageAngora").attr('src', 'images/angora/rolo_500_375.jpg');
			document.getElementById('rbRoloAngora').style.fontSize = '1.0em';
			document.getElementById('rbCRoloAngora').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloAngora').style.fontSize = '0.8em';
			document.getElementById('rbCMiniRoloAngora').style.fontSize = '0.8em';
			document.getElementById('rbRoloAngora').style.fontWeight = 'bold';
			document.getElementById('rbCRoloAngora').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloAngora').style.fontWeight = 'normal';
			document.getElementById('rbCMiniRoloAngora').style.fontWeight = 'normal';
			document.getElementById('rbRoloAngora').style.color = '#FFF';
			document.getElementById('rbMiniRoloAngora').style.color = '#FFF';
			document.getElementById('rbCRoloAngora').style.color = '#FFF';
			document.getElementById('rbCMiniRoloAngora').style.color = '#FFF';
            document.getElementById('ul1li1m1').className = "activeMenu";
            document.getElementById('ul1li1m2').className = "";
            document.getElementById('ul1li1m3').className = "";
            document.getElementById('ul1li1m4').className = "";
            
			
            document.getElementById("ul1li1tr1").style.display = 'table-row';
			document.getElementById("ul1li1tr1td1").innerText ='0064';
			document.getElementById("ul1li1tr1td2").innerText = 'Rolo Angorá 60 mm ';
			document.getElementById("ul1li1tr1td3").innerText = '45';
            document.getElementById("ul1li1tr1td4").innerText = '60'
			
            document.getElementById("ul1li1tr2").style.display = 'table-row';
			document.getElementById("ul1li1tr2td1").innerText = '0258';
			document.getElementById("ul1li1tr2td2").innerText = 'Rolo Angorá 120 mm';
			document.getElementById("ul1li1tr2td3").innerText = '45';
            document.getElementById("ul1li1tr2td4").innerText = '30'
			
            document.getElementById("ul1li1tr3").style.display = 'table-row';
			document.getElementById("ul1li1tr3td1").innerText = '0065';
			document.getElementById("ul1li1tr3td2").innerText = 'Rolo Angorá 150 mm';
			document.getElementById("ul1li1tr3td3").innerText = '45';
            document.getElementById("ul1li1tr3td4").innerText = '24'
            
            document.getElementById("ul1li1tr4").style.display = 'table-row';
			document.getElementById("ul1li1tr4td1").innerText = '0066';
			document.getElementById("ul1li1tr4td2").innerText = 'Rolo Angorá 180 mm';
			document.getElementById("ul1li1tr4td3").innerText = '45';
            document.getElementById("ul1li1tr4td4").innerText = '60'
            
            document.getElementById("ul1li1tr5").style.display = 'table-row';
			document.getElementById("ul1li1tr5td1").innerText = '0067';
			document.getElementById("ul1li1tr5td2").innerText = 'Rolo Angorá 220 mm';
			document.getElementById("ul1li1tr5td3").innerText = '45';
            document.getElementById("ul1li1tr5td4").innerText = '55'
            
            document.getElementById("ul1li1tr6").style.display = 'table-row';
            document.getElementById("ul1li1tr6td1").innerText = '0068';
			document.getElementById("ul1li1tr6td2").innerText = 'Rolo Angorá 250 mm';
			document.getElementById("ul1li1tr6td3").innerText = '45';
            document.getElementById("ul1li1tr6td4").innerText = '50';
            
			
            document.getElementById("ul1li1tr7").style.display = 'none';
            document.getElementById("ul1li1tr7td1").innerText = '';
			document.getElementById("ul1li1tr7td2").innerText = '';
			document.getElementById("ul1li1tr7td3").innerText = '';
            document.getElementById("ul1li1tr7td4").innerText = '';
            
            
            document.getElementById("ul1li1tr8").style.display = 'none';
			document.getElementById("ul1li1tr8td1").innerText = '';
			document.getElementById("ul1li1tr8td2").innerText = '';
			document.getElementById("ul1li1tr8td3").innerText = '';
            document.getElementById("ul1li1tr8td4").innerText = '';
            
            document.getElementById("ul1li1tr9").style.display = 'none';
			document.getElementById("ul1li1tr9td1").innerText = '';
			document.getElementById("ul1li1tr9td2").innerText = '';
			document.getElementById("ul1li1tr9td3").innerText = '';
            document.getElementById("ul1li1tr9td4").innerText = '';
            
            document.getElementById("ul1li1tr10").style.display = 'none';
            document.getElementById("ul1li1tr10td1").innerText = '';
			document.getElementById("ul1li1tr10td2").innerText = '';
			document.getElementById("ul1li1tr10td3").innerText = '';
            document.getElementById("ul1li1tr10td4").innerText = '';
            
            document.getElementById("ul1li1tr11").style.display = 'none';
            document.getElementById("ul1li1tr11td1").innerText = '';
			document.getElementById("ul1li1tr11td2").innerText = '';
			document.getElementById("ul1li1tr11td3").innerText = '';
            document.getElementById("ul1li1tr11td4").innerText = '';
            
            document.getElementById("ul1li1tr12").style.display = 'none';
            document.getElementById("ul1li1tr12td1").innerText = '';
			document.getElementById("ul1li1tr12td2").innerText = '';
			document.getElementById("ul1li1tr12td3").innerText = '';
            document.getElementById("ul1li1tr12td4").innerText = '';
            
            document.getElementById("ul1li1tr13").style.display = 'none';
            document.getElementById("ul1li1tr13td1").innerText = '';
			document.getElementById("ul1li1tr13td2").innerText = '';
			document.getElementById("ul1li1tr13td3").innerText = '';
            document.getElementById("ul1li1tr13td4").innerText = '';
            
            document.getElementById("ul1li1tr14").style.display = 'none';
            document.getElementById("ul1li1tr14td1").innerText = '';
			document.getElementById("ul1li1tr14td2").innerText = '';
			document.getElementById("ul1li1tr14td3").innerText = '';
            document.getElementById("ul1li1tr14td4").innerText = '';
		});
		$('#rbCRoloAngora').click(function() {
			$("#rightImageAngora").attr('src', 'images/angora/carga_500_375.jpg');
			document.getElementById('rbRoloAngora').style.fontSize = '0.8em';
			document.getElementById('rbCRoloAngora').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloAngora').style.fontSize = '0.8em';
			document.getElementById('rbCMiniRoloAngora').style.fontSize = '0.8em';
			document.getElementById('rbRoloAngora').style.fontWeight = 'normal';
			document.getElementById('rbCRoloAngora').style.fontWeight = 'bold';
			document.getElementById('rbMiniRoloAngora').style.fontWeight = 'normal';
			document.getElementById('rbCMiniRoloAngora').style.fontWeight = 'normal';
			document.getElementById('rbRoloAngora').style.color = '#FFF';
			document.getElementById('rbMiniRoloAngora').style.color = '#FFF';
			document.getElementById('rbCRoloAngora').style.color = '#FFF';
			document.getElementById('rbCMiniRoloAngora').style.color = '#FFF';
            document.getElementById('ul1li1m1').className = "";
            document.getElementById('ul1li1m2').className = "activeMenu";
            document.getElementById('ul1li1m3').className = "";
            document.getElementById('ul1li1m4').className = "";
			
            document.getElementById("ul1li1tr1").style.display = 'table-row';
			document.getElementById("ul1li1tr1td1").innerText ='0021';
			document.getElementById("ul1li1tr1td2").innerText = 'Carga Angorá 60 mm';
			document.getElementById("ul1li1tr1td3").innerText = '45';
            document.getElementById("ul1li1tr1td4").innerText = '';
		
            document.getElementById("ul1li1tr2").style.display = 'table-row';
			document.getElementById("ul1li1tr2td1").innerText = '0259';
			document.getElementById("ul1li1tr2td2").innerText = 'Carga Angorá 120 mm';
			document.getElementById("ul1li1tr2td3").innerText = '45';
            document.getElementById("ul1li1tr2td4").innerText = '';
		
            document.getElementById("ul1li1tr3").style.display = 'table-row';
			document.getElementById("ul1li1tr3td1").innerText = '0022';
			document.getElementById("ul1li1tr3td2").innerText = 'Carga Angorá 150 mm';
			document.getElementById("ul1li1tr3td3").innerText = '45';
            document.getElementById("ul1li1tr3td4").innerText = '';

            document.getElementById("ul1li1tr4").style.display = 'table-row';
			document.getElementById("ul1li1tr4td1").innerText = '0023';
			document.getElementById("ul1li1tr4td2").innerText = 'Carga Angorá 180 mm';
			document.getElementById("ul1li1tr4td3").innerText = '45';
            document.getElementById("ul1li1tr4td4").innerText = '';

            document.getElementById("ul1li1tr5").style.display = 'table-row';
			document.getElementById("ul1li1tr5td1").innerText = '0024';
			document.getElementById("ul1li1tr5td2").innerText = 'Carga Angorá 220 mm';
			document.getElementById("ul1li1tr5td3").innerText = '45';
            document.getElementById("ul1li1tr5td4").innerText = '';

            document.getElementById("ul1li1tr6").style.display = 'table-row';
            document.getElementById("ul1li1tr6td1").innerText = '0025';
			document.getElementById("ul1li1tr6td2").innerText = 'Carga Angorá 250 mm';
			document.getElementById("ul1li1tr6td3").innerText = '45';
			document.getElementById("ul1li1tr6td4").innerText = '';  
			
            document.getElementById("ul1li1tr7").style.display = 'none';
			document.getElementById("ul1li1tr7td1").innerText = '';
			document.getElementById("ul1li1tr7td2").innerText = '';
			document.getElementById("ul1li1tr7td3").innerText = '';
			document.getElementById("ul1li1tr7td4").innerText = '';
			
            document.getElementById("ul1li1tr8").style.display = 'none';
			document.getElementById("ul1li1tr8td1").innerText = '';
			document.getElementById("ul1li1tr8td2").innerText = '';
			document.getElementById("ul1li1tr8td3").innerText = '';
			document.getElementById("ul1li1tr8td4").innerText = '';
			
            document.getElementById("ul1li1tr9").style.display = 'none';
			document.getElementById("ul1li1tr9td1").innerText = '';
			document.getElementById("ul1li1tr9td2").innerText = '';
			document.getElementById("ul1li1tr9td3").innerText = '';
			document.getElementById("ul1li1tr9td4").innerText = '';
            
            document.getElementById("ul1li1tr10").style.display = 'none';
            document.getElementById("ul1li1tr10td1").innerText = '';
			document.getElementById("ul1li1tr10td2").innerText = '';
			document.getElementById("ul1li1tr10td3").innerText = '';
            document.getElementById("ul1li1tr10td4").innerText = '';
            
            document.getElementById("ul1li1tr11").style.display = 'none';
            document.getElementById("ul1li1tr11td1").innerText = '';
			document.getElementById("ul1li1tr11td2").innerText = '';
			document.getElementById("ul1li1tr11td3").innerText = '';
            document.getElementById("ul1li1tr11td4").innerText = '';
            
            document.getElementById("ul1li1tr12").style.display = 'none';
            document.getElementById("ul1li1tr12td1").innerText = '';
			document.getElementById("ul1li1tr12td2").innerText = '';
			document.getElementById("ul1li1tr12td3").innerText = '';
            document.getElementById("ul1li1tr12td4").innerText = '';
            
            document.getElementById("ul1li1tr13").style.display = 'none';
            document.getElementById("ul1li1tr13td1").innerText = '';
			document.getElementById("ul1li1tr13td2").innerText = '';
			document.getElementById("ul1li1tr13td3").innerText = '';
            document.getElementById("ul1li1tr13td4").innerText = '';
            
            document.getElementById("ul1li1tr14").style.display = 'none';
            document.getElementById("ul1li1tr14td1").innerText = '';
			document.getElementById("ul1li1tr14td2").innerText = '';
			document.getElementById("ul1li1tr14td3").innerText = '';
            document.getElementById("ul1li1tr14td4").innerText = '';
		});
		

							   
		$('#rbMiniRoloAngora').click(function() {
			$("#rightImageAngora").attr('src', 'images/angora/mini_500_375.jpg');
			document.getElementById('rbRoloAngora').style.fontSize = '0.8em';
			document.getElementById('rbCRoloAngora').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloAngora').style.fontSize = '1.0em';
			document.getElementById('rbCMiniRoloAngora').style.fontSize = '0.8em';
			document.getElementById('rbRoloAngora').style.fontWeight = 'normal';
			document.getElementById('rbCRoloAngora').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloAngora').style.fontWeight = 'bold';
			document.getElementById('rbCMiniRoloAngora').style.fontWeight = 'normal';
			document.getElementById('rbRoloAngora').style.color = '#FFF';
			document.getElementById('rbMiniRoloAngora').style.color = '#FFF';
			document.getElementById('rbCRoloAngora').style.color = '#FFF';
			document.getElementById('rbCMiniRoloAngora').style.color = '#FFF';
            document.getElementById('ul1li1m1').className = "";
            document.getElementById('ul1li1m2').className = "";
            document.getElementById('ul1li1m3').className = "activeMenu";
            document.getElementById('ul1li1m4').className = "";
            
            document.getElementById("ul1li1tr1").style.display = 'table-row';
			document.getElementById("ul1li1tr1td1").innerText = '0173';
			document.getElementById("ul1li1tr1td2").innerText = 'Mini Angorá 60 mm';
			document.getElementById("ul1li1tr1td3").innerText = '16';
	        document.getElementById("ul1li1tr1td4").innerText = '';
           
            document.getElementById("ul1li1tr2").style.display = 'table-row';
			document.getElementById("ul1li1tr2td1").innerText = '0174';
			document.getElementById("ul1li1tr2td2").innerText = 'Mini Angorá 100 mm';
			document.getElementById("ul1li1tr2td3").innerText = '16';
            document.getElementById("ul1li1tr2td4").innerText = '40';

            document.getElementById("ul1li1tr3").style.display = 'table-row';
			document.getElementById("ul1li1tr3td1").innerText = '0175';
			document.getElementById("ul1li1tr3td2").innerText = 'Mini Angorá 150 mm';
			document.getElementById("ul1li1tr3td3").innerText = '16';
            document.getElementById("ul1li1tr3td4").innerText = '';

            document.getElementById("ul1li1tr4").style.display = 'table-row';
			document.getElementById("ul1li1tr4td1").innerText = '0253';
			document.getElementById("ul1li1tr4td2").innerText = 'Midi Angorá 120 mm';
			document.getElementById("ul1li1tr4td3").innerText = '30';
            document.getElementById("ul1li1tr4td4").innerText = '35';
			
            document.getElementById("ul1li1tr5").style.display = 'table-row';
			document.getElementById("ul1li1tr5td1").innerText = '0254';
			document.getElementById("ul1li1tr5td2").innerText = 'Midi Angorá 150 mm';
			document.getElementById("ul1li1tr5td3").innerText = '30';
            document.getElementById("ul1li1tr5td4").innerText = '';
			
            document.getElementById("ul1li1tr6").style.display = 'none';
            document.getElementById("ul1li1tr6td1").innerText = '';
			document.getElementById("ul1li1tr6td2").innerText = '';
			document.getElementById("ul1li1tr6td3").innerText = '';
            document.getElementById("ul1li1tr6td4").innerText = '';
			
            document.getElementById("ul1li1tr7").style.display = 'none';
        	document.getElementById("ul1li1tr7td1").innerText = '';
			document.getElementById("ul1li1tr7td2").innerText = '';
			document.getElementById("ul1li1tr7td3").innerText = '';
			document.getElementById("ul1li1tr7td4").innerText = '';

            document.getElementById("ul1li1tr8").style.display = 'none';
			document.getElementById("ul1li1tr8td1").innerText = '';
			document.getElementById("ul1li1tr8td2").innerText = '';
			document.getElementById("ul1li1tr8td3").innerText = '';
			document.getElementById("ul1li1tr8td4").innerText = '';

            document.getElementById("ul1li1tr9").style.display = 'none';
			document.getElementById("ul1li1tr9td1").innerText = '';
			document.getElementById("ul1li1tr9td2").innerText = '';
			document.getElementById("ul1li1tr9td3").innerText = '';
			document.getElementById("ul1li1tr9td4").innerText = '';
            
            document.getElementById("ul1li1tr10").style.display = 'none';
            document.getElementById("ul1li1tr10td1").innerText = '';
			document.getElementById("ul1li1tr10td2").innerText = '';
			document.getElementById("ul1li1tr10td3").innerText = '';
            document.getElementById("ul1li1tr10td4").innerText = '';
            
            document.getElementById("ul1li1tr11").style.display = 'none';
            document.getElementById("ul1li1tr11td1").innerText = '';
			document.getElementById("ul1li1tr11td2").innerText = '';
			document.getElementById("ul1li1tr11td3").innerText = '';
            document.getElementById("ul1li1tr11td4").innerText = '';
            
            document.getElementById("ul1li1tr12").style.display = 'none';
            document.getElementById("ul1li1tr12td1").innerText = '';
			document.getElementById("ul1li1tr12td2").innerText = '';
			document.getElementById("ul1li1tr12td3").innerText = '';
            document.getElementById("ul1li1tr12td4").innerText = '';
            
            document.getElementById("ul1li1tr13").style.display = 'none';
            document.getElementById("ul1li1tr13td1").innerText = '';
			document.getElementById("ul1li1tr13td2").innerText = '';
			document.getElementById("ul1li1tr13td3").innerText = '';
            document.getElementById("ul1li1tr13td4").innerText = '';
            
            document.getElementById("ul1li1tr14").style.display = 'none';
            document.getElementById("ul1li1tr14td1").innerText = '';
			document.getElementById("ul1li1tr14td2").innerText = '';
			document.getElementById("ul1li1tr14td3").innerText = '';
            document.getElementById("ul1li1tr14td4").innerText = '';
            
			
		});
		
		
		$('#rbCMiniRoloAngora').click(function() {
			$("#rightImageAngora").attr('src', 'images/angora/cargaMini_500_375.jpg');
			document.getElementById('rbRoloAngora').style.fontSize = '0.8em';
			document.getElementById('rbCRoloAngora').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloAngora').style.fontSize = '0.8em';
			document.getElementById('rbCMiniRoloAngora').style.fontSize = '1.0em';
			document.getElementById('rbRoloAngora').style.fontWeight = 'normal';
			document.getElementById('rbCRoloAngora').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloAngora').style.fontWeight = 'normal';
			document.getElementById('rbCMiniRoloAngora').style.fontWeight = 'bold';
			document.getElementById('rbRoloAngora').style.color = '#FFF';
			document.getElementById('rbMiniRoloAngora').style.color = '#FFF';
			document.getElementById('rbCRoloAngora').style.color = '#FFF';
			document.getElementById('rbCMiniRoloAngora').style.color = '#FFF';
            document.getElementById('ul1li1m1').className = "";
            document.getElementById('ul1li1m2').className = "";
            document.getElementById('ul1li1m3').className = "";
            document.getElementById('ul1li1m4').className = "activeMenu";

            document.getElementById("ul1li1tr1").style.display = 'table-row';
			document.getElementById("ul1li1tr1td1").innerText = '0088';
			document.getElementById("ul1li1tr1td2").innerText = 'Carga Angorá 60 mm';
			document.getElementById("ul1li1tr1td3").innerText = '16';
	        document.getElementById("ul1li1tr1td4").innerText = '';
            
            document.getElementById("ul1li1tr2").style.display = 'table-row';
			document.getElementById("ul1li1tr2td1").innerText = '0089';
			document.getElementById("ul1li1tr2td2").innerText = 'Carga Angorá 100 mm';
			document.getElementById("ul1li1tr2td3").innerText = '16';
            document.getElementById("ul1li1tr2td4").innerText = '';

            document.getElementById("ul1li1tr3").style.display = 'table-row';
			document.getElementById("ul1li1tr3td1").innerText = '0255';
			document.getElementById("ul1li1tr3td2").innerText = 'Carga Angorá 150 mm';
            document.getElementById("ul1li1tr3td3").innerText = '16';
            document.getElementById("ul1li1tr3td4").innerText = '';

            document.getElementById("ul1li1tr4").style.display = 'table-row';
			document.getElementById("ul1li1tr4td1").innerText = '0177';
			document.getElementById("ul1li1tr4td2").innerText = 'Pack 2 Cargas Angorá  60 mm';
			document.getElementById("ul1li1tr4td3").innerText = '16';
            document.getElementById("ul1li1tr4td4").innerText = '';

            document.getElementById("ul1li1tr5").style.display = 'table-row';
			document.getElementById("ul1li1tr5td1").innerText = '0091';
			document.getElementById("ul1li1tr5td2").innerText = 'Pack 2 Cargas Angorá 100 mm';
			document.getElementById("ul1li1tr5td3").innerText = '16';
            document.getElementById("ul1li1tr5td4").innerText = '';
	
            document.getElementById("ul1li1tr6").style.display = 'table-row';
			document.getElementById("ul1li1tr6td1").innerText = '0179';
			document.getElementById("ul1li1tr6td2").innerText = 'Pack 2 Cargas Angorá 150 mm';
			document.getElementById("ul1li1tr6td3").innerText = '16'; 
            document.getElementById("ul1li1tr6td4").innerText = '';

            document.getElementById("ul1li1tr7").style.display = 'table-row';
			document.getElementById("ul1li1tr7td1").innerText = '0256';
			document.getElementById("ul1li1tr7td2").innerText = 'Blister 16 Cargas Angorá 60 mm';
			document.getElementById("ul1li1tr7td3").innerText = '16';
            document.getElementById("ul1li1tr7td4").innerText = '';
            
            document.getElementById("ul1li1tr8").style.display = 'table-row';
            document.getElementById("ul1li1tr8td1").innerText = '0090';
			document.getElementById("ul1li1tr8td2").innerText = 'Blister 10 Cargas Angorá 100 mm';
			document.getElementById("ul1li1tr8td3").innerText = '16';
            document.getElementById("ul1li1tr8td4").innerText = '36 Blisters';

            document.getElementById("ul1li1tr9").style.display = 'table-row';
			document.getElementById("ul1li1tr9td1").innerText = '0201';
			document.getElementById("ul1li1tr9td2").innerText = 'Carga Angorá 120 mm';
			document.getElementById("ul1li1tr9td3").innerText = '30';
            document.getElementById("ul1li1tr9td4").innerText = '';

            document.getElementById("ul1li1tr10").style.display = 'table-row';
			document.getElementById("ul1li1tr10td1").innerText = '0202';
			document.getElementById("ul1li1tr10td2").innerText = 'Carga Angora 150 mm';
			document.getElementById("ul1li1tr10td3").innerText = '30';
            document.getElementById("ul1li1tr10td4").innerText = '';

            document.getElementById("ul1li1tr11").style.display = 'table-row';
            document.getElementById("ul1li1tr11td1").innerText = '0205';
			document.getElementById("ul1li1tr11td2").innerText = 'Pack 2 Cargas Angora 120 mm';
			document.getElementById("ul1li1tr11td3").innerText = '30';
            document.getElementById("ul1li1tr11td4").innerText = '';
            
            document.getElementById("ul1li1tr12").style.display = 'table-row';
            document.getElementById("ul1li1tr12td1").innerText = '0206';
			document.getElementById("ul1li1tr12td2").innerText = 'Pack 2 Cargas Angora 150 mm';
			document.getElementById("ul1li1tr12td3").innerText = '30';
            document.getElementById("ul1li1tr12td4").innerText = '';
            
            document.getElementById("ul1li1tr13").style.display = 'table-row';
            document.getElementById("ul1li1tr13td1").innerText = '0203';
			document.getElementById("ul1li1tr13td2").innerText = 'Blister 10 Cargas Angora 120 mm';
			document.getElementById("ul1li1tr13td3").innerText = '30';
            document.getElementById("ul1li1tr13td4").innerText = '';
            
            document.getElementById("ul1li1tr14").style.display = 'table-row';
            document.getElementById("ul1li1tr14td1").innerText = '0204';
			document.getElementById("ul1li1tr14td2").innerText = 'Blister 6 Cargas Angora 150 mm';
			document.getElementById("ul1li1tr14td3").innerText = '30';
            document.getElementById("ul1li1tr14td4").innerText = '';
		});
		
		
		
		//Antigota
		$('#openModelAntigotaImg').click(function() {
			document.getElementById("rbRoloAntigota").click();
		});
		
		
		$('#rbRoloAntigota').click(function() {
			$("#rightImageAntigota").attr('src', 'images/antigota/rolo_500_375.jpg');
			document.getElementById('rbRoloAntigota').style.fontSize = '1.0em';
			document.getElementById('rbCRoloAntigota').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloAntigota').style.fontSize = '0.8em';
			document.getElementById('rbCMiniRoloAntigota').style.fontSize = '0.8em';
			document.getElementById('rbRoloAntigota').style.fontWeight = 'bold';
			document.getElementById('rbCRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbCMiniRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbRoloAntigota').style.color = '#FFF';
			document.getElementById('rbCRoloAntigota').style.color = '#FFF';
			document.getElementById('rbMiniRoloAntigota').style.color = '#FFF';
			document.getElementById('rbCMiniRoloAntigota').style.color = '#FFF';
            document.getElementById('ul1li2m1').className = "activeMenu";
            document.getElementById('ul1li2m2').className = "";
            document.getElementById('ul1li2m3').className = "";
            document.getElementById('ul1li2m4').className = "";
            
            document.getElementById("ul1li2tr1").style.display = 'table-row';
			document.getElementById("ul1li2tr1td1").innerText = '0058';
			document.getElementById("ul1li2tr1td2").innerText = 'Rolo Antigota 180 mm';
			document.getElementById("ul1li2tr1td3").innerText = '45';
			document.getElementById("ul1li2tr1td4").innerText = '60';

            document.getElementById("ul1li2tr2").style.display = 'table-row';
			document.getElementById("ul1li2tr2td1").innerText = '0059';
			document.getElementById("ul1li2tr2td2").innerText = 'Rolo Antigota 220 mm';
			document.getElementById("ul1li2tr2td3").innerText = '45';
			document.getElementById("ul1li2tr2td4").innerText = '55';
			
            document.getElementById("ul1li2tr3").style.display = 'table-row';
			document.getElementById("ul1li2tr3td1").innerText = '0060';
			document.getElementById("ul1li2tr3td2").innerText = 'Rolo Antigota 250 mm';
			document.getElementById("ul1li2tr3td3").innerText = '45';
			document.getElementById("ul1li2tr3td4").innerText = '50';
		
            document.getElementById("ul1li2tr4").style.display = 'table-row';
			document.getElementById("ul1li2tr4td1").innerText = '0143';
			document.getElementById("ul1li2tr4td2").innerText = 'Rolo Antigota 180 mm';
			document.getElementById("ul1li2tr4td3").innerText = '50';
			document.getElementById("ul1li2tr4td4").innerText = '55';
			
            document.getElementById("ul1li2tr5").style.display = 'table-row';
			document.getElementById("ul1li2tr5td1").innerText = '0144';
			document.getElementById("ul1li2tr5td2").innerText = 'Rolo Antigota 220 mm';
			document.getElementById("ul1li2tr5td3").innerText = '50';
			document.getElementById("ul1li2tr5td4").innerText = '50';
			
            document.getElementById("ul1li2tr6").style.display = 'table-row';
			document.getElementById("ul1li2tr6td1").innerText = '0145';
			document.getElementById("ul1li2tr6td2").innerText = 'Rolo Antigota 250 mm';
			document.getElementById("ul1li2tr6td3").innerText = '50';
			document.getElementById("ul1li2tr6td4").innerText = '45';

            document.getElementById("ul1li2tr7").style.display = 'none';
			document.getElementById("ul1li2tr7td1").innerText = '';
			document.getElementById("ul1li2tr7td2").innerText = '';
			document.getElementById("ul1li2tr7td3").innerText = '';
			document.getElementById("ul1li2tr7td4").innerText = '';
			
            document.getElementById("ul1li2tr8").style.display = 'none';
			document.getElementById("ul1li2tr8td1").innerText = '';
			document.getElementById("ul1li2tr8td2").innerText = '';
			document.getElementById("ul1li2tr8td3").innerText = '';
			document.getElementById("ul1li2tr8td4").innerText = '';
            
            document.getElementById("ul1li2tr9").style.display = 'none';
            document.getElementById("ul1li2tr9td1").innerText = '';
			document.getElementById("ul1li2tr9td2").innerText = '';
			document.getElementById("ul1li2tr9td3").innerText = '';
			document.getElementById("ul1li2tr9td4").innerText = '';
			
            document.getElementById("ul1li2tr10").style.display = 'none';
			document.getElementById("ul1li2tr10td1").innerText = '';
			document.getElementById("ul1li2tr10td2").innerText = '';
			document.getElementById("ul1li2tr10td3").innerText = '';
			document.getElementById("ul1li2tr10td4").innerText = '';
            
            document.getElementById("ul1li2tr11").style.display = 'none';
            document.getElementById("ul1li2tr11td1").innerText = '';
			document.getElementById("ul1li2tr11td2").innerText = '';
			document.getElementById("ul1li2tr11td3").innerText = '';
			document.getElementById("ul1li2tr11td4").innerText = '';
            
            document.getElementById("ul1li2tr12").style.display = 'none';
            document.getElementById("ul1li2tr12td1").innerText = '';
			document.getElementById("ul1li2tr12td2").innerText = '';
			document.getElementById("ul1li2tr12td3").innerText = '';
			document.getElementById("ul1li2tr12td4").innerText = '';
		});
        
        $('#rbCRoloAntigota').click(function() {
			$("#rightImageAntigota").attr('src', 'images/antigota/carga_500_375.jpg');
			document.getElementById('rbRoloAntigota').style.fontSize = '0.8em';
			document.getElementById('rbCRoloAntigota').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloAntigota').style.fontSize = '0.8em';
			document.getElementById('rbCMiniRoloAntigota').style.fontSize = '0.8em';
			document.getElementById('rbRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbCRoloAntigota').style.fontWeight = 'bold';
			document.getElementById('rbMiniRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbCMiniRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbRoloAntigota').style.color = '#FFF';
			document.getElementById('rbCRoloAntigota').style.color = '#FFF';
			document.getElementById('rbMiniRoloAntigota').style.color = '#FFF';
			document.getElementById('rbCMiniRoloAntigota').style.color = '#FFF';
            document.getElementById('ul1li2m1').className = "";
            document.getElementById('ul1li2m2').className = "activeMenu";
            document.getElementById('ul1li2m3').className = "";
            document.getElementById('ul1li2m4').className = "";
            
            document.getElementById("ul1li2tr1").style.display = 'table-row';
			document.getElementById("ul1li2tr1td1").innerText = '0015';
			document.getElementById("ul1li2tr1td2").innerText = 'Carga Antigota 180 mm';
			document.getElementById("ul1li2tr1td3").innerText = '45';
	     	document.getElementById("ul1li2tr1td4").innerText = '';
			
            document.getElementById("ul1li2tr2").style.display = 'table-row';
			document.getElementById("ul1li2tr2td1").innerText = '0016';
			document.getElementById("ul1li2tr2td2").innerText = 'Carga Antigota 220 mm';
			document.getElementById("ul1li2tr2td3").innerText = '45';
		    document.getElementById("ul1li2tr2td4").innerText = '';
			
            document.getElementById("ul1li2tr3").style.display = 'table-row';
			document.getElementById("ul1li2tr3td1").innerText = '0017';
			document.getElementById("ul1li2tr3td2").innerText = 'Carga Antigota 250 mm';
			document.getElementById("ul1li2tr3td3").innerText = '45';
			document.getElementById("ul1li2tr3td4").innerText = '';

            document.getElementById("ul1li2tr4").style.display = 'table-row';
			document.getElementById("ul1li2tr4td1").innerText = '0125';
			document.getElementById("ul1li2tr4td2").innerText = 'Carga Antigota 180 mm';
			document.getElementById("ul1li2tr4td3").innerText = '50';
			document.getElementById("ul1li2tr4td4").innerText = '';
	
            document.getElementById("ul1li2tr5").style.display = 'table-row';
			document.getElementById("ul1li2tr5td1").innerText = '0126';
			document.getElementById("ul1li2tr5td2").innerText = 'Carga Antigota 220 mm';
			document.getElementById("ul1li2tr5td3").innerText = '50';
			document.getElementById("ul1li2tr5td4").innerText = '';
	
            document.getElementById("ul1li2tr6").style.display = 'table-row';
		    document.getElementById("ul1li2tr6td1").innerText = '0127';
			document.getElementById("ul1li2tr6td2").innerText = 'Carga Antigota 250 mm';
			document.getElementById("ul1li2tr6td3").innerText = '50';
			document.getElementById("ul1li2tr6td4").innerText = '';
	
            document.getElementById("ul1li2tr7").style.display = 'none';
            document.getElementById("ul1li2tr7td1").innerText = '';
			document.getElementById("ul1li2tr7td2").innerText = '';
			document.getElementById("ul1li2tr7td3").innerText = '';
			document.getElementById("ul1li2tr7td4").innerText = '';
            
			document.getElementById("ul1li2tr8").style.display = 'none';
			document.getElementById("ul1li2tr8td1").innerText = '';
			document.getElementById("ul1li2tr8td2").innerText = '';
			document.getElementById("ul1li2tr8td3").innerText = '';
			document.getElementById("ul1li2tr8td4").innerText = '';
					
            document.getElementById("ul1li2tr9").style.display = 'none';
			document.getElementById("ul1li2tr9td1").innerText = '';
			document.getElementById("ul1li2tr9td2").innerText = '';
			document.getElementById("ul1li2tr9td3").innerText = '';
			document.getElementById("ul1li2tr9td4").innerText = '';
			
            document.getElementById("ul1li2tr10").style.display = 'none';
			document.getElementById("ul1li2tr10td1").innerText = '';
			document.getElementById("ul1li2tr10td2").innerText = '';
			document.getElementById("ul1li2tr10td3").innerText = '';
			document.getElementById("ul1li2tr10td4").innerText = '';
            
            document.getElementById("ul1li2tr11").style.display = 'none';
            document.getElementById("ul1li2tr11td1").innerText = '';
			document.getElementById("ul1li2tr11td2").innerText = '';
			document.getElementById("ul1li2tr11td3").innerText = '';
			document.getElementById("ul1li2tr11td4").innerText = '';
            
            document.getElementById("ul1li2tr12").style.display = 'none';
            document.getElementById("ul1li2tr12td1").innerText = '';
			document.getElementById("ul1li2tr12td2").innerText = '';
			document.getElementById("ul1li2tr12td3").innerText = '';
			document.getElementById("ul1li2tr12td4").innerText = '';
		});

							   
		$('#rbMiniRoloAntigota').click(function() {
			$("#rightImageAntigota").attr('src', 'images/antigota/mini_500_375.jpg');
			document.getElementById('rbRoloAntigota').style.fontSize = '0.8em';
			document.getElementById('rbCRoloAntigota').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloAntigota').style.fontSize = '1.0em';
			document.getElementById('rbCMiniRoloAntigota').style.fontSize = '0.8em';
			document.getElementById('rbRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbCRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloAntigota').style.fontWeight = 'bold';
			document.getElementById('rbCMiniRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbRoloAntigota').style.color = '#FFF';
			document.getElementById('rbCRoloAntigota').style.color = '#FFF';
			document.getElementById('rbMiniRoloAntigota').style.color = '#FFF';
			document.getElementById('rbCMiniRoloAntigota').style.color = '#FFF';
            document.getElementById('ul1li2m1').className = "";
            document.getElementById('ul1li2m2').className = "";
            document.getElementById('ul1li2m3').className = "activeMenu";
            document.getElementById('ul1li2m4').className = "";
            
            document.getElementById("ul1li2tr1").style.display = 'table-row';
			document.getElementById("ul1li2tr1td1").innerText = '0180';
			document.getElementById("ul1li2tr1td2").innerText = 'Mini Antigota 60 mm';
			document.getElementById("ul1li2tr1td3").innerText = '16';
			document.getElementById("ul1li2tr1td4").innerText = '';
		
            document.getElementById("ul1li2tr2").style.display = 'table-row';
			document.getElementById("ul1li2tr2td1").innerText = '0181';
			document.getElementById("ul1li2tr2td2").innerText = 'Mini Antigota 100 mm';
			document.getElementById("ul1li2tr2td3").innerText = '16';
			document.getElementById("ul1li2tr2td4").innerText = '40';
	
            document.getElementById("ul1li2tr3").style.display = 'table-row';
			document.getElementById("ul1li2tr3td1").innerText = '0182';
			document.getElementById("ul1li2tr3td2").innerText = 'Mini Antigota 150 mm';
			document.getElementById("ul1li2tr3td3").innerText = '16';
			document.getElementById("ul1li2tr3td4").innerText = '';

            document.getElementById("ul1li2tr4").style.display = 'table-row';
			document.getElementById("ul1li2tr4td1").innerText = '0256';
			document.getElementById("ul1li2tr4td2").innerText = 'Midi Antigota 120 mm';
			document.getElementById("ul1li2tr4td3").innerText = '30';
			document.getElementById("ul1li2tr4td4").innerText = '35';
	
            document.getElementById("ul1li2tr5").style.display = 'table-row';
            document.getElementById("ul1li2tr5td1").innerText = '0257';
			document.getElementById("ul1li2tr5td2").innerText = 'Midi Antigota 150 mm';
			document.getElementById("ul1li2tr5td3").innerText = '30';
			document.getElementById("ul1li2tr5td4").innerText = '';
	
            document.getElementById("ul1li2tr6").style.display = 'none';
			document.getElementById("ul1li2tr6td1").innerText = '';
			document.getElementById("ul1li2tr6td2").innerText = '';
			document.getElementById("ul1li2tr6td3").innerText = '';
			document.getElementById("ul1li2tr6td4").innerText = '';

            document.getElementById("ul1li2tr7").style.display = 'none';
			document.getElementById("ul1li2tr7td1").innerText = '';
			document.getElementById("ul1li2tr7td2").innerText = '';
			document.getElementById("ul1li2tr7td3").innerText = '';
			document.getElementById("ul1li2tr7td4").innerText = '';
			
            document.getElementById("ul1li2tr8").style.display = 'none';
			document.getElementById("ul1li2tr8td1").innerText = '';
			document.getElementById("ul1li2tr8td2").innerText = '';
			document.getElementById("ul1li2tr8td3").innerText = '';
			document.getElementById("ul1li2tr8td4").innerText = '';
            
            document.getElementById("ul1li2tr9").style.display = 'none';
            document.getElementById("ul1li2tr9td1").innerText = '';
			document.getElementById("ul1li2tr9td2").innerText = '';
			document.getElementById("ul1li2tr9td3").innerText = '';
			document.getElementById("ul1li2tr9td4").innerText = '';
            
            document.getElementById("ul1li2tr10").style.display = 'none';
		    document.getElementById("ul1li2tr10td1").innerText = '';
			document.getElementById("ul1li2tr10td2").innerText = '';
			document.getElementById("ul1li2tr10td3").innerText = '';
			document.getElementById("ul1li2tr10td4").innerText = '';
            
            document.getElementById("ul1li2tr11").style.display = 'none';
            document.getElementById("ul1li2tr11td1").innerText = '';
			document.getElementById("ul1li2tr11td2").innerText = '';
			document.getElementById("ul1li2tr11td3").innerText = '';
			document.getElementById("ul1li2tr11td4").innerText = '';
            
            document.getElementById("ul1li2tr12").style.display = 'none';
            document.getElementById("ul1li2tr12td1").innerText = '';
			document.getElementById("ul1li2tr12td2").innerText = '';
			document.getElementById("ul1li2tr12td3").innerText = '';
			document.getElementById("ul1li2tr12td4").innerText = '';
		});
        
        
        $('#rbCMiniRoloAntigota').click(function() {
			$("#rightImageAntigota").attr('src', 'images/antigota/cargaMini_500_375.jpg');
			document.getElementById('rbRoloAntigota').style.fontSize = '0.8em';
			document.getElementById('rbCRoloAntigota').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloAntigota').style.fontSize = '0.8em';
			document.getElementById('rbCMiniRoloAntigota').style.fontSize = '1.0em';
			document.getElementById('rbRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbCRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloAntigota').style.fontWeight = 'normal';
			document.getElementById('rbCMiniRoloAntigota').style.fontWeight = 'bold';
			document.getElementById('rbRoloAntigota').style.color = '#FFF';
			document.getElementById('rbCRoloAntigota').style.color = '#FFF';
			document.getElementById('rbMiniRoloAntigota').style.color = '#FFF';
			document.getElementById('rbCMiniRoloAntigota').style.color = '#FFF';
            document.getElementById('ul1li2m1').className = "";
            document.getElementById('ul1li2m2').className = "";
            document.getElementById('ul1li2m3').className = "";
            document.getElementById('ul1li2m4').className = "activeMenu";
            
            document.getElementById("ul1li2tr1").style.display = 'table-row';
			document.getElementById("ul1li2tr1td1").innerText = '0092';
			document.getElementById("ul1li2tr1td2").innerText = 'Carga Antigota 60 mm';
			document.getElementById("ul1li2tr1td3").innerText = '16';
			document.getElementById("ul1li2tr1td4").innerText = '';
            
            document.getElementById("ul1li2tr2").style.display = 'table-row';
			document.getElementById("ul1li2tr2td1").innerText = '0093';
			document.getElementById("ul1li2tr2td2").innerText = 'Carga Antigota 100 mm';
			document.getElementById("ul1li2tr2td3").innerText = '16';
			document.getElementById("ul1li2tr2td4").innerText = '';

            document.getElementById("ul1li2tr3").style.display = 'table-row';
			document.getElementById("ul1li2tr3td1").innerText = '0184';
			document.getElementById("ul1li2tr3td2").innerText = 'Pack 2 Cargas Antigota 60 mm';
			document.getElementById("ul1li2tr3td3").innerText = '16';
			document.getElementById("ul1li2tr3td4").innerText = '';

            document.getElementById("ul1li2tr4").style.display = 'table-row';
			document.getElementById("ul1li2tr4td1").innerText = '0095';
			document.getElementById("ul1li2tr4td2").innerText = 'Pack 2 Cargas Antigota 100 mm';
			document.getElementById("ul1li2tr4td3").innerText = '16';
			document.getElementById("ul1li2tr4td4").innerText = '';
		
            document.getElementById("ul1li2tr5").style.display = 'table-row';
			document.getElementById("ul1li2tr5td1").innerText = '0185';
			document.getElementById("ul1li2tr5td2").innerText = 'Pack 2 Cargas Antigota 150 mm';
			document.getElementById("ul1li2tr5td3").innerText = '16';
			document.getElementById("ul1li2tr5td4").innerText =  '';
			
            document.getElementById("ul1li2tr6").style.display = 'table-row';
			document.getElementById("ul1li2tr6td1").innerText = '0094';		
			document.getElementById("ul1li2tr6td2").innerText = 'Blister 10 Cargas Antigota 100 mm';
			document.getElementById("ul1li2tr6td3").innerText = '16';
			document.getElementById("ul1li2tr6td4").innerText = '36 Blisters';
		
            document.getElementById("ul1li2tr7").style.display = 'table-row';
			document.getElementById("ul1li2tr7td1").innerText = '0257';
			document.getElementById("ul1li2tr7td2").innerText = 'Blister 16 Cargas Antigota 60 mm';
			document.getElementById("ul1li2tr7td3").innerText = '16';
			document.getElementById("ul1li2tr7td4").innerText = '';

            document.getElementById("ul1li2tr8").style.display = 'table-row';
			document.getElementById("ul1li2tr8td1").innerText = '0207';
			document.getElementById("ul1li2tr8td2").innerText = 'Carga Antigota 120 mm';
			document.getElementById("ul1li2tr8td3").innerText = '30';
			document.getElementById("ul1li2tr8td4").innerText = '';
					
            document.getElementById("ul1li2tr9").style.display = 'table-row';
            document.getElementById("ul1li2tr9td1").innerText = '0208';
			document.getElementById("ul1li2tr9td2").innerText = 'Carga Antigota 150 mm';
			document.getElementById("ul1li2tr9td3").innerText = '30';
			document.getElementById("ul1li2tr9td4").innerText = '';
            
            document.getElementById("ul1li2tr10").style.display = 'table-row';
            document.getElementById("ul1li2tr10td1").innerText = '0211';
			document.getElementById("ul1li2tr10td2").innerText = 'Pack 2 Cargas Antigota 120 mm';
			document.getElementById("ul1li2tr10td3").innerText = '30';
			document.getElementById("ul1li2tr10td4").innerText = '';
            
            document.getElementById("ul1li2tr11").style.display = 'table-row';
            document.getElementById("ul1li2tr11td1").innerText = '0209';
			document.getElementById("ul1li2tr11td2").innerText = 'Blister 10 Cargas Antigota 120 mm';
			document.getElementById("ul1li2tr11td3").innerText = '30';
			document.getElementById("ul1li2tr11td4").innerText = '';
            
            document.getElementById("ul1li2tr12").style.display = 'table-roW';
            document.getElementById("ul1li2tr12td1").innerText = '0210';
			document.getElementById("ul1li2tr12td2").innerText = 'Blister 6 Cargas Antigota 150 mm';
			document.getElementById("ul1li2tr12td3").innerText = '30';
			document.getElementById("ul1li2tr12td4").innerText = '';
		});
		
		
		
		
		//Antigota Verde
		$('#openModelAntigotaVImg').click(function() {
			document.getElementById("rbRoloAntigotaV").click();
		});
		
		
		$('#rbRoloAntigotaV').click(function() {
			$("#rightImageAntigotaV").attr('src', 'images/antigotaV/rolo_500_375.jpg');
			document.getElementById('rbRoloAntigotaV').style.fontSize = '1.0em';
			document.getElementById('rbCRoloAntigotaV').style.fontSize = '0.8em';
			document.getElementById('rbRoloAntigotaV').style.fontWeight = 'bold';
			document.getElementById('rbCRoloAntigotaV').style.fontWeight = 'normal';
			document.getElementById('rbRoloAntigotaV').style.color = '#FFF';
			document.getElementById('rbCRoloAntigotaV').style.color = '#FFF';
            document.getElementById('ul1li3m1').className = "activeMenu";
            document.getElementById('ul1li3m2').className = "";
            
            
			document.getElementById("ul1li3tr1td1").innerText = '0061';
			document.getElementById("ul1li3tr1td2").innerText = 'Rolo Antigota Verde 180 mm';
			document.getElementById("ul1li3tr1td3").innerText = '45';
			document.getElementById("ul1li3tr1td4").innerText = '60';
			
			document.getElementById("ul1li3tr2td1").innerText = '0062';
			document.getElementById("ul1li3tr2td2").innerText = 'Rolo Antigota Verde 220 mm';
			document.getElementById("ul1li3tr2td3").innerText = '45';
			document.getElementById("ul1li3tr2td4").innerText = '55';
				
			document.getElementById("ul1li3tr3td1").innerText = '0063';
			document.getElementById("ul1li3tr3td2").innerText = 'Rolo Antigota Verde 250 mm';
			document.getElementById("ul1li3tr3td3").innerText = '45';
			document.getElementById("ul1li3tr3td4").innerText = '50';

			document.getElementById("ul1li3tr4td1").innerText = '0146';
			document.getElementById("ul1li3tr4td2").innerText = 'Rolo Antigota Verde 180 mm';
			document.getElementById("ul1li3tr4td3").innerText = '50';
			document.getElementById("ul1li3tr4td4").innerText = '55';
		
			document.getElementById("ul1li3tr5td1").innerText = '0147';
			document.getElementById("ul1li3tr5td2").innerText = 'Rolo Antigota Verde 220 mm';
			document.getElementById("ul1li3tr5td3").innerText = '50';
			document.getElementById("ul1li3tr5td4").innerText = '50';
		
			document.getElementById("ul1li3tr6td1").innerText = '0148';
			document.getElementById("ul1li3tr6td2").innerText = 'Rolo Antigota Verde 250 mm';
			document.getElementById("ul1li3tr6td3").innerText = '50';
			document.getElementById("ul1li3tr6td4").innerText = '45';
		
		});
        
        $('#rbCRoloAntigotaV').click(function() {
			$("#rightImageAntigotaV").attr('src', 'images/antigotaV/carga_500_375.jpg');
			document.getElementById('rbRoloAntigotaV').style.fontSize = '0.8em';
			document.getElementById('rbCRoloAntigotaV').style.fontSize = '1.0em';
			document.getElementById('rbRoloAntigotaV').style.fontWeight = 'normal';
			document.getElementById('rbCRoloAntigotaV').style.fontWeight = 'bold';
			document.getElementById('rbRoloAntigotaV').style.color = '#FFF';
			document.getElementById('rbCRoloAntigotaV').style.color = '#FFF';
            document.getElementById('ul1li3m1').className = "";
            document.getElementById('ul1li3m2').className = "activeMenu";
            
            
			document.getElementById("ul1li3tr1td1").innerText = '0018';
			document.getElementById("ul1li3tr1td2").innerText = 'Carga Antigota Verde 180 mm';
			document.getElementById("ul1li3tr1td3").innerText = '45';
			document.getElementById("ul1li3tr1td4").innerText = '';

			document.getElementById("ul1li3tr2td1").innerText = '0019';
			document.getElementById("ul1li3tr2td2").innerText = 'Carga Antigota Verde 220 mm';
			document.getElementById("ul1li3tr2td3").innerText = '45';
			document.getElementById("ul1li3tr2td4").innerText = '';
			
			document.getElementById("ul1li3tr3td1").innerText = '0020';
			document.getElementById("ul1li3tr3td2").innerText = 'Carga Antigota Verde 250 mm';
			document.getElementById("ul1li3tr3td3").innerText = '45';
			document.getElementById("ul1li3tr3td4").innerText = '';
			
			document.getElementById("ul1li3tr4td1").innerText = '0128';
			document.getElementById("ul1li3tr4td2").innerText = 'Carga Antigota Verde 180 mm';
			document.getElementById("ul1li3tr4td3").innerText = '50';
			document.getElementById("ul1li3tr4td4").innerText = '';
			
			document.getElementById("ul1li3tr5td1").innerText = '0129';
			document.getElementById("ul1li3tr5td2").innerText = 'Carga Antigota Verde 220 mm';
			document.getElementById("ul1li3tr5td3").innerText = '50';
			document.getElementById("ul1li3tr5td4").innerText = '';
		
			document.getElementById("ul1li3tr6td1").innerText = '0130';  
			document.getElementById("ul1li3tr6td2").innerText = 'Carga Antigota Verde 250 mm';
			document.getElementById("ul1li3tr6td3").innerText = '50';
			document.getElementById("ul1li3tr6td4").innerText = '';
		
			
		});

							   
		/*$('#rbMiniRoloAntigotaV').click(function() {
			$("#rightImageAntigotaV").attr('src', 'images/18/AntigotaV.JPG');
			document.getElementById('rbRoloAntigotaV').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloAntigotaV').style.fontSize = '1.2em';
			document.getElementById('rbRoloAntigotaV').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloAntigotaV').style.fontWeight = 'bold';
			document.getElementById('rbRoloAntigotaV').style.color = '#FFF';
			document.getElementById('rbMiniRoloAntigotaV').style.color = '#FFF';
			document.getElementById("ul1li3tr1td1").innerText = '';
			document.getElementById("ul1li3tr1td2").innerText = '';
			document.getElementById("ul1li3tr1td3").innerText = '';
			document.getElementById("ul1li3tr1td4").innerText = '';
			document.getElementById("ul1li3tr2td1").innerText = '';
			document.getElementById("ul1li3tr2td2").innerText = '';
			document.getElementById("ul1li3tr2td3").innerText = '';
			document.getElementById("ul1li3tr2td4").innerText = '';
			document.getElementById("ul1li3tr3td1").innerText = '';
			document.getElementById("ul1li3tr3td2").innerText = '';
			document.getElementById("ul1li3tr3td3").innerText = '';
			document.getElementById("ul1li3tr3td4").innerText = '';
			document.getElementById("ul1li3tr4td1").innerText = '';
			document.getElementById("ul1li3tr4td2").innerText = '';
			document.getElementById("ul1li3tr4td3").innerText = '';
			document.getElementById("ul1li3tr4td4").innerText = '';
			document.getElementById("ul1li3tr5td1").innerText = '';
			document.getElementById("ul1li3tr5td2").innerText = '';
			document.getElementById("ul1li3tr5td3").innerText = '';
			document.getElementById("ul1li3tr5td4").innerText = '';
			document.getElementById("ul1li3tr6td1").innerText = '';
			document.getElementById("ul1li3tr6td2").innerText = '';
			document.getElementById("ul1li3tr6td3").innerText = '';
			document.getElementById("ul1li3tr6td4").innerText = '';
			document.getElementById("ul1li3tr7td1").innerText = '';
			document.getElementById("ul1li3tr7td2").innerText = '';
			document.getElementById("ul1li3tr7td3").innerText = '';
			document.getElementById("ul1li3tr7td4").innerText = '';
			
		});
        
        $('#rbCMiniRoloAntigotaV').click(function() {
			$("#rightImageAntigotaV").attr('src', 'images/18/AntigotaV.JPG');
			document.getElementById('rbRoloAntigotaV').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloAntigotaV').style.fontSize = '1.2em';
			document.getElementById('rbRoloAntigotaV').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloAntigotaV').style.fontWeight = 'bold';
			document.getElementById('rbRoloAntigotaV').style.color = '#FFF';
			document.getElementById('rbMiniRoloAntigotaV').style.color = '#FFF';
			document.getElementById("ul1li3tr1td1").innerText = '';
			document.getElementById("ul1li3tr1td2").innerText = '';
			document.getElementById("ul1li3tr1td3").innerText = '';
			document.getElementById("ul1li3tr1td4").innerText = '';
			document.getElementById("ul1li3tr2td1").innerText = '';
			document.getElementById("ul1li3tr2td2").innerText = '';
			document.getElementById("ul1li3tr2td3").innerText = '';
			document.getElementById("ul1li3tr2td4").innerText = '';
			document.getElementById("ul1li3tr3td1").innerText = '';
			document.getElementById("ul1li3tr3td2").innerText = '';
			document.getElementById("ul1li3tr3td3").innerText = '';
			document.getElementById("ul1li3tr3td4").innerText = '';
			document.getElementById("ul1li3tr4td1").innerText = '';
			document.getElementById("ul1li3tr4td2").innerText = '';
			document.getElementById("ul1li3tr4td3").innerText = '';
			document.getElementById("ul1li3tr4td4").innerText = '';
			document.getElementById("ul1li3tr5td1").innerText = '';
			document.getElementById("ul1li3tr5td2").innerText = '';
			document.getElementById("ul1li3tr5td3").innerText = '';
			document.getElementById("ul1li3tr5td4").innerText = '';
			document.getElementById("ul1li3tr6td1").innerText = '';
			document.getElementById("ul1li3tr6td2").innerText = '';
			document.getElementById("ul1li3tr6td3").innerText = '';
			document.getElementById("ul1li3tr6td4").innerText = '';
			document.getElementById("ul1li3tr7td1").innerText = '';
			document.getElementById("ul1li3tr7td2").innerText = '';
			document.getElementById("ul1li3tr7td3").innerText = '';
			document.getElementById("ul1li3tr7td4").innerText = '';
			
		});*/
    
    
	
		//Menu 18
		$('#openModelCromadoImg').click(function() {
			document.getElementById("rbRoloCromado").click();
		});
		
		
		$('#rbRoloCromado').click(function() {
			$("#rightImageCromado").attr('src', 'images/cromado/rolo_500_375.jpg');
			document.getElementById('rbRoloCromado').style.fontSize = '1.0em';
			document.getElementById('rbCRoloCromado').style.fontSize = '0.8em';
			document.getElementById('rbRoloCromado').style.fontWeight = 'bold';
			document.getElementById('rbCRoloCromado').style.fontWeight = 'normal';
			document.getElementById('rbRoloCromado').style.color = '#FFF';
			document.getElementById('rbCRoloCromado').style.color = '#FFF';
            document.getElementById('ul1li4m1').className = "activeMenu";
            document.getElementById('ul1li4m2').className = "";
            
			
			document.getElementById("ul1li4tr1td1").innerText = '0055';
			document.getElementById("ul1li4tr1td2").innerText = 'Rolo Cromado 180 mm';
			document.getElementById("ul1li4tr1td3").innerText = '45';
			document.getElementById("ul1li4tr1td4").innerText = '60'
			
			document.getElementById("ul1li4tr2td1").innerText = '0056';
			document.getElementById("ul1li4tr2td2").innerText = 'Rolo Cromado 220 mm';
			document.getElementById("ul1li4tr2td3").innerText = '45';
			document.getElementById("ul1li4tr2td4").innerText = '55'
	
			document.getElementById("ul1li4tr3td1").innerText = '0054';
			document.getElementById("ul1li4tr3td2").innerText = 'Rolo Cromado 25 0mm';
			document.getElementById("ul1li4tr3td3").innerText = '45';
			document.getElementById("ul1li4tr3td4").innerText = '50'
			
		});
        
        $('#rbCRoloCromado').click(function() {
			$("#rightImageCromado").attr('src', 'images/cromado/carga_500_375.jpg');
			document.getElementById('rbRoloCromado').style.fontSize = '0.8em';
			document.getElementById('rbCRoloCromado').style.fontSize = '1.0em';
			document.getElementById('rbRoloCromado').style.fontWeight = 'normal';
			document.getElementById('rbCRoloCromado').style.fontWeight = 'bold';
			document.getElementById('rbRoloCromado').style.color = '#FFF';
			document.getElementById('rbCRoloCromado').style.color = '#FFF';
            document.getElementById('ul1li4m1').className = "";
            document.getElementById('ul1li4m2').className = "activeMenu";
            
			
			document.getElementById("ul1li4tr1td1").innerText = '0012';
			document.getElementById("ul1li4tr1td2").innerText = 'Carga Cromado 180 mm';
			document.getElementById("ul1li4tr1td3").innerText = '45';
			document.getElementById("ul1li4tr1td4").innerText = ''
	
			document.getElementById("ul1li4tr2td1").innerText = '0013';
			document.getElementById("ul1li4tr2td2").innerText = 'Carga Cromado 220 mm';
			document.getElementById("ul1li4tr2td3").innerText = '45';
			document.getElementById("ul1li4tr2td4").innerText = ''

			document.getElementById("ul1li4tr3td1").innerText = '0014';
			document.getElementById("ul1li4tr3td2").innerText = 'Carga Cromado 250 mm';
			document.getElementById("ul1li4tr3td3").innerText = '45';
			document.getElementById("ul1li4tr3td4").innerText = ''
			
		});

		/*					   
		$('#rbMiniRoloCromado').click(function() {
			$("#rightImageCromado").attr('src', 'images/18/Cromado.JPG');
			document.getElementById('rbRoloCromado').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloCromado').style.fontSize = '1.2em';
			document.getElementById('rbRoloCromado').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloCromado').style.fontWeight = 'bold';
			document.getElementById('rbRoloCromado').style.color = '#FFF';
			document.getElementById('rbMiniRoloCromado').style.color = '#FFF';
			document.getElementById("ul1li4tr1td1").innerText = '';
			document.getElementById("ul1li4tr1td2").innerText = '';
			document.getElementById("ul1li4tr1td3").innerText = '';
			document.getElementById("ul1li4tr1td4").innerText = '';
			document.getElementById("ul1li4tr2td1").innerText = '';
			document.getElementById("ul1li4tr2td2").innerText = '';
			document.getElementById("ul1li4tr2td3").innerText = '';
			document.getElementById("ul1li4tr2td4").innerText = '';
			document.getElementById("ul1li4tr3td1").innerText = '';
			document.getElementById("ul1li4tr3td2").innerText = '';
			document.getElementById("ul1li4tr3td3").innerText = '';
			document.getElementById("ul1li4tr3td4").innerText = '';
			document.getElementById("ul1li4tr4td1").innerText = '';
			document.getElementById("ul1li4tr4td2").innerText = '';
			document.getElementById("ul1li4tr4td3").innerText = '';
			document.getElementById("ul1li4tr4td4").innerText = '';
			document.getElementById("ul1li4tr5td1").innerText = '';
			document.getElementById("ul1li4tr5td2").innerText = '';
			document.getElementById("ul1li4tr5td3").innerText = '';
			document.getElementById("ul1li4tr5td4").innerText = '';
			document.getElementById("ul1li4tr6td1").innerText = '';
			document.getElementById("ul1li4tr6td2").innerText = '';
			document.getElementById("ul1li4tr6td3").innerText = '';
			document.getElementById("ul1li4tr6td4").innerText = '';
			document.getElementById("ul1li4tr7td1").innerText = '';
			document.getElementById("ul1li4tr7td2").innerText = '';
			document.getElementById("ul1li4tr7td3").innerText = '';
			document.getElementById("ul1li4tr7td4").innerText = '';
			
		});
		 */
		
		//Espuma
		$('#openModelEspumaImg').click(function() {
			document.getElementById("rbRoloEspuma").click();
		});
		
		
		$('#rbRoloEspuma').click(function() {
			$("#rightImageEspuma").attr('src', 'images/espuma/rolo_500_375.jpg');
			document.getElementById('rbRoloEspuma').style.fontSize = '1.0em';
            document.getElementById('rbCRoloEspuma').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloEspuma').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloEspuma').style.fontSize = '0.8em';
			document.getElementById('rbRoloEspuma').style.fontWeight = 'bold';
            document.getElementById('rbCRoloEspuma').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloEspuma').style.fontWeight = 'normal';
			document.getElementById('rbCMiniRoloEspuma').style.fontWeight = 'normal';
			document.getElementById('rbRoloEspuma').style.color = '#FFF';
            document.getElementById('rbCRoloEspuma').style.color = '#FFF';
			document.getElementById('rbMiniRoloEspuma').style.color = '#FFF';
			document.getElementById('rbCMiniRoloEspuma').style.color = '#FFF';
            document.getElementById('ul2li1m1').className = "activeMenu";
            document.getElementById('ul2li1m2').className = "";
            document.getElementById('ul2li1m3').className = "";
            document.getElementById('ul2li1m4').className = "";
            
			document.getElementById("ul2li1tr1td1").innerText = '0080';
			document.getElementById("ul2li1tr1td2").innerText = 'Rolo Espuma Canto';
			document.getElementById("ul2li1tr1td3").innerText = '75';
			document.getElementById("ul2li1tr1td4").innerText = '24';
			
			document.getElementById("ul2li1tr2td1").innerText = '';
			document.getElementById("ul2li1tr2td2").innerText = '';
			document.getElementById("ul2li1tr2td3").innerText = '';
			document.getElementById("ul2li1tr2td4").innerText = '';
			
			document.getElementById("ul2li1tr3td1").innerText = '';
			document.getElementById("ul2li1tr3td2").innerText = '';
			document.getElementById("ul2li1tr3td3").innerText = '';
			document.getElementById("ul2li1tr3td4").innerText = '';
			
			document.getElementById("ul2li1tr4td1").innerText = '';
			document.getElementById("ul2li1tr4td2").innerText = '';
			document.getElementById("ul2li1tr4td3").innerText = '';
			document.getElementById("ul2li1tr4td4").innerText = '';
			
			document.getElementById("ul2li1tr5td1").innerText = '';
			document.getElementById("ul2li1tr5td2").innerText = '';
			document.getElementById("ul2li1tr5td3").innerText = '';
			document.getElementById("ul2li1tr5td4").innerText = '';
			
			document.getElementById("ul2li1tr6td1").innerText = '';
			document.getElementById("ul2li1tr6td2").innerText = '';
			document.getElementById("ul2li1tr6td3").innerText = '';
			document.getElementById("ul2li1tr6td4").innerText = '';
			
			document.getElementById("ul2li1tr7td1").innerText = '';
			document.getElementById("ul2li1tr7td2").innerText = '';
			document.getElementById("ul2li1tr7td3").innerText = '';
			document.getElementById("ul2li1tr7td4").innerText = '';
			
            document.getElementById("ul2li1tr8td1").innerText = '';
			document.getElementById("ul2li1tr8td2").innerText = '';
			document.getElementById("ul2li1tr8td3").innerText = '';
			document.getElementById("ul2li1tr8td4").innerText = '';
            
			document.getElementById("ul2li1tr9td1").innerText = '';
			document.getElementById("ul2li1tr9td2").innerText = '';
			document.getElementById("ul2li1tr9td3").innerText = '';
			document.getElementById("ul2li1tr9td4").innerText = '';
		});
        
        $('#rbCRoloEspuma').click(function() {
			$("#rightImageEspuma").attr('src', 'images/espuma/carga_500_375.jpg');
			document.getElementById('rbRoloEspuma').style.fontSize = '0.8em';
            document.getElementById('rbCRoloEspuma').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloEspuma').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloEspuma').style.fontSize = '0.8em';
			document.getElementById('rbRoloEspuma').style.fontWeight = 'normal';
            document.getElementById('rbCRoloEspuma').style.fontWeight = 'bold';
			document.getElementById('rbMiniRoloEspuma').style.fontWeight = 'normal';
			document.getElementById('rbCMiniRoloEspuma').style.fontWeight = 'normal';
			document.getElementById('rbRoloEspuma').style.color = '#FFF';
            document.getElementById('rbCRoloEspuma').style.color = '#FFF';
			document.getElementById('rbMiniRoloEspuma').style.color = '#FFF';
			document.getElementById('rbCMiniRoloEspuma').style.color = '#FFF';
            document.getElementById('ul2li1m1').className = "";
            document.getElementById('ul2li1m2').className = "activeMenu";
            document.getElementById('ul2li1m3').className = "";
            document.getElementById('ul2li1m4').className = "";
            
			document.getElementById("ul2li1tr1td1").innerText = '0037';
			document.getElementById("ul2li1tr1td2").innerText = 'Carga Espuma Canto';
			document.getElementById("ul2li1tr1td3").innerText = '75';
			document.getElementById("ul2li1tr1td4").innerText = '';
			
			document.getElementById("ul2li1tr2td1").innerText = '';
			document.getElementById("ul2li1tr2td2").innerText = '';
			document.getElementById("ul2li1tr2td3").innerText = '';
			document.getElementById("ul2li1tr2td4").innerText = '';
			
			document.getElementById("ul2li1tr3td1").innerText = '';
			document.getElementById("ul2li1tr3td2").innerText = '';
			document.getElementById("ul2li1tr3td3").innerText = '';
			document.getElementById("ul2li1tr3td4").innerText = '';
			
			document.getElementById("ul2li1tr4td1").innerText = '';
			document.getElementById("ul2li1tr4td2").innerText = '';
			document.getElementById("ul2li1tr4td3").innerText = '';
			document.getElementById("ul2li1tr4td4").innerText = '';
			
			document.getElementById("ul2li1tr5td1").innerText = '';
			document.getElementById("ul2li1tr5td2").innerText = '';
			document.getElementById("ul2li1tr5td3").innerText = '';
			document.getElementById("ul2li1tr5td4").innerText = '';
			
			document.getElementById("ul2li1tr6td1").innerText = '';
			document.getElementById("ul2li1tr6td2").innerText = '';
			document.getElementById("ul2li1tr6td3").innerText = '';
			document.getElementById("ul2li1tr6td4").innerText = '';
			
			document.getElementById("ul2li1tr7td1").innerText = '';
			document.getElementById("ul2li1tr7td2").innerText = '';
			document.getElementById("ul2li1tr7td3").innerText = '';
			document.getElementById("ul2li1tr7td4").innerText = '';
			
            document.getElementById("ul2li1tr8td1").innerText = '';
			document.getElementById("ul2li1tr8td2").innerText = '';
			document.getElementById("ul2li1tr8td3").innerText = '';
			document.getElementById("ul2li1tr8td4").innerText = '';
         			
            document.getElementById("ul2li1tr9td1").innerText = '';
			document.getElementById("ul2li1tr9td2").innerText = '';
			document.getElementById("ul2li1tr9td3").innerText = '';
			document.getElementById("ul2li1tr9td4").innerText = '';

		});

        
        
		$('#rbMiniRoloEspuma').click(function() {
			$("#rightImageEspuma").attr('src', 'images/espuma/mini_500_375.jpg');
			document.getElementById('rbRoloEspuma').style.fontSize = '0.8em';
            document.getElementById('rbCRoloEspuma').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloEspuma').style.fontSize = '1.0em';
            document.getElementById('rbCMiniRoloEspuma').style.fontSize = '0.8em';
			document.getElementById('rbRoloEspuma').style.fontWeight = 'normal';
            document.getElementById('rbCRoloEspuma').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloEspuma').style.fontWeight = 'bold';
			document.getElementById('rbCMiniRoloEspuma').style.fontWeight = 'normal';
			document.getElementById('rbRoloEspuma').style.color = '#FFF';
            document.getElementById('rbCRoloEspuma').style.color = '#FFF';
			document.getElementById('rbMiniRoloEspuma').style.color = '#FFF';
			document.getElementById('rbCMiniRoloEspuma').style.color = '#FFF';
            document.getElementById('ul2li1m1').className = "";
            document.getElementById('ul2li1m2').className = "";
            document.getElementById('ul2li1m3').className = "activeMenu";
            document.getElementById('ul2li1m4').className = "";
            
			document.getElementById("ul2li1tr1td1").innerText = '0244';
			document.getElementById("ul2li1tr1td2").innerText = 'Mini Rolo Espuma 60 mm';
			document.getElementById("ul2li1tr1td3").innerText = '16';
			document.getElementById("ul2li1tr1td4").innerText = '';
		
			document.getElementById("ul2li1tr2td1").innerText = '0229';
			document.getElementById("ul2li1tr2td2").innerText = 'Mini Rolo Espuma 110 mm';
			document.getElementById("ul2li1tr2td3").innerText = '16';
			document.getElementById("ul2li1tr2td4").innerText = '';
		
            document.getElementById("ul2li1tr3td1").innerText = '0260';
			document.getElementById("ul2li1tr3td2").innerText = 'Mini Rolo Espuma 150 mm';
			document.getElementById("ul2li1tr3td3").innerText = '';
			document.getElementById("ul2li1tr3td4").innerText = '';
	
			document.getElementById("ul2li1tr4td1").innerText = '';
			document.getElementById("ul2li1tr4td2").innerText = '';
			document.getElementById("ul2li1tr4td3").innerText = '';
			document.getElementById("ul2li1tr4td4").innerText = '';
			
			document.getElementById("ul2li1tr5td1").innerText = '';
			document.getElementById("ul2li1tr5td2").innerText = '';
			document.getElementById("ul2li1tr5td3").innerText = '';
			document.getElementById("ul2li1tr5td4").innerText = '';
			
			document.getElementById("ul2li1tr6td1").innerText = '';
			document.getElementById("ul2li1tr6td2").innerText = '';
			document.getElementById("ul2li1tr6td3").innerText = '';
			document.getElementById("ul2li1tr6td4").innerText = '';
			
			document.getElementById("ul2li1tr7td1").innerText = '';
			document.getElementById("ul2li1tr7td2").innerText = '';
			document.getElementById("ul2li1tr7td3").innerText = '';
			document.getElementById("ul2li1tr7td4").innerText = '';
			
			document.getElementById("ul2li1tr8td1").innerText = '';
			document.getElementById("ul2li1tr8td2").innerText = '';
			document.getElementById("ul2li1tr8td3").innerText = '';
			document.getElementById("ul2li1tr8td4").innerText = '';
            
            document.getElementById("ul2li1tr9td1").innerText = '';
			document.getElementById("ul2li1tr9td2").innerText = '';
			document.getElementById("ul2li1tr9td3").innerText = '';
			document.getElementById("ul2li1tr9td4").innerText = '';
		});
        
        
        $('#rbCMiniRoloEspuma').click(function() {
			$("#rightImageEspuma").attr('src', 'images/espuma/cargaMini_500_375.jpg');
			document.getElementById('rbRoloEspuma').style.fontSize = '0.8em';
            document.getElementById('rbCRoloEspuma').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloEspuma').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloEspuma').style.fontSize = '1.0em';
			document.getElementById('rbRoloEspuma').style.fontWeight = 'normal';
            document.getElementById('rbCRoloEspuma').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloEspuma').style.fontWeight = 'normal';
			document.getElementById('rbCMiniRoloEspuma').style.fontWeight = 'bold';
			document.getElementById('rbRoloEspuma').style.color = '#FFF';
            document.getElementById('rbCRoloEspuma').style.color = '#FFF';
			document.getElementById('rbMiniRoloEspuma').style.color = '#FFF';
			document.getElementById('rbCMiniRoloEspuma').style.color = '#FFF';
            document.getElementById('ul2li1m1').className = "";
            document.getElementById('ul2li1m2').className = "";
            document.getElementById('ul2li1m3').className = "";
            document.getElementById('ul2li1m4').className = "activeMenu";
            
			document.getElementById("ul2li1tr1td1").innerText = '0096';
			document.getElementById("ul2li1tr1td2").innerText = 'Carga Espuma 60 mm';
			document.getElementById("ul2li1tr1td3").innerText = '16';
			document.getElementById("ul2li1tr1td4").innerText = '';
			
			document.getElementById("ul2li1tr2td1").innerText = '0097';
			document.getElementById("ul2li1tr2td2").innerText = 'Carga Espuma 110 mm';
			document.getElementById("ul2li1tr2td3").innerText = '16';
			document.getElementById("ul2li1tr2td4").innerText = '';
			
			document.getElementById("ul2li1tr3td1").innerText = '0098';
			document.getElementById("ul2li1tr3td2").innerText = 'Carga Espuma 150 mm';
			document.getElementById("ul2li1tr3td3").innerText = '16';
			document.getElementById("ul2li1tr3td4").innerText = '';
			
			document.getElementById("ul2li1tr4td1").innerText = '0233';
			document.getElementById("ul2li1tr4td2").innerText = 'Pack 2 Cargas Espuma 60 mm';
			document.getElementById("ul2li1tr4td3").innerText = '16';
			document.getElementById("ul2li1tr4td4").innerText = '';
			
			document.getElementById("ul2li1tr5td1").innerText = '0232';
			document.getElementById("ul2li1tr5td2").innerText = 'Pack 2 Cargas Espuma 110 mm';
			document.getElementById("ul2li1tr5td3").innerText = '16';
			document.getElementById("ul2li1tr5td4").innerText = '';
	
			document.getElementById("ul2li1tr6td1").innerText = '0251';
			document.getElementById("ul2li1tr6td2").innerText = 'Pack 2 Cargas Espuma 150 mm';
			document.getElementById("ul2li1tr6td3").innerText = '16';
			document.getElementById("ul2li1tr6td4").innerText = '';
			
			document.getElementById("ul2li1tr7td1").innerText = '0261';
			document.getElementById("ul2li1tr7td2").innerText = 'Blister 16 Cargas Espuma 60 mm';
			document.getElementById("ul2li1tr7td3").innerText = '16';
			document.getElementById("ul2li1tr7td4").innerText = '';
			
			document.getElementById("ul2li1tr8td1").innerText = '0231';
			document.getElementById("ul2li1tr8td2").innerText = 'Blister 10 Cargas Espuma 110 mm';
			document.getElementById("ul2li1tr8td3").innerText = '16';
			document.getElementById("ul2li1tr8td4").innerText = '36 Blisters';
		
            document.getElementById("ul2li1tr9td1").innerText = '0252';
			document.getElementById("ul2li1tr9td2").innerText = 'Blister 10 Cargas Espuma 110 mm (Topo Redondo)';
			document.getElementById("ul2li1tr9td3").innerText = '16';
			document.getElementById("ul2li1tr9td4").innerText = '';
			
		});
		
		
		
		//JUNIOR
		$('#openModelJuniorImg').click(function() {
			document.getElementById("rbRoloJunior").click();
		});
		
		
		$('#rbRoloJunior').click(function() {
			$("#rightImageJunior").attr('src', 'images/junior/rolo_500_375.jpg');
			document.getElementById('rbRoloJunior').style.fontSize = '1.0em';
            document.getElementById('rbCRoloJunior').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloJunior').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloJunior').style.fontSize = '0.8em';
			document.getElementById('rbRoloJunior').style.fontWeight = 'bold';
            document.getElementById('rbCRoloJunior').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloJunior').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloJunior').style.fontWeight = 'normal';
			document.getElementById('rbRoloJunior').style.color = '#FFF';
            document.getElementById('rbCRoloJunior').style.color = '#FFF';
			document.getElementById('rbMiniRoloJunior').style.color = '#FFF';
            document.getElementById('rbCMiniRoloJunior').style.color = '#FFF';
            document.getElementById('ul2li2m1').className = "activeMenu";
            document.getElementById('ul2li2m2').className = "";
            document.getElementById('ul2li2m3').className = "";
            document.getElementById('ul2li2m4').className = "";
			
			document.getElementById("ul2li2tr1td1").innerText = '0044';
			document.getElementById("ul2li2tr1td2").innerText = 'Rolo Júnior  60 mm';
			document.getElementById("ul2li2tr1td3").innerText = '45';
			document.getElementById("ul2li2tr1td4").innerText = '60'

			document.getElementById("ul2li2tr2td1").innerText = '0045';
			document.getElementById("ul2li2tr2td2").innerText = 'Rolo Júnior 150 mm';
			document.getElementById("ul2li2tr2td3").innerText = '45';
			document.getElementById("ul2li2tr2td4").innerText = '24'
			
			document.getElementById("ul2li2tr3td1").innerText = '0046';
			document.getElementById("ul2li2tr3td2").innerText = 'Rolo Júnior 180 mm';
			document.getElementById("ul2li2tr3td3").innerText = '45';
			document.getElementById("ul2li2tr3td4").innerText = '60';
			
			document.getElementById("ul2li2tr4td1").innerText = '0047';
			document.getElementById("ul2li2tr4td2").innerText = 'Rolo Júnior 220 mm';
			document.getElementById("ul2li2tr4td3").innerText = '45';
			document.getElementById("ul2li2tr4td4").innerText = '55';
		
			document.getElementById("ul2li2tr5td1").innerText = '0048';
			document.getElementById("ul2li2tr5td2").innerText = 'Rolo Júnior 250 mm';
			document.getElementById("ul2li2tr5td3").innerText = '45';
			document.getElementById("ul2li2tr5td4").innerText = '50';
			
			document.getElementById("ul2li2tr6td1").innerText = '0140';
			document.getElementById("ul2li2tr6td2").innerText = 'Rolo Júnior 180 mm';
			document.getElementById("ul2li2tr6td3").innerText = '50';
			document.getElementById("ul2li2tr6td4").innerText = '55';
			
			document.getElementById("ul2li2tr7td1").innerText = '0141';
			document.getElementById("ul2li2tr7td2").innerText = 'Rolo Júnior 220 mm';
			document.getElementById("ul2li2tr7td3").innerText = '50';
			document.getElementById("ul2li2tr7td4").innerText = '50';
			
			document.getElementById("ul2li2tr8td1").innerText = '0142';
			document.getElementById("ul2li2tr8td2").innerText = 'Rolo Júnior 250 mm';
			document.getElementById("ul2li2tr8td3").innerText = '50';
			document.getElementById("ul2li2tr8td4").innerText = '45';
			
		});
        
        
        $('#rbCRoloJunior').click(function() {
			$("#rightImageJunior").attr('src', 'images/junior/carga_500_375.jpg');
			document.getElementById('rbRoloJunior').style.fontSize = '0.8em';
            document.getElementById('rbCRoloJunior').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloJunior').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloJunior').style.fontSize = '0.8em';
			document.getElementById('rbRoloJunior').style.fontWeight = 'normal';
            document.getElementById('rbCRoloJunior').style.fontWeight = 'bold';
			document.getElementById('rbMiniRoloJunior').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloJunior').style.fontWeight = 'normal';
			document.getElementById('rbRoloJunior').style.color = '#FFF';
            document.getElementById('rbCRoloJunior').style.color = '#FFF';
			document.getElementById('rbMiniRoloJunior').style.color = '#FFF';
            document.getElementById('rbCMiniRoloJunior').style.color = '#FFF';
            document.getElementById('ul2li2m1').className = "";
            document.getElementById('ul2li2m2').className = "activeMenu";
            document.getElementById('ul2li2m3').className = "";
            document.getElementById('ul2li2m4').className = "";
            
			document.getElementById("ul2li2tr1td1").innerText = '0001';
			document.getElementById("ul2li2tr1td2").innerText = 'Carga Júnior  60 mm';
			document.getElementById("ul2li2tr1td3").innerText = '45';
			document.getElementById("ul2li2tr1td4").innerText = '';
			
			document.getElementById("ul2li2tr2td1").innerText = '0002';
			document.getElementById("ul2li2tr2td2").innerText = 'Carga Júnior 150 mm';
			document.getElementById("ul2li2tr2td3").innerText = '45';
			document.getElementById("ul2li2tr2td4").innerText = '';
		
			document.getElementById("ul2li2tr3td1").innerText = '0003';
			document.getElementById("ul2li2tr3td2").innerText = 'Carga Júnior 180 mm';
			document.getElementById("ul2li2tr3td3").innerText = '45';
			document.getElementById("ul2li2tr3td4").innerText = '';
			
			document.getElementById("ul2li2tr4td1").innerText = '0004';
			document.getElementById("ul2li2tr4td2").innerText = 'Carga Júnior 220 mm';
			document.getElementById("ul2li2tr4td3").innerText = '45';
			document.getElementById("ul2li2tr4td4").innerText = '';
			
			document.getElementById("ul2li2tr5td1").innerText = '0005';
			document.getElementById("ul2li2tr5td2").innerText = 'Carga Júnior 250 mm';
			document.getElementById("ul2li2tr5td3").innerText = '45';
			document.getElementById("ul2li2tr5td4").innerText = '';
			
			document.getElementById("ul2li2tr6td1").innerText = '0122';
			document.getElementById("ul2li2tr6td2").innerText = 'Carga Júnior 180 mm';
			document.getElementById("ul2li2tr6td3").innerText = '50';
			document.getElementById("ul2li2tr6td4").innerText = '';
	
			document.getElementById("ul2li2tr7td1").innerText = '0123';
			document.getElementById("ul2li2tr7td2").innerText = 'Carga Júnior 220 mm';
			document.getElementById("ul2li2tr7td3").innerText = '50';
			document.getElementById("ul2li2tr7td4").innerText = '';
	
			document.getElementById("ul2li2tr8td1").innerText = '0124';
			document.getElementById("ul2li2tr8td2").innerText = 'Carga Júnior 250 mm';
			document.getElementById("ul2li2tr8td3").innerText = '50';
			document.getElementById("ul2li2tr8td4").innerText = '';
	
			
			
		});

							   
		$('#rbMiniRoloJunior').click(function() {
			$("#rightImageJunior").attr('src', 'images/junior/mini_500_375.jpg');
			document.getElementById('rbRoloJunior').style.fontSize = '0.8em';
            document.getElementById('rbCRoloJunior').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloJunior').style.fontSize = '1.0em';
            document.getElementById('rbCMiniRoloJunior').style.fontSize = '0.8em';
			document.getElementById('rbRoloJunior').style.fontWeight = 'normal';
            document.getElementById('rbCRoloJunior').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloJunior').style.fontWeight = 'bold';
            document.getElementById('rbCMiniRoloJunior').style.fontWeight = 'normal';
			document.getElementById('rbRoloJunior').style.color = '#FFF';
            document.getElementById('rbCRoloJunior').style.color = '#FFF';
			document.getElementById('rbMiniRoloJunior').style.color = '#FFF';
            document.getElementById('rbCMiniRoloJunior').style.color = '#FFF';
            document.getElementById('ul2li2m1').className = "";
            document.getElementById('ul2li2m2').className = "";
            document.getElementById('ul2li2m3').className = "activeMenu";
            document.getElementById('ul2li2m4').className = "";
			document.getElementById("ul2li2tr1td1").innerText = '';
			document.getElementById("ul2li2tr1td2").innerText = '';
			document.getElementById("ul2li2tr1td3").innerText = '';
			document.getElementById("ul2li2tr1td4").innerText = '';
			document.getElementById("ul2li2tr2td1").innerText = '';
			document.getElementById("ul2li2tr2td2").innerText = '';
			document.getElementById("ul2li2tr2td3").innerText = '';
			document.getElementById("ul2li2tr2td4").innerText = '';
			document.getElementById("ul2li2tr3td1").innerText = '';
			document.getElementById("ul2li2tr3td2").innerText = '';
			document.getElementById("ul2li2tr3td3").innerText = '';
			document.getElementById("ul2li2tr3td4").innerText = '';
			document.getElementById("ul2li2tr4td1").innerText = '';
			document.getElementById("ul2li2tr4td2").innerText = '';
			document.getElementById("ul2li2tr4td3").innerText = '';
			document.getElementById("ul2li2tr4td4").innerText = '';
			document.getElementById("ul2li2tr5td1").innerText = '';
			document.getElementById("ul2li2tr5td2").innerText = '';
			document.getElementById("ul2li2tr5td3").innerText = '';
			document.getElementById("ul2li2tr5td4").innerText = '';
			document.getElementById("ul2li2tr6td1").innerText = '';
			document.getElementById("ul2li2tr6td2").innerText = '';
			document.getElementById("ul2li2tr6td3").innerText = '';
			document.getElementById("ul2li2tr6td4").innerText = '';
			document.getElementById("ul2li2tr7td1").innerText = '';
			document.getElementById("ul2li2tr7td2").innerText = '';
			document.getElementById("ul2li2tr7td3").innerText = '';
			document.getElementById("ul2li2tr7td4").innerText = '';
			
		});
        
        $('#rbCMiniRoloJunior').click(function() {
			$("#rightImageJunior").attr('src', 'images/junior/cargaMini_500_375.jpg');
			document.getElementById('rbRoloJunior').style.fontSize = '0.8em';
            document.getElementById('rbCRoloJunior').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloJunior').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloJunior').style.fontSize = '1.0em';
			document.getElementById('rbRoloJunior').style.fontWeight = 'normal';
            document.getElementById('rbCRoloJunior').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloJunior').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloJunior').style.fontWeight = 'bold';
			document.getElementById('rbRoloJunior').style.color = '#FFF';
            document.getElementById('rbCRoloJunior').style.color = '#FFF';
			document.getElementById('rbMiniRoloJunior').style.color = '#FFF';
            document.getElementById('rbCMiniRoloJunior').style.color = '#FFF';
            document.getElementById('ul2li2m1').className = "";
            document.getElementById('ul2li2m2').className = "";
            document.getElementById('ul2li2m3').className = "";
            document.getElementById('ul2li2m4').className = "activeMenu";
            
			document.getElementById("ul2li2tr1td1").innerText = '';
			document.getElementById("ul2li2tr1td2").innerText = '';
			document.getElementById("ul2li2tr1td3").innerText = '';
			document.getElementById("ul2li2tr1td4").innerText = '';
			document.getElementById("ul2li2tr2td1").innerText = '';
			document.getElementById("ul2li2tr2td2").innerText = '';
			document.getElementById("ul2li2tr2td3").innerText = '';
			document.getElementById("ul2li2tr2td4").innerText = '';
			document.getElementById("ul2li2tr3td1").innerText = '';
			document.getElementById("ul2li2tr3td2").innerText = '';
			document.getElementById("ul2li2tr3td3").innerText = '';
			document.getElementById("ul2li2tr3td4").innerText = '';
			document.getElementById("ul2li2tr4td1").innerText = '';
			document.getElementById("ul2li2tr4td2").innerText = '';
			document.getElementById("ul2li2tr4td3").innerText = '';
			document.getElementById("ul2li2tr4td4").innerText = '';
			document.getElementById("ul2li2tr5td1").innerText = '';
			document.getElementById("ul2li2tr5td2").innerText = '';
			document.getElementById("ul2li2tr5td3").innerText = '';
			document.getElementById("ul2li2tr5td4").innerText = '';
			document.getElementById("ul2li2tr6td1").innerText = '';
			document.getElementById("ul2li2tr6td2").innerText = '';
			document.getElementById("ul2li2tr6td3").innerText = '';
			document.getElementById("ul2li2tr6td4").innerText = '';
			document.getElementById("ul2li2tr7td1").innerText = '';
			document.getElementById("ul2li2tr7td2").innerText = '';
			document.getElementById("ul2li2tr7td3").innerText = '';
			document.getElementById("ul2li2tr7td4").innerText = '';
			
		});
		
		
		
		
		//Microfibra
		$('#openModelMicrofibraImg').click(function() {
			document.getElementById("rbRoloMicrofibra").click();
		});
		
		
		$('#rbRoloMicrofibra').click(function() {
			$("#rightImageMicrofibra").attr('src', 'images/microfibra/rolo_500_375.jpg');
			document.getElementById('rbRoloMicrofibra').style.fontSize = '1.0em';
            document.getElementById('rbCRoloMicrofibra').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloMicrofibra').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloMicrofibra').style.fontSize = '0.8em';
			document.getElementById('rbRoloMicrofibra').style.fontWeight = 'bold';
            document.getElementById('rbCRoloMicrofibra').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloMicrofibra').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloMicrofibra').style.fontWeight = 'normal';
			document.getElementById('rbRoloMicrofibra').style.color = '#FFF';
            document.getElementById('rbCRoloMicrofibra').style.color = '#FFF';
			document.getElementById('rbMiniRoloMicrofibra').style.color = '#FFF';
            document.getElementById('rbCMiniRoloMicrofibra').style.color = '#FFF';
            document.getElementById('ul2li3m1').className = "activeMenu";
            document.getElementById('ul2li3m2').className = "";
            document.getElementById('ul2li3m3').className = "";
            document.getElementById('ul2li3m4').className = "";
            
			document.getElementById("ul2li3tr1td1").innerText = '0081';
			document.getElementById("ul2li3tr1td2").innerText = 'Rolo Microfibra 180 mm';
			document.getElementById("ul2li3tr1td3").innerText = '45';
			document.getElementById("ul2li3tr1td4").innerText = '60';
			
			document.getElementById("ul2li3tr2td1").innerText = '0082';
			document.getElementById("ul2li3tr2td2").innerText = 'Rolo Microfibra 220 mm';
			document.getElementById("ul2li3tr2td3").innerText = '45';
			document.getElementById("ul2li3tr2td4").innerText = '55';
			
			document.getElementById("ul2li3tr3td1").innerText = '0083';
			document.getElementById("ul2li3tr3td2").innerText = 'Rolo Microfibra 250 mm';
			document.getElementById("ul2li3tr3td3").innerText = '45';
			document.getElementById("ul2li3tr3td4").innerText = '50';
			
		});
        
        
        $('#rbCRoloMicrofibra').click(function() {
			$("#rightImageMicrofibra").attr('src', 'images/microfibra/carga_500_375.jpg');
			document.getElementById('rbRoloMicrofibra').style.fontSize = '0.8em';
            document.getElementById('rbCRoloMicrofibra').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloMicrofibra').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloMicrofibra').style.fontSize = '0.8em';
			document.getElementById('rbRoloMicrofibra').style.fontWeight = 'normal';
            document.getElementById('rbCRoloMicrofibra').style.fontWeight = 'bold';
			document.getElementById('rbMiniRoloMicrofibra').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloMicrofibra').style.fontWeight = 'normal';
            document.getElementById('rbRoloMicrofibra').style.color = '#FFF';
            document.getElementById('rbCRoloMicrofibra').style.color = '#FFF';
			document.getElementById('rbMiniRoloMicrofibra').style.color = '#FFF';
            document.getElementById('rbCMiniRoloMicrofibra').style.color = '#FFF';
            document.getElementById('ul2li3m1').className = "";
            document.getElementById('ul2li3m2').className = "activeMenu";
            document.getElementById('ul2li3m3').className = "";
            document.getElementById('ul2li3m4').className = "";
            
			document.getElementById("ul2li3tr1td1").innerText = '0038';
			document.getElementById("ul2li3tr1td2").innerText = 'Carga Microfibra 180 mm';
			document.getElementById("ul2li3tr1td3").innerText = '45';
			document.getElementById("ul2li3tr1td4").innerText = '';
			
			document.getElementById("ul2li3tr2td1").innerText = '0039';
			document.getElementById("ul2li3tr2td2").innerText = 'Carga Microfibra 220 mm';
			document.getElementById("ul2li3tr2td3").innerText = '45';
			document.getElementById("ul2li3tr2td4").innerText = '';
			
			document.getElementById("ul2li3tr3td1").innerText = '0040';
			document.getElementById("ul2li3tr3td2").innerText = 'Carga Microfibra 250 mm';
			document.getElementById("ul2li3tr3td3").innerText = '45';
			document.getElementById("ul2li3tr3td4").innerText = '';
			
		});


							   
		$('#rbMiniRoloMicrofibra').click(function() {
			$("#rightImageMicrofibra").attr('src', 'images/microfibra/mini_500_375.jpg');
			document.getElementById('rbRoloMicrofibra').style.fontSize = '0.8em';
            document.getElementById('rbCRoloMicrofibra').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloMicrofibra').style.fontSize = '1.0em';
            document.getElementById('rbCMiniRoloMicrofibra').style.fontSize = '0.8em';
			document.getElementById('rbRoloMicrofibra').style.fontWeight = 'normal';
            document.getElementById('rbCRoloMicrofibra').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloMicrofibra').style.fontWeight = 'bold';
            document.getElementById('rbCMiniRoloMicrofibra').style.fontWeight = 'normal';
            document.getElementById('rbRoloMicrofibra').style.color = '#FFF';
            document.getElementById('rbCRoloMicrofibra').style.color = '#FFF';
			document.getElementById('rbMiniRoloMicrofibra').style.color = '#FFF';
            document.getElementById('rbCMiniRoloMicrofibra').style.color = '#FFF';
            document.getElementById('ul2li3m1').className = "";
            document.getElementById('ul2li3m2').className = "";
            document.getElementById('ul2li3m3').className = "activeMenu";
            document.getElementById('ul2li3m4').className = "";
            
			document.getElementById("ul2li3tr1td1").innerText = '0187';
			document.getElementById("ul2li3tr1td2").innerText = 'Mini Microfibra 60 mm';
			document.getElementById("ul2li3tr1td3").innerText = '16';
			document.getElementById("ul2li3tr1td4").innerText = '';
			
			document.getElementById("ul2li3tr2td1").innerText = '0188';
			document.getElementById("ul2li3tr2td2").innerText = 'Mini Microfibra 100 mm';
			document.getElementById("ul2li3tr2td3").innerText = '16';
			document.getElementById("ul2li3tr2td4").innerText = '40';
			
			document.getElementById("ul2li3tr3td1").innerText = '0189';
			document.getElementById("ul2li3tr3td2").innerText = 'Mini Microfibra 150 mm ';
			document.getElementById("ul2li3tr3td3").innerText = '16';
			document.getElementById("ul2li3tr3td4").innerText = '';	
            
            document.getElementById("ul2li3tr4td1").innerText = '';
			document.getElementById("ul2li3tr4td2").innerText = '';
			document.getElementById("ul2li3tr4td3").innerText = '';
			document.getElementById("ul2li3tr4td4").innerText = '';	
            
			document.getElementById("ul2li3tr5td1").innerText = '';
			document.getElementById("ul2li3tr5td2").innerText = '';
			document.getElementById("ul2li3tr5td3").innerText = '';
			document.getElementById("ul2li3tr5td4").innerText = '';	
            
            document.getElementById("ul2li3tr6td1").innerText = '';
			document.getElementById("ul2li3tr6td2").innerText = '';
			document.getElementById("ul2li3tr6td3").innerText = '';
			document.getElementById("ul2li3tr6td4").innerText = '';	
            
            document.getElementById("ul2li3tr7td1").innerText = '';
			document.getElementById("ul2li3tr7td2").innerText = '';
			document.getElementById("ul2li3tr7td3").innerText = '';
			document.getElementById("ul2li3tr7td4").innerText = '';
            
            document.getElementById("ul2li3tr8td1").innerText = '';
			document.getElementById("ul2li3tr8td2").innerText = '';
			document.getElementById("ul2li3tr8td3").innerText = '';
			document.getElementById("ul2li3tr8td4").innerText = '';
            
            document.getElementById("ul2li3tr9td1").innerText = '';
			document.getElementById("ul2li3tr9td2").innerText = '';
			document.getElementById("ul2li3tr9td3").innerText = '';
			document.getElementById("ul2li3tr9td4").innerText = '';
            
            document.getElementById("ul2li3tr10td1").innerText = '';
			document.getElementById("ul2li3tr10td2").innerText = '';
			document.getElementById("ul2li3tr10td3").innerText = '';
			document.getElementById("ul2li3tr10td4").innerText = '';
            
            document.getElementById("ul2li3tr11td1").innerText = '';
			document.getElementById("ul2li3tr11td2").innerText = '';
			document.getElementById("ul2li3tr11td3").innerText = '';
			document.getElementById("ul2li3tr11td4").innerText = '';
            
            document.getElementById("ul2li3tr12td1").innerText = '';
			document.getElementById("ul2li3tr12td2").innerText = '';
			document.getElementById("ul2li3tr12td3").innerText = '';
			document.getElementById("ul2li3tr12td4").innerText = '';
            
            document.getElementById("ul2li3tr13td1").innerText = '';
			document.getElementById("ul2li3tr13td2").innerText = '';
			document.getElementById("ul2li3tr13td3").innerText = '';
			document.getElementById("ul2li3tr13td4").innerText = '';
            
            document.getElementById("ul2li3tr14td1").innerText = '';
			document.getElementById("ul2li3tr14td2").innerText = '';
			document.getElementById("ul2li3tr14td3").innerText = '';
			document.getElementById("ul2li3tr14td4").innerText = '';
          
		});
        
        $('#rbCMiniRoloMicrofibra').click(function() {
			$("#rightImageMicrofibra").attr('src', 'images/microfibra/cargaMini_500_375.jpg');
			document.getElementById('rbRoloMicrofibra').style.fontSize = '0.8em';
            document.getElementById('rbCRoloMicrofibra').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloMicrofibra').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloMicrofibra').style.fontSize = '1.0em';
			document.getElementById('rbRoloMicrofibra').style.fontWeight = 'normal';
            document.getElementById('rbCRoloMicrofibra').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloMicrofibra').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloMicrofibra').style.fontWeight = 'bold';
            document.getElementById('rbRoloMicrofibra').style.color = '#FFF';
            document.getElementById('rbCRoloMicrofibra').style.color = '#FFF';
			document.getElementById('rbMiniRoloMicrofibra').style.color = '#FFF';
            document.getElementById('rbCMiniRoloMicrofibra').style.color = '#FFF';
            document.getElementById('ul2li3m1').className = "";
            document.getElementById('ul2li3m2').className = "";
            document.getElementById('ul2li3m3').className = "";
            document.getElementById('ul2li3m4').className = "activeMenu";
            
            
			document.getElementById("ul2li3tr1td1").innerText = '0262';
			document.getElementById("ul2li3tr1td2").innerText = 'Carga Microfibra 60 mm';
			document.getElementById("ul2li3tr1td3").innerText = '16';
			document.getElementById("ul2li3tr1td4").innerText = '';
		
			document.getElementById("ul2li3tr2td1").innerText = '0248';
			document.getElementById("ul2li3tr2td2").innerText = 'Carga Microfibra 100 mm';
			document.getElementById("ul2li3tr2td3").innerText = '16';
			document.getElementById("ul2li3tr2td4").innerText = '';
	
			document.getElementById("ul2li3tr3td1").innerText = '0263';
			document.getElementById("ul2li3tr3td2").innerText = 'Carga Microfibra 150 mm';
			document.getElementById("ul2li3tr3td3").innerText = '16';
			document.getElementById("ul2li3tr3td4").innerText = '';
		
            document.getElementById("ul2li3tr4td1").innerText = '0191';
			document.getElementById("ul2li3tr4td2").innerText = 'Pack 2 Cargas Microfibra 60 mm';
			document.getElementById("ul2li3tr4td3").innerText = '16';
			document.getElementById("ul2li3tr4td4").innerText = '';
            
            document.getElementById("ul2li3tr5td1").innerText = '0192';
			document.getElementById("ul2li3tr5td2").innerText = 'Pack 2 Cargas Microfibra 100 mm';
			document.getElementById("ul2li3tr5td3").innerText = '16';
			document.getElementById("ul2li3tr5td4").innerText = '';
            
            document.getElementById("ul2li3tr6td1").innerText = '0193';
			document.getElementById("ul2li3tr6td2").innerText = 'Pack 2 Cargas Microfibra 150 mm';
			document.getElementById("ul2li3tr6td3").innerText = '16';
			document.getElementById("ul2li3tr6td4").innerText = '';
            
            document.getElementById("ul2li3tr7td1").innerText = '0264';
			document.getElementById("ul2li3tr7td2").innerText = 'Blister 16 Cargas Microfibra 60 mm';
			document.getElementById("ul2li3tr7td3").innerText = '16';
			document.getElementById("ul2li3tr7td4").innerText = '';
            
            document.getElementById("ul2li3tr8td1").innerText = '0190';
			document.getElementById("ul2li3tr8td2").innerText = 'Blister 10 Cargas Microfibra 100 mm';
			document.getElementById("ul2li3tr8td3").innerText = '16';
			document.getElementById("ul2li3tr8td4").innerText = '';
            
            document.getElementById("ul2li3tr9td1").innerText = '0213';
			document.getElementById("ul2li3tr9td2").innerText = 'Carga Microfibra 120 m';
			document.getElementById("ul2li3tr9td3").innerText = '30';
			document.getElementById("ul2li3tr9td4").innerText = '';
            
            document.getElementById("ul2li3tr10td1").innerText = '0214';
			document.getElementById("ul2li3tr10td2").innerText = 'Carga Microfibra 150 mm';
			document.getElementById("ul2li3tr10td3").innerText = '30';
			document.getElementById("ul2li3tr10td4").innerText = '';
            
            document.getElementById("ul2li3tr11td1").innerText = '0217';
			document.getElementById("ul2li3tr11td2").innerText = 'Pack 2 Cargas Microfibra 120 mm';
			document.getElementById("ul2li3tr11td3").innerText = '30';
			document.getElementById("ul2li3tr11td4").innerText = '';
            
            document.getElementById("ul2li3tr12td1").innerText = '0218';
			document.getElementById("ul2li3tr12td2").innerText = 'Pack 2 Cargas Microfibra 150 mm';
			document.getElementById("ul2li3tr12td3").innerText = '30';
			document.getElementById("ul2li3tr12td4").innerText = '';
            
            document.getElementById("ul2li3tr13td1").innerText = '0215';
			document.getElementById("ul2li3tr13td2").innerText = 'Blister 10 Cargas Microfibra 120 mm';
			document.getElementById("ul2li3tr13td3").innerText = '30';
			document.getElementById("ul2li3tr13td4").innerText = '';
            
            document.getElementById("ul2li3tr14td1").innerText = '0216';
			document.getElementById("ul2li3tr14td2").innerText = 'Blister 6 Cargas Microfibra 150 mm';
			document.getElementById("ul2li3tr14td3").innerText = '30';
			document.getElementById("ul2li3tr14td4").innerText = '';
            
		});
		
		
		
		//Ravel
		$('#openModelRavelImg').click(function() {
			document.getElementById("rbRoloRavel").click();
		});
		
		
		$('#rbRoloRavel').click(function() {
			$("#rightImageRavel").attr('src', 'images/ravel/rolo_500_375.jpg');
			document.getElementById('rbRoloRavel').style.fontSize = '1.0em';
            document.getElementById('rbCRoloRavel').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloRavel').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloRavel').style.fontSize = '0.8em';
			document.getElementById('rbRoloRavel').style.fontWeight = 'bold';
            document.getElementById('rbCRoloRavel').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloRavel').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloRavel').style.fontWeight = 'normal';
			document.getElementById('rbRoloRavel').style.color = '#FFF';
            document.getElementById('rbCRoloRavel').style.color = '#FFF';
			document.getElementById('rbMiniRoloRavel').style.color = '#FFF';
            document.getElementById('rbCMiniRoloRavel').style.color = '#FFF';
            document.getElementById('ul2li4m1').className = "activeMenu";
            document.getElementById('ul2li4m2').className = "";
            document.getElementById('ul2li4m3').className = "";
            document.getElementById('ul2li4m4').className = "";
            
            
            
			document.getElementById("ul2li4tr1td1").innerText = '0072';
			document.getElementById("ul2li4tr1td2").innerText = 'Rolo Ravel 180 mm';
			document.getElementById("ul2li4tr1td3").innerText = '45';
			document.getElementById("ul2li4tr1td4").innerText = '60';
			
			document.getElementById("ul2li4tr2td1").innerText = '0073';
			document.getElementById("ul2li4tr2td2").innerText = 'Rolo Ravel 220 mm';
			document.getElementById("ul2li4tr2td3").innerText = '45';
			document.getElementById("ul2li4tr2td4").innerText = '55';
			
			document.getElementById("ul2li4tr3td1").innerText = '0074';
			document.getElementById("ul2li4tr3td2").innerText = 'Rolo Ravel 250 mm';
			document.getElementById("ul2li4tr3td3").innerText = '45';
			document.getElementById("ul2li4tr3td4").innerText = '50';
			
			document.getElementById("ul2li4tr4td1").innerText = '0152';
			document.getElementById("ul2li4tr4td2").innerText = 'Rolo Ravel 180 mm';
			document.getElementById("ul2li4tr4td3").innerText = '50';
			document.getElementById("ul2li4tr4td4").innerText = '55';
			
			document.getElementById("ul2li4tr5td1").innerText = '0153';
			document.getElementById("ul2li4tr5td2").innerText = 'Rolo Ravel 220 mm';
			document.getElementById("ul2li4tr5td3").innerText = '50';
			document.getElementById("ul2li4tr5td4").innerText = '50';
			
			document.getElementById("ul2li4tr6td1").innerText = '0154';
			document.getElementById("ul2li4tr6td2").innerText = 'Rolo Ravel 250 mm';
			document.getElementById("ul2li4tr6td3").innerText = '50';
			document.getElementById("ul2li4tr6td4").innerText = '45';

			
		});
        
        $('#rbCRoloRavel').click(function() {
			$("#rightImageRavel").attr('src', 'images/ravel/carga_500_375.jpg');
			document.getElementById('rbRoloRavel').style.fontSize = '1.0em';
            document.getElementById('rbCRoloRavel').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloRavel').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloRavel').style.fontSize = '0.8em';
			document.getElementById('rbRoloRavel').style.fontWeight = 'bold';
            document.getElementById('rbCRoloRavel').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloRavel').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloRavel').style.fontWeight = 'normal';
			document.getElementById('rbRoloRavel').style.color = '#FFF';
            document.getElementById('rbCRoloRavel').style.color = '#FFF';
			document.getElementById('rbMiniRoloRavel').style.color = '#FFF';
            document.getElementById('rbCMiniRoloRavel').style.color = '#FFF';
            document.getElementById('ul2li4m1').className = "";
            document.getElementById('ul2li4m2').className = "activeMenu";
            document.getElementById('ul2li4m3').className = "";
            document.getElementById('ul2li4m4').className = "";
            
            
			document.getElementById("ul2li4tr1td1").innerText = '0029';
			document.getElementById("ul2li4tr1td2").innerText = 'Carga Ravel 180 mm';
			document.getElementById("ul2li4tr1td3").innerText = '45';
			document.getElementById("ul2li4tr1td4").innerText = '';
			
			document.getElementById("ul2li4tr2td1").innerText = '0030';
			document.getElementById("ul2li4tr2td2").innerText = 'Carga Ravel 220 mm';
			document.getElementById("ul2li4tr2td3").innerText = '45';
			document.getElementById("ul2li4tr2td4").innerText = '';
			
			document.getElementById("ul2li4tr3td1").innerText = '0031';
			document.getElementById("ul2li4tr3td2").innerText = 'Carga Ravel 250 mm';
			document.getElementById("ul2li4tr3td3").innerText = '45';
			document.getElementById("ul2li4tr3td4").innerText = '';
			
			document.getElementById("ul2li4tr4td1").innerText = '0134';
			document.getElementById("ul2li4tr4td2").innerText = 'Carga Ravel 180 mm';
			document.getElementById("ul2li4tr4td3").innerText = '50';
			document.getElementById("ul2li4tr4td4").innerText = '';
			
			document.getElementById("ul2li4tr5td1").innerText = '0135';
			document.getElementById("ul2li4tr5td2").innerText = 'Carga Ravel 220 mm';
			document.getElementById("ul2li4tr5td3").innerText = '50';
			document.getElementById("ul2li4tr5td4").innerText = '';
			
			document.getElementById("ul2li4tr6td1").innerText = '0136';
			document.getElementById("ul2li4tr6td2").innerText = 'Carga Ravel 250 mm';
			document.getElementById("ul2li4tr6td3").innerText = '50';
			document.getElementById("ul2li4tr6td4").innerText = '';

			
		});


							   
		$('#rbMiniRoloRavel').click(function() {
			$("#rightImageRavel").attr('src', 'images/ravel/mini_500_375.jpg');
			document.getElementById('rbRoloRavel').style.fontSize = '1.0em';
            document.getElementById('rbCRoloRavel').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloRavel').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloRavel').style.fontSize = '0.8em';
			document.getElementById('rbRoloRavel').style.fontWeight = 'bold';
            document.getElementById('rbCRoloRavel').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloRavel').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloRavel').style.fontWeight = 'normal';
			document.getElementById('rbRoloRavel').style.color = '#FFF';
            document.getElementById('rbCRoloRavel').style.color = '#FFF';
			document.getElementById('rbMiniRoloRavel').style.color = '#FFF';
            document.getElementById('rbCMiniRoloRavel').style.color = '#FFF';
            document.getElementById('ul2li4m1').className = "";
            document.getElementById('ul2li4m2').className = "";
            document.getElementById('ul2li4m3').className = "activeMenu";
            document.getElementById('ul2li4m4').className = "";
            
			document.getElementById("ul2li4tr1td1").innerText = '0265';
			document.getElementById("ul2li4tr1td2").innerText = 'Mini Ravel 60 mm';
			document.getElementById("ul2li4tr1td3").innerText = '16';
			document.getElementById("ul2li4tr1td4").innerText = '';
			
			document.getElementById("ul2li4tr2td1").innerText = '0266';
			document.getElementById("ul2li4tr2td2").innerText = 'Mini Ravel 100 mm';
			document.getElementById("ul2li4tr2td3").innerText = '16';
			document.getElementById("ul2li4tr2td4").innerText = '40';
	
			document.getElementById("ul2li4tr3td1").innerText = '0267';
			document.getElementById("ul2li4tr3td2").innerText = 'Mini Ravel 150 mm';
			document.getElementById("ul2li4tr3td3").innerText = '16';
			document.getElementById("ul2li4tr3td4").innerText = '';
		
			document.getElementById("ul2li4tr4td1").innerText = '';
			document.getElementById("ul2li4tr4td2").innerText = '';
			document.getElementById("ul2li4tr4td3").innerText = '';
			document.getElementById("ul2li4tr4td4").innerText = '';
	
			document.getElementById("ul2li4tr5td1").innerText = '';
			document.getElementById("ul2li4tr5td2").innerText = '';
			document.getElementById("ul2li4tr5td3").innerText = '';
			document.getElementById("ul2li4tr5td4").innerText = '';
		
			document.getElementById("ul2li4tr6td1").innerText = '';
			document.getElementById("ul2li4tr6td2").innerText = '';
			document.getElementById("ul2li4tr6td3").innerText = '';
			document.getElementById("ul2li4tr6td4").innerText = '';
            
            document.getElementById("ul2li4tr7td1").innerText = '';
			document.getElementById("ul2li4tr7td2").innerText = '';
			document.getElementById("ul2li4tr7td3").innerText = '';
			document.getElementById("ul2li4tr7td4").innerText = '';
			
            document.getElementById("ul2li4tr8td1").innerText = '';
			document.getElementById("ul2li4tr8td2").innerText = '';
			document.getElementById("ul2li4tr8td3").innerText = '';
			document.getElementById("ul2li4tr8td4").innerText = '';
            
            document.getElementById("ul2li4tr9td1").innerText = '';
			document.getElementById("ul2li4tr9td2").innerText = ''
			document.getElementById("ul2li4tr9td3").innerText = '';
			document.getElementById("ul2li4tr9td4").innerText = '';
            
            document.getElementById("ul2li4tr10td1").innerText = '';
			document.getElementById("ul2li4tr10td2").innerText = '';
			document.getElementById("ul2li4tr10td3").innerText = '';
			document.getElementById("ul2li4tr10td4").innerText = '';
            
            document.getElementById("ul2li4tr11td1").innerText = '';
			document.getElementById("ul2li4tr11td2").innerText = '';
			document.getElementById("ul2li4tr11td3").innerText = '';
			document.getElementById("ul2li4tr11td4").innerText = '';
            
            document.getElementById("ul2li4tr12td1").innerText = '';
			document.getElementById("ul2li4tr12td2").innerText = '';
			document.getElementById("ul2li4tr12td3").innerText = '';
			document.getElementById("ul2li4tr12td4").innerText = '';
            
            document.getElementById("ul2li4tr13td1").innerText = '';
			document.getElementById("ul2li4tr13td2").innerText = '';
			document.getElementById("ul2li4tr13td3").innerText = '';
			document.getElementById("ul2li4tr13td4").innerText = '';
            
            document.getElementById("ul2li4tr14td1").innerText = '';
			document.getElementById("ul2li4tr14td2").innerText = '';
			document.getElementById("ul2li4tr14td3").innerText = '';
			document.getElementById("ul2li4tr14td4").innerText = '';
			
		});
        
        $('#rbCMiniRoloRavel').click(function() {
			$("#rightImageRavel").attr('src', 'images/ravel/cargaMini_500_375.jpg');
			document.getElementById('rbRoloRavel').style.fontSize = '1.0em';
            document.getElementById('rbCRoloRavel').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloRavel').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloRavel').style.fontSize = '0.8em';
			document.getElementById('rbRoloRavel').style.fontWeight = 'bold';
            document.getElementById('rbCRoloRavel').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloRavel').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloRavel').style.fontWeight = 'normal';
			document.getElementById('rbRoloRavel').style.color = '#FFF';
            document.getElementById('rbCRoloRavel').style.color = '#FFF';
			document.getElementById('rbMiniRoloRavel').style.color = '#FFF';
            document.getElementById('rbCMiniRoloRavel').style.color = '#FFF';
            document.getElementById('ul2li4m1').className = "";
            document.getElementById('ul2li4m2').className = "";
            document.getElementById('ul2li4m3').className = "";
            document.getElementById('ul2li4m4').className = "activeMenu";
            
            
			document.getElementById("ul2li4tr1td1").innerText = '0268';
			document.getElementById("ul2li4tr1td2").innerText = 'Carga Ravel 60 mm';
			document.getElementById("ul2li4tr1td3").innerText = '16';
			document.getElementById("ul2li4tr1td4").innerText = '';
			
			document.getElementById("ul2li4tr2td1").innerText = '0269';
			document.getElementById("ul2li4tr2td2").innerText = 'Carga Ravel 100 mm';
			document.getElementById("ul2li4tr2td3").innerText = '16';
			document.getElementById("ul2li4tr2td4").innerText = '';
			
			document.getElementById("ul2li4tr3td1").innerText = '0270';
			document.getElementById("ul2li4tr3td2").innerText = 'Carga Ravel 150 mm';
			document.getElementById("ul2li4tr3td3").innerText = '16';
			document.getElementById("ul2li4tr3td4").innerText = '';
	
			document.getElementById("ul2li4tr4td1").innerText = '0271';
			document.getElementById("ul2li4tr4td2").innerText = 'Pack 2 Cargas Ravel 60 mm';
			document.getElementById("ul2li4tr4td3").innerText = '16';
			document.getElementById("ul2li4tr4td4").innerText = '';
			
			document.getElementById("ul2li4tr5td1").innerText = '0272';
			document.getElementById("ul2li4tr5td2").innerText = 'Pack 2 Cargas Ravel 100 mm';
			document.getElementById("ul2li4tr5td3").innerText = '16';
			document.getElementById("ul2li4tr5td4").innerText = '';
			
			document.getElementById("ul2li4tr6td1").innerText = '0273';
			document.getElementById("ul2li4tr6td2").innerText = 'Pack 2 Cargas Ravel 150 mm';
			document.getElementById("ul2li4tr6td3").innerText = '16';
			document.getElementById("ul2li4tr6td4").innerText = '';
		
            document.getElementById("ul2li4tr7td1").innerText = '0274';
			document.getElementById("ul2li4tr7td2").innerText = 'Blister 16 Cargas Ravel 60 mm';
			document.getElementById("ul2li4tr7td3").innerText = '16';
			document.getElementById("ul2li4tr7td4").innerText = '';
			
            document.getElementById("ul2li4tr8td1").innerText = '0275';
			document.getElementById("ul2li4tr8td2").innerText = 'Blister 10 Cargas Ravel 100 mm';
			document.getElementById("ul2li4tr8td3").innerText = '16';
			document.getElementById("ul2li4tr8td4").innerText = '';
            
            document.getElementById("ul2li4tr9td1").innerText = '0219';
			document.getElementById("ul2li4tr9td2").innerText = 'Carga Ravel 120 mm';
			document.getElementById("ul2li4tr9td3").innerText = '30';
			document.getElementById("ul2li4tr9td4").innerText = '';
            
            document.getElementById("ul2li4tr10td1").innerText = '0220';
			document.getElementById("ul2li4tr10td2").innerText = 'Carga Ravel 150 mm';
			document.getElementById("ul2li4tr10td3").innerText = '30';
			document.getElementById("ul2li4tr10td4").innerText = '';
            
            document.getElementById("ul2li4tr11td1").innerText = '0223';
			document.getElementById("ul2li4tr11td2").innerText = 'Pack 2 Cargas Ravel 120 mm';
			document.getElementById("ul2li4tr11td3").innerText = '30';
			document.getElementById("ul2li4tr11td4").innerText = '';
            
            document.getElementById("ul2li4tr12td1").innerText = '0224';
			document.getElementById("ul2li4tr12td2").innerText = 'Pack 2 Cargas Ravel 150 mm';
			document.getElementById("ul2li4tr12td3").innerText = '30';
			document.getElementById("ul2li4tr12td4").innerText = '';
            
            document.getElementById("ul2li4tr13td1").innerText = '0222';
			document.getElementById("ul2li4tr13td2").innerText = 'Blister 6 Cargas Ravel 120 mm';
			document.getElementById("ul2li4tr13td3").innerText = '30';
			document.getElementById("ul2li4tr13td4").innerText = '';
            
            document.getElementById("ul2li4tr14td1").innerText = '0221';
			document.getElementById("ul2li4tr14td2").innerText = 'Blister 10 Cargas Ravel 150 mm';
			document.getElementById("ul2li4tr14td3").innerText = '30';
			document.getElementById("ul2li4tr14td4").innerText = '';
		});
		
		
		
		//Rugo
		$('#openModelRugoImg').click(function() {
			document.getElementById("rbRoloRugo").click();
		});
		
		
		$('#rbRoloRugo').click(function() {
			$("#rightImageRugo").attr('src', 'images/rugo/rolo_500_375.jpg');
			document.getElementById('rbRoloRugo').style.fontSize = '1.0em';
            document.getElementById('rbCRoloRugo').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloRugo').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloRugo').style.fontSize = '0.8em';
			document.getElementById('rbRoloRugo').style.fontWeight = 'bold';
            document.getElementById('rbCRoloRugo').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloRugo').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloRugo').style.fontWeight = 'normal';
			document.getElementById('rbRoloRugo').style.color = '#FFF';
            document.getElementById('rbCRoloRugo').style.color = '#FFF';
			document.getElementById('rbMiniRoloRugo').style.color = '#FFF';
            document.getElementById('rbCMiniRoloRugo').style.color = '#FFF';
            document.getElementById('ul3li1m1').className = "activeMenu";
            document.getElementById('ul3li1m2').className = "";
            document.getElementById('ul3li1m3').className = "";
            document.getElementById('ul3li1m4').className = "";
            
            
            
			document.getElementById("ul3li1tr1td1").innerText = '0075';
			document.getElementById("ul3li1tr1td2").innerText = 'Rolo Rugo 60 mm';
			document.getElementById("ul3li1tr1td3").innerText = '75';
			document.getElementById("ul3li1tr1td4").innerText = '';
			
		
			document.getElementById("ul3li1tr2td1").innerText = '0076';
			document.getElementById("ul3li1tr2td2").innerText = 'Rolo Rugo 180 mm';
			document.getElementById("ul3li1tr2td3").innerText = '75';
			document.getElementById("ul3li1tr2td4").innerText = '';
		
			document.getElementById("ul3li1tr3td1").innerText = '0077';
			document.getElementById("ul3li1tr3td2").innerText = 'Rolo Rugo 220 mm';
			document.getElementById("ul3li1tr3td3").innerText = '75';
			document.getElementById("ul3li1tr3td4").innerText = '';
		
			document.getElementById("ul3li1tr4td1").innerText = '0078';
			document.getElementById("ul3li1tr4td2").innerText = 'Rolo Rugo 250 mm';
			document.getElementById("ul3li1tr4td3").innerText = '75';
			document.getElementById("ul3li1tr4td4").innerText = '';
			
			document.getElementById("ul3li1tr5td1").innerText = '0079';
			document.getElementById("ul3li1tr5td2").innerText = 'Rolo Rugo Canto';
			document.getElementById("ul3li1tr5td3").innerText = '75';
			document.getElementById("ul3li1tr5td4").innerText = '';

			
		});
        
        $('#rbCRoloRugo').click(function() {
			$("#rightImageRugo").attr('src', 'images/rugo/carga_500_375.jpg');
			document.getElementById('rbRoloRugo').style.fontSize = '0.8em';
            document.getElementById('rbCRoloRugo').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloRugo').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloRugo').style.fontSize = '0.8em';
			document.getElementById('rbRoloRugo').style.fontWeight = 'normal';
            document.getElementById('rbCRoloRugo').style.fontWeight = 'bold';
			document.getElementById('rbMiniRoloRugo').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloRugo').style.fontWeight = 'normal';
			document.getElementById('rbRoloRugo').style.color = '#FFF';
            document.getElementById('rbCRoloRugo').style.color = '#FFF';
			document.getElementById('rbMiniRoloRugo').style.color = '#FFF';
            document.getElementById('rbCMiniRoloRugo').style.color = '#FFF';
            document.getElementById('ul3li1m1').className = "";
            document.getElementById('ul3li1m2').className = "activeMenu";
            document.getElementById('ul3li1m3').className = "";
            document.getElementById('ul3li1m4').className = "";
            
            
			document.getElementById("ul3li1tr1td1").innerText = '0032';
			document.getElementById("ul3li1tr1td2").innerText = 'Carga Rugo 60 mm';
			document.getElementById("ul3li1tr1td3").innerText = '75';
			document.getElementById("ul3li1tr1td4").innerText = '';
			
			document.getElementById("ul3li1tr2td1").innerText = '0033';
			document.getElementById("ul3li1tr2td2").innerText = 'Carga Rugo 180 mm';
			document.getElementById("ul3li1tr2td3").innerText = '75';
			document.getElementById("ul3li1tr2td4").innerText = '';
			
			document.getElementById("ul3li1tr3td1").innerText = '0034';
			document.getElementById("ul3li1tr3td2").innerText = 'Carga Rugo 220 mm';
			document.getElementById("ul3li1tr3td3").innerText = '75';
			document.getElementById("ul3li1tr3td4").innerText = '';
		
			document.getElementById("ul3li1tr4td1").innerText = '0035';
			document.getElementById("ul3li1tr4td2").innerText = 'Carga Rugo 250 mm';
			document.getElementById("ul3li1tr4td3").innerText = '75';
			document.getElementById("ul3li1tr4td4").innerText = '';
		
			document.getElementById("ul3li1tr5td1").innerText = '0036';
			document.getElementById("ul3li1tr5td2").innerText = 'Carga Rugo Canto';
			document.getElementById("ul3li1tr5td3").innerText = '75';
			document.getElementById("ul3li1tr5td4").innerText = '';
			
		});

							   
		$('#rbMiniRoloRugo').click(function() {
			$("#rightImageRugo").attr('src', 'images/rugo/mini_500_375.jpg');
			document.getElementById('rbRoloRugo').style.fontSize = '0.8em';
            document.getElementById('rbCRoloRugo').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloRugo').style.fontSize = '1.0em';
            document.getElementById('rbCMiniRoloRugo').style.fontSize = '0.8em';
			document.getElementById('rbRoloRugo').style.fontWeight = 'normal';
            document.getElementById('rbCRoloRugo').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloRugo').style.fontWeight = 'bold';
            document.getElementById('rbCMiniRoloRugo').style.fontWeight = 'normal';
			document.getElementById('rbRoloRugo').style.color = '#FFF';
            document.getElementById('rbCRoloRugo').style.color = '#FFF';
			document.getElementById('rbMiniRoloRugo').style.color = '#FFF';
            document.getElementById('rbCMiniRoloRugo').style.color = '#FFF';
            document.getElementById('ul3li1m1').className = "";
            document.getElementById('ul3li1m2').className = "";
            document.getElementById('ul3li1m3').className = "activeMenu";
            document.getElementById('ul3li1m4').className = "";
            
            
			document.getElementById("ul3li1tr1td1").innerText = '0235';
			document.getElementById("ul3li1tr1td2").innerText = 'Mini Rugo 110 mm';
			document.getElementById("ul3li1tr1td3").innerText = '16';
			document.getElementById("ul3li1tr1td4").innerText = '';
			
			document.getElementById("ul3li1tr2td1").innerText = '';
			document.getElementById("ul3li1tr2td2").innerText = '';
			document.getElementById("ul3li1tr2td3").innerText = '';
			document.getElementById("ul3li1tr2td4").innerText = '';
		
			document.getElementById("ul3li1tr3td1").innerText = '';
			document.getElementById("ul3li1tr3td2").innerText = '';
			document.getElementById("ul3li1tr3td3").innerText = '';
			document.getElementById("ul3li1tr3td4").innerText = '';
	
			document.getElementById("ul3li1tr4td1").innerText = '';
			document.getElementById("ul3li1tr4td2").innerText = '';
			document.getElementById("ul3li1tr4td3").innerText = '';
			document.getElementById("ul3li1tr4td4").innerText = '';
	
            document.getElementById("ul3li1tr5td1").innerText = '';
			document.getElementById("ul3li1tr5td2").innerText = '';
			document.getElementById("ul3li1tr5td3").innerText = '';
			document.getElementById("ul3li1tr5td4").innerText = '';
		
			
		});
        
        $('#rbCMiniRoloRugo').click(function() {
			$("#rightImageRugo").attr('src', 'images/rugo/cargaMini_500_375.jpg');
			document.getElementById('rbRoloRugo').style.fontSize = '0.8em';
            document.getElementById('rbCRoloRugo').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloRugo').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloRugo').style.fontSize = '1.0em';
			document.getElementById('rbRoloRugo').style.fontWeight = 'normal';
            document.getElementById('rbCRoloRugo').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloRugo').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloRugo').style.fontWeight = 'bold';
			document.getElementById('rbRoloRugo').style.color = '#FFF';
            document.getElementById('rbCRoloRugo').style.color = '#FFF';
			document.getElementById('rbMiniRoloRugo').style.color = '#FFF';
            document.getElementById('rbCMiniRoloRugo').style.color = '#FFF';
            document.getElementById('ul3li1m1').className = "";
            document.getElementById('ul3li1m2').className = "";
            document.getElementById('ul3li1m3').className = "";
            document.getElementById('ul3li1m4').className = "activeMenu";
            
			document.getElementById("ul3li1tr1td1").innerText = '0245';
			document.getElementById("ul3li1tr1td2").innerText = 'Carga Rugo 110 mm';
			document.getElementById("ul3li1tr1td3").innerText = '16';
			document.getElementById("ul3li1tr1td4").innerText = '';
		
			document.getElementById("ul3li1tr2td1").innerText = '0246';
			document.getElementById("ul3li1tr2td2").innerText = 'Pack 2 Cargas Rugo 110 mm';
			document.getElementById("ul3li1tr2td3").innerText = '16';
			document.getElementById("ul3li1tr2td4").innerText = '';
			
			document.getElementById("ul3li1tr3td1").innerText = '0236';
			document.getElementById("ul3li1tr3td2").innerText = 'Blister 10 Cargas Rugo 110 mm';
			document.getElementById("ul3li1tr3td3").innerText = '16'; 
			document.getElementById("ul3li1tr3td4").innerText = '';
	
			document.getElementById("ul3li1tr4td1").innerText = '';
			document.getElementById("ul3li1tr4td2").innerText = '';
			document.getElementById("ul3li1tr4td3").innerText = '';
			document.getElementById("ul3li1tr4td4").innerText = '';

            document.getElementById("ul3li1tr5td1").innerText = '';
			document.getElementById("ul3li1tr5td2").innerText = '';
			document.getElementById("ul3li1tr5td3").innerText = '';
			document.getElementById("ul3li1tr5td4").innerText = '';

			
		});
	
		
		
		//Super
		$('#openModelSuperImg').click(function() {
			document.getElementById("rbRoloSuper").click();
		});
		
		
		$('#rbRoloSuper').click(function() {
			$("#rightImageSuper").attr('src', 'images/super/rolo_500_375.jpg');
			document.getElementById('rbRoloSuper').style.fontSize = '1.0em';
            document.getElementById('rbCRoloSuper').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloSuper').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloSuper').style.fontSize = '0.8em';
			document.getElementById('rbRoloSuper').style.fontWeight = 'bold';
            document.getElementById('rbCRoloSuper').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloSuper').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloSuper').style.fontWeight = 'normal';
			document.getElementById('rbRoloSuper').style.color = '#FFF';
            document.getElementById('rbCRoloSuper').style.color = '#FFF';
			document.getElementById('rbMiniRoloSuper').style.color = '#FFF';
            document.getElementById('rbCMiniRoloSuper').style.color = '#FFF';
            document.getElementById('ul3li2m1').className = "activeMenu";
            document.getElementById('ul3li2m2').className = "";
            document.getElementById('ul3li2m3').className = "";
            document.getElementById('ul3li2m4').className = "";

            
			document.getElementById("ul3li2tr1td1").innerText = '0049';
			document.getElementById("ul3li2tr1td2").innerText = 'Rolo Super 180 mm';
			document.getElementById("ul3li2tr1td3").innerText = '45';
			document.getElementById("ul3li2tr1td4").innerText = '60'
            
			document.getElementById("ul3li2tr2td1").innerText = '0050';
			document.getElementById("ul3li2tr2td2").innerText = 'Rolo Super 220 mm';
			document.getElementById("ul3li2tr2td3").innerText = '45';
		    document.getElementById("ul3li2tr2td4").innerText = '55';
            
			document.getElementById("ul3li2tr3td1").innerText = '0051';
			document.getElementById("ul3li2tr3td2").innerText = 'Rolo Super 250 mm';
			document.getElementById("ul3li2tr3td3").innerText = '45';
			document.getElementById("ul3li2tr3td4").innerText = '50';
			
		});
        
        
        $('#rbCRoloSuper').click(function() {
			$("#rightImageSuper").attr('src', 'images/super/carga_500_375.jpg');
			document.getElementById('rbRoloSuper').style.fontSize = '0.8em';
            document.getElementById('rbCRoloSuper').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloSuper').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloSuper').style.fontSize = '0.8em';
			document.getElementById('rbRoloSuper').style.fontWeight = 'normal';
            document.getElementById('rbCRoloSuper').style.fontWeight = 'bold';
			document.getElementById('rbMiniRoloSuper').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloSuper').style.fontWeight = 'normal';
			document.getElementById('rbRoloSuper').style.color = '#FFF';
            document.getElementById('rbCRoloSuper').style.color = '#FFF';
			document.getElementById('rbMiniRoloSuper').style.color = '#FFF';
            document.getElementById('rbCMiniRoloSuper').style.color = '#FFF';
            document.getElementById('ul3li2m1').className = "";
            document.getElementById('ul3li2m2').className = "activeMenu";
            document.getElementById('ul3li2m3').className = "";
            document.getElementById('ul3li2m4').className = "";
            
			document.getElementById("ul3li2tr1td1").innerText = '0006';
			document.getElementById("ul3li2tr1td2").innerText = 'Carga Super 180 mm';
			document.getElementById("ul3li2tr1td3").innerText = '45';
			document.getElementById("ul3li2tr1td4").innerText = '';
			
			document.getElementById("ul3li2tr2td1").innerText = '0007';
			document.getElementById("ul3li2tr2td2").innerText = 'Carga Super 220 mm';
			document.getElementById("ul3li2tr2td3").innerText = '45';
			document.getElementById("ul3li2tr2td4").innerText = '';
			
			document.getElementById("ul3li2tr3td1").innerText = '0008';
			document.getElementById("ul3li2tr3td2").innerText = 'Carga Super 250 mm';
			document.getElementById("ul3li2tr3td3").innerText = '45';
			document.getElementById("ul3li2tr3td4").innerText = '';
		
			
		});

							   
		$('#rbMiniRoloSuper').click(function() {
			$("#rightImageSuper").attr('src', 'images/super/mini_500_375.jpg');
			document.getElementById('rbRoloSuper').style.fontSize = '0.8em';
            document.getElementById('rbCRoloSuper').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloSuper').style.fontSize = '1.0em';
            document.getElementById('rbCMiniRoloSuper').style.fontSize = '0.8em';
			document.getElementById('rbRoloSuper').style.fontWeight = 'normal';
            document.getElementById('rbCRoloSuper').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloSuper').style.fontWeight = 'bold';
            document.getElementById('rbCMiniRoloSuper').style.fontWeight = 'normal';
			document.getElementById('rbRoloSuper').style.color = '#FFF';
            document.getElementById('rbCRoloSuper').style.color = '#FFF';
			document.getElementById('rbMiniRoloSuper').style.color = '#FFF';
            document.getElementById('rbCMiniRoloSuper').style.color = '#FFF';
            document.getElementById('ul3li2m1').className = "";
            document.getElementById('ul3li2m2').className = "";
            document.getElementById('ul3li2m3').className = "activeMenu";
            document.getElementById('ul3li2m4').className = "";
			document.getElementById("ul3li2tr1td1").innerText = '';
			document.getElementById("ul3li2tr1td2").innerText = '';
			document.getElementById("ul3li2tr1td3").innerText = '';
			document.getElementById("ul3li2tr1td4").innerText = '';
			document.getElementById("ul3li2tr2td1").innerText = '';
			document.getElementById("ul3li2tr2td2").innerText = '';
			document.getElementById("ul3li2tr2td3").innerText = '';
			document.getElementById("ul3li2tr2td4").innerText = '';
			document.getElementById("ul3li2tr3td1").innerText = '';
			document.getElementById("ul3li2tr3td2").innerText = '';
			document.getElementById("ul3li2tr3td3").innerText = '';
			document.getElementById("ul3li2tr3td4").innerText = '';
			document.getElementById("ul3li2tr4td1").innerText = '';
			document.getElementById("ul3li2tr4td2").innerText = '';
			document.getElementById("ul3li2tr4td3").innerText = '';
			document.getElementById("ul3li2tr4td4").innerText = '';
			document.getElementById("ul3li2tr5td1").innerText = '';
			document.getElementById("ul3li2tr5td2").innerText = '';
			document.getElementById("ul3li2tr5td3").innerText = '';
			document.getElementById("ul3li2tr5td4").innerText = '';
			document.getElementById("ul3li2tr6td1").innerText = '';
			document.getElementById("ul3li2tr6td2").innerText = '';
			document.getElementById("ul3li2tr6td3").innerText = '';
			document.getElementById("ul3li2tr6td4").innerText = '';
			document.getElementById("ul3li2tr7td1").innerText = '';
			document.getElementById("ul3li2tr7td2").innerText = '';
			document.getElementById("ul3li2tr7td3").innerText = '';
			document.getElementById("ul3li2tr7td4").innerText = '';
			
		});
		
        
        $('#rbCMiniRoloSuper').click(function() {
			$("#rightImageSuper").attr('src', 'images/super/cargaMini_500_375.jpg');
			document.getElementById('rbRoloSuper').style.fontSize = '0.8em';
            document.getElementById('rbCRoloSuper').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloSuper').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloSuper').style.fontSize = '1.0em';
			document.getElementById('rbRoloSuper').style.fontWeight = 'normal';
            document.getElementById('rbCRoloSuper').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloSuper').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloSuper').style.fontWeight = 'bold';
			document.getElementById('rbRoloSuper').style.color = '#FFF';
            document.getElementById('rbCRoloSuper').style.color = '#FFF';
			document.getElementById('rbMiniRoloSuper').style.color = '#FFF';
            document.getElementById('rbCMiniRoloSuper').style.color = '#FFF';
            document.getElementById('ul3li2m1').className = "";
            document.getElementById('ul3li2m2').className = "";
            document.getElementById('ul3li2m3').className = "";
            document.getElementById('ul3li2m4').className = "activeMenu";
			document.getElementById("ul3li2tr1td1").innerText = '';
			document.getElementById("ul3li2tr1td2").innerText = '';
			document.getElementById("ul3li2tr1td3").innerText = '';
			document.getElementById("ul3li2tr1td4").innerText = '';
			document.getElementById("ul3li2tr2td1").innerText = '';
			document.getElementById("ul3li2tr2td2").innerText = '';
			document.getElementById("ul3li2tr2td3").innerText = '';
			document.getElementById("ul3li2tr2td4").innerText = '';
			document.getElementById("ul3li2tr3td1").innerText = '';
			document.getElementById("ul3li2tr3td2").innerText = '';
			document.getElementById("ul3li2tr3td3").innerText = '';
			document.getElementById("ul3li2tr3td4").innerText = '';
			document.getElementById("ul3li2tr4td1").innerText = '';
			document.getElementById("ul3li2tr4td2").innerText = '';
			document.getElementById("ul3li2tr4td3").innerText = '';
			document.getElementById("ul3li2tr4td4").innerText = '';
			document.getElementById("ul3li2tr5td1").innerText = '';
			document.getElementById("ul3li2tr5td2").innerText = '';
			document.getElementById("ul3li2tr5td3").innerText = '';
			document.getElementById("ul3li2tr5td4").innerText = '';
			document.getElementById("ul3li2tr6td1").innerText = '';
			document.getElementById("ul3li2tr6td2").innerText = '';
			document.getElementById("ul3li2tr6td3").innerText = '';
			document.getElementById("ul3li2tr6td4").innerText = '';
			document.getElementById("ul3li2tr7td1").innerText = '';
			document.getElementById("ul3li2tr7td2").innerText = '';
			document.getElementById("ul3li2tr7td3").innerText = '';
			document.getElementById("ul3li2tr7td4").innerText = '';
			
		});
        
		
		//Merino
		$('#openModelMerinoImg').click(function() {
			document.getElementById("rbRoloMerino").click();
		});
		
		
		$('#rbRoloMerino').click(function() {
			$("#rightImageMerino").attr('src', 'images/merino/rolo_500_375.jpg');
			document.getElementById('rbRoloMerino').style.fontSize = '1.0em';
            document.getElementById('rbCRoloMerino').style.fontSize = '0.8em';
			//document.getElementById('rbMiniRoloMerino').style.fontSize = '0.8em';
            //document.getElementById('rbCMiniRoloMerino').style.fontSize = '0.8em';
			document.getElementById('rbRoloMerino').style.fontWeight = 'bold';
            document.getElementById('rbCRoloMerino').style.fontWeight = 'normal';
			//document.getElementById('rbMiniRoloMerino').style.fontWeight = 'normal';
            //document.getElementById('rbCMiniRoloMerino').style.fontWeight = 'normal';
			document.getElementById('rbRoloMerino').style.color = '#FFF';
            document.getElementById('rbCRoloMerino').style.color = '#FFF';
			//document.getElementById('rbMiniRoloMerino').style.color = '#FFF';
            //document.getElementById('rbCMiniRoloMerino').style.color = '#FFF';
            document.getElementById('ul3li3m1').className = "activeMenu";
            document.getElementById('ul3li3m2').className = "";
            //document.getElementById('ul3li3m3').className = "";
            //document.getElementById('ul3li3m4').className = "";
            
			document.getElementById("ul3li3tr1td1").innerText = '0069';
			document.getElementById("ul3li3tr1td2").innerText = 'Rolo Merino 180 mm';
			document.getElementById("ul3li3tr1td3").innerText = '45';
			document.getElementById("ul3li3tr1td4").innerText = '60';
            
			document.getElementById("ul3li3tr2td1").innerText = '0070';
			document.getElementById("ul3li3tr2td2").innerText = 'Rolo Merino 220 mm';
			document.getElementById("ul3li3tr2td3").innerText = '45';
			document.getElementById("ul3li3tr2td4").innerText = '55';
            
			document.getElementById("ul3li3tr3td1").innerText = '0071';
			document.getElementById("ul3li3tr3td2").innerText = 'Rolo Merino 250 mm';
			document.getElementById("ul3li3tr3td3").innerText = '45';
			document.getElementById("ul3li3tr3td4").innerText = '50';
            
			document.getElementById("ul3li3tr4td1").innerText = '0155';
			document.getElementById("ul3li3tr4td2").innerText = 'Rolo Merino 180 mm';
			document.getElementById("ul3li3tr4td3").innerText = '50';
			document.getElementById("ul3li3tr4td4").innerText = '55';
            
			document.getElementById("ul3li3tr5td1").innerText = '0156';
			document.getElementById("ul3li3tr5td2").innerText = 'Rolo Merino 220 mm';
			document.getElementById("ul3li3tr5td3").innerText = '50';
			document.getElementById("ul3li3tr5td4").innerText = '50';
            
			document.getElementById("ul3li3tr6td1").innerText = '0157';
			document.getElementById("ul3li3tr6td2").innerText = 'Rolo Merino 250 mm';
			document.getElementById("ul3li3tr6td3").innerText = '50';
			document.getElementById("ul3li3tr6td4").innerText = '45';
			
		});

			
        $('#rbCRoloMerino').click(function() {
			$("#rightImageMerino").attr('src', 'images/merino/carga_500_375.jpg');
			document.getElementById('rbRoloMerino').style.fontSize = '0.8em';
            document.getElementById('rbCRoloMerino').style.fontSize = '1.0em';
			//document.getElementById('rbMiniRoloMerino').style.fontSize = '0.8em';
            //document.getElementById('rbCMiniRoloMerino').style.fontSize = '0.8em';
			document.getElementById('rbRoloMerino').style.fontWeight = 'normal';
            document.getElementById('rbCRoloMerino').style.fontWeight = 'bold';
			//document.getElementById('rbMiniRoloMerino').style.fontWeight = 'normal';
            //document.getElementById('rbCMiniRoloMerino').style.fontWeight = 'normal';
			document.getElementById('rbRoloMerino').style.color = '#FFF';
            document.getElementById('rbCRoloMerino').style.color = '#FFF';
			//document.getElementById('rbMiniRoloMerino').style.color = '#FFF';
            //document.getElementById('rbCMiniRoloMerino').style.color = '#FFF';
            document.getElementById('ul3li3m1').className = "";
            document.getElementById('ul3li3m2').className = "activeMenu";
            //document.getElementById('ul3li3m3').className = "";
            //document.getElementById('ul3li3m4').className = "";
            
			document.getElementById("ul3li3tr1td1").innerText = '0026';
			document.getElementById("ul3li3tr1td2").innerText = 'Carga Merino 180 mm';
			document.getElementById("ul3li3tr1td3").innerText = '45';
			document.getElementById("ul3li3tr1td4").innerText = '';
            
			document.getElementById("ul3li3tr2td1").innerText = '0027';
			document.getElementById("ul3li3tr2td2").innerText = 'Carga Merino 220 mm';
			document.getElementById("ul3li3tr2td3").innerText = '45';
			document.getElementById("ul3li3tr2td4").innerText = '';
            
			document.getElementById("ul3li3tr3td1").innerText = '0028';
			document.getElementById("ul3li3tr3td2").innerText = 'Carga Merino 250 mm';
			document.getElementById("ul3li3tr3td3").innerText = '45';
			document.getElementById("ul3li3tr3td4").innerText = '';
            
			document.getElementById("ul3li3tr4td1").innerText = '0137';
			document.getElementById("ul3li3tr4td2").innerText = 'Carga Merino 180 mm';
			document.getElementById("ul3li3tr4td3").innerText = '50';
			document.getElementById("ul3li3tr4td4").innerText = '';
            
			document.getElementById("ul3li3tr5td1").innerText = '0138';
			document.getElementById("ul3li3tr5td2").innerText = 'Carga Merino 220 mm';
			document.getElementById("ul3li3tr5td3").innerText = '50';
			document.getElementById("ul3li3tr5td4").innerText = '';
            
			document.getElementById("ul3li3tr6td1").innerText = '0139';
			document.getElementById("ul3li3tr6td2").innerText = 'Carga Merino 250 mm';
			document.getElementById("ul3li3tr6td3").innerText = '50';
			document.getElementById("ul3li3tr6td4").innerText = '';
			
		});
        
		/*$('#rbMiniRoloMerino').click(function() {
			$("#rightImageMerino").attr('src', 'images/merino/mini_500_375.jpg');
			document.getElementById('rbRoloMerino').style.fontSize = '0.8em';
            document.getElementById('rbCRoloMerino').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloMerino').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloMerino').style.fontSize = '1.0em';
			document.getElementById('rbRoloMerino').style.fontWeight = 'normal';
            document.getElementById('rbCRoloMerino').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloMerino').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloMerino').style.fontWeight = 'bold';
			document.getElementById('rbRoloMerino').style.color = '#FFF';
            document.getElementById('rbCRoloMerino').style.color = '#FFF';
			document.getElementById('rbMiniRoloMerino').style.color = '#FFF';
            document.getElementById('rbCMiniRoloMerino').style.color = '#FFF';
            
             document.getElementById('ul3li3m1').className = "";
            document.getElementById('ul3li3m2').className = "";
            document.getElementById('ul3li3m3').className = "activeMenu";
            document.getElementById('ul3li3m4').className = "";
			document.getElementById("ul3li3tr1td1").innerText = '';
			document.getElementById("ul3li3tr1td2").innerText = '';
			document.getElementById("ul3li3tr1td3").innerText = '';
			document.getElementById("ul3li3tr1td4").innerText = '';
			document.getElementById("ul3li3tr2td1").innerText = '';
			document.getElementById("ul3li3tr2td2").innerText = '';
			document.getElementById("ul3li3tr2td3").innerText = '';
			document.getElementById("ul3li3tr2td4").innerText = '';
			document.getElementById("ul3li3tr3td1").innerText = '';
			document.getElementById("ul3li3tr3td2").innerText = '';
			document.getElementById("ul3li3tr3td3").innerText = '';
			document.getElementById("ul3li3tr3td4").innerText = '';
			document.getElementById("ul3li3tr4td1").innerText = '';
			document.getElementById("ul3li3tr4td2").innerText = '';
			document.getElementById("ul3li3tr4td3").innerText = '';
			document.getElementById("ul3li3tr4td4").innerText = '';
			document.getElementById("ul3li3tr5td1").innerText = '';
			document.getElementById("ul3li3tr5td2").innerText = '';
			document.getElementById("ul3li3tr5td3").innerText = '';
			document.getElementById("ul3li3tr5td4").innerText = '';
			document.getElementById("ul3li3tr6td1").innerText = '';
			document.getElementById("ul3li3tr6td2").innerText = '';
			document.getElementById("ul3li3tr6td3").innerText = '';
			document.getElementById("ul3li3tr6td4").innerText = '';
			document.getElementById("ul3li3tr7td1").innerText = '';
			document.getElementById("ul3li3tr7td2").innerText = '';
			document.getElementById("ul3li3tr7td3").innerText = '';
			document.getElementById("ul3li3tr7td4").innerText = '';
			
		});
		
		$('#rbCMiniRoloMerino').click(function() {
			$("#rightImageMerino").attr('src', 'images/merino/cargaMini_500_375.jpg');
			document.getElementById('rbRoloMerino').style.fontSize = '0.8em';
            document.getElementById('rbCRoloMerino').style.fontSize = '0.8em';
			document.getElementById('rbMiniRoloMerino').style.fontSize = '0.8em';
            document.getElementById('rbCMiniRoloMerino').style.fontSize = '1.0em';
			document.getElementById('rbRoloMerino').style.fontWeight = 'normal';
            document.getElementById('rbCRoloMerino').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloMerino').style.fontWeight = 'normal';
            document.getElementById('rbCMiniRoloMerino').style.fontWeight = 'bold';
			document.getElementById('rbRoloMerino').style.color = '#FFF';
            document.getElementById('rbCRoloMerino').style.color = '#FFF';
			document.getElementById('rbMiniRoloMerino').style.color = '#FFF';
            document.getElementById('rbCMiniRoloMerino').style.color = '#FFF';
            
             document.getElementById('ul3li3m1').className = "";
            document.getElementById('ul3li3m2').className = "";
            document.getElementById('ul3li3m3').className = "";
            document.getElementById('ul3li3m4').className = "activeMenu";
			document.getElementById("ul3li3tr1td1").innerText = '';
			document.getElementById("ul3li3tr1td2").innerText = '';
			document.getElementById("ul3li3tr1td3").innerText = '';
			document.getElementById("ul3li3tr1td4").innerText = '';
			document.getElementById("ul3li3tr2td1").innerText = '';
			document.getElementById("ul3li3tr2td2").innerText = '';
			document.getElementById("ul3li3tr2td3").innerText = '';
			document.getElementById("ul3li3tr2td4").innerText = '';
			document.getElementById("ul3li3tr3td1").innerText = '';
			document.getElementById("ul3li3tr3td2").innerText = '';
			document.getElementById("ul3li3tr3td3").innerText = '';
			document.getElementById("ul3li3tr3td4").innerText = '';
			document.getElementById("ul3li3tr4td1").innerText = '';
			document.getElementById("ul3li3tr4td2").innerText = '';
			document.getElementById("ul3li3tr4td3").innerText = '';
			document.getElementById("ul3li3tr4td4").innerText = '';
			document.getElementById("ul3li3tr5td1").innerText = '';
			document.getElementById("ul3li3tr5td2").innerText = '';
			document.getElementById("ul3li3tr5td3").innerText = '';
			document.getElementById("ul3li3tr5td4").innerText = '';
			document.getElementById("ul3li3tr6td1").innerText = '';
			document.getElementById("ul3li3tr6td2").innerText = '';
			document.getElementById("ul3li3tr6td3").innerText = '';
			document.getElementById("ul3li3tr6td4").innerText = '';
			document.getElementById("ul3li3tr7td1").innerText = '';
			document.getElementById("ul3li3tr7td2").innerText = '';
			document.getElementById("ul3li3tr7td3").innerText = '';
			document.getElementById("ul3li3tr7td4").innerText = '';
			
		});*/
		
        
        
		//Acessorios
		$('#openModelAcessoriosImg').click(function() {
			document.getElementById("accArmacoesN").click();
		});
		
		
		$('#accArmacoesN').click(function() {
			$("#rightImageAcessorios").attr('src', 'images/acessorios/armacoes_500_375.jpg');
			document.getElementById('accArmacoesN').style.fontSize = '1.0em';
			document.getElementById('accTabuleiros').style.fontSize = '0.8em';
            document.getElementById('accBetumadeira').style.fontSize = '0.8em';
            document.getElementById('accBalde').style.fontSize = '0.8em';
            document.getElementById('accGrelha').style.fontSize = '0.8em';
            document.getElementById('accCoberturas').style.fontSize = '0.8em';
			document.getElementById('accArmacoesN').style.fontWeight = 'bold';
			document.getElementById('accTabuleiros').style.fontWeight = 'normal';
            document.getElementById('accBetumadeira').style.fontWeight = 'normal';
            document.getElementById('accBalde').style.fontWeight = 'normal';
            document.getElementById('accGrelha').style.fontWeight = 'normal';
            document.getElementById('accCoberturas').style.fontWeight = 'normal';
			document.getElementById('accArmacoesN').style.color = '#FFF';
			document.getElementById('accTabuleiros').style.color = '#FFF';
            document.getElementById('accBetumadeira').style.color = '#FFF';
            document.getElementById('accBalde').style.color = '#FFF';
            document.getElementById('accGrelha').style.color = '#FFF';
            document.getElementById('accCoberturas').style.color = '#FFF';
            document.getElementById('ul3li4m1').className = "activeMenu";
            document.getElementById('ul3li4m2').className = "";
            document.getElementById('ul3li4m3').className = "";
            document.getElementById('ul3li4m4').className = "";
            document.getElementById('ul3li4m5').className = "";
            document.getElementById('ul3li4m6').className = "";
            
			document.getElementById("ul3li4tr1td1").innerText = '';
			document.getElementById("ul3li4tr1td2").innerText = '';
			document.getElementById("ul3li4tr1td3").innerText = '';
			document.getElementById("ul3li4tr1td4").innerText = '';
			document.getElementById("ul3li4tr2td1").innerText = '';
			document.getElementById("ul3li4tr2td2").innerText = '';
			document.getElementById("ul3li4tr2td3").innerText = '';
			document.getElementById("ul3li4tr2td4").innerText = '';
			document.getElementById("ul3li4tr3td1").innerText = '';
			document.getElementById("ul3li4tr3td2").innerText = '';
			document.getElementById("ul3li4tr3td3").innerText = '';
			document.getElementById("ul3li4tr3td4").innerText = '';
			document.getElementById("ul3li4tr4td1").innerText = '';
			document.getElementById("ul3li4tr4td2").innerText = '';
			document.getElementById("ul3li4tr4td3").innerText = '';
			document.getElementById("ul3li4tr4td4").innerText = '';
			document.getElementById("ul3li4tr5td1").innerText = '';
			document.getElementById("ul3li4tr5td2").innerText = '';
			document.getElementById("ul3li4tr5td3").innerText = '';
			document.getElementById("ul3li4tr5td4").innerText = '';
			document.getElementById("ul3li4tr6td1").innerText = '';
			document.getElementById("ul3li4tr6td2").innerText = '';
			document.getElementById("ul3li4tr6td3").innerText = '';
			document.getElementById("ul3li4tr6td4").innerText = '';
			document.getElementById("ul3li4tr7td1").innerText = '';
			document.getElementById("ul3li4tr7td2").innerText = '';
			document.getElementById("ul3li4tr7td3").innerText = '';
			document.getElementById("ul3li4tr7td4").innerText = '';
			
		});

							   
		$('#accTabuleirosN').click(function() {
			$("#rightImageAcessorios").attr('src', 'images/acessorios/tabuleiros_500_375.jpg');
			document.getElementById('accArmacoesN').style.fontSize = '0.8em';
			document.getElementById('accTabuleiros').style.fontSize = '1.0em';
            document.getElementById('accBetumadeira').style.fontSize = '0.8em';
            document.getElementById('accBalde').style.fontSize = '0.8em';
            document.getElementById('accGrelha').style.fontSize = '0.8em';
            document.getElementById('accCoberturas').style.fontSize = '0.8em';
			document.getElementById('accArmacoesN').style.fontWeight = 'normal';
			document.getElementById('accTabuleiros').style.fontWeight = 'bold';
            document.getElementById('accBetumadeira').style.fontWeight = 'normal';
            document.getElementById('accBalde').style.fontWeight = 'normal';
            document.getElementById('accGrelha').style.fontWeight = 'normal';
            document.getElementById('accCoberturas').style.fontWeight = 'normal';
			document.getElementById('accArmacoesN').style.color = '#FFF';
			document.getElementById('accTabuleiros').style.color = '#FFF';
            document.getElementById('accBetumadeira').style.color = '#FFF';
            document.getElementById('accBalde').style.color = '#FFF';
            document.getElementById('accGrelha').style.color = '#FFF';
            document.getElementById('accCoberturas').style.color = '#FFF';
            document.getElementById('ul3li4m1').className = "";
            document.getElementById('ul3li4m2').className = "activeMenu";
            document.getElementById('ul3li4m3').className = "";
            document.getElementById('ul3li4m4').className = "";
            document.getElementById('ul3li4m5').className = "";
            document.getElementById('ul3li4m6').className = "";
            
			document.getElementById("ul3li4tr1td1").innerText = '';
			document.getElementById("ul3li4tr1td2").innerText = '';
			document.getElementById("ul3li4tr1td3").innerText = '';
			document.getElementById("ul3li4tr1td4").innerText = '';
			document.getElementById("ul3li4tr2td1").innerText = '';
			document.getElementById("ul3li4tr2td2").innerText = '';
			document.getElementById("ul3li4tr2td3").innerText = '';
			document.getElementById("ul3li4tr2td4").innerText = '';
			document.getElementById("ul3li4tr3td1").innerText = '';
			document.getElementById("ul3li4tr3td2").innerText = '';
			document.getElementById("ul3li4tr3td3").innerText = '';
			document.getElementById("ul3li4tr3td4").innerText = '';
			document.getElementById("ul3li4tr4td1").innerText = '';
			document.getElementById("ul3li4tr4td2").innerText = '';
			document.getElementById("ul3li4tr4td3").innerText = '';
			document.getElementById("ul3li4tr4td4").innerText = '';
			document.getElementById("ul3li4tr5td1").innerText = '';
			document.getElementById("ul3li4tr5td2").innerText = '';
			document.getElementById("ul3li4tr5td3").innerText = '';
			document.getElementById("ul3li4tr5td4").innerText = '';
			document.getElementById("ul3li4tr6td1").innerText = '';
			document.getElementById("ul3li4tr6td2").innerText = '';
			document.getElementById("ul3li4tr6td3").innerText = '';
			document.getElementById("ul3li4tr6td4").innerText = '';
			document.getElementById("ul3li4tr7td1").innerText = '';
			document.getElementById("ul3li4tr7td2").innerText = '';
			document.getElementById("ul3li4tr7td3").innerText = '';
			document.getElementById("ul3li4tr7td4").innerText = '';
			
		});
        
        
        $('#accBetumadeira').click(function() {
			$("#rightImageAcessorios").attr('src', 'images/acessorios/espatula_500_375.jpg');
			document.getElementById('accArmacoesN').style.fontSize = '0.8em';
			document.getElementById('accTabuleiros').style.fontSize = '0.8em';
            document.getElementById('accBetumadeira').style.fontSize = '1.0em';
            document.getElementById('accBalde').style.fontSize = '0.8em';
            document.getElementById('accGrelha').style.fontSize = '0.8em';
            document.getElementById('accCoberturas').style.fontSize = '0.8em';
			document.getElementById('accArmacoesN').style.fontWeight = 'normal';
			document.getElementById('accTabuleiros').style.fontWeight = 'normal';
            document.getElementById('accBetumadeira').style.fontWeight = 'bold';
            document.getElementById('accBalde').style.fontWeight = 'normal';
            document.getElementById('accGrelha').style.fontWeight = 'normal';
            document.getElementById('accCoberturas').style.fontWeight = 'normal';
			document.getElementById('accArmacoesN').style.color = '#FFF';
			document.getElementById('accTabuleiros').style.color = '#FFF';
            document.getElementById('accBetumadeira').style.color = '#FFF';
            document.getElementById('accBalde').style.color = '#FFF';
            document.getElementById('accGrelha').style.color = '#FFF';
            document.getElementById('accCoberturas').style.color = '#FFF';
            document.getElementById('ul3li4m1').className = "";
            document.getElementById('ul3li4m2').className = "";
            document.getElementById('ul3li4m3').className = "activeMenu";
            document.getElementById('ul3li4m4').className = "";
            document.getElementById('ul3li4m5').className = "";
            document.getElementById('ul3li4m6').className = "";
            
			document.getElementById("ul3li4tr1td1").innerText = '';
			document.getElementById("ul3li4tr1td2").innerText = '';
			document.getElementById("ul3li4tr1td3").innerText = '';
			document.getElementById("ul3li4tr1td4").innerText = '';
			document.getElementById("ul3li4tr2td1").innerText = '';
			document.getElementById("ul3li4tr2td2").innerText = '';
			document.getElementById("ul3li4tr2td3").innerText = '';
			document.getElementById("ul3li4tr2td4").innerText = '';
			document.getElementById("ul3li4tr3td1").innerText = '';
			document.getElementById("ul3li4tr3td2").innerText = '';
			document.getElementById("ul3li4tr3td3").innerText = '';
			document.getElementById("ul3li4tr3td4").innerText = '';
			document.getElementById("ul3li4tr4td1").innerText = '';
			document.getElementById("ul3li4tr4td2").innerText = '';
			document.getElementById("ul3li4tr4td3").innerText = '';
			document.getElementById("ul3li4tr4td4").innerText = '';
			document.getElementById("ul3li4tr5td1").innerText = '';
			document.getElementById("ul3li4tr5td2").innerText = '';
			document.getElementById("ul3li4tr5td3").innerText = '';
			document.getElementById("ul3li4tr5td4").innerText = '';
			document.getElementById("ul3li4tr6td1").innerText = '';
			document.getElementById("ul3li4tr6td2").innerText = '';
			document.getElementById("ul3li4tr6td3").innerText = '';
			document.getElementById("ul3li4tr6td4").innerText = '';
			document.getElementById("ul3li4tr7td1").innerText = '';
			document.getElementById("ul3li4tr7td2").innerText = '';
			document.getElementById("ul3li4tr7td3").innerText = '';
			document.getElementById("ul3li4tr7td4").innerText = '';
			
		});
        
        $('#accBaldeN').click(function() {
			$("#rightImageAcessorios").attr('src', 'images/acessorios/balde_500_375.jpg');
			document.getElementById('accArmacoesN').style.fontSize = '0.8em';
			document.getElementById('accTabuleiros').style.fontSize = '0.8em';
            document.getElementById('accBetumadeira').style.fontSize = '0.8em';
            document.getElementById('accBalde').style.fontSize = '1.0em';
            document.getElementById('accGrelha').style.fontSize = '0.8em';
            document.getElementById('accCoberturas').style.fontSize = '0.8em';
			document.getElementById('accArmacoesN').style.fontWeight = 'normal';
			document.getElementById('accTabuleiros').style.fontWeight = 'normal';
            document.getElementById('accBetumadeira').style.fontWeight = 'normal';
            document.getElementById('accBalde').style.fontWeight = 'bold';
            document.getElementById('accGrelha').style.fontWeight = 'normal';
            document.getElementById('accCoberturas').style.fontWeight = 'normal';
			document.getElementById('accArmacoesN').style.color = '#FFF';
			document.getElementById('accTabuleiros').style.color = '#FFF';
            document.getElementById('accBetumadeira').style.color = '#FFF';
            document.getElementById('accBalde').style.color = '#FFF';
            document.getElementById('accGrelha').style.color = '#FFF';
            document.getElementById('accCoberturas').style.color = '#FFF';
            document.getElementById('ul3li4m1').className = "";
            document.getElementById('ul3li4m2').className = "";
            document.getElementById('ul3li4m3').className = "";
            document.getElementById('ul3li4m4').className = "activeMenu";
            document.getElementById('ul3li4m5').className = "";
            document.getElementById('ul3li4m6').className = "";
            
			document.getElementById("ul3li4tr1td1").innerText = '';
			document.getElementById("ul3li4tr1td2").innerText = '';
			document.getElementById("ul3li4tr1td3").innerText = '';
			document.getElementById("ul3li4tr1td4").innerText = '';
			document.getElementById("ul3li4tr2td1").innerText = '';
			document.getElementById("ul3li4tr2td2").innerText = '';
			document.getElementById("ul3li4tr2td3").innerText = '';
			document.getElementById("ul3li4tr2td4").innerText = '';
			document.getElementById("ul3li4tr3td1").innerText = '';
			document.getElementById("ul3li4tr3td2").innerText = '';
			document.getElementById("ul3li4tr3td3").innerText = '';
			document.getElementById("ul3li4tr3td4").innerText = '';
			document.getElementById("ul3li4tr4td1").innerText = '';
			document.getElementById("ul3li4tr4td2").innerText = '';
			document.getElementById("ul3li4tr4td3").innerText = '';
			document.getElementById("ul3li4tr4td4").innerText = '';
			document.getElementById("ul3li4tr5td1").innerText = '';
			document.getElementById("ul3li4tr5td2").innerText = '';
			document.getElementById("ul3li4tr5td3").innerText = '';
			document.getElementById("ul3li4tr5td4").innerText = '';
			document.getElementById("ul3li4tr6td1").innerText = '';
			document.getElementById("ul3li4tr6td2").innerText = '';
			document.getElementById("ul3li4tr6td3").innerText = '';
			document.getElementById("ul3li4tr6td4").innerText = '';
			document.getElementById("ul3li4tr7td1").innerText = '';
			document.getElementById("ul3li4tr7td2").innerText = '';
			document.getElementById("ul3li4tr7td3").innerText = '';
			document.getElementById("ul3li4tr7td4").innerText = '';
			
		});
        
        $('#accGrelhaN').click(function() {
			$("#rightImageAcessorios").attr('src', 'images/acessorios/grelha_500_375.jpg');
			document.getElementById('accArmacoesN').style.fontSize = '0.8em';
			document.getElementById('accTabuleiros').style.fontSize = '0.8em';
            document.getElementById('accBetumadeira').style.fontSize = '0.8em';
            document.getElementById('accBalde').style.fontSize = '0.8em';
            document.getElementById('accGrelha').style.fontSize = '1.0em';
            document.getElementById('accCoberturas').style.fontSize = '0.8em';
			document.getElementById('accArmacoesN').style.fontWeight = 'normal';
			document.getElementById('accTabuleiros').style.fontWeight = 'normal';
            document.getElementById('accBetumadeira').style.fontWeight = 'normal';
            document.getElementById('accBalde').style.fontWeight = 'normal';
            document.getElementById('accGrelha').style.fontWeight = 'bold';
            document.getElementById('accCoberturas').style.fontWeight = 'normal';
			document.getElementById('accArmacoesN').style.color = '#FFF';
			document.getElementById('accTabuleiros').style.color = '#FFF';
            document.getElementById('accBetumadeira').style.color = '#FFF';
            document.getElementById('accBalde').style.color = '#FFF';
            document.getElementById('accGrelha').style.color = '#FFF';
            document.getElementById('accCoberturas').style.color = '#FFF';
            document.getElementById('ul3li4m1').className = "";
            document.getElementById('ul3li4m2').className = "";
            document.getElementById('ul3li4m3').className = "";
            document.getElementById('ul3li4m4').className = "";
            document.getElementById('ul3li4m5').className = "activeMenu";
            document.getElementById('ul3li4m6').className = "";
            
			document.getElementById("ul3li4tr1td1").innerText = '';
			document.getElementById("ul3li4tr1td2").innerText = '';
			document.getElementById("ul3li4tr1td3").innerText = '';
			document.getElementById("ul3li4tr1td4").innerText = '';
			document.getElementById("ul3li4tr2td1").innerText = '';
			document.getElementById("ul3li4tr2td2").innerText = '';
			document.getElementById("ul3li4tr2td3").innerText = '';
			document.getElementById("ul3li4tr2td4").innerText = '';
			document.getElementById("ul3li4tr3td1").innerText = '';
			document.getElementById("ul3li4tr3td2").innerText = '';
			document.getElementById("ul3li4tr3td3").innerText = '';
			document.getElementById("ul3li4tr3td4").innerText = '';
			document.getElementById("ul3li4tr4td1").innerText = '';
			document.getElementById("ul3li4tr4td2").innerText = '';
			document.getElementById("ul3li4tr4td3").innerText = '';
			document.getElementById("ul3li4tr4td4").innerText = '';
			document.getElementById("ul3li4tr5td1").innerText = '';
			document.getElementById("ul3li4tr5td2").innerText = '';
			document.getElementById("ul3li4tr5td3").innerText = '';
			document.getElementById("ul3li4tr5td4").innerText = '';
			document.getElementById("ul3li4tr6td1").innerText = '';
			document.getElementById("ul3li4tr6td2").innerText = '';
			document.getElementById("ul3li4tr6td3").innerText = '';
			document.getElementById("ul3li4tr6td4").innerText = '';
			document.getElementById("ul3li4tr7td1").innerText = '';
			document.getElementById("ul3li4tr7td2").innerText = '';
			document.getElementById("ul3li4tr7td3").innerText = '';
			document.getElementById("ul3li4tr7td4").innerText = '';
			
		});
        
        $('#accCoberturasN').click(function() {
			$("#rightImageAcessorios").attr('src', 'images/acessorios/cobertura_500_375.jpg');
			document.getElementById('accArmacoesN').style.fontSize = '0.8em';
			document.getElementById('accTabuleiros').style.fontSize = '0.8em';
            document.getElementById('accBetumadeira').style.fontSize = '0.8em';
            document.getElementById('accBalde').style.fontSize = '0.8em';
            document.getElementById('accGrelha').style.fontSize = '0.8em';
            document.getElementById('accCoberturas').style.fontSize = '1.0em';
			document.getElementById('accArmacoesN').style.fontWeight = 'normal';
			document.getElementById('accTabuleiros').style.fontWeight = 'normal';
            document.getElementById('accBetumadeira').style.fontWeight = 'normal';
            document.getElementById('accBalde').style.fontWeight = 'normal';
            document.getElementById('accGrelha').style.fontWeight = 'normal';
            document.getElementById('accCoberturas').style.fontWeight = 'bold';
			document.getElementById('accArmacoesN').style.color = '#FFF';
			document.getElementById('accTabuleiros').style.color = '#FFF';
            document.getElementById('accBetumadeira').style.color = '#FFF';
            document.getElementById('accBalde').style.color = '#FFF';
            document.getElementById('accGrelha').style.color = '#FFF';
            document.getElementById('accCoberturas').style.color = '#FFF';
            document.getElementById('ul3li4m1').className = "";
            document.getElementById('ul3li4m2').className = "";
            document.getElementById('ul3li4m3').className = "";
            document.getElementById('ul3li4m4').className = "";
            document.getElementById('ul3li4m5').className = "";
            document.getElementById('ul3li4m6').className = "activeMenu";
            
			document.getElementById("ul3li4tr1td1").innerText = '';
			document.getElementById("ul3li4tr1td2").innerText = '';
			document.getElementById("ul3li4tr1td3").innerText = '';
			document.getElementById("ul3li4tr1td4").innerText = '';
			document.getElementById("ul3li4tr2td1").innerText = '';
			document.getElementById("ul3li4tr2td2").innerText = '';
			document.getElementById("ul3li4tr2td3").innerText = '';
			document.getElementById("ul3li4tr2td4").innerText = '';
			document.getElementById("ul3li4tr3td1").innerText = '';
			document.getElementById("ul3li4tr3td2").innerText = '';
			document.getElementById("ul3li4tr3td3").innerText = '';
			document.getElementById("ul3li4tr3td4").innerText = '';
			document.getElementById("ul3li4tr4td1").innerText = '';
			document.getElementById("ul3li4tr4td2").innerText = '';
			document.getElementById("ul3li4tr4td3").innerText = '';
			document.getElementById("ul3li4tr4td4").innerText = '';
			document.getElementById("ul3li4tr5td1").innerText = '';
			document.getElementById("ul3li4tr5td2").innerText = '';
			document.getElementById("ul3li4tr5td3").innerText = '';
			document.getElementById("ul3li4tr5td4").innerText = '';
			document.getElementById("ul3li4tr6td1").innerText = '';
			document.getElementById("ul3li4tr6td2").innerText = '';
			document.getElementById("ul3li4tr6td3").innerText = '';
			document.getElementById("ul3li4tr6td4").innerText = '';
			document.getElementById("ul3li4tr7td1").innerText = '';
			document.getElementById("ul3li4tr7td2").innerText = '';
			document.getElementById("ul3li4tr7td3").innerText = '';
			document.getElementById("ul3li4tr7td4").innerText = '';
			
		});
        
        
        document.getElementById("msgNome").placeholder = "Nome";
        document.getElementById("msgEmail").placeholder = "Email";
        document.getElementById("msgAssunto").placeholder = "Assunto";
        document.getElementById("msgMensagem").placeholder = "Mensagem";
        document.getElementById("msgEnviar").innerText = "Enviar Mensagem";
        document.getElementById("msgContacto").innerText = "Contacte-nos !!!";
        
		
        
        
        
        

		
		
		

        //END DOCUMENT.READY FUNCTION
	});
	
	
	

})(jQuery);