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

		
        document.getElementById('initLabel').innerHTML = "Init";
        document.getElementById('compLabel').innerHTML = "Company";
        document.getElementById('prodLabel').innerHTML = "Products";
        document.getElementById('contLabel').innerHTML = "Contacts";
        document.getElementById('sugsLabel').innerHTML = "Suggestion";
        
        /*document.getElementById('missaoLbl').innerHTML = "Mission:";
        document.getElementById('missaoTextLbl').innerHTML = " Provide the best and latest industry products in the domestic and international markets.";
        document.getElementById('visaoLbl').innerHTML = "Vision:";
        document.getElementById('visaoTextLbl').innerHTML = " Continuously expand the volume of business aimed at continuous achievement from domestic and export markets.";
        document.getElementById('objLbl').innerHTML = "Goal:";
        document.getElementById('objTextLbl').innerHTML = " To convey to our customers high quality products, tailored to your needs and always at the most competitive price.";*/
        
        document.getElementById('companyFirst').innerHTML = "With 20 years of experience and 2000 m2 of facilities equipped with the most cutting-edge technology at national level, the ROLPIN has been considered an SME leader for 3 consecutive years and SMEs excellence in 2014, and the company number one in the industry.";
        document.getElementById('companySecond').innerHTML = "Between the late 80s and early 90s, the craftsmanship garage of the founders, began to emerge a family business in the area of paint rollers and accessories industry for civil construction. Hard work and dedication which, moreover, are principles by which the company is guided, provided the expansion of the modest initial warehouse 300 m2.";
        document.getElementById('companyThird').innerHTML = "With 20 years of experience and 2000 20m² of facilities equipped with the latest cutting-edge technology at national level, the ROLPIN has been considered an SME leader for 3 consecutive years and SMEs excellence in 2014, and the company number one in the industry." ;

		
        document.getElementsByName('descr')[0].innerHTML = "Description:";
        document.getElementsByName('descr')[1].innerHTML = "Description:";
        document.getElementsByName('descr')[2].innerHTML = "Description:";
        document.getElementsByName('descr')[3].innerHTML = "Description:";
        document.getElementsByName('descr')[4].innerHTML = "Description:";
        document.getElementsByName('descr')[5].innerHTML = "Description:";
        document.getElementsByName('descr')[6].innerHTML = "Description:";
        document.getElementsByName('descr')[7].innerHTML = "Description:";
        document.getElementsByName('descr')[8].innerHTML = "Description:";
        document.getElementsByName('descr')[9].innerHTML = "Description:";
        document.getElementsByName('descr')[10].innerHTML = "Description:";
        //document.getElementsByName('descr')[11].innerHTML = "Description:";
        
        
		document.getElementsByName('spTecido')[0].innerHTML = "Tissue";
        document.getElementsByName('spTecido')[1].innerHTML = "Tissue";
        document.getElementsByName('spTecido')[2].innerHTML = "Tissue";
        document.getElementsByName('spTecido')[3].innerHTML = "Tissue";
        document.getElementsByName('spTecido')[4].innerHTML = "Tissue";
        document.getElementsByName('spTecido')[5].innerHTML = "Tissue";
        document.getElementsByName('spTecido')[6].innerHTML = "Tissue";
        document.getElementsByName('spTecido')[7].innerHTML = "Tissue";
        document.getElementsByName('spTecido')[8].innerHTML = "Tissue";
        document.getElementsByName('spTecido')[9].innerHTML = "Tissue";
        document.getElementsByName('spTecido')[10].innerHTML = "Tissue";
        //document.getElementsByName('spTecido')[11].innerHTML = "Tissue";
		
		document.getElementsByName('spAltura')[0].innerHTML = "Height";
        document.getElementsByName('spAltura')[1].innerHTML = "Height";
        document.getElementsByName('spAltura')[2].innerHTML = "Height";
        document.getElementsByName('spAltura')[3].innerHTML = "Height";
        document.getElementsByName('spAltura')[4].innerHTML = "Height";
        document.getElementsByName('spAltura')[5].innerHTML = "Height";
        document.getElementsByName('spAltura')[6].innerHTML = "Height";
        document.getElementsByName('spAltura')[7].innerHTML = "Height";
        document.getElementsByName('spAltura')[8].innerHTML = "Height";
        document.getElementsByName('spAltura')[9].innerHTML = "Height";
        document.getElementsByName('spAltura')[10].innerHTML = "Height";
        //document.getElementsByName('spAltura')[11].innerHTML = "Height";
        
		
		document.getElementsByName('spCor')[0].innerHTML = "Color";
        document.getElementsByName('spCor')[1].innerHTML = "Color";
        document.getElementsByName('spCor')[2].innerHTML = "Color";
        document.getElementsByName('spCor')[3].innerHTML = "Color";
        document.getElementsByName('spCor')[4].innerHTML = "Color";
        document.getElementsByName('spCor')[5].innerHTML = "Color";
        document.getElementsByName('spCor')[6].innerHTML = "Color";
        document.getElementsByName('spCor')[7].innerHTML = "Color";
        document.getElementsByName('spCor')[8].innerHTML = "Color";
        document.getElementsByName('spCor')[9].innerHTML = "Color";
        document.getElementsByName('spCor')[10].innerHTML = "Color";
        //document.getElementsByName('spCor')[11].innerHTML = "Color";
		
		document.getElementsByName('spApp')[0].innerHTML = "Application:";
        document.getElementsByName('spApp')[1].innerHTML = "Application:";
        document.getElementsByName('spApp')[2].innerHTML = "Application:";
        document.getElementsByName('spApp')[3].innerHTML = "Application:";
        document.getElementsByName('spApp')[4].innerHTML = "Application:";
        document.getElementsByName('spApp')[5].innerHTML = "Application:";
        document.getElementsByName('spApp')[6].innerHTML = "Application:";
        document.getElementsByName('spApp')[7].innerHTML = "Application:";
        document.getElementsByName('spApp')[8].innerHTML = "Application:";
        document.getElementsByName('spApp')[9].innerHTML = "Application:";
        document.getElementsByName('spApp')[10].innerHTML = "Application:";
        //document.getElementsByName('spApp')[11].innerHTML = "Application:";
		
		document.getElementsByName('spRoloR')[0].innerHTML = "Roller";
        document.getElementsByName('spRoloR')[1].innerHTML = "Roller";
        document.getElementsByName('spRoloR')[2].innerHTML = "Roller";
        document.getElementsByName('spRoloR')[3].innerHTML = "Roller";
        document.getElementsByName('spRoloR')[4].innerHTML = "Roller";
        document.getElementsByName('spRoloR')[5].innerHTML = "Roller";
        document.getElementsByName('spRoloR')[6].innerHTML = "Roller";
        document.getElementsByName('spRoloR')[7].innerHTML = "Roller";
        document.getElementsByName('spRoloR')[8].innerHTML = "Roller";
        document.getElementsByName('spRoloR')[9].innerHTML = "Roller";
        document.getElementsByName('spRoloR')[10].innerHTML = "Roller";
        //document.getElementsByName('spRoloR')[11].innerHTML = "Roller";
        
		document.getElementsByName('spRoloC')[0].innerHTML = "Refill Roller";
        document.getElementsByName('spRoloC')[1].innerHTML = "Refill Roller";
        document.getElementsByName('spRoloC')[2].innerHTML = "Refill Roller";
        document.getElementsByName('spRoloC')[3].innerHTML = "Refill Roller";
        document.getElementsByName('spRoloC')[4].innerHTML = "Refill Roller";
        document.getElementsByName('spRoloC')[5].innerHTML = "Refill Roller";
        document.getElementsByName('spRoloC')[6].innerHTML = "Refill Roller";
        document.getElementsByName('spRoloC')[7].innerHTML = "Refill Roller";
        document.getElementsByName('spRoloC')[8].innerHTML = "Refill Roller";
        document.getElementsByName('spRoloC')[9].innerHTML = "Refill Roller";
        document.getElementsByName('spRoloC')[10].innerHTML = "Refill Roller";
        //document.getElementsByName('spRoloC')[11].innerHTML = "Refill Roller";
        
		document.getElementsByName('spRoloM')[0].innerHTML = "Mini Roller";
        document.getElementsByName('spRoloM')[1].innerHTML = "Mini Roller";
        document.getElementsByName('spRoloM')[2].innerHTML = "Mini Roller";
        document.getElementsByName('spRoloM')[3].innerHTML = "Mini Roller";
        document.getElementsByName('spRoloM')[4].innerHTML = "Mini Roller";
        document.getElementsByName('spRoloM')[5].innerHTML = "Mini Roller";
        document.getElementsByName('spRoloM')[6].innerHTML = "Mini Roller";
        document.getElementsByName('spRoloM')[7].innerHTML = "Mini Roller";
        //document.getElementsByName('spRoloM')[8].innerHTML = "Mini Roller";
        //document.getElementsByName('spRoloM')[9].innerHTML = "Mini Roller";
        //document.getElementsByName('spRoloM')[10].innerHTML = "Mini Roller";
        //document.getElementsByName('spRoloM')[11].innerHTML = "Mini Roller";
        
		document.getElementsByName('spRoloCM')[0].innerHTML = "Refill Mini";
        document.getElementsByName('spRoloCM')[1].innerHTML = "Refill Mini";
        document.getElementsByName('spRoloCM')[2].innerHTML = "Refill Mini";
        document.getElementsByName('spRoloCM')[3].innerHTML = "Refill Mini";
        document.getElementsByName('spRoloCM')[4].innerHTML = "Refill Mini";
        document.getElementsByName('spRoloCM')[5].innerHTML = "Refill Mini";
        document.getElementsByName('spRoloCM')[6].innerHTML = "Refill Mini";
        document.getElementsByName('spRoloCM')[7].innerHTML = "Refill Mini";
        //document.getElementsByName('spRoloCM')[8].innerHTML = "Refill Mini";
        //document.getElementsByName('spRoloCM')[9].innerHTML = "Refill Mini";
        //document.getElementsByName('spRoloCM')[10].innerHTML = "Refill Mini";
        //document.getElementsByName('spRoloCM')[11].innerHTML = "Refill Mini";
        
		document.getElementsByName('tableCod')[0].innerHTML = "Code";
        document.getElementsByName('tableCod')[1].innerHTML = "Code";
        document.getElementsByName('tableCod')[2].innerHTML = "Code";
        document.getElementsByName('tableCod')[3].innerHTML = "Code";
        document.getElementsByName('tableCod')[4].innerHTML = "Code";
        document.getElementsByName('tableCod')[5].innerHTML = "Code";
        document.getElementsByName('tableCod')[6].innerHTML = "Code";
        document.getElementsByName('tableCod')[7].innerHTML = "Code";
        document.getElementsByName('tableCod')[8].innerHTML = "Code";
        document.getElementsByName('tableCod')[9].innerHTML = "Code";
        document.getElementsByName('tableCod')[10].innerHTML = "Code";
		document.getElementsByName('tableCod')[11].innerHTML = "Code";
        //document.getElementsByName('tableCod')[11].innerHTML = "Code";
        
        
		document.getElementsByName('tableDesc')[0].innerHTML = "Description";
        document.getElementsByName('tableDesc')[1].innerHTML = "Description";
        document.getElementsByName('tableDesc')[2].innerHTML = "Description";
        document.getElementsByName('tableDesc')[3].innerHTML = "Description";
        document.getElementsByName('tableDesc')[4].innerHTML = "Description";
        document.getElementsByName('tableDesc')[5].innerHTML = "Description";
        document.getElementsByName('tableDesc')[6].innerHTML = "Description";
        document.getElementsByName('tableDesc')[7].innerHTML = "Description";
        document.getElementsByName('tableDesc')[8].innerHTML = "Description";
        document.getElementsByName('tableDesc')[9].innerHTML = "Description";
        document.getElementsByName('tableDesc')[10].innerHTML = "Description";
        document.getElementsByName('tableDesc')[11].innerHTML = "Description";
        
		document.getElementsByName('tableUnit')[0].innerHTML = "Units/Package";
        document.getElementsByName('tableUnit')[1].innerHTML = "Units/Package";
        document.getElementsByName('tableUnit')[2].innerHTML = "Units/Package";
        document.getElementsByName('tableUnit')[3].innerHTML = "Units/Package";
        document.getElementsByName('tableUnit')[4].innerHTML = "Units/Package";
        document.getElementsByName('tableUnit')[5].innerHTML = "Units/Package";
        document.getElementsByName('tableUnit')[6].innerHTML = "Units/Package";
        document.getElementsByName('tableUnit')[7].innerHTML = "Units/Package";
        document.getElementsByName('tableUnit')[8].innerHTML = "Units/Package";
        document.getElementsByName('tableUnit')[9].innerHTML = "Units/Package";
        document.getElementsByName('tableUnit')[10].innerHTML = "Units/Package";
        document.getElementsByName('tableUnit')[11].innerHTML = "Units/Package";
        
        document.getElementsByName('tableMed')[0].innerHTML = "Meassure";
        
        document.getElementById('angoraTitle').innerHTML = "Angorá";
        document.getElementById('rightTitleAng').innerHTML = "Angorá";
        
        document.getElementById('tecDescAng').innerHTML = "100% Pure Wool";
        document.getElementById('altDescAng').innerHTML = " 4,5 mm ";
        document.getElementById('corDescAng').innerHTML = "Beige";
		document.getElementById('spAppDescAng').innerHTML = "Enamels and synthetic varnishes on smooth surfaces such as wood and metals.";
        
        
        document.getElementById('antigotaTitle').innerHTML = "Antigota";
		document.getElementById('rightTitleAnt').innerHTML = "Antigota";
        
        document.getElementById('tecDescAnt').innerHTML = "100% Polyamide";
        document.getElementById('altDescAnt').innerHTML = " 12 mm ";
        document.getElementById('corDescAnt').innerHTML = "White and yellow stripe.";
		document.getElementById('spAppDescAnt').innerHTML = "water based paints on smooth surfaces, walls and ceilings. Strong absorption power, good finish and solvent resistant.";
        
        document.getElementById('antigotaVTitle').innerHTML = "Antigota Verde";
		document.getElementById('rightTitleAntV').innerHTML = "Antigota Verde";
        
        document.getElementById('tecDescAntV').innerHTML = "100% Polyamide";
        document.getElementById('altDescAntV').innerHTML = " 12 mm ";
        document.getElementById('corDescAntV').innerHTML = "White and double yellow/green stripe";
        document.getElementById('spAppDescAntV').innerHTML = "Water based paints on smooth surfaces, walls and ceilings. Strong absorption power, good finish and solvent resistant.";
        
		
        
        document.getElementById('cromadoTitle').innerHTML = "Cromado";
		document.getElementById('rightTitleCro').innerHTML = "Cromado";
        
        document.getElementById('tecDescCro').innerHTML = "100% Polyester";
        document.getElementById('altDescCro').innerHTML = " 24 mm ";
        document.getElementById('corDescCro').innerHTML = "White";
        document.getElementById('spAppDescCro').innerHTML = "Water based paints on facades and walls.";
        
        document.getElementById('espumaTitle').innerHTML = "Espuma";
		document.getElementById('rightTitleEsp').innerHTML = "Espuma";
        
        document.getElementById('tecDescEsp').innerHTML = "Espuma Polyester";
        document.getElementById('altDescEsp').innerHTML = "  ";
        document.getElementById('corDescEsp').innerHTML = "White";
        document.getElementById('spAppDescEsp').innerHTML = "Water based paints and varnishes on small smooth surfaces (corners).";
        
        document.getElementById('juniorTitle').innerHTML = "Júnior";
		document.getElementById('rightTitleJun').innerHTML = "Júnior";
        
        document.getElementById('tecDescJun').innerHTML = "100% Polyester";
        document.getElementById('altDescJun').innerHTML = " 14 mm ";
        document.getElementById('corDescJun').innerHTML = "White";
        document.getElementById('spAppDescJun').innerHTML = "Water based paints on smooth surfaces. Allows a good finish and is solvent resistant.";
        
        document.getElementById('microfibraTitle').innerHTML = "Microfibra";
		document.getElementById('rightTitleMic').innerHTML = "Micofibra";
        
        document.getElementById('tecDescMic').innerHTML = "100% Polyamide";
        document.getElementById('altDescMic').innerHTML = " 10 mm ";
        document.getElementById('corDescMic').innerHTML = "White and double brown stripes";
        document.getElementById('spAppDescMic').innerHTML = " Water based paints on smooth surfaces. Excellent coverage and finishing. Is solvent resistant.";
        
        

        
        document.getElementById('ravelTitle').innerHTML = "Ravel";
		document.getElementById('rightTitleRav').innerHTML = "Ravel";
        
        document.getElementById('tecDescRav').innerHTML = "100% Polyester";
        document.getElementById('altDescRav').innerHTML = " 18 mm ";
        document.getElementById('corDescRav').innerHTML = "Green";
        document.getElementById('spAppDescRav').innerHTML = "Water based paints on large smooth or sanded sufaces (facades)";
        
        
        document.getElementById('rugoTitle').innerHTML = "Rugo";
		document.getElementById('rightTitleRug').innerHTML = "Rugo";
        
        document.getElementById('tecDescRug').innerHTML = "Espuma Polyester";
        document.getElementById('altDescRug').innerHTML = "";
        document.getElementById('corDescRug').innerHTML = "Yellow";
        document.getElementById('spAppDescRug').innerHTML = "Textured or sanded paints on walls and facades. Used for decorative effects.";
        
        
        document.getElementById('superTitle').innerHTML = "Super";
		document.getElementById('rightTitleSup').innerHTML = "Super";
        
        document.getElementById('tecDescSup').innerHTML = "100% Polyester";
        document.getElementById('altDescSup').innerHTML = " 16 mm ";
        document.getElementById('corDescSup').innerHTML = "Orange";
        document.getElementById('spAppDescSup').innerHTML = " Water based paints on sanded walls. Allows a good coverage. ";
        
        
        
        document.getElementById('merinoTitle').innerHTML = "Merino";
		document.getElementById('rightTitleMer').innerHTML = "Merino";
        
        document.getElementById('tecDescMer').innerHTML = " 100% Carded Wool";
        document.getElementById('altDescMer').innerHTML = " 25 mm ";
        document.getElementById('corDescMer').innerHTML = "White";
        document.getElementById('spAppDescMer').innerHTML = "Smooth or sanded plastic paints on all types of surfaces. Excellents absorption, coverage and finishing. Is solvent resistant.";
		
        
        document.getElementById('accesoriosTitle').innerHTML = "Accessories";
		document.getElementById('rightTitleAce').innerHTML = "Accessories";
        
        document.getElementById('accArmacoesN').innerHTML = "Handles";
		document.getElementById('accTabuleirosN').innerHTML = "Paint Trays";
		document.getElementById('accBetumadeiraN').innerHTML = "Scrapers";
		document.getElementById('accBaldeN').innerHTML = "Paint Buckets";
		document.getElementById('accCoberturasN').innerHTML = "Plastic Drops";
        
		 $('#catalogo').attr({target: '_blank', 
                    href  : 'http://www.rolpin.pt//catalogo/Catalogo_PT.pdf'});
        
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
			document.getElementById("ul1li1tr1td1").innerHTML ='0064';
			document.getElementById("ul1li1tr1td2").innerHTML = 'Roller Angorá 60 mm';
			document.getElementById("ul1li1tr1td3").innerHTML = '45';
            document.getElementById("ul1li1tr1td4").innerHTML = '24'
			
            document.getElementById("ul1li1tr2").style.display = 'table-row';
			document.getElementById("ul1li1tr2td1").innerHTML = '0258';
			document.getElementById("ul1li1tr2td2").innerHTML = 'Roller Angorá 120 mm';
			document.getElementById("ul1li1tr2td3").innerHTML = '45';
            document.getElementById("ul1li1tr2td4").innerHTML = '30'
			
            document.getElementById("ul1li1tr3").style.display = 'table-row';
			document.getElementById("ul1li1tr3td1").innerHTML = '0065';
			document.getElementById("ul1li1tr3td2").innerHTML = 'Roller Angorá 150 mm';
			document.getElementById("ul1li1tr3td3").innerHTML = '45';
            document.getElementById("ul1li1tr3td4").innerHTML = '70'
            
            document.getElementById("ul1li1tr4").style.display = 'table-row';
			document.getElementById("ul1li1tr4td1").innerHTML = '0066';
			document.getElementById("ul1li1tr4td2").innerHTML = 'Roller Angorá 180 mm';
			document.getElementById("ul1li1tr4td3").innerHTML = '45';
            document.getElementById("ul1li1tr4td4").innerHTML = '60'
            
            document.getElementById("ul1li1tr5").style.display = 'table-row';
			document.getElementById("ul1li1tr5td1").innerHTML = '0067';
			document.getElementById("ul1li1tr5td2").innerHTML = 'Roller Angorá 220 mm';
			document.getElementById("ul1li1tr5td3").innerHTML = '45';
            document.getElementById("ul1li1tr5td4").innerHTML = '55'
            
            document.getElementById("ul1li1tr6").style.display = 'table-row';
            document.getElementById("ul1li1tr6td1").innerHTML = '0068';
			document.getElementById("ul1li1tr6td2").innerHTML = 'Roller Angorá 250 mm';
			document.getElementById("ul1li1tr6td3").innerHTML = '45';
            document.getElementById("ul1li1tr6td4").innerHTML = '50';
            
			
            document.getElementById("ul1li1tr7").style.display = 'none';
            document.getElementById("ul1li1tr7td1").innerHTML = '';
			document.getElementById("ul1li1tr7td2").innerHTML = '';
			document.getElementById("ul1li1tr7td3").innerHTML = '';
            document.getElementById("ul1li1tr7td4").innerHTML = '';
            
            
            document.getElementById("ul1li1tr8").style.display = 'none';
			document.getElementById("ul1li1tr8td1").innerHTML = '';
			document.getElementById("ul1li1tr8td2").innerHTML = '';
			document.getElementById("ul1li1tr8td3").innerHTML = '';
            document.getElementById("ul1li1tr8td4").innerHTML = '';
            
            document.getElementById("ul1li1tr9").style.display = 'none';
			document.getElementById("ul1li1tr9td1").innerHTML = '';
			document.getElementById("ul1li1tr9td2").innerHTML = '';
			document.getElementById("ul1li1tr9td3").innerHTML = '';
            document.getElementById("ul1li1tr9td4").innerHTML = '';
            
            document.getElementById("ul1li1tr10").style.display = 'none';
            document.getElementById("ul1li1tr10td1").innerHTML = '';
			document.getElementById("ul1li1tr10td2").innerHTML = '';
			document.getElementById("ul1li1tr10td3").innerHTML = '';
            document.getElementById("ul1li1tr10td4").innerHTML = '';
            
            document.getElementById("ul1li1tr11").style.display = 'none';
            document.getElementById("ul1li1tr11td1").innerHTML = '';
			document.getElementById("ul1li1tr11td2").innerHTML = '';
			document.getElementById("ul1li1tr11td3").innerHTML = '';
            document.getElementById("ul1li1tr11td4").innerHTML = '';
            
            document.getElementById("ul1li1tr12").style.display = 'none';
            document.getElementById("ul1li1tr12td1").innerHTML = '';
			document.getElementById("ul1li1tr12td2").innerHTML = '';
			document.getElementById("ul1li1tr12td3").innerHTML = '';
            document.getElementById("ul1li1tr12td4").innerHTML = '';
            
            document.getElementById("ul1li1tr13").style.display = 'none';
            document.getElementById("ul1li1tr13td1").innerHTML = '';
			document.getElementById("ul1li1tr13td2").innerHTML = '';
			document.getElementById("ul1li1tr13td3").innerHTML = '';
            document.getElementById("ul1li1tr13td4").innerHTML = '';
            
            document.getElementById("ul1li1tr14").style.display = 'none';
            document.getElementById("ul1li1tr14td1").innerHTML = '';
			document.getElementById("ul1li1tr14td2").innerHTML = '';
			document.getElementById("ul1li1tr14td3").innerHTML = '';
            document.getElementById("ul1li1tr14td4").innerHTML = '';
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
			document.getElementById("ul1li1tr1td1").innerHTML ='0021';
			document.getElementById("ul1li1tr1td2").innerHTML = 'Refill Angorá 60 mm';
			document.getElementById("ul1li1tr1td3").innerHTML = '45';
            document.getElementById("ul1li1tr1td4").innerHTML = '250';
		
            document.getElementById("ul1li1tr2").style.display = 'table-row';
			document.getElementById("ul1li1tr2td1").innerHTML = '0259';
			document.getElementById("ul1li1tr2td2").innerHTML = 'Refill Angorá 120 mm';
			document.getElementById("ul1li1tr2td3").innerHTML = '45';
            document.getElementById("ul1li1tr2td4").innerHTML = '';
		
            document.getElementById("ul1li1tr3").style.display = 'table-row';
			document.getElementById("ul1li1tr3td1").innerHTML = '0022';
			document.getElementById("ul1li1tr3td2").innerHTML = 'Refill Angorá 150 mm';
			document.getElementById("ul1li1tr3td3").innerHTML = '45';
            document.getElementById("ul1li1tr3td4").innerHTML = '';

            document.getElementById("ul1li1tr4").style.display = 'table-row';
			document.getElementById("ul1li1tr4td1").innerHTML = '0023';
			document.getElementById("ul1li1tr4td2").innerHTML = 'Refill Angorá 180 mm';
			document.getElementById("ul1li1tr4td3").innerHTML = '45';
            document.getElementById("ul1li1tr4td4").innerHTML = '160';

            document.getElementById("ul1li1tr5").style.display = 'table-row';
			document.getElementById("ul1li1tr5td1").innerHTML = '0024';
			document.getElementById("ul1li1tr5td2").innerHTML = 'Refill Angorá 220 mm';
			document.getElementById("ul1li1tr5td3").innerHTML = '45';
            document.getElementById("ul1li1tr5td4").innerHTML = '140';

            document.getElementById("ul1li1tr6").style.display = 'table-row';
            document.getElementById("ul1li1tr6td1").innerHTML = '0025';
			document.getElementById("ul1li1tr6td2").innerHTML = 'Refill Angorá 250 mm';
			document.getElementById("ul1li1tr6td3").innerHTML = '45';
			document.getElementById("ul1li1tr6td4").innerHTML = '120';	  
			
            document.getElementById("ul1li1tr7").style.display = 'none';
			document.getElementById("ul1li1tr7td1").innerHTML = '';
			document.getElementById("ul1li1tr7td2").innerHTML = '';
			document.getElementById("ul1li1tr7td3").innerHTML = '';
			document.getElementById("ul1li1tr7td4").innerHTML = '';
			
            document.getElementById("ul1li1tr8").style.display = 'none';
			document.getElementById("ul1li1tr8td1").innerHTML = '';
			document.getElementById("ul1li1tr8td2").innerHTML = '';
			document.getElementById("ul1li1tr8td3").innerHTML = '';
			document.getElementById("ul1li1tr8td4").innerHTML = '';
			
            document.getElementById("ul1li1tr9").style.display = 'none';
			document.getElementById("ul1li1tr9td1").innerHTML = '';
			document.getElementById("ul1li1tr9td2").innerHTML = '';
			document.getElementById("ul1li1tr9td3").innerHTML = '';
			document.getElementById("ul1li1tr9td4").innerHTML = '';
            
            document.getElementById("ul1li1tr10").style.display = 'none';
            document.getElementById("ul1li1tr10td1").innerHTML = '';
			document.getElementById("ul1li1tr10td2").innerHTML = '';
			document.getElementById("ul1li1tr10td3").innerHTML = '';
            document.getElementById("ul1li1tr10td4").innerHTML = '';
            
            document.getElementById("ul1li1tr11").style.display = 'none';
            document.getElementById("ul1li1tr11td1").innerHTML = '';
			document.getElementById("ul1li1tr11td2").innerHTML = '';
			document.getElementById("ul1li1tr11td3").innerHTML = '';
            document.getElementById("ul1li1tr11td4").innerHTML = '';
            
            document.getElementById("ul1li1tr12").style.display = 'none';
            document.getElementById("ul1li1tr12td1").innerHTML = '';
			document.getElementById("ul1li1tr12td2").innerHTML = '';
			document.getElementById("ul1li1tr12td3").innerHTML = '';
            document.getElementById("ul1li1tr12td4").innerHTML = '';
            
            document.getElementById("ul1li1tr13").style.display = 'none';
            document.getElementById("ul1li1tr13td1").innerHTML = '';
			document.getElementById("ul1li1tr13td2").innerHTML = '';
			document.getElementById("ul1li1tr13td3").innerHTML = '';
            document.getElementById("ul1li1tr13td4").innerHTML = '';
            
            document.getElementById("ul1li1tr14").style.display = 'none';
            document.getElementById("ul1li1tr14td1").innerHTML = '';
			document.getElementById("ul1li1tr14td2").innerHTML = '';
			document.getElementById("ul1li1tr14td3").innerHTML = '';
            document.getElementById("ul1li1tr14td4").innerHTML = '';
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
			document.getElementById("ul1li1tr1td1").innerHTML = '0173';
			document.getElementById("ul1li1tr1td2").innerHTML = 'Mini Angorá 60 mm';
			document.getElementById("ul1li1tr1td3").innerHTML = '16';
	        document.getElementById("ul1li1tr1td4").innerHTML = '100';
           
            document.getElementById("ul1li1tr2").style.display = 'table-row';
			document.getElementById("ul1li1tr2td1").innerHTML = '0174';
			document.getElementById("ul1li1tr2td2").innerHTML = 'Mini Angorá 100 mm';
			document.getElementById("ul1li1tr2td3").innerHTML = '16';
            document.getElementById("ul1li1tr2td4").innerHTML = '80';

            document.getElementById("ul1li1tr3").style.display = 'table-row';
			document.getElementById("ul1li1tr3td1").innerHTML = '0175';
			document.getElementById("ul1li1tr3td2").innerHTML = 'Mini Angorá 150 mm';
			document.getElementById("ul1li1tr3td3").innerHTML = '16';
            document.getElementById("ul1li1tr3td4").innerHTML = '';

            document.getElementById("ul1li1tr4").style.display = 'table-row';
			document.getElementById("ul1li1tr4td1").innerHTML = '0253';
			document.getElementById("ul1li1tr4td2").innerHTML = 'Midi Angorá 120 mm';
			document.getElementById("ul1li1tr4td3").innerHTML = '30';
            document.getElementById("ul1li1tr4td4").innerHTML = '';
			
            document.getElementById("ul1li1tr5").style.display = 'table-row';
			document.getElementById("ul1li1tr5td1").innerHTML = '0254';
			document.getElementById("ul1li1tr5td2").innerHTML = 'Midi Angorá 150 mm';
			document.getElementById("ul1li1tr5td3").innerHTML = '30';
            document.getElementById("ul1li1tr5td4").innerHTML = '';
			
            document.getElementById("ul1li1tr6").style.display = 'none';
            document.getElementById("ul1li1tr6td1").innerHTML = '';
			document.getElementById("ul1li1tr6td2").innerHTML = '';
			document.getElementById("ul1li1tr6td3").innerHTML = '';
            document.getElementById("ul1li1tr6td4").innerHTML = '';
			
            document.getElementById("ul1li1tr7").style.display = 'none';
        	document.getElementById("ul1li1tr7td1").innerHTML = '';
			document.getElementById("ul1li1tr7td2").innerHTML = '';
			document.getElementById("ul1li1tr7td3").innerHTML = '';
			document.getElementById("ul1li1tr7td4").innerHTML = '';

            document.getElementById("ul1li1tr8").style.display = 'none';
			document.getElementById("ul1li1tr8td1").innerHTML = '';
			document.getElementById("ul1li1tr8td2").innerHTML = '';
			document.getElementById("ul1li1tr8td3").innerHTML = '';
			document.getElementById("ul1li1tr8td4").innerHTML = '';

            document.getElementById("ul1li1tr9").style.display = 'none';
			document.getElementById("ul1li1tr9td1").innerHTML = '';
			document.getElementById("ul1li1tr9td2").innerHTML = '';
			document.getElementById("ul1li1tr9td3").innerHTML = '';
			document.getElementById("ul1li1tr9td4").innerHTML = '';
            
            document.getElementById("ul1li1tr10").style.display = 'none';
            document.getElementById("ul1li1tr10td1").innerHTML = '';
			document.getElementById("ul1li1tr10td2").innerHTML = '';
			document.getElementById("ul1li1tr10td3").innerHTML = '';
            document.getElementById("ul1li1tr10td4").innerHTML = '';
            
            document.getElementById("ul1li1tr11").style.display = 'none';
            document.getElementById("ul1li1tr11td1").innerHTML = '';
			document.getElementById("ul1li1tr11td2").innerHTML = '';
			document.getElementById("ul1li1tr11td3").innerHTML = '';
            document.getElementById("ul1li1tr11td4").innerHTML = '';
            
            document.getElementById("ul1li1tr12").style.display = 'none';
            document.getElementById("ul1li1tr12td1").innerHTML = '';
			document.getElementById("ul1li1tr12td2").innerHTML = '';
			document.getElementById("ul1li1tr12td3").innerHTML = '';
            document.getElementById("ul1li1tr12td4").innerHTML = '';
            
            document.getElementById("ul1li1tr13").style.display = 'none';
            document.getElementById("ul1li1tr13td1").innerHTML = '';
			document.getElementById("ul1li1tr13td2").innerHTML = '';
			document.getElementById("ul1li1tr13td3").innerHTML = '';
            document.getElementById("ul1li1tr13td4").innerHTML = '';
            
            document.getElementById("ul1li1tr14").style.display = 'none';
            document.getElementById("ul1li1tr14td1").innerHTML = '';
			document.getElementById("ul1li1tr14td2").innerHTML = '';
			document.getElementById("ul1li1tr14td3").innerHTML = '';
            document.getElementById("ul1li1tr14td4").innerHTML = '';
            
			
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
			document.getElementById("ul1li1tr1td1").innerHTML = '0088';
			document.getElementById("ul1li1tr1td2").innerHTML = 'Refill Angorá 60 mm';
			document.getElementById("ul1li1tr1td3").innerHTML = '16';
	        document.getElementById("ul1li1tr1td4").innerHTML = '';
            
            document.getElementById("ul1li1tr2").style.display = 'table-row';
			document.getElementById("ul1li1tr2td1").innerHTML = '0089';
			document.getElementById("ul1li1tr2td2").innerHTML = 'Refill Angorá 100 mm';
			document.getElementById("ul1li1tr2td3").innerHTML = '16';
            document.getElementById("ul1li1tr2td4").innerHTML = '400';

            document.getElementById("ul1li1tr3").style.display = 'table-row';
			document.getElementById("ul1li1tr3td1").innerHTML = '0255';
			document.getElementById("ul1li1tr3td2").innerHTML = 'Refill Angorá 150 mm';
            document.getElementById("ul1li1tr3td3").innerHTML = '16';
            document.getElementById("ul1li1tr3td4").innerHTML = '';

            document.getElementById("ul1li1tr4").style.display = 'table-row';
			document.getElementById("ul1li1tr4td1").innerHTML = '0177';
			document.getElementById("ul1li1tr4td2").innerHTML = 'Pack 2 Refills Angorá  60 mm';
			document.getElementById("ul1li1tr4td3").innerHTML = '16';
            document.getElementById("ul1li1tr4td4").innerHTML = '';

            document.getElementById("ul1li1tr5").style.display = 'table-row';
			document.getElementById("ul1li1tr5td1").innerHTML = '0091';
			document.getElementById("ul1li1tr5td2").innerHTML = 'Pack 2 Refills Angorá 100 mm';
			document.getElementById("ul1li1tr5td3").innerHTML = '16';
            document.getElementById("ul1li1tr5td4").innerHTML = '200X2';
	
            document.getElementById("ul1li1tr6").style.display = 'table-row';
			document.getElementById("ul1li1tr6td1").innerHTML = '0179';
			document.getElementById("ul1li1tr6td2").innerHTML = 'Pack 2 Refills Angorá 150 mm';
			document.getElementById("ul1li1tr6td3").innerHTML = '16'; 
            document.getElementById("ul1li1tr6td4").innerHTML = '';

            document.getElementById("ul1li1tr7").style.display = 'table-row';
			document.getElementById("ul1li1tr7td1").innerHTML = '0256';
			document.getElementById("ul1li1tr7td2").innerHTML = 'Blister 16 Refills Angorá 60 mm';
			document.getElementById("ul1li1tr7td3").innerHTML = '16';
            document.getElementById("ul1li1tr7td4").innerHTML = '36X16';
            
            document.getElementById("ul1li1tr8").style.display = 'table-row';
            document.getElementById("ul1li1tr8td1").innerHTML = '0090';
			document.getElementById("ul1li1tr8td2").innerHTML = 'Blister 10 Refills Angorá 100 mm';
			document.getElementById("ul1li1tr8td3").innerHTML = '16';
            document.getElementById("ul1li1tr8td4").innerHTML = '36X10';

            document.getElementById("ul1li1tr9").style.display = 'table-row';
			document.getElementById("ul1li1tr9td1").innerHTML = '0201';
			document.getElementById("ul1li1tr9td2").innerHTML = 'Refill Angorá 120 mm';
			document.getElementById("ul1li1tr9td3").innerHTML = '30';
            document.getElementById("ul1li1tr9td4").innerHTML = '';

            document.getElementById("ul1li1tr10").style.display = 'table-row';
			document.getElementById("ul1li1tr10td1").innerHTML = '0202';
			document.getElementById("ul1li1tr10td2").innerHTML = 'Refill Angorá 150 mm';
			document.getElementById("ul1li1tr10td3").innerHTML = '30';
            document.getElementById("ul1li1tr10td4").innerHTML = '';

            document.getElementById("ul1li1tr11").style.display = 'table-row';
            document.getElementById("ul1li1tr11td1").innerHTML = '0205';
			document.getElementById("ul1li1tr11td2").innerHTML = 'Pack 2 Refills Angorá 120 mm';
			document.getElementById("ul1li1tr11td3").innerHTML = '30';
            document.getElementById("ul1li1tr11td4").innerHTML = '';
            
            document.getElementById("ul1li1tr12").style.display = 'table-row';
            document.getElementById("ul1li1tr12td1").innerHTML = '0206';
			document.getElementById("ul1li1tr12td2").innerHTML = 'Pack 2 Refills Angorá 150 mm';
			document.getElementById("ul1li1tr12td3").innerHTML = '30';
            document.getElementById("ul1li1tr12td4").innerHTML = '';
            
            document.getElementById("ul1li1tr13").style.display = 'table-row';
            document.getElementById("ul1li1tr13td1").innerHTML = '0203';
			document.getElementById("ul1li1tr13td2").innerHTML = 'Blister 10 Refills Angorá 120 mm';
			document.getElementById("ul1li1tr13td3").innerHTML = '30';
            document.getElementById("ul1li1tr13td4").innerHTML = '';
            
            document.getElementById("ul1li1tr14").style.display = 'table-row';
            document.getElementById("ul1li1tr14td1").innerHTML = '0204';
			document.getElementById("ul1li1tr14td2").innerHTML = 'Blister 6 Refills Angorá 150 mm';
			document.getElementById("ul1li1tr14td3").innerHTML = '30';
            document.getElementById("ul1li1tr14td4").innerHTML = '';
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
            document.getElementById("ul1li2tr1td1").innerHTML = '0299';
			document.getElementById("ul1li2tr1td2").innerHTML = 'Roller Antigota 60 mm';
			document.getElementById("ul1li2tr1td3").innerHTML = '45';
			document.getElementById("ul1li2tr1td4").innerHTML = '24';
			
            
            document.getElementById("ul1li2tr2").style.display = 'table-row';
			document.getElementById("ul1li2tr2td1").innerHTML = '0058';
			document.getElementById("ul1li2tr2td2").innerHTML = 'Roller Antigota 180 mm';
			document.getElementById("ul1li2tr2td3").innerHTML = '45';
			document.getElementById("ul1li2tr2td4").innerHTML = '60';

            document.getElementById("ul1li2tr3").style.display = 'table-row';
			document.getElementById("ul1li2tr3td1").innerHTML = '0059';
			document.getElementById("ul1li2tr3td2").innerHTML = 'Roller Antigota 220 mm';
			document.getElementById("ul1li2tr3td3").innerHTML = '45';
			document.getElementById("ul1li2tr3td4").innerHTML = '55';
			
            document.getElementById("ul1li2tr4").style.display = 'table-row';
			document.getElementById("ul1li2tr4td1").innerHTML = '0060';
			document.getElementById("ul1li2tr4td2").innerHTML = 'Roller Antigota 250 mm';
			document.getElementById("ul1li2tr4td3").innerHTML = '45';
			document.getElementById("ul1li2tr4td4").innerHTML = '50';
		
            document.getElementById("ul1li2tr5").style.display = 'table-row';
			document.getElementById("ul1li2tr5td1").innerHTML = '0143';
			document.getElementById("ul1li2tr5td2").innerHTML = 'Roller Antigota 180 mm';
			document.getElementById("ul1li2tr5td3").innerHTML = '50';
			document.getElementById("ul1li2tr5td4").innerHTML = '55';
			
            document.getElementById("ul1li2tr6").style.display = 'table-row';
			document.getElementById("ul1li2tr6td1").innerHTML = '0144';
			document.getElementById("ul1li2tr6td2").innerHTML = 'Roller Antigota 220 mm';
			document.getElementById("ul1li2tr6td3").innerHTML = '50';
			document.getElementById("ul1li2tr6td4").innerHTML = '50';
			
            document.getElementById("ul1li2tr7").style.display = 'table-row';
			document.getElementById("ul1li2tr7td1").innerHTML = '0145';
			document.getElementById("ul1li2tr7td2").innerHTML = 'Roller Antigota 250 mm';
			document.getElementById("ul1li2tr7td3").innerHTML = '50';
			document.getElementById("ul1li2tr7td4").innerHTML = '45';

            
			
            document.getElementById("ul1li2tr8").style.display = 'none';
			document.getElementById("ul1li2tr8td1").innerHTML = '';
			document.getElementById("ul1li2tr8td2").innerHTML = '';
			document.getElementById("ul1li2tr8td3").innerHTML = '';
			document.getElementById("ul1li2tr8td4").innerHTML = '';
            
            document.getElementById("ul1li2tr9").style.display = 'none';
            document.getElementById("ul1li2tr9td1").innerHTML = '';
			document.getElementById("ul1li2tr9td2").innerHTML = '';
			document.getElementById("ul1li2tr9td3").innerHTML = '';
			document.getElementById("ul1li2tr9td4").innerHTML = '';
			
            document.getElementById("ul1li2tr10").style.display = 'none';
			document.getElementById("ul1li2tr10td1").innerHTML = '';
			document.getElementById("ul1li2tr10td2").innerHTML = '';
			document.getElementById("ul1li2tr10td3").innerHTML = '';
			document.getElementById("ul1li2tr10td4").innerHTML = '';
            
            document.getElementById("ul1li2tr11").style.display = 'none';
            document.getElementById("ul1li2tr11td1").innerHTML = '';
			document.getElementById("ul1li2tr11td2").innerHTML = '';
			document.getElementById("ul1li2tr11td3").innerHTML = '';
			document.getElementById("ul1li2tr11td4").innerHTML = '';
            
            document.getElementById("ul1li2tr12").style.display = 'none';
            document.getElementById("ul1li2tr12td1").innerHTML = '';
			document.getElementById("ul1li2tr12td2").innerHTML = '';
			document.getElementById("ul1li2tr12td3").innerHTML = '';
			document.getElementById("ul1li2tr12td4").innerHTML = '';
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
            document.getElementById("ul1li2tr1td1").innerHTML = '0298';
			document.getElementById("ul1li2tr1td2").innerHTML = 'Refill Antigota 60 mm';
			document.getElementById("ul1li2tr1td3").innerHTML = '45';
			document.getElementById("ul1li2tr1td4").innerHTML = '250';
            
            document.getElementById("ul1li2tr2").style.display = 'table-row';
			document.getElementById("ul1li2tr2td1").innerHTML = '0015';
			document.getElementById("ul1li2tr2td2").innerHTML = 'Refill Antigota 180 mm';
			document.getElementById("ul1li2tr2td3").innerHTML = '45';
	     	document.getElementById("ul1li2tr2td4").innerHTML = '140';
			
            document.getElementById("ul1li2tr3").style.display = 'table-row';
			document.getElementById("ul1li2tr3td1").innerHTML = '0016';
			document.getElementById("ul1li2tr3td2").innerHTML = 'Refill Antigota 220 mm';
			document.getElementById("ul1li2tr3td3").innerHTML = '45';
		    document.getElementById("ul1li2tr3td4").innerHTML = '120';
			
            document.getElementById("ul1li2tr4").style.display = 'table-row';
			document.getElementById("ul1li2tr4td1").innerHTML = '0017';
			document.getElementById("ul1li2tr4td2").innerHTML = 'Refill Antigota 250 mm';
			document.getElementById("ul1li2tr4td3").innerHTML = '45';
			document.getElementById("ul1li2tr4td4").innerHTML = '100';

            document.getElementById("ul1li2tr5").style.display = 'table-row';
			document.getElementById("ul1li2tr5td1").innerHTML = '0125';
			document.getElementById("ul1li2tr5td2").innerHTML = 'Refill Antigota 180 mm';
			document.getElementById("ul1li2tr5td3").innerHTML = '50';
			document.getElementById("ul1li2tr5td4").innerHTML = '100';
	
            document.getElementById("ul1li2tr6").style.display = 'table-row';
			document.getElementById("ul1li2tr6td1").innerHTML = '0126';
			document.getElementById("ul1li2tr6td2").innerHTML = 'Refill Antigota 220 mm';
			document.getElementById("ul1li2tr6td3").innerHTML = '50';
			document.getElementById("ul1li2tr6td4").innerHTML = '90';
	
            document.getElementById("ul1li2tr7").style.display = 'table-row';
		    document.getElementById("ul1li2tr7td1").innerHTML = '0127';
			document.getElementById("ul1li2tr7td2").innerHTML = 'Refill Antigota 250 mm';
			document.getElementById("ul1li2tr7td3").innerHTML = '50';
			document.getElementById("ul1li2tr7td4").innerHTML = '70';
	
			document.getElementById("ul1li2tr8").style.display = 'none';
			document.getElementById("ul1li2tr8td1").innerHTML = '';
			document.getElementById("ul1li2tr8td2").innerHTML = '';
			document.getElementById("ul1li2tr8td3").innerHTML = '';
			document.getElementById("ul1li2tr8td4").innerHTML = '';
					
            document.getElementById("ul1li2tr9").style.display = 'none';
			document.getElementById("ul1li2tr9td1").innerHTML = '';
			document.getElementById("ul1li2tr9td2").innerHTML = '';
			document.getElementById("ul1li2tr9td3").innerHTML = '';
			document.getElementById("ul1li2tr9td4").innerHTML = '';
			
            document.getElementById("ul1li2tr10").style.display = 'none';
			document.getElementById("ul1li2tr10td1").innerHTML = '';
			document.getElementById("ul1li2tr10td2").innerHTML = '';
			document.getElementById("ul1li2tr10td3").innerHTML = '';
			document.getElementById("ul1li2tr10td4").innerHTML = '';
            
            document.getElementById("ul1li2tr11").style.display = 'none';
            document.getElementById("ul1li2tr11td1").innerHTML = '';
			document.getElementById("ul1li2tr11td2").innerHTML = '';
			document.getElementById("ul1li2tr11td3").innerHTML = '';
			document.getElementById("ul1li2tr11td4").innerHTML = '';
            
            document.getElementById("ul1li2tr12").style.display = 'none';
            document.getElementById("ul1li2tr12td1").innerHTML = '';
			document.getElementById("ul1li2tr12td2").innerHTML = '';
			document.getElementById("ul1li2tr12td3").innerHTML = '';
			document.getElementById("ul1li2tr12td4").innerHTML = '';
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
			document.getElementById("ul1li2tr1td1").innerHTML = '0180';
			document.getElementById("ul1li2tr1td2").innerHTML = 'Mini Antigota 60 mm';
			document.getElementById("ul1li2tr1td3").innerHTML = '16';
			document.getElementById("ul1li2tr1td4").innerHTML = '100';
		
            document.getElementById("ul1li2tr2").style.display = 'table-row';
			document.getElementById("ul1li2tr2td1").innerHTML = '0181';
			document.getElementById("ul1li2tr2td2").innerHTML = 'Mini Antigota 100 mm';
			document.getElementById("ul1li2tr2td3").innerHTML = '16';
			document.getElementById("ul1li2tr2td4").innerHTML = '80';
	
            document.getElementById("ul1li2tr3").style.display = 'table-row';
			document.getElementById("ul1li2tr3td1").innerHTML = '0182';
			document.getElementById("ul1li2tr3td2").innerHTML = 'Mini Antigota 150 mm';
			document.getElementById("ul1li2tr3td3").innerHTML = '16';
			document.getElementById("ul1li2tr3td4").innerHTML = '';

            document.getElementById("ul1li2tr4").style.display = 'table-row';
			document.getElementById("ul1li2tr4td1").innerHTML = '0256';
			document.getElementById("ul1li2tr4td2").innerHTML = 'Midi Antigota 120 mm';
			document.getElementById("ul1li2tr4td3").innerHTML = '30';
			document.getElementById("ul1li2tr4td4").innerHTML = '';
	
            document.getElementById("ul1li2tr5").style.display = 'table-row';
            document.getElementById("ul1li2tr5td1").innerHTML = '0257';
			document.getElementById("ul1li2tr5td2").innerHTML = 'Midi Antigota 150 mm';
			document.getElementById("ul1li2tr5td3").innerHTML = '30';
			document.getElementById("ul1li2tr5td4").innerHTML = '';
	
            document.getElementById("ul1li2tr6").style.display = 'none';
			document.getElementById("ul1li2tr6td1").innerHTML = '';
			document.getElementById("ul1li2tr6td2").innerHTML = '';
			document.getElementById("ul1li2tr6td3").innerHTML = '';
			document.getElementById("ul1li2tr6td4").innerHTML = '';

            document.getElementById("ul1li2tr7").style.display = 'none';
			document.getElementById("ul1li2tr7td1").innerHTML = '';
			document.getElementById("ul1li2tr7td2").innerHTML = '';
			document.getElementById("ul1li2tr7td3").innerHTML = '';
			document.getElementById("ul1li2tr7td4").innerHTML = '';
			
            document.getElementById("ul1li2tr8").style.display = 'none';
			document.getElementById("ul1li2tr8td1").innerHTML = '';
			document.getElementById("ul1li2tr8td2").innerHTML = '';
			document.getElementById("ul1li2tr8td3").innerHTML = '';
			document.getElementById("ul1li2tr8td4").innerHTML = '';
            
            document.getElementById("ul1li2tr9").style.display = 'none';
            document.getElementById("ul1li2tr9td1").innerHTML = '';
			document.getElementById("ul1li2tr9td2").innerHTML = '';
			document.getElementById("ul1li2tr9td3").innerHTML = '';
			document.getElementById("ul1li2tr9td4").innerHTML = '';
            
            document.getElementById("ul1li2tr10").style.display = 'none';
		    document.getElementById("ul1li2tr10td1").innerHTML = '';
			document.getElementById("ul1li2tr10td2").innerHTML = '';
			document.getElementById("ul1li2tr10td3").innerHTML = '';
			document.getElementById("ul1li2tr10td4").innerHTML = '';
            
            document.getElementById("ul1li2tr11").style.display = 'none';
            document.getElementById("ul1li2tr11td1").innerHTML = '';
			document.getElementById("ul1li2tr11td2").innerHTML = '';
			document.getElementById("ul1li2tr11td3").innerHTML = '';
			document.getElementById("ul1li2tr11td4").innerHTML = '';
            
            document.getElementById("ul1li2tr12").style.display = 'none';
            document.getElementById("ul1li2tr12td1").innerHTML = '';
			document.getElementById("ul1li2tr12td2").innerHTML = '';
			document.getElementById("ul1li2tr12td3").innerHTML = '';
			document.getElementById("ul1li2tr12td4").innerHTML = '';
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
			document.getElementById("ul1li2tr1td1").innerHTML = '0092';
			document.getElementById("ul1li2tr1td2").innerHTML = 'Refill Antigota 60 mm';
			document.getElementById("ul1li2tr1td3").innerHTML = '16';
			document.getElementById("ul1li2tr1td4").innerHTML = '';
            
            document.getElementById("ul1li2tr2").style.display = 'table-row';
			document.getElementById("ul1li2tr2td1").innerHTML = '0093';
			document.getElementById("ul1li2tr2td2").innerHTML = 'Refill Antigota 100 mm';
			document.getElementById("ul1li2tr2td3").innerHTML = '16';
			document.getElementById("ul1li2tr2td4").innerHTML = '350';

            document.getElementById("ul1li2tr3").style.display = 'table-row';
			document.getElementById("ul1li2tr3td1").innerHTML = '0184';
			document.getElementById("ul1li2tr3td2").innerHTML = 'Pack 2 Refills Antigota 60 mm';
			document.getElementById("ul1li2tr3td3").innerHTML = '16';
			document.getElementById("ul1li2tr3td4").innerHTML = '';

            document.getElementById("ul1li2tr4").style.display = 'table-row';
			document.getElementById("ul1li2tr4td1").innerHTML = '0095';
			document.getElementById("ul1li2tr4td2").innerHTML = 'Pack 2 Refills Antigota 100 mm';
			document.getElementById("ul1li2tr4td3").innerHTML = '16';
			document.getElementById("ul1li2tr4td4").innerHTML = '';
		
            document.getElementById("ul1li2tr5").style.display = 'table-row';
			document.getElementById("ul1li2tr5td1").innerHTML = '0185';
			document.getElementById("ul1li2tr5td2").innerHTML = 'Pack 2 Refills Antigota 150 mm';
			document.getElementById("ul1li2tr5td3").innerHTML = '16';
			document.getElementById("ul1li2tr5td4").innerHTML = '';
			
            document.getElementById("ul1li2tr6").style.display = 'table-row';
			document.getElementById("ul1li2tr6td1").innerHTML = '0094';		
			document.getElementById("ul1li2tr6td2").innerHTML = 'Blister 10 Refills Antigota 100 mm';
			document.getElementById("ul1li2tr6td3").innerHTML = '16';
			document.getElementById("ul1li2tr6td4").innerHTML = '36X10';
		
            document.getElementById("ul1li2tr7").style.display = 'table-row';
			document.getElementById("ul1li2tr7td1").innerHTML = '0257';
			document.getElementById("ul1li2tr7td2").innerHTML = 'Blister 16 Refills Antigota 60 mm';
			document.getElementById("ul1li2tr7td3").innerHTML = '16';
			document.getElementById("ul1li2tr7td4").innerHTML = '36X16';

            document.getElementById("ul1li2tr8").style.display = 'table-row';
			document.getElementById("ul1li2tr8td1").innerHTML = '0207';
			document.getElementById("ul1li2tr8td2").innerHTML = 'Refill Antigota 120 mm';
			document.getElementById("ul1li2tr8td3").innerHTML = '30';
			document.getElementById("ul1li2tr8td4").innerHTML = '';
					
            document.getElementById("ul1li2tr9").style.display = 'table-row';
            document.getElementById("ul1li2tr9td1").innerHTML = '0208';
			document.getElementById("ul1li2tr9td2").innerHTML = 'Refill Antigota 150 mm';
			document.getElementById("ul1li2tr9td3").innerHTML = '30';
			document.getElementById("ul1li2tr9td4").innerHTML = '';
            
            document.getElementById("ul1li2tr10").style.display = 'table-row';
            document.getElementById("ul1li2tr10td1").innerHTML = '0211';
			document.getElementById("ul1li2tr10td2").innerHTML = 'Pack 2 Refills Antigota 120 mm';
			document.getElementById("ul1li2tr10td3").innerHTML = '30';
			document.getElementById("ul1li2tr10td4").innerHTML = '';
            
            document.getElementById("ul1li2tr11").style.display = 'table-row';
            document.getElementById("ul1li2tr11td1").innerHTML = '0209';
			document.getElementById("ul1li2tr11td2").innerHTML = 'Blister 10 Refills Antigota 120 mm';
			document.getElementById("ul1li2tr11td3").innerHTML = '30';
			document.getElementById("ul1li2tr11td4").innerHTML = '';
            
            document.getElementById("ul1li2tr12").style.display = 'table-row';
            document.getElementById("ul1li2tr12td1").innerHTML = '0210';
			document.getElementById("ul1li2tr12td2").innerHTML = 'Blister 6 Refills Antigota 150 mm';
			document.getElementById("ul1li2tr12td3").innerHTML = '30';
			document.getElementById("ul1li2tr12td4").innerHTML = '';
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
            
            document.getElementById("ul1li3tr1").style.display = 'table-row';
			document.getElementById("ul1li3tr1td1").innerHTML = '0061';
			document.getElementById("ul1li3tr1td2").innerHTML = 'Roller Green Antigota 180 mm';
			document.getElementById("ul1li3tr1td3").innerHTML = '45';
			document.getElementById("ul1li3tr1td4").innerHTML = '60';
			
            document.getElementById("ul1li3tr2").style.display = 'table-row';
			document.getElementById("ul1li3tr2td1").innerHTML = '0062';
			document.getElementById("ul1li3tr2td2").innerHTML = 'Roller Green Antigota 220 mm';
			document.getElementById("ul1li3tr2td3").innerHTML = '45';
			document.getElementById("ul1li3tr2td4").innerHTML = '55';
				
            document.getElementById("ul1li3tr3").style.display = 'table-row';
			document.getElementById("ul1li3tr3td1").innerHTML = '0063';
			document.getElementById("ul1li3tr3td2").innerHTML = 'Roller Green Antigota 250 mm';
			document.getElementById("ul1li3tr3td3").innerHTML = '45';
			document.getElementById("ul1li3tr3td4").innerHTML = '50';

            document.getElementById("ul1li3tr4").style.display = 'table-row';
			document.getElementById("ul1li3tr4td1").innerHTML = '0146';
			document.getElementById("ul1li3tr4td2").innerHTML = 'Roller Green Antigota 180 mm';
			document.getElementById("ul1li3tr4td3").innerHTML = '50';
			document.getElementById("ul1li3tr4td4").innerHTML = '55';
		
            document.getElementById("ul1li3tr5").style.display = 'table-row';
			document.getElementById("ul1li3tr5td1").innerHTML = '0147';
			document.getElementById("ul1li3tr5td2").innerHTML = 'Roller Green Antigota 220 mm';
			document.getElementById("ul1li3tr5td3").innerHTML = '50';
			document.getElementById("ul1li3tr5td4").innerHTML = '50';
		
            document.getElementById("ul1li3tr6").style.display = 'table-row';
			document.getElementById("ul1li3tr6td1").innerHTML = '0148';
			document.getElementById("ul1li3tr6td2").innerHTML = 'Roller Green Antigota 250 mm';
			document.getElementById("ul1li3tr6td3").innerHTML = '50';
			document.getElementById("ul1li3tr6td4").innerHTML = '45';
		
            
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
            
            document.getElementById("ul1li3tr1").style.display = 'table-row';
			document.getElementById("ul1li3tr1td1").innerHTML = '0018';
			document.getElementById("ul1li3tr1td2").innerHTML = 'Refill Green Antigota 180 mm';
			document.getElementById("ul1li3tr1td3").innerHTML = '45';
			document.getElementById("ul1li3tr1td4").innerHTML = '140';

            document.getElementById("ul1li3tr2").style.display = 'table-row';
			document.getElementById("ul1li3tr2td1").innerHTML = '0019';
			document.getElementById("ul1li3tr2td2").innerHTML = 'Refill Green Antigota 220 mm';
			document.getElementById("ul1li3tr2td3").innerHTML = '45';
			document.getElementById("ul1li3tr2td4").innerHTML = '120';
			
            document.getElementById("ul1li3tr3").style.display = 'table-row';
			document.getElementById("ul1li3tr3td1").innerHTML = '0020';
			document.getElementById("ul1li3tr3td2").innerHTML = 'Refill Green Antigota 250 mm';
			document.getElementById("ul1li3tr3td3").innerHTML = '45';
			document.getElementById("ul1li3tr3td4").innerHTML = '100';
			
            document.getElementById("ul1li3tr4").style.display = 'table-row';
			document.getElementById("ul1li3tr4td1").innerHTML = '0128';
			document.getElementById("ul1li3tr4td2").innerHTML = 'Refill Green Antigota 180 mm';
			document.getElementById("ul1li3tr4td3").innerHTML = '50';
			document.getElementById("ul1li3tr4td4").innerHTML = '100';
			
            document.getElementById("ul1li3tr5").style.display = 'table-row';
			document.getElementById("ul1li3tr5td1").innerHTML = '0129';
			document.getElementById("ul1li3tr5td2").innerHTML = 'Refill Green Antigota 220 mm';
			document.getElementById("ul1li3tr5td3").innerHTML = '50';
			document.getElementById("ul1li3tr5td4").innerHTML = '90';
		
            document.getElementById("ul1li3tr6").style.display = 'table-row';
			document.getElementById("ul1li3tr6td1").innerHTML = '0130';  
			document.getElementById("ul1li3tr6td2").innerHTML = 'Refill Green Antigota 250 mm';
			document.getElementById("ul1li3tr6td3").innerHTML = '50';
			document.getElementById("ul1li3tr6td4").innerHTML = '70';
		
			
		});

							   
		/*$('#rbMiniRoloAntigotaV').click(function() {
			$("#rightImageAntigotaV").attr('src', 'images/18/AntigotaV.JPG');
			document.getElementById('rbRoloAntigotaV').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloAntigotaV').style.fontSize = '1.2em';
			document.getElementById('rbRoloAntigotaV').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloAntigotaV').style.fontWeight = 'bold';
			document.getElementById('rbRoloAntigotaV').style.color = '#FFF';
			document.getElementById('rbMiniRoloAntigotaV').style.color = '#FFF';
			document.getElementById("ul1li3tr1td1").innerHTML = '';
			document.getElementById("ul1li3tr1td2").innerHTML = '';
			document.getElementById("ul1li3tr1td3").innerHTML = '';
			document.getElementById("ul1li3tr1td4").innerHTML = '';
			document.getElementById("ul1li3tr2td1").innerHTML = '';
			document.getElementById("ul1li3tr2td2").innerHTML = '';
			document.getElementById("ul1li3tr2td3").innerHTML = '';
			document.getElementById("ul1li3tr2td4").innerHTML = '';
			document.getElementById("ul1li3tr3td1").innerHTML = '';
			document.getElementById("ul1li3tr3td2").innerHTML = '';
			document.getElementById("ul1li3tr3td3").innerHTML = '';
			document.getElementById("ul1li3tr3td4").innerHTML = '';
			document.getElementById("ul1li3tr4td1").innerHTML = '';
			document.getElementById("ul1li3tr4td2").innerHTML = '';
			document.getElementById("ul1li3tr4td3").innerHTML = '';
			document.getElementById("ul1li3tr4td4").innerHTML = '';
			document.getElementById("ul1li3tr5td1").innerHTML = '';
			document.getElementById("ul1li3tr5td2").innerHTML = '';
			document.getElementById("ul1li3tr5td3").innerHTML = '';
			document.getElementById("ul1li3tr5td4").innerHTML = '';
			document.getElementById("ul1li3tr6td1").innerHTML = '';
			document.getElementById("ul1li3tr6td2").innerHTML = '';
			document.getElementById("ul1li3tr6td3").innerHTML = '';
			document.getElementById("ul1li3tr6td4").innerHTML = '';
			document.getElementById("ul1li3tr7td1").innerHTML = '';
			document.getElementById("ul1li3tr7td2").innerHTML = '';
			document.getElementById("ul1li3tr7td3").innerHTML = '';
			document.getElementById("ul1li3tr7td4").innerHTML = '';
			
		});
        
        $('#rbCMiniRoloAntigotaV').click(function() {
			$("#rightImageAntigotaV").attr('src', 'images/18/AntigotaV.JPG');
			document.getElementById('rbRoloAntigotaV').style.fontSize = '1.0em';
			document.getElementById('rbMiniRoloAntigotaV').style.fontSize = '1.2em';
			document.getElementById('rbRoloAntigotaV').style.fontWeight = 'normal';
			document.getElementById('rbMiniRoloAntigotaV').style.fontWeight = 'bold';
			document.getElementById('rbRoloAntigotaV').style.color = '#FFF';
			document.getElementById('rbMiniRoloAntigotaV').style.color = '#FFF';
			document.getElementById("ul1li3tr1td1").innerHTML = '';
			document.getElementById("ul1li3tr1td2").innerHTML = '';
			document.getElementById("ul1li3tr1td3").innerHTML = '';
			document.getElementById("ul1li3tr1td4").innerHTML = '';
			document.getElementById("ul1li3tr2td1").innerHTML = '';
			document.getElementById("ul1li3tr2td2").innerHTML = '';
			document.getElementById("ul1li3tr2td3").innerHTML = '';
			document.getElementById("ul1li3tr2td4").innerHTML = '';
			document.getElementById("ul1li3tr3td1").innerHTML = '';
			document.getElementById("ul1li3tr3td2").innerHTML = '';
			document.getElementById("ul1li3tr3td3").innerHTML = '';
			document.getElementById("ul1li3tr3td4").innerHTML = '';
			document.getElementById("ul1li3tr4td1").innerHTML = '';
			document.getElementById("ul1li3tr4td2").innerHTML = '';
			document.getElementById("ul1li3tr4td3").innerHTML = '';
			document.getElementById("ul1li3tr4td4").innerHTML = '';
			document.getElementById("ul1li3tr5td1").innerHTML = '';
			document.getElementById("ul1li3tr5td2").innerHTML = '';
			document.getElementById("ul1li3tr5td3").innerHTML = '';
			document.getElementById("ul1li3tr5td4").innerHTML = '';
			document.getElementById("ul1li3tr6td1").innerHTML = '';
			document.getElementById("ul1li3tr6td2").innerHTML = '';
			document.getElementById("ul1li3tr6td3").innerHTML = '';
			document.getElementById("ul1li3tr6td4").innerHTML = '';
			document.getElementById("ul1li3tr7td1").innerHTML = '';
			document.getElementById("ul1li3tr7td2").innerHTML = '';
			document.getElementById("ul1li3tr7td3").innerHTML = '';
			document.getElementById("ul1li3tr7td4").innerHTML = '';
			
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
            
			document.getElementById("ul1li4tr1").style.display = 'table-row';
			document.getElementById("ul1li4tr1td1").innerHTML = '0055';
			document.getElementById("ul1li4tr1td2").innerHTML = 'Roller Cromado 180 mm';
			document.getElementById("ul1li4tr1td3").innerHTML = '45';
			document.getElementById("ul1li4tr1td4").innerHTML = '55'
			
            document.getElementById("ul1li4tr2").style.display = 'table-row';
			document.getElementById("ul1li4tr2td1").innerHTML = '0056';
			document.getElementById("ul1li4tr2td2").innerHTML = 'Roller Cromado 220 mm';
			document.getElementById("ul1li4tr2td3").innerHTML = '45';
			document.getElementById("ul1li4tr2td4").innerHTML = '50'
	
            document.getElementById("ul1li4tr3").style.display = 'table-row';
			document.getElementById("ul1li4tr3td1").innerHTML = '0054';
			document.getElementById("ul1li4tr3td2").innerHTML = 'Roller Cromado 250 mm';
			document.getElementById("ul1li4tr3td3").innerHTML = '45';
			document.getElementById("ul1li4tr3td4").innerHTML = '45'
			
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
            
			document.getElementById("ul1li4tr1").style.display = 'table-row';
			document.getElementById("ul1li4tr1td1").innerHTML = '0012';
			document.getElementById("ul1li4tr1td2").innerHTML = 'Refill Cromado 180 mm';
			document.getElementById("ul1li4tr1td3").innerHTML = '45';
			document.getElementById("ul1li4tr1td4").innerHTML = '140'
	
            document.getElementById("ul1li4tr2").style.display = 'table-row';
			document.getElementById("ul1li4tr2td1").innerHTML = '0013';
			document.getElementById("ul1li4tr2td2").innerHTML = 'Refill Cromado 220 mm';
			document.getElementById("ul1li4tr2td3").innerHTML = '45';
			document.getElementById("ul1li4tr2td4").innerHTML = '120'

            document.getElementById("ul1li4tr3").style.display = 'table-row';
			document.getElementById("ul1li4tr3td1").innerHTML = '0014';
			document.getElementById("ul1li4tr3td2").innerHTML = 'Refill Cromado 250 mm';
			document.getElementById("ul1li4tr3td3").innerHTML = '45';
			document.getElementById("ul1li4tr3td4").innerHTML = '100'
			
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
			document.getElementById("ul1li4tr1td1").innerHTML = '';
			document.getElementById("ul1li4tr1td2").innerHTML = '';
			document.getElementById("ul1li4tr1td3").innerHTML = '';
			document.getElementById("ul1li4tr1td4").innerHTML = '';
			document.getElementById("ul1li4tr2td1").innerHTML = '';
			document.getElementById("ul1li4tr2td2").innerHTML = '';
			document.getElementById("ul1li4tr2td3").innerHTML = '';
			document.getElementById("ul1li4tr2td4").innerHTML = '';
			document.getElementById("ul1li4tr3td1").innerHTML = '';
			document.getElementById("ul1li4tr3td2").innerHTML = '';
			document.getElementById("ul1li4tr3td3").innerHTML = '';
			document.getElementById("ul1li4tr3td4").innerHTML = '';
			document.getElementById("ul1li4tr4td1").innerHTML = '';
			document.getElementById("ul1li4tr4td2").innerHTML = '';
			document.getElementById("ul1li4tr4td3").innerHTML = '';
			document.getElementById("ul1li4tr4td4").innerHTML = '';
			document.getElementById("ul1li4tr5td1").innerHTML = '';
			document.getElementById("ul1li4tr5td2").innerHTML = '';
			document.getElementById("ul1li4tr5td3").innerHTML = '';
			document.getElementById("ul1li4tr5td4").innerHTML = '';
			document.getElementById("ul1li4tr6td1").innerHTML = '';
			document.getElementById("ul1li4tr6td2").innerHTML = '';
			document.getElementById("ul1li4tr6td3").innerHTML = '';
			document.getElementById("ul1li4tr6td4").innerHTML = '';
			document.getElementById("ul1li4tr7td1").innerHTML = '';
			document.getElementById("ul1li4tr7td2").innerHTML = '';
			document.getElementById("ul1li4tr7td3").innerHTML = '';
			document.getElementById("ul1li4tr7td4").innerHTML = '';
			
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
            
            document.getElementById("ul2li1tr1").style.display = 'table-row';
			document.getElementById("ul2li1tr1td1").innerHTML = '0080';
			document.getElementById("ul2li1tr1td2").innerHTML = 'Roller Espuma de Canto';
			document.getElementById("ul2li1tr1td3").innerHTML = '120';
			document.getElementById("ul2li1tr1td4").innerHTML = '24';
			
            document.getElementById("ul2li1tr2").style.display = 'none';
			document.getElementById("ul2li1tr2td1").innerHTML = '';
			document.getElementById("ul2li1tr2td2").innerHTML = '';
			document.getElementById("ul2li1tr2td3").innerHTML = '';
			document.getElementById("ul2li1tr2td4").innerHTML = '';
			
            document.getElementById("ul2li1tr3").style.display = 'none';
			document.getElementById("ul2li1tr3td1").innerHTML = '';
			document.getElementById("ul2li1tr3td2").innerHTML = '';
			document.getElementById("ul2li1tr3td3").innerHTML = '';
			document.getElementById("ul2li1tr3td4").innerHTML = '';
			
            document.getElementById("ul2li1tr4").style.display = 'none';
			document.getElementById("ul2li1tr4td1").innerHTML = '';
			document.getElementById("ul2li1tr4td2").innerHTML = '';
			document.getElementById("ul2li1tr4td3").innerHTML = '';
			document.getElementById("ul2li1tr4td4").innerHTML = '';
			
            document.getElementById("ul2li1tr5").style.display = 'none';
			document.getElementById("ul2li1tr5td1").innerHTML = '';
			document.getElementById("ul2li1tr5td2").innerHTML = '';
			document.getElementById("ul2li1tr5td3").innerHTML = '';
			document.getElementById("ul2li1tr5td4").innerHTML = '';
			
            document.getElementById("ul2li1tr6").style.display = 'none';
			document.getElementById("ul2li1tr6td1").innerHTML = '';
			document.getElementById("ul2li1tr6td2").innerHTML = '';
			document.getElementById("ul2li1tr6td3").innerHTML = '';
			document.getElementById("ul2li1tr6td4").innerHTML = '';
			
            document.getElementById("ul2li1tr7").style.display = 'none';
			document.getElementById("ul2li1tr7td1").innerHTML = '';
			document.getElementById("ul2li1tr7td2").innerHTML = '';
			document.getElementById("ul2li1tr7td3").innerHTML = '';
			document.getElementById("ul2li1tr7td4").innerHTML = '';
			
            document.getElementById("ul2li1tr8").style.display = 'none';
            document.getElementById("ul2li1tr8td1").innerHTML = '';
			document.getElementById("ul2li1tr8td2").innerHTML = '';
			document.getElementById("ul2li1tr8td3").innerHTML = '';
			document.getElementById("ul2li1tr8td4").innerHTML = '';
            
            document.getElementById("ul2li1tr9").style.display = 'none';
			document.getElementById("ul2li1tr9td1").innerHTML = '';
			document.getElementById("ul2li1tr9td2").innerHTML = '';
			document.getElementById("ul2li1tr9td3").innerHTML = '';
			document.getElementById("ul2li1tr9td4").innerHTML = '';
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
            
            document.getElementById("ul2li1tr1").style.display = 'table-row';
			document.getElementById("ul2li1tr1td1").innerHTML = '0037';
			document.getElementById("ul2li1tr1td2").innerHTML = 'Refill Espuma de Canto';
			document.getElementById("ul2li1tr1td3").innerHTML = '120';
			document.getElementById("ul2li1tr1td4").innerHTML = '';
			
            document.getElementById("ul2li1tr2").style.display = 'none';
			document.getElementById("ul2li1tr2td1").innerHTML = '';
			document.getElementById("ul2li1tr2td2").innerHTML = '';
			document.getElementById("ul2li1tr2td3").innerHTML = '';
			document.getElementById("ul2li1tr2td4").innerHTML = '';
			
            document.getElementById("ul2li1tr3").style.display = 'none';
			document.getElementById("ul2li1tr3td1").innerHTML = '';
			document.getElementById("ul2li1tr3td2").innerHTML = '';
			document.getElementById("ul2li1tr3td3").innerHTML = '';
			document.getElementById("ul2li1tr3td4").innerHTML = '';
			
            document.getElementById("ul2li1tr4").style.display = 'none';
			document.getElementById("ul2li1tr4td1").innerHTML = '';
			document.getElementById("ul2li1tr4td2").innerHTML = '';
			document.getElementById("ul2li1tr4td3").innerHTML = '';
			document.getElementById("ul2li1tr4td4").innerHTML = '';
			
            document.getElementById("ul2li1tr5").style.display = 'none';
			document.getElementById("ul2li1tr5td1").innerHTML = '';
			document.getElementById("ul2li1tr5td2").innerHTML = '';
			document.getElementById("ul2li1tr5td3").innerHTML = '';
			document.getElementById("ul2li1tr5td4").innerHTML = '';
			
            document.getElementById("ul2li1tr6").style.display = 'none';
			document.getElementById("ul2li1tr6td1").innerHTML = '';
			document.getElementById("ul2li1tr6td2").innerHTML = '';
			document.getElementById("ul2li1tr6td3").innerHTML = '';
			document.getElementById("ul2li1tr6td4").innerHTML = '';
			
            document.getElementById("ul2li1tr7").style.display = 'none';
			document.getElementById("ul2li1tr7td1").innerHTML = '';
			document.getElementById("ul2li1tr7td2").innerHTML = '';
			document.getElementById("ul2li1tr7td3").innerHTML = '';
			document.getElementById("ul2li1tr7td4").innerHTML = '';
			
            document.getElementById("ul2li1tr8").style.display = 'none';
            document.getElementById("ul2li1tr8td1").innerHTML = '';
			document.getElementById("ul2li1tr8td2").innerHTML = '';
			document.getElementById("ul2li1tr8td3").innerHTML = '';
			document.getElementById("ul2li1tr8td4").innerHTML = '';
         			
            document.getElementById("ul2li1tr9").style.display = 'none';
            document.getElementById("ul2li1tr9td1").innerHTML = '';
			document.getElementById("ul2li1tr9td2").innerHTML = '';
			document.getElementById("ul2li1tr9td3").innerHTML = '';
			document.getElementById("ul2li1tr9td4").innerHTML = '';

            
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
            
            document.getElementById("ul2li1tr1").style.display = 'table-row';
			document.getElementById("ul2li1tr1td1").innerHTML = '0244';
			document.getElementById("ul2li1tr1td2").innerHTML = 'Mini Roller Espuma 60 mm';
			document.getElementById("ul2li1tr1td3").innerHTML = '16';
			document.getElementById("ul2li1tr1td4").innerHTML = '100';
		
            document.getElementById("ul2li1tr2").style.display = 'table-row';
			document.getElementById("ul2li1tr2td1").innerHTML = '0229';
			document.getElementById("ul2li1tr2td2").innerHTML = 'Mini Roller Espuma 110 mm';
			document.getElementById("ul2li1tr2td3").innerHTML = '16';
			document.getElementById("ul2li1tr2td4").innerHTML = '80';
		
            document.getElementById("ul2li1tr3").style.display = 'table-row';
            document.getElementById("ul2li1tr3td1").innerHTML = '0260';
			document.getElementById("ul2li1tr3td2").innerHTML = 'Mini Roller Espuma 150 mm';
			document.getElementById("ul2li1tr3td3").innerHTML = '';
			document.getElementById("ul2li1tr3td4").innerHTML = '';
	
            document.getElementById("ul2li1tr4").style.display = 'none';
			document.getElementById("ul2li1tr4td1").innerHTML = '';
			document.getElementById("ul2li1tr4td2").innerHTML = '';
			document.getElementById("ul2li1tr4td3").innerHTML = '';
			document.getElementById("ul2li1tr4td4").innerHTML = '';
			
            document.getElementById("ul2li1tr5").style.display = 'none';
			document.getElementById("ul2li1tr5td1").innerHTML = '';
			document.getElementById("ul2li1tr5td2").innerHTML = '';
			document.getElementById("ul2li1tr5td3").innerHTML = '';
			document.getElementById("ul2li1tr5td4").innerHTML = '';
			
            document.getElementById("ul2li1tr6").style.display = 'none';
			document.getElementById("ul2li1tr6td1").innerHTML = '';
			document.getElementById("ul2li1tr6td2").innerHTML = '';
			document.getElementById("ul2li1tr6td3").innerHTML = '';
			document.getElementById("ul2li1tr6td4").innerHTML = '';
			
            document.getElementById("ul2li1tr7").style.display = 'none';
			document.getElementById("ul2li1tr7td1").innerHTML = '';
			document.getElementById("ul2li1tr7td2").innerHTML = '';
			document.getElementById("ul2li1tr7td3").innerHTML = '';
			document.getElementById("ul2li1tr7td4").innerHTML = '';
			
            document.getElementById("ul2li1tr8").style.display = 'none';
			document.getElementById("ul2li1tr8td1").innerHTML = '';
			document.getElementById("ul2li1tr8td2").innerHTML = '';
			document.getElementById("ul2li1tr8td3").innerHTML = '';
			document.getElementById("ul2li1tr8td4").innerHTML = '';
            
            document.getElementById("ul2li1tr9").style.display = 'none';
            document.getElementById("ul2li1tr9td1").innerHTML = '';
			document.getElementById("ul2li1tr9td2").innerHTML = '';
			document.getElementById("ul2li1tr9td3").innerHTML = '';
			document.getElementById("ul2li1tr9td4").innerHTML = '';
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
            
            document.getElementById("ul2li1tr1").style.display = 'table-row';
			document.getElementById("ul2li1tr1td1").innerHTML = '0096';
			document.getElementById("ul2li1tr1td2").innerHTML = 'Refill Espuma 60 mm';
			document.getElementById("ul2li1tr1td3").innerHTML = '16';
			document.getElementById("ul2li1tr1td4").innerHTML = '';
			
            document.getElementById("ul2li1tr2").style.display = 'table-row';
			document.getElementById("ul2li1tr2td1").innerHTML = '0097';
			document.getElementById("ul2li1tr2td2").innerHTML = 'Refill Espuma 110 mm';
			document.getElementById("ul2li1tr2td3").innerHTML = '16';
			document.getElementById("ul2li1tr2td4").innerHTML = '80';
			
            document.getElementById("ul2li1tr3").style.display = 'table-row';
			document.getElementById("ul2li1tr3td1").innerHTML = '0098';
			document.getElementById("ul2li1tr3td2").innerHTML = 'Refill Espuma 150 mm';
			document.getElementById("ul2li1tr3td3").innerHTML = '16';
			document.getElementById("ul2li1tr3td4").innerHTML = '';
			
            document.getElementById("ul2li1tr4").style.display = 'table-row';
			document.getElementById("ul2li1tr4td1").innerHTML = '0233';
			document.getElementById("ul2li1tr4td2").innerHTML = 'Pack 2 Refills Espuma 60 mm';
			document.getElementById("ul2li1tr4td3").innerHTML = '16';
			document.getElementById("ul2li1tr4td4").innerHTML = '50X2';
			
            document.getElementById("ul2li1tr5").style.display = 'table-row';
			document.getElementById("ul2li1tr5td1").innerHTML = '0232';
			document.getElementById("ul2li1tr5td2").innerHTML = 'Pack 2 Refills Espuma 110 mm';
			document.getElementById("ul2li1tr5td3").innerHTML = '16';
			document.getElementById("ul2li1tr5td4").innerHTML = '150X2';
	
            document.getElementById("ul2li1tr6").style.display = 'table-row';
			document.getElementById("ul2li1tr6td1").innerHTML = '0251';
			document.getElementById("ul2li1tr6td2").innerHTML = 'Pack 2 Refills Espuma 150 mm';
			document.getElementById("ul2li1tr6td3").innerHTML = '16';
			document.getElementById("ul2li1tr6td4").innerHTML = '';
			
            document.getElementById("ul2li1tr7").style.display = 'table-row';
			document.getElementById("ul2li1tr7td1").innerHTML = '0261';
			document.getElementById("ul2li1tr7td2").innerHTML = 'Blister 16 Refills Espuma 60 mm';
			document.getElementById("ul2li1tr7td3").innerHTML = '16';
			document.getElementById("ul2li1tr7td4").innerHTML = '25X16';
			
            document.getElementById("ul2li1tr8").style.display = 'table-row';
			document.getElementById("ul2li1tr8td1").innerHTML = '0231';
			document.getElementById("ul2li1tr8td2").innerHTML = 'Blister 10 Refills Espuma 110 mm';
			document.getElementById("ul2li1tr8td3").innerHTML = '16';
			document.getElementById("ul2li1tr8td4").innerHTML = '40X10';
		
            document.getElementById("ul2li1tr9").style.display = 'table-row';
            document.getElementById("ul2li1tr9td1").innerHTML = '0252';
			document.getElementById("ul2li1tr9td2").innerHTML = 'Blister 10 Refills Espuma 110 mm (Topo Redondo)';
			document.getElementById("ul2li1tr9td3").innerHTML = '16';
			document.getElementById("ul2li1tr9td4").innerHTML = '40X10';
			
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
			
            document.getElementById("ul2li2tr1").style.display = 'table-row';
			document.getElementById("ul2li2tr1td1").innerHTML = '0044';
			document.getElementById("ul2li2tr1td2").innerHTML = 'Roller Júnior  60 mm';
			document.getElementById("ul2li2tr1td3").innerHTML = '45';
			document.getElementById("ul2li2tr1td4").innerHTML = '24'

            document.getElementById("ul2li2tr2").style.display = 'table-row';
			document.getElementById("ul2li2tr2td1").innerHTML = '0045';
			document.getElementById("ul2li2tr2td2").innerHTML = 'Roller Júnior 150 mm';
			document.getElementById("ul2li2tr2td3").innerHTML = '45';
			document.getElementById("ul2li2tr2td4").innerHTML = '70'
			
            document.getElementById("ul2li2tr3").style.display = 'table-row';
			document.getElementById("ul2li2tr3td1").innerHTML = '0046';
			document.getElementById("ul2li2tr3td2").innerHTML = 'Roller Júnior 180 mm';
			document.getElementById("ul2li2tr3td3").innerHTML = '45';
			document.getElementById("ul2li2tr3td4").innerHTML = '60';
			
            document.getElementById("ul2li2tr4").style.display = 'table-row';
			document.getElementById("ul2li2tr4td1").innerHTML = '0047';
			document.getElementById("ul2li2tr4td2").innerHTML = 'Roller Júnior 220 mm';
			document.getElementById("ul2li2tr4td3").innerHTML = '45';
			document.getElementById("ul2li2tr4td4").innerHTML = '55';
		
            document.getElementById("ul2li2tr5").style.display = 'table-row';
			document.getElementById("ul2li2tr5td1").innerHTML = '0048';
			document.getElementById("ul2li2tr5td2").innerHTML = 'Roller Júnior 250 mm';
			document.getElementById("ul2li2tr5td3").innerHTML = '45';
			document.getElementById("ul2li2tr5td4").innerHTML = '50';
			
            document.getElementById("ul2li2tr6").style.display = 'table-row';
			document.getElementById("ul2li2tr6td1").innerHTML = '0140';
			document.getElementById("ul2li2tr6td2").innerHTML = 'Roller Júnior 180 mm';
			document.getElementById("ul2li2tr6td3").innerHTML = '50';
			document.getElementById("ul2li2tr6td4").innerHTML = '55';
			
            document.getElementById("ul2li2tr7").style.display = 'table-row';
			document.getElementById("ul2li2tr7td1").innerHTML = '0141';
			document.getElementById("ul2li2tr7td2").innerHTML = 'Roller Júnior 220 mm';
			document.getElementById("ul2li2tr7td3").innerHTML = '50';
			document.getElementById("ul2li2tr7td4").innerHTML = '50';
			
            document.getElementById("ul2li2tr8").style.display = 'table-row';
			document.getElementById("ul2li2tr8td1").innerHTML = '0142';
			document.getElementById("ul2li2tr8td2").innerHTML = 'Roller Júnior 250 mm';
			document.getElementById("ul2li2tr8td3").innerHTML = '50';
			document.getElementById("ul2li2tr8td4").innerHTML = '45';
			
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
            
            document.getElementById("ul2li2tr1").style.display = 'table-row';
			document.getElementById("ul2li2tr1td1").innerHTML = '0001';
			document.getElementById("ul2li2tr1td2").innerHTML = 'Refill Júnior  60 mm';
			document.getElementById("ul2li2tr1td3").innerHTML = '45';
			document.getElementById("ul2li2tr1td4").innerHTML = '250';
			
            document.getElementById("ul2li2tr2").style.display = 'table-row';
			document.getElementById("ul2li2tr2td1").innerHTML = '0002';
			document.getElementById("ul2li2tr2td2").innerHTML = 'Refill Júnior 150 mm';
			document.getElementById("ul2li2tr2td3").innerHTML = '45';
			document.getElementById("ul2li2tr2td4").innerHTML = '';
		
            document.getElementById("ul2li2tr3").style.display = 'table-row';
			document.getElementById("ul2li2tr3td1").innerHTML = '0003';
			document.getElementById("ul2li2tr3td2").innerHTML = 'Refill Júnior 180 mm';
			document.getElementById("ul2li2tr3td3").innerHTML = '45';
			document.getElementById("ul2li2tr3td4").innerHTML = '140';
			
            document.getElementById("ul2li2tr4").style.display = 'table-row';
			document.getElementById("ul2li2tr4td1").innerHTML = '0004';
			document.getElementById("ul2li2tr4td2").innerHTML = 'Refill Júnior 220 mm';
			document.getElementById("ul2li2tr4td3").innerHTML = '45';
			document.getElementById("ul2li2tr4td4").innerHTML = '120';
			
            document.getElementById("ul2li2tr5").style.display = 'table-row';
			document.getElementById("ul2li2tr5td1").innerHTML = '0005';
			document.getElementById("ul2li2tr5td2").innerHTML = 'Refill Júnior 250 mm';
			document.getElementById("ul2li2tr5td3").innerHTML = '45';
			document.getElementById("ul2li2tr5td4").innerHTML = '100';
			
            document.getElementById("ul2li2tr6").style.display = 'table-row';
			document.getElementById("ul2li2tr6td1").innerHTML = '0122';
			document.getElementById("ul2li2tr6td2").innerHTML = 'Refill Júnior 180 mm';
			document.getElementById("ul2li2tr6td3").innerHTML = '50';
			document.getElementById("ul2li2tr6td4").innerHTML = '100';
	
            document.getElementById("ul2li2tr7").style.display = 'table-row';
			document.getElementById("ul2li2tr7td1").innerHTML = '0123';
			document.getElementById("ul2li2tr7td2").innerHTML = 'Refill Júnior 220 mm';
			document.getElementById("ul2li2tr7td3").innerHTML = '50';
			document.getElementById("ul2li2tr7td4").innerHTML = '90';
	
            document.getElementById("ul2li2tr8").style.display = 'table-row';
			document.getElementById("ul2li2tr8td1").innerHTML = '0124';
			document.getElementById("ul2li2tr8td2").innerHTML = 'Refill Júnior 250 mm';
			document.getElementById("ul2li2tr8td3").innerHTML = '50';
			document.getElementById("ul2li2tr8td4").innerHTML = '70';
	
            
			
			
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
            
            document.getElementById("ul2li2tr1").style.display = 'table-row';
			document.getElementById("ul2li2tr1td1").innerHTML = 'Mini Roller Júnior 60 mm';
			document.getElementById("ul2li2tr1td2").innerHTML = '0356';
			document.getElementById("ul2li2tr1td3").innerHTML = '16';
			document.getElementById("ul2li2tr1td4").innerHTML = '100';
            
            document.getElementById("ul2li2tr2").style.display = 'table-row';
			document.getElementById("ul2li2tr2td1").innerHTML = 'Mini Roller Júnior 100 mm';
			document.getElementById("ul2li2tr2td2").innerHTML = '0249';
			document.getElementById("ul2li2tr2td3").innerHTML = '16';
			document.getElementById("ul2li2tr2td4").innerHTML = '80';
            
            document.getElementById("ul2li2tr3").style.display = 'table-row';
			document.getElementById("ul2li2tr3td1").innerHTML = 'Mini Roller Júnior 150 mm';
			document.getElementById("ul2li2tr3td2").innerHTML = '0357';
			document.getElementById("ul2li2tr3td3").innerHTML = '16';
			document.getElementById("ul2li2tr3td4").innerHTML = '';
            
            document.getElementById("ul2li2tr4").style.display = 'none';
			document.getElementById("ul2li2tr4td1").innerHTML = '';
			document.getElementById("ul2li2tr4td2").innerHTML = '';
			document.getElementById("ul2li2tr4td3").innerHTML = '';
			document.getElementById("ul2li2tr4td4").innerHTML = '';
            
            document.getElementById("ul2li2tr5").style.display = 'none';
			document.getElementById("ul2li2tr5td1").innerHTML = '';
			document.getElementById("ul2li2tr5td2").innerHTML = '';
			document.getElementById("ul2li2tr5td3").innerHTML = '';
			document.getElementById("ul2li2tr5td4").innerHTML = '';
            
            document.getElementById("ul2li2tr6").style.display = 'none';
			document.getElementById("ul2li2tr6td1").innerHTML = '';
			document.getElementById("ul2li2tr6td2").innerHTML = '';
			document.getElementById("ul2li2tr6td3").innerHTML = '';
			document.getElementById("ul2li2tr6td4").innerHTML = '';
            
            document.getElementById("ul2li2tr7").style.display = 'none';
			document.getElementById("ul2li2tr7td1").innerHTML = '';
			document.getElementById("ul2li2tr7td2").innerHTML = '';
			document.getElementById("ul2li2tr7td3").innerHTML = '';
			document.getElementById("ul2li2tr7td4").innerHTML = '';
            
            document.getElementById("ul2li2tr8").style.display = 'none';
			document.getElementById("ul2li2tr8td1").innerHTML = '';
			document.getElementById("ul2li2tr8td2").innerHTML = '';
			document.getElementById("ul2li2tr8td3").innerHTML = '';
			document.getElementById("ul2li2tr8td4").innerHTML = '';
			
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
            
            document.getElementById("ul2li2tr1").style.display = 'table-row';
			document.getElementById("ul2li2tr1td1").innerHTML = 'Refill Júnior 60 mm';
			document.getElementById("ul2li2tr1td2").innerHTML = '0360';
			document.getElementById("ul2li2tr1td3").innerHTML = '16';
			document.getElementById("ul2li2tr1td4").innerHTML = '';
            
            document.getElementById("ul2li2tr2").style.display = 'table-row';
			document.getElementById("ul2li2tr2td1").innerHTML = 'Refill Júnior 100 mm';
			document.getElementById("ul2li2tr2td2").innerHTML = '0087';
			document.getElementById("ul2li2tr2td3").innerHTML = '16';
			document.getElementById("ul2li2tr2td4").innerHTML = '300';
            
            document.getElementById("ul2li2tr3").style.display = 'table-row';
			document.getElementById("ul2li2tr3td1").innerHTML = 'Refill Júnior 150 mm';
			document.getElementById("ul2li2tr3td2").innerHTML = '0361';
			document.getElementById("ul2li2tr3td3").innerHTML = '16';
			document.getElementById("ul2li2tr3td4").innerHTML = '';
            
            document.getElementById("ul2li2tr4").style.display = 'table-row';
			document.getElementById("ul2li2tr4td1").innerHTML = 'Pack 2 Refills Mini Roller Júnior 60 mm';
			document.getElementById("ul2li2tr4td2").innerHTML = '0362';
			document.getElementById("ul2li2tr4td3").innerHTML = '16';
			document.getElementById("ul2li2tr4td4").innerHTML = '';
            
            document.getElementById("ul2li2tr5").style.display = 'table-row';
			document.getElementById("ul2li2tr5td1").innerHTML = 'Pack 2 Refills Mini Roller Júnior 100 mm';
			document.getElementById("ul2li2tr5td2").innerHTML = '0250';
			document.getElementById("ul2li2tr5td3").innerHTML = '16';
			document.getElementById("ul2li2tr5td4").innerHTML = '175X2';
            
            document.getElementById("ul2li2tr6").style.display = 'table-row';
			document.getElementById("ul2li2tr6td1").innerHTML = 'Pack 2 Refills Mini Roller Júnior 150 mm';
			document.getElementById("ul2li2tr6td2").innerHTML = '0363';
			document.getElementById("ul2li2tr6td3").innerHTML = '16';
			document.getElementById("ul2li2tr6td4").innerHTML = '';
            
            document.getElementById("ul2li2tr7").style.display = 'table-row';
			document.getElementById("ul2li2tr7td1").innerHTML = 'Blister 16 Refills Júnior 60 mm';
			document.getElementById("ul2li2tr7td2").innerHTML = '0364';
			document.getElementById("ul2li2tr7td3").innerHTML = '16';
			document.getElementById("ul2li2tr7td4").innerHTML = '36X16';
            
            document.getElementById("ul2li2tr8").style.display = 'table-row';
			document.getElementById("ul2li2tr8td1").innerHTML = 'Blister 10 Refills Júnior 100 mm';
			document.getElementById("ul2li2tr8td2").innerHTML = '0237';
			document.getElementById("ul2li2tr8td3").innerHTML = '16';
			document.getElementById("ul2li2tr8td4").innerHTML = '36X10';
			
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
            
            
            document.getElementById("ul2li3tr1").style.display = 'table-row';
			document.getElementById("ul2li3tr1td1").innerHTML = '0081';
			document.getElementById("ul2li3tr1td2").innerHTML = 'Roller Microfibra 180 mm';
			document.getElementById("ul2li3tr1td3").innerHTML = '45';
			document.getElementById("ul2li3tr1td4").innerHTML = '60';
			
            
            document.getElementById("ul2li3tr2").style.display = 'table-row';
			document.getElementById("ul2li3tr2td1").innerHTML = '0082';
			document.getElementById("ul2li3tr2td2").innerHTML = 'Roller Microfibra 220 mm';
			document.getElementById("ul2li3tr2td3").innerHTML = '45';
			document.getElementById("ul2li3tr2td4").innerHTML = '55';
			
            
            document.getElementById("ul2li3tr3").style.display = 'table-row';
			document.getElementById("ul2li3tr3td1").innerHTML = '0083';
			document.getElementById("ul2li3tr3td2").innerHTML = 'Roller Microfibra 250 mm';
			document.getElementById("ul2li3tr3td3").innerHTML = '45';
			document.getElementById("ul2li3tr3td4").innerHTML = '50';
            
            
            document.getElementById("ul2li3tr4").style.display = 'none';
            document.getElementById("ul2li3tr4td1").innerHTML = '';
			document.getElementById("ul2li3tr4td2").innerHTML = '';
			document.getElementById("ul2li3tr4td3").innerHTML = '';
			document.getElementById("ul2li3tr4td4").innerHTML = '';	
            
            document.getElementById("ul2li3tr5").style.display = 'none';
			document.getElementById("ul2li3tr5td1").innerHTML = '';
			document.getElementById("ul2li3tr5td2").innerHTML = '';
			document.getElementById("ul2li3tr5td3").innerHTML = '';
			document.getElementById("ul2li3tr5td4").innerHTML = '';	
            
            document.getElementById("ul2li3tr6").style.display = 'none';
            document.getElementById("ul2li3tr6td1").innerHTML = '';
			document.getElementById("ul2li3tr6td2").innerHTML = '';
			document.getElementById("ul2li3tr6td3").innerHTML = '';
			document.getElementById("ul2li3tr6td4").innerHTML = '';	
            
            
            document.getElementById("ul2li3tr7").style.display = 'none';
            document.getElementById("ul2li3tr7td1").innerHTML = '';
			document.getElementById("ul2li3tr7td2").innerHTML = '';
			document.getElementById("ul2li3tr7td3").innerHTML = '';
			document.getElementById("ul2li3tr7td4").innerHTML = '';
            
            document.getElementById("ul2li3tr8").style.display = 'none';
            document.getElementById("ul2li3tr8td1").innerHTML = '';
			document.getElementById("ul2li3tr8td2").innerHTML = '';
			document.getElementById("ul2li3tr8td3").innerHTML = '';
			document.getElementById("ul2li3tr8td4").innerHTML = '';
            
            
            document.getElementById("ul2li3tr9").style.display = 'none';
            document.getElementById("ul2li3tr9td1").innerHTML = '';
			document.getElementById("ul2li3tr9td2").innerHTML = '';
			document.getElementById("ul2li3tr9td3").innerHTML = '';
			document.getElementById("ul2li3tr9td4").innerHTML = '';
            
            document.getElementById("ul2li3tr10").style.display = 'none';
            document.getElementById("ul2li3tr10td1").innerHTML = '';
			document.getElementById("ul2li3tr10td2").innerHTML = '';
			document.getElementById("ul2li3tr10td3").innerHTML = '';
			document.getElementById("ul2li3tr10td4").innerHTML = '';
            
            document.getElementById("ul2li3tr11").style.display = 'none';
            document.getElementById("ul2li3tr11td1").innerHTML = '';
			document.getElementById("ul2li3tr11td2").innerHTML = '';
			document.getElementById("ul2li3tr11td3").innerHTML = '';
			document.getElementById("ul2li3tr11td4").innerHTML = '';
            
            document.getElementById("ul2li3tr12").style.display = 'none';
            document.getElementById("ul2li3tr12td1").innerHTML = '';
			document.getElementById("ul2li3tr12td2").innerHTML = '';
			document.getElementById("ul2li3tr12td3").innerHTML = '';
			document.getElementById("ul2li3tr12td4").innerHTML = '';
            
            document.getElementById("ul2li3tr13").style.display = 'none';
            document.getElementById("ul2li3tr13td1").innerHTML = '';
			document.getElementById("ul2li3tr13td2").innerHTML = '';
			document.getElementById("ul2li3tr13td3").innerHTML = '';
			document.getElementById("ul2li3tr13td4").innerHTML = '';
            
            document.getElementById("ul2li3tr14").style.display = 'none';
            document.getElementById("ul2li3tr14td1").innerHTML = '';
			document.getElementById("ul2li3tr14td2").innerHTML = '';
			document.getElementById("ul2li3tr14td3").innerHTML = '';
			document.getElementById("ul2li3tr14td4").innerHTML = '';
            
			
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
            
            document.getElementById("ul2li3tr1").style.display = 'table-row';
			document.getElementById("ul2li3tr1td1").innerHTML = '0038';
			document.getElementById("ul2li3tr1td2").innerHTML = 'Refill Microfibra 180 mm';
			document.getElementById("ul2li3tr1td3").innerHTML = '45';
			document.getElementById("ul2li3tr1td4").innerHTML = '140';
			
            document.getElementById("ul2li3tr2").style.display = 'table-row';
			document.getElementById("ul2li3tr2td1").innerHTML = '0039';
			document.getElementById("ul2li3tr2td2").innerHTML = 'Refill Microfibra 220 mm';
			document.getElementById("ul2li3tr2td3").innerHTML = '45';
			document.getElementById("ul2li3tr2td4").innerHTML = '120';
			
            
            document.getElementById("ul2li3tr3").style.display = 'table-row';
            document.getElementById("ul2li3tr3td1").innerHTML = '0040';
			document.getElementById("ul2li3tr3td2").innerHTML = 'Refill Microfibra 250 mm';
			document.getElementById("ul2li3tr3td3").innerHTML = '45';
			document.getElementById("ul2li3tr3td4").innerHTML = '100';
            
            ocument.getElementById("ul2li3tr4").style.display = 'none';
            document.getElementById("ul2li3tr4td1").innerHTML = '';
			document.getElementById("ul2li3tr4td2").innerHTML = '';
			document.getElementById("ul2li3tr4td3").innerHTML = '';
			document.getElementById("ul2li3tr4td4").innerHTML = '';	
            
            document.getElementById("ul2li3tr5").style.display = 'none';
			document.getElementById("ul2li3tr5td1").innerHTML = '';
			document.getElementById("ul2li3tr5td2").innerHTML = '';
			document.getElementById("ul2li3tr5td3").innerHTML = '';
			document.getElementById("ul2li3tr5td4").innerHTML = '';	
            
            document.getElementById("ul2li3tr6").style.display = 'none';
            document.getElementById("ul2li3tr6td1").innerHTML = '';
			document.getElementById("ul2li3tr6td2").innerHTML = '';
			document.getElementById("ul2li3tr6td3").innerHTML = '';
			document.getElementById("ul2li3tr6td4").innerHTML = '';	
            
            
            document.getElementById("ul2li3tr7").style.display = 'none';
            document.getElementById("ul2li3tr7td1").innerHTML = '';
			document.getElementById("ul2li3tr7td2").innerHTML = '';
			document.getElementById("ul2li3tr7td3").innerHTML = '';
			document.getElementById("ul2li3tr7td4").innerHTML = '';
            
            document.getElementById("ul2li3tr8").style.display = 'none';
            document.getElementById("ul2li3tr8td1").innerHTML = '';
			document.getElementById("ul2li3tr8td2").innerHTML = '';
			document.getElementById("ul2li3tr8td3").innerHTML = '';
			document.getElementById("ul2li3tr8td4").innerHTML = '';
            
            
            document.getElementById("ul2li3tr9").style.display = 'none';
            document.getElementById("ul2li3tr9td1").innerHTML = '';
			document.getElementById("ul2li3tr9td2").innerHTML = '';
			document.getElementById("ul2li3tr9td3").innerHTML = '';
			document.getElementById("ul2li3tr9td4").innerHTML = '';
            
            document.getElementById("ul2li3tr10").style.display = 'none';
            document.getElementById("ul2li3tr10td1").innerHTML = '';
			document.getElementById("ul2li3tr10td2").innerHTML = '';
			document.getElementById("ul2li3tr10td3").innerHTML = '';
			document.getElementById("ul2li3tr10td4").innerHTML = '';
            
            document.getElementById("ul2li3tr11").style.display = 'none';
            document.getElementById("ul2li3tr11td1").innerHTML = '';
			document.getElementById("ul2li3tr11td2").innerHTML = '';
			document.getElementById("ul2li3tr11td3").innerHTML = '';
			document.getElementById("ul2li3tr11td4").innerHTML = '';
            
            document.getElementById("ul2li3tr12").style.display = 'none';
            document.getElementById("ul2li3tr12td1").innerHTML = '';
			document.getElementById("ul2li3tr12td2").innerHTML = '';
			document.getElementById("ul2li3tr12td3").innerHTML = '';
			document.getElementById("ul2li3tr12td4").innerHTML = '';
            
            document.getElementById("ul2li3tr13").style.display = 'none';
            document.getElementById("ul2li3tr13td1").innerHTML = '';
			document.getElementById("ul2li3tr13td2").innerHTML = '';
			document.getElementById("ul2li3tr13td3").innerHTML = '';
			document.getElementById("ul2li3tr13td4").innerHTML = '';
            
            document.getElementById("ul2li3tr14").style.display = 'none';
            document.getElementById("ul2li3tr14td1").innerHTML = '';
			document.getElementById("ul2li3tr14td2").innerHTML = '';
			document.getElementById("ul2li3tr14td3").innerHTML = '';
			document.getElementById("ul2li3tr14td4").innerHTML = '';
			
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
            
            
            document.getElementById("ul2li3tr1").style.display = 'table-row';
			document.getElementById("ul2li3tr1td1").innerHTML = '0187';
			document.getElementById("ul2li3tr1td2").innerHTML = 'Mini Microfibra 60 mm';
			document.getElementById("ul2li3tr1td3").innerHTML = '16';
			document.getElementById("ul2li3tr1td4").innerHTML = '100';
			
            
            document.getElementById("ul2li3tr2").style.display = 'table-row';
			document.getElementById("ul2li3tr2td1").innerHTML = '0188';
			document.getElementById("ul2li3tr2td2").innerHTML = 'Mini Microfibra 100 mm';
			document.getElementById("ul2li3tr2td3").innerHTML = '16';
			document.getElementById("ul2li3tr2td4").innerHTML = '80';
			
            
            document.getElementById("ul2li3tr3").style.display = 'table-row';
			document.getElementById("ul2li3tr3td1").innerHTML = '0189';
			document.getElementById("ul2li3tr3td2").innerHTML = 'Mini Microfibra 150 mm ';
			document.getElementById("ul2li3tr3td3").innerHTML = '16';
			document.getElementById("ul2li3tr3td4").innerHTML = '';	
            
            
            document.getElementById("ul2li3tr4").style.display = 'none';
            document.getElementById("ul2li3tr4td1").innerHTML = '';
			document.getElementById("ul2li3tr4td2").innerHTML = '';
			document.getElementById("ul2li3tr4td3").innerHTML = '';
			document.getElementById("ul2li3tr4td4").innerHTML = '';	
            
            document.getElementById("ul2li3tr5").style.display = 'none';
			document.getElementById("ul2li3tr5td1").innerHTML = '';
			document.getElementById("ul2li3tr5td2").innerHTML = '';
			document.getElementById("ul2li3tr5td3").innerHTML = '';
			document.getElementById("ul2li3tr5td4").innerHTML = '';	
            
            document.getElementById("ul2li3tr6").style.display = 'none';
            document.getElementById("ul2li3tr6td1").innerHTML = '';
			document.getElementById("ul2li3tr6td2").innerHTML = '';
			document.getElementById("ul2li3tr6td3").innerHTML = '';
			document.getElementById("ul2li3tr6td4").innerHTML = '';	
            
            
            document.getElementById("ul2li3tr7").style.display = 'none';
            document.getElementById("ul2li3tr7td1").innerHTML = '';
			document.getElementById("ul2li3tr7td2").innerHTML = '';
			document.getElementById("ul2li3tr7td3").innerHTML = '';
			document.getElementById("ul2li3tr7td4").innerHTML = '';
            
            document.getElementById("ul2li3tr8").style.display = 'none';
            document.getElementById("ul2li3tr8td1").innerHTML = '';
			document.getElementById("ul2li3tr8td2").innerHTML = '';
			document.getElementById("ul2li3tr8td3").innerHTML = '';
			document.getElementById("ul2li3tr8td4").innerHTML = '';
            
            
            document.getElementById("ul2li3tr9").style.display = 'none';
            document.getElementById("ul2li3tr9td1").innerHTML = '';
			document.getElementById("ul2li3tr9td2").innerHTML = '';
			document.getElementById("ul2li3tr9td3").innerHTML = '';
			document.getElementById("ul2li3tr9td4").innerHTML = '';
            
            document.getElementById("ul2li3tr10").style.display = 'none';
            document.getElementById("ul2li3tr10td1").innerHTML = '';
			document.getElementById("ul2li3tr10td2").innerHTML = '';
			document.getElementById("ul2li3tr10td3").innerHTML = '';
			document.getElementById("ul2li3tr10td4").innerHTML = '';
            
            document.getElementById("ul2li3tr11").style.display = 'none';
            document.getElementById("ul2li3tr11td1").innerHTML = '';
			document.getElementById("ul2li3tr11td2").innerHTML = '';
			document.getElementById("ul2li3tr11td3").innerHTML = '';
			document.getElementById("ul2li3tr11td4").innerHTML = '';
            
            document.getElementById("ul2li3tr12").style.display = 'none';
            document.getElementById("ul2li3tr12td1").innerHTML = '';
			document.getElementById("ul2li3tr12td2").innerHTML = '';
			document.getElementById("ul2li3tr12td3").innerHTML = '';
			document.getElementById("ul2li3tr12td4").innerHTML = '';
            
            document.getElementById("ul2li3tr13").style.display = 'none';
            document.getElementById("ul2li3tr13td1").innerHTML = '';
			document.getElementById("ul2li3tr13td2").innerHTML = '';
			document.getElementById("ul2li3tr13td3").innerHTML = '';
			document.getElementById("ul2li3tr13td4").innerHTML = '';
            
            document.getElementById("ul2li3tr14").style.display = 'none';
            document.getElementById("ul2li3tr14td1").innerHTML = '';
			document.getElementById("ul2li3tr14td2").innerHTML = '';
			document.getElementById("ul2li3tr14td3").innerHTML = '';
			document.getElementById("ul2li3tr14td4").innerHTML = '';
          
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
            
            
            document.getElementById("ul2li3tr1").style.display = 'table-row';
			document.getElementById("ul2li3tr1td1").innerHTML = '0262';
			document.getElementById("ul2li3tr1td2").innerHTML = 'Refill Microfibra 60 mm';
			document.getElementById("ul2li3tr1td3").innerHTML = '16';
			document.getElementById("ul2li3tr1td4").innerHTML = '';
		
            document.getElementById("ul2li3tr2").style.display = 'table-row';
			document.getElementById("ul2li3tr2td1").innerHTML = '0248';
			document.getElementById("ul2li3tr2td2").innerHTML = 'Refill Microfibra 100 mm';
			document.getElementById("ul2li3tr2td3").innerHTML = '16';
			document.getElementById("ul2li3tr2td4").innerHTML = '100';
	
            document.getElementById("ul2li3tr3").style.display = 'table-row';
			document.getElementById("ul2li3tr3td1").innerHTML = '0263';
			document.getElementById("ul2li3tr3td2").innerHTML = 'Refill Microfibra 150 mm';
			document.getElementById("ul2li3tr3td3").innerHTML = '16';
			document.getElementById("ul2li3tr3td4").innerHTML = '';
		
            document.getElementById("ul2li3tr4").style.display = 'table-row';
            document.getElementById("ul2li3tr4td1").innerHTML = '0191';
			document.getElementById("ul2li3tr4td2").innerHTML = 'Pack 2 Refills Microfibra 60 mm';
			document.getElementById("ul2li3tr4td3").innerHTML = '16';
			document.getElementById("ul2li3tr4td4").innerHTML = '';
            
            document.getElementById("ul2li3tr5").style.display = 'table-row';
            document.getElementById("ul2li3tr5td1").innerHTML = '0192';
			document.getElementById("ul2li3tr5td2").innerHTML = 'Pack 2 Refills Microfibra 100 mm';
			document.getElementById("ul2li3tr5td3").innerHTML = '16';
			document.getElementById("ul2li3tr5td4").innerHTML = '150X2';
            
            document.getElementById("ul2li3tr6").style.display = 'table-row';
            document.getElementById("ul2li3tr6td1").innerHTML = '0193';
			document.getElementById("ul2li3tr6td2").innerHTML = 'Pack 2 Refills Microfibra 150 mm';
			document.getElementById("ul2li3tr6td3").innerHTML = '16';
			document.getElementById("ul2li3tr6td4").innerHTML = '';
            
            document.getElementById("ul2li3tr7").style.display = 'table-row';
            document.getElementById("ul2li3tr7td1").innerHTML = '0264';
			document.getElementById("ul2li3tr7td2").innerHTML = 'Blister 16 Refills Microfibra 60 mm';
			document.getElementById("ul2li3tr7td3").innerHTML = '16';
			document.getElementById("ul2li3tr7td4").innerHTML = '36X16';
            
            document.getElementById("ul2li3tr8").style.display = 'table-row';
            document.getElementById("ul2li3tr8td1").innerHTML = '0190';
			document.getElementById("ul2li3tr8td2").innerHTML = 'Blister 10 Refills Microfibra 100 mm';
			document.getElementById("ul2li3tr8td3").innerHTML = '16';
			document.getElementById("ul2li3tr8td4").innerHTML = '36X10';
            
            document.getElementById("ul2li3tr9").style.display = 'table-row';
            document.getElementById("ul2li3tr9td1").innerHTML = '0213';
			document.getElementById("ul2li3tr9td2").innerHTML = 'Refill Microfibra 120 m';
			document.getElementById("ul2li3tr9td3").innerHTML = '30';
			document.getElementById("ul2li3tr9td4").innerHTML = '';
            
            document.getElementById("ul2li3tr10").style.display = 'table-row';
            document.getElementById("ul2li3tr10td1").innerHTML = '0214';
			document.getElementById("ul2li3tr10td2").innerHTML = 'Refill Microfibra 150 mm';
			document.getElementById("ul2li3tr10td3").innerHTML = '30';
			document.getElementById("ul2li3tr10td4").innerHTML = '';
            
            document.getElementById("ul2li3tr11").style.display = 'table-row';
            document.getElementById("ul2li3tr11td1").innerHTML = '0217';
			document.getElementById("ul2li3tr11td2").innerHTML = 'Pack 2 Refills Microfibra 120 mm';
			document.getElementById("ul2li3tr11td3").innerHTML = '30';
			document.getElementById("ul2li3tr11td4").innerHTML = '';
            
            document.getElementById("ul2li3tr12").style.display = 'table-row';
            document.getElementById("ul2li3tr12td1").innerHTML = '0218';
			document.getElementById("ul2li3tr12td2").innerHTML = 'Pack 2 Refills Microfibra 150 mm';
			document.getElementById("ul2li3tr12td3").innerHTML = '30';
			document.getElementById("ul2li3tr12td4").innerHTML = '';
            
            document.getElementById("ul2li3tr13").style.display = 'table-row';
            document.getElementById("ul2li3tr13td1").innerHTML = '0215';
			document.getElementById("ul2li3tr13td2").innerHTML = 'Blister 10 Refills Microfibra 120 mm';
			document.getElementById("ul2li3tr13td3").innerHTML = '30';
			document.getElementById("ul2li3tr13td4").innerHTML = '';
            
            document.getElementById("ul2li3tr14").style.display = 'table-row';
            document.getElementById("ul2li3tr14td1").innerHTML = '0216';
			document.getElementById("ul2li3tr14td2").innerHTML = 'Blister 6 Refills Microfibra 150 mm';
			document.getElementById("ul2li3tr14td3").innerHTML = '30';
			document.getElementById("ul2li3tr14td4").innerHTML = '';
            
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
            
            
            document.getElementById("ul2li4tr1").style.display = 'table-row';
			document.getElementById("ul2li4tr1td1").innerHTML = '0072';
			document.getElementById("ul2li4tr1td2").innerHTML = 'Roller Ravel 180 mm';
			document.getElementById("ul2li4tr1td3").innerHTML = '45';
			document.getElementById("ul2li4tr1td4").innerHTML = '60';
			
            document.getElementById("ul2li4tr2").style.display = 'table-row';
			document.getElementById("ul2li4tr2td1").innerHTML = '0073';
			document.getElementById("ul2li4tr2td2").innerHTML = 'Roller Ravel 220 mm';
			document.getElementById("ul2li4tr2td3").innerHTML = '45';
			document.getElementById("ul2li4tr2td4").innerHTML = '55';
			
            document.getElementById("ul2li4tr3").style.display = 'table-row';
			document.getElementById("ul2li4tr3td1").innerHTML = '0074';
			document.getElementById("ul2li4tr3td2").innerHTML = 'Roller Ravel 250 mm';
			document.getElementById("ul2li4tr3td3").innerHTML = '45';
			document.getElementById("ul2li4tr3td4").innerHTML = '50';
			
            document.getElementById("ul2li4tr4").style.display = 'table-row';
			document.getElementById("ul2li4tr4td1").innerHTML = '0152';
			document.getElementById("ul2li4tr4td2").innerHTML = 'Roller Ravel 180 mm';
			document.getElementById("ul2li4tr4td3").innerHTML = '50';
			document.getElementById("ul2li4tr4td4").innerHTML = '55';
			
            document.getElementById("ul2li4tr5").style.display = 'table-row';
			document.getElementById("ul2li4tr5td1").innerHTML = '0153';
			document.getElementById("ul2li4tr5td2").innerHTML = 'Roller Ravel 220 mm';
			document.getElementById("ul2li4tr5td3").innerHTML = '50';
			document.getElementById("ul2li4tr5td4").innerHTML = '50';
			
            document.getElementById("ul2li4tr6").style.display = 'table-row';
			document.getElementById("ul2li4tr6td1").innerHTML = '0154';
			document.getElementById("ul2li4tr6td2").innerHTML = 'Roller Ravel 250 mm';
			document.getElementById("ul2li4tr6td3").innerHTML = '50';
			document.getElementById("ul2li4tr6td4").innerHTML = '45';
            
            document.getElementById("ul2li4tr7").style.display = 'none';
            document.getElementById("ul2li4tr7td1").innerHTML = '';
			document.getElementById("ul2li4tr7td2").innerHTML = '';
			document.getElementById("ul2li4tr7td3").innerHTML = '';
			document.getElementById("ul2li4tr7td4").innerHTML = '';
			
            document.getElementById("ul2li4tr8").style.display = 'none';
            document.getElementById("ul2li4tr8td1").innerHTML = '';
			document.getElementById("ul2li4tr8td2").innerHTML = '';
			document.getElementById("ul2li4tr8td3").innerHTML = '';
			document.getElementById("ul2li4tr8td4").innerHTML = '';
            
            document.getElementById("ul2li4tr9").style.display = 'none';
            document.getElementById("ul2li4tr9td1").innerHTML = '';
			document.getElementById("ul2li4tr9td2").innerHTML = ''
			document.getElementById("ul2li4tr9td3").innerHTML = '';
			document.getElementById("ul2li4tr9td4").innerHTML = '';
            
            document.getElementById("ul2li4tr10").style.display = 'none';
            document.getElementById("ul2li4tr10td1").innerHTML = '';
			document.getElementById("ul2li4tr10td2").innerHTML = '';
			document.getElementById("ul2li4tr10td3").innerHTML = '';
			document.getElementById("ul2li4tr10td4").innerHTML = '';
            
            document.getElementById("ul2li4tr11").style.display = 'none';
            document.getElementById("ul2li4tr11td1").innerHTML = '';
			document.getElementById("ul2li4tr11td2").innerHTML = '';
			document.getElementById("ul2li4tr11td3").innerHTML = '';
			document.getElementById("ul2li4tr11td4").innerHTML = '';
            
            document.getElementById("ul2li4tr12").style.display = 'none';
            document.getElementById("ul2li4tr12td1").innerHTML = '';
			document.getElementById("ul2li4tr12td2").innerHTML = '';
			document.getElementById("ul2li4tr12td3").innerHTML = '';
			document.getElementById("ul2li4tr12td4").innerHTML = '';
            
            document.getElementById("ul2li4tr13").style.display = 'none';
            document.getElementById("ul2li4tr13td1").innerHTML = '';
			document.getElementById("ul2li4tr13td2").innerHTML = '';
			document.getElementById("ul2li4tr13td3").innerHTML = '';
			document.getElementById("ul2li4tr13td4").innerHTML = '';
            
            document.getElementById("ul2li4tr14").style.display = 'none';
            document.getElementById("ul2li4tr14td1").innerHTML = '';
			document.getElementById("ul2li4tr14td2").innerHTML = '';
			document.getElementById("ul2li4tr14td3").innerHTML = '';
			document.getElementById("ul2li4tr14td4").innerHTML = '';

            
			
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
            
            document.getElementById("ul2li4tr1").style.display = 'table-row';
			document.getElementById("ul2li4tr1td1").innerHTML = '0029';
			document.getElementById("ul2li4tr1td2").innerHTML = 'Refill Ravel 180 mm';
			document.getElementById("ul2li4tr1td3").innerHTML = '45';
			document.getElementById("ul2li4tr1td4").innerHTML = '140';
			
            document.getElementById("ul2li4tr2").style.display = 'table-row';
			document.getElementById("ul2li4tr2td1").innerHTML = '0030';
			document.getElementById("ul2li4tr2td2").innerHTML = 'Refill Ravel 220 mm';
			document.getElementById("ul2li4tr2td3").innerHTML = '45';
			document.getElementById("ul2li4tr2td4").innerHTML = '120';
			
            document.getElementById("ul2li4tr3").style.display = 'table-row';
			document.getElementById("ul2li4tr3td1").innerHTML = '0031';
			document.getElementById("ul2li4tr3td2").innerHTML = 'Refill Ravel 250 mm';
			document.getElementById("ul2li4tr3td3").innerHTML = '45';
			document.getElementById("ul2li4tr3td4").innerHTML = '100';
			
            document.getElementById("ul2li4tr4").style.display = 'table-row';
			document.getElementById("ul2li4tr4td1").innerHTML = '0134';
			document.getElementById("ul2li4tr4td2").innerHTML = 'Refill Ravel 180 mm';
			document.getElementById("ul2li4tr4td3").innerHTML = '50';
			document.getElementById("ul2li4tr4td4").innerHTML = '100';
			
            document.getElementById("ul2li4tr5").style.display = 'table-row';
			document.getElementById("ul2li4tr5td1").innerHTML = '0135';
			document.getElementById("ul2li4tr5td2").innerHTML = 'Refill Ravel 220 mm';
			document.getElementById("ul2li4tr5td3").innerHTML = '50';
			document.getElementById("ul2li4tr5td4").innerHTML = '90';
			
            document.getElementById("ul2li4tr6").style.display = 'table-row';
			document.getElementById("ul2li4tr6td1").innerHTML = '0136';
			document.getElementById("ul2li4tr6td2").innerHTML = 'Refill Ravel 250 mm';
			document.getElementById("ul2li4tr6td3").innerHTML = '50';
			document.getElementById("ul2li4tr6td4").innerHTML = '70';
            
            document.getElementById("ul2li4tr7").style.display = 'none';
            document.getElementById("ul2li4tr7td1").innerHTML = '';
			document.getElementById("ul2li4tr7td2").innerHTML = '';
			document.getElementById("ul2li4tr7td3").innerHTML = '';
			document.getElementById("ul2li4tr7td4").innerHTML = '';
			
            document.getElementById("ul2li4tr8").style.display = 'none';
            document.getElementById("ul2li4tr8td1").innerHTML = '';
			document.getElementById("ul2li4tr8td2").innerHTML = '';
			document.getElementById("ul2li4tr8td3").innerHTML = '';
			document.getElementById("ul2li4tr8td4").innerHTML = '';
            
            document.getElementById("ul2li4tr9").style.display = 'none';
            document.getElementById("ul2li4tr9td1").innerHTML = '';
			document.getElementById("ul2li4tr9td2").innerHTML = ''
			document.getElementById("ul2li4tr9td3").innerHTML = '';
			document.getElementById("ul2li4tr9td4").innerHTML = '';
            
            document.getElementById("ul2li4tr10").style.display = 'none';
            document.getElementById("ul2li4tr10td1").innerHTML = '';
			document.getElementById("ul2li4tr10td2").innerHTML = '';
			document.getElementById("ul2li4tr10td3").innerHTML = '';
			document.getElementById("ul2li4tr10td4").innerHTML = '';
            
            document.getElementById("ul2li4tr11").style.display = 'none';
            document.getElementById("ul2li4tr11td1").innerHTML = '';
			document.getElementById("ul2li4tr11td2").innerHTML = '';
			document.getElementById("ul2li4tr11td3").innerHTML = '';
			document.getElementById("ul2li4tr11td4").innerHTML = '';
            
            document.getElementById("ul2li4tr12").style.display = 'none';
            document.getElementById("ul2li4tr12td1").innerHTML = '';
			document.getElementById("ul2li4tr12td2").innerHTML = '';
			document.getElementById("ul2li4tr12td3").innerHTML = '';
			document.getElementById("ul2li4tr12td4").innerHTML = '';
            
            document.getElementById("ul2li4tr13").style.display = 'none';
            document.getElementById("ul2li4tr13td1").innerHTML = '';
			document.getElementById("ul2li4tr13td2").innerHTML = '';
			document.getElementById("ul2li4tr13td3").innerHTML = '';
			document.getElementById("ul2li4tr13td4").innerHTML = '';
            
            document.getElementById("ul2li4tr14").style.display = 'none';
            document.getElementById("ul2li4tr14td1").innerHTML = '';
			document.getElementById("ul2li4tr14td2").innerHTML = '';
			document.getElementById("ul2li4tr14td3").innerHTML = '';
			document.getElementById("ul2li4tr14td4").innerHTML = '';

			
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
            
            document.getElementById("ul2li4tr1").style.display = 'table-row';
			document.getElementById("ul2li4tr1td1").innerHTML = '0265';
			document.getElementById("ul2li4tr1td2").innerHTML = 'Mini Ravel 60 mm';
			document.getElementById("ul2li4tr1td3").innerHTML = '16';
			document.getElementById("ul2li4tr1td4").innerHTML = '100';
			
            document.getElementById("ul2li4tr2").style.display = 'table-row';
			document.getElementById("ul2li4tr2td1").innerHTML = '0266';
			document.getElementById("ul2li4tr2td2").innerHTML = 'Mini Ravel 100 mm';
			document.getElementById("ul2li4tr2td3").innerHTML = '16';
			document.getElementById("ul2li4tr2td4").innerHTML = '80';
	
            document.getElementById("ul2li4tr3").style.display = 'table-row';
			document.getElementById("ul2li4tr3td1").innerHTML = '0267';
			document.getElementById("ul2li4tr3td2").innerHTML = 'Mini Ravel 150 mm';
			document.getElementById("ul2li4tr3td3").innerHTML = '16';
			document.getElementById("ul2li4tr3td4").innerHTML = '';
		
            document.getElementById("ul2li4tr4").style.display = 'none';
			document.getElementById("ul2li4tr4td1").innerHTML = '';
			document.getElementById("ul2li4tr4td2").innerHTML = '';
			document.getElementById("ul2li4tr4td3").innerHTML = '';
			document.getElementById("ul2li4tr4td4").innerHTML = '';
            
	        document.getElementById("ul2li4tr5").style.display = 'none';
			document.getElementById("ul2li4tr5td1").innerHTML = '';
			document.getElementById("ul2li4tr5td2").innerHTML = '';
			document.getElementById("ul2li4tr5td3").innerHTML = '';
			document.getElementById("ul2li4tr5td4").innerHTML = '';
		
            document.getElementById("ul2li4tr6").style.display = 'none';
			document.getElementById("ul2li4tr6td1").innerHTML = '';
			document.getElementById("ul2li4tr6td2").innerHTML = '';
			document.getElementById("ul2li4tr6td3").innerHTML = '';
			document.getElementById("ul2li4tr6td4").innerHTML = '';
            
            document.getElementById("ul2li4tr7").style.display = 'none';
            document.getElementById("ul2li4tr7td1").innerHTML = '';
			document.getElementById("ul2li4tr7td2").innerHTML = '';
			document.getElementById("ul2li4tr7td3").innerHTML = '';
			document.getElementById("ul2li4tr7td4").innerHTML = '';
			
            document.getElementById("ul2li4tr8").style.display = 'none';
            document.getElementById("ul2li4tr8td1").innerHTML = '';
			document.getElementById("ul2li4tr8td2").innerHTML = '';
			document.getElementById("ul2li4tr8td3").innerHTML = '';
			document.getElementById("ul2li4tr8td4").innerHTML = '';
            
            document.getElementById("ul2li4tr9").style.display = 'none';
            document.getElementById("ul2li4tr9td1").innerHTML = '';
			document.getElementById("ul2li4tr9td2").innerHTML = ''
			document.getElementById("ul2li4tr9td3").innerHTML = '';
			document.getElementById("ul2li4tr9td4").innerHTML = '';
            
            document.getElementById("ul2li4tr10").style.display = 'none';
            document.getElementById("ul2li4tr10td1").innerHTML = '';
			document.getElementById("ul2li4tr10td2").innerHTML = '';
			document.getElementById("ul2li4tr10td3").innerHTML = '';
			document.getElementById("ul2li4tr10td4").innerHTML = '';
            
            document.getElementById("ul2li4tr11").style.display = 'none';
            document.getElementById("ul2li4tr11td1").innerHTML = '';
			document.getElementById("ul2li4tr11td2").innerHTML = '';
			document.getElementById("ul2li4tr11td3").innerHTML = '';
			document.getElementById("ul2li4tr11td4").innerHTML = '';
            
            document.getElementById("ul2li4tr12").style.display = 'none';
            document.getElementById("ul2li4tr12td1").innerHTML = '';
			document.getElementById("ul2li4tr12td2").innerHTML = '';
			document.getElementById("ul2li4tr12td3").innerHTML = '';
			document.getElementById("ul2li4tr12td4").innerHTML = '';
            
            document.getElementById("ul2li4tr13").style.display = 'none';
            document.getElementById("ul2li4tr13td1").innerHTML = '';
			document.getElementById("ul2li4tr13td2").innerHTML = '';
			document.getElementById("ul2li4tr13td3").innerHTML = '';
			document.getElementById("ul2li4tr13td4").innerHTML = '';
            
            document.getElementById("ul2li4tr14").style.display = 'none';
            document.getElementById("ul2li4tr14td1").innerHTML = '';
			document.getElementById("ul2li4tr14td2").innerHTML = '';
			document.getElementById("ul2li4tr14td3").innerHTML = '';
			document.getElementById("ul2li4tr14td4").innerHTML = '';
			
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
            
            document.getElementById("ul2li4tr1").style.display = 'table-row';
			document.getElementById("ul2li4tr1td1").innerHTML = '0268';
			document.getElementById("ul2li4tr1td2").innerHTML = 'Refill Ravel 60 mm';
			document.getElementById("ul2li4tr1td3").innerHTML = '16';
			document.getElementById("ul2li4tr1td4").innerHTML = '';
			
            document.getElementById("ul2li4tr2").style.display = 'table-row';
			document.getElementById("ul2li4tr2td1").innerHTML = '0269';
			document.getElementById("ul2li4tr2td2").innerHTML = 'Refill Ravel 100 mm';
			document.getElementById("ul2li4tr2td3").innerHTML = '16';
			document.getElementById("ul2li4tr2td4").innerHTML = '300';
			
            document.getElementById("ul2li4tr3").style.display = 'table-row';
			document.getElementById("ul2li4tr3td1").innerHTML = '0270';
			document.getElementById("ul2li4tr3td2").innerHTML = 'Refill Ravel 150 mm';
			document.getElementById("ul2li4tr3td3").innerHTML = '16';
			document.getElementById("ul2li4tr3td4").innerHTML = '';
	
            document.getElementById("ul2li4tr4").style.display = 'table-row';
			document.getElementById("ul2li4tr4td1").innerHTML = '0271';
			document.getElementById("ul2li4tr4td2").innerHTML = 'Pack 2 Refills Ravel 60 mm';
			document.getElementById("ul2li4tr4td3").innerHTML = '16';
			document.getElementById("ul2li4tr4td4").innerHTML = '';
			
            document.getElementById("ul2li4tr5").style.display = 'table-row';
			document.getElementById("ul2li4tr5td1").innerHTML = '0272';
			document.getElementById("ul2li4tr5td2").innerHTML = 'Pack 2 Refills Ravel 100 mm';
			document.getElementById("ul2li4tr5td3").innerHTML = '16';
			document.getElementById("ul2li4tr5td4").innerHTML = '150X2';
			
            document.getElementById("ul2li4tr6").style.display = 'table-row';
			document.getElementById("ul2li4tr6td1").innerHTML = '0273';
			document.getElementById("ul2li4tr6td2").innerHTML = 'Pack 2 Refills Ravel 150 mm';
			document.getElementById("ul2li4tr6td3").innerHTML = '16';
			document.getElementById("ul2li4tr6td4").innerHTML = '';
		
            document.getElementById("ul2li4tr7").style.display = 'table-row';
            document.getElementById("ul2li4tr7td1").innerHTML = '0274';
			document.getElementById("ul2li4tr7td2").innerHTML = 'Blister 16 Refills Ravel 60 mm';
			document.getElementById("ul2li4tr7td3").innerHTML = '16';
			document.getElementById("ul2li4tr7td4").innerHTML = '36X16';
			
            document.getElementById("ul2li4tr8").style.display = 'table-row';
            document.getElementById("ul2li4tr8td1").innerHTML = '0275';
			document.getElementById("ul2li4tr8td2").innerHTML = 'Blister 10 Refills Ravel 100 mm';
			document.getElementById("ul2li4tr8td3").innerHTML = '16';
			document.getElementById("ul2li4tr8td4").innerHTML = '36X10';
            
            document.getElementById("ul2li4tr9").style.display = 'table-row';
            document.getElementById("ul2li4tr9td1").innerHTML = '0219';
			document.getElementById("ul2li4tr9td2").innerHTML = 'Refill Ravel 120 mm';
			document.getElementById("ul2li4tr9td3").innerHTML = '30';
			document.getElementById("ul2li4tr9td4").innerHTML = '';
            
            document.getElementById("ul2li4tr10").style.display = 'table-row';
            document.getElementById("ul2li4tr10td1").innerHTML = '0220';
			document.getElementById("ul2li4tr10td2").innerHTML = 'Refill Ravel 150 mm';
			document.getElementById("ul2li4tr10td3").innerHTML = '30';
			document.getElementById("ul2li4tr10td4").innerHTML = '';
            
            document.getElementById("ul2li4tr11").style.display = 'table-row';
            document.getElementById("ul2li4tr11td1").innerHTML = '0223';
			document.getElementById("ul2li4tr11td2").innerHTML = 'Pack 2 Refills Ravel 120 mm';
			document.getElementById("ul2li4tr11td3").innerHTML = '30';
			document.getElementById("ul2li4tr11td4").innerHTML = '';
            
            document.getElementById("ul2li4tr12").style.display = 'table-row';
            document.getElementById("ul2li4tr12td1").innerHTML = '0224';
			document.getElementById("ul2li4tr12td2").innerHTML = 'Pack 2 Refills Ravel 150 mm';
			document.getElementById("ul2li4tr12td3").innerHTML = '30';
			document.getElementById("ul2li4tr12td4").innerHTML = '';
            
            document.getElementById("ul2li4tr13").style.display = 'table-row';
            document.getElementById("ul2li4tr13td1").innerHTML = '0222';
			document.getElementById("ul2li4tr13td2").innerHTML = 'Blister 6 Refills Ravel 120 mm';
			document.getElementById("ul2li4tr13td3").innerHTML = '30';
			document.getElementById("ul2li4tr13td4").innerHTML = '';
            
            document.getElementById("ul2li4tr14").style.display = 'table-row';
            document.getElementById("ul2li4tr14td1").innerHTML = '0221';
			document.getElementById("ul2li4tr14td2").innerHTML = 'Blister 10 Refills Ravel 150 mm';
			document.getElementById("ul2li4tr14td3").innerHTML = '30';
			document.getElementById("ul2li4tr14td4").innerHTML = '';
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
            
            
            document.getElementById("ul3li1tr1").style.display = 'table-row';
			document.getElementById("ul3li1tr1td1").innerHTML = '0075';
			document.getElementById("ul3li1tr1td2").innerHTML = 'Roller Rugo 60 mm';
			document.getElementById("ul3li1tr1td3").innerHTML = '75';
			document.getElementById("ul3li1tr1td4").innerHTML = '24';
			
		    document.getElementById("ul3li1tr2").style.display = 'table-row';
			document.getElementById("ul3li1tr2td1").innerHTML = '0076';
			document.getElementById("ul3li1tr2td2").innerHTML = 'Roller Rugo 180 mm';
			document.getElementById("ul3li1tr2td3").innerHTML = '75';
			document.getElementById("ul3li1tr2td4").innerHTML = '45';
		
            document.getElementById("ul3li1tr3").style.display = 'table-row';
			document.getElementById("ul3li1tr3td1").innerHTML = '0077';
			document.getElementById("ul3li1tr3td2").innerHTML = 'Roller Rugo 220 mm';
			document.getElementById("ul3li1tr3td3").innerHTML = '75';
			document.getElementById("ul3li1tr3td4").innerHTML = '40';
		
            document.getElementById("ul3li1tr4").style.display = 'table-row';
			document.getElementById("ul3li1tr4td1").innerHTML = '0078';
			document.getElementById("ul3li1tr4td2").innerHTML = 'Roller Rugo 250 mm';
			document.getElementById("ul3li1tr4td3").innerHTML = '75';
			document.getElementById("ul3li1tr4td4").innerHTML = '40';
			
            document.getElementById("ul3li1tr5").style.display = 'table-row';
			document.getElementById("ul3li1tr5td1").innerHTML = '0079';
			document.getElementById("ul3li1tr5td2").innerHTML = 'Roller Rugo de Canto';
			document.getElementById("ul3li1tr5td3").innerHTML = '120';
			document.getElementById("ul3li1tr5td4").innerHTML = '24';

            
			
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
            
            
            document.getElementById("ul3li1tr1").style.display = 'table-row';
			document.getElementById("ul3li1tr1td1").innerHTML = '0032';
			document.getElementById("ul3li1tr1td2").innerHTML = 'Refill Rugo 60 mm';
			document.getElementById("ul3li1tr1td3").innerHTML = '75';
			document.getElementById("ul3li1tr1td4").innerHTML = '';
			
            document.getElementById("ul3li1tr2").style.display = 'table-row';
			document.getElementById("ul3li1tr2td1").innerHTML = '0033';
			document.getElementById("ul3li1tr2td2").innerHTML = 'Refill Rugo 180 mm';
			document.getElementById("ul3li1tr2td3").innerHTML = '75';
			document.getElementById("ul3li1tr2td4").innerHTML = '80';
			
            document.getElementById("ul3li1tr3").style.display = 'table-row';
			document.getElementById("ul3li1tr3td1").innerHTML = '0034';
			document.getElementById("ul3li1tr3td2").innerHTML = 'Refill Rugo 220 mm';
			document.getElementById("ul3li1tr3td3").innerHTML = '75';
			document.getElementById("ul3li1tr3td4").innerHTML = '65';
		
            document.getElementById("ul3li1tr4").style.display = 'table-row';
			document.getElementById("ul3li1tr4td1").innerHTML = '0035';
			document.getElementById("ul3li1tr4td2").innerHTML = 'Refill Rugo 250 mm';
			document.getElementById("ul3li1tr4td3").innerHTML = '75';
			document.getElementById("ul3li1tr4td4").innerHTML = '60';
		
            document.getElementById("ul3li1tr5").style.display = 'table-row';
			document.getElementById("ul3li1tr5td1").innerHTML = '0036';
			document.getElementById("ul3li1tr5td2").innerHTML = 'Refill Rugo de Canto';
			document.getElementById("ul3li1tr5td3").innerHTML = '120';
			document.getElementById("ul3li1tr5td4").innerHTML = '';
			
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
            
            document.getElementById("ul3li1tr1").style.display = 'table-row';
			document.getElementById("ul3li1tr1td1").innerHTML = '0235';
			document.getElementById("ul3li1tr1td2").innerHTML = 'Mini Rugo 110 mm';
			document.getElementById("ul3li1tr1td3").innerHTML = '16';
			document.getElementById("ul3li1tr1td4").innerHTML = '100';
			
            document.getElementById("ul3li1tr2").style.display = 'none';
			document.getElementById("ul3li1tr2td1").innerHTML = '';
			document.getElementById("ul3li1tr2td2").innerHTML = '';
			document.getElementById("ul3li1tr2td3").innerHTML = '';
			document.getElementById("ul3li1tr2td4").innerHTML = '';
		
            document.getElementById("ul3li1tr3").style.display = 'none';
			document.getElementById("ul3li1tr3td1").innerHTML = '';
			document.getElementById("ul3li1tr3td2").innerHTML = '';
			document.getElementById("ul3li1tr3td3").innerHTML = '';
			document.getElementById("ul3li1tr3td4").innerHTML = '';
	
            document.getElementById("ul3li1tr4").style.display = 'none';
			document.getElementById("ul3li1tr4td1").innerHTML = '';
			document.getElementById("ul3li1tr4td2").innerHTML = '';
			document.getElementById("ul3li1tr4td3").innerHTML = '';
			document.getElementById("ul3li1tr4td4").innerHTML = '';
	
            document.getElementById("ul3li1tr5").style.display = 'none';
            document.getElementById("ul3li1tr5td1").innerHTML = '';
			document.getElementById("ul3li1tr5td2").innerHTML = '';
			document.getElementById("ul3li1tr5td3").innerHTML = '';
			document.getElementById("ul3li1tr5td4").innerHTML = '';
		
			
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
            
            document.getElementById("ul3li1tr1").style.display = 'table-row';
			document.getElementById("ul3li1tr1td1").innerHTML = '0245';
			document.getElementById("ul3li1tr1td2").innerHTML = 'Refill Rugo 110 mm';
			document.getElementById("ul3li1tr1td3").innerHTML = '16';
			document.getElementById("ul3li1tr1td4").innerHTML = '100';
		
            document.getElementById("ul3li1tr2").style.display = 'table-row';
			document.getElementById("ul3li1tr2td1").innerHTML = '0246';
			document.getElementById("ul3li1tr2td2").innerHTML = 'Pack 2 Refills Rugo 110 mm';
			document.getElementById("ul3li1tr2td3").innerHTML = '16';
			document.getElementById("ul3li1tr2td4").innerHTML = '150X2';
			
            document.getElementById("ul3li1tr3").style.display = 'table-row';
			document.getElementById("ul3li1tr3td1").innerHTML = '0236';
			document.getElementById("ul3li1tr3td2").innerHTML = 'Blister 10 Refills Rugo 110 mm';
			document.getElementById("ul3li1tr3td3").innerHTML = '16'; 
			document.getElementById("ul3li1tr3td4").innerHTML = '40X10';
	
            document.getElementById("ul3li1tr4").style.display = 'none';
			document.getElementById("ul3li1tr4td1").innerHTML = '';
			document.getElementById("ul3li1tr4td2").innerHTML = '';
			document.getElementById("ul3li1tr4td3").innerHTML = '';
			document.getElementById("ul3li1tr4td4").innerHTML = '';
            
            document.getElementById("ul3li1tr5").style.display = 'none';
            document.getElementById("ul3li1tr5td1").innerHTML = '';
			document.getElementById("ul3li1tr5td2").innerHTML = '';
			document.getElementById("ul3li1tr5td3").innerHTML = '';
			document.getElementById("ul3li1tr5td4").innerHTML = '';

			
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

            
            document.getElementById("ul3li2tr1").style.display = 'table-row';
			document.getElementById("ul3li2tr1td1").innerHTML = '0049';
			document.getElementById("ul3li2tr1td2").innerHTML = 'Roller Super 180 mm';
			document.getElementById("ul3li2tr1td3").innerHTML = '45';
			document.getElementById("ul3li2tr1td4").innerHTML = '60'
            
            document.getElementById("ul3li2tr2").style.display = 'table-row';
			document.getElementById("ul3li2tr2td1").innerHTML = '0050';
			document.getElementById("ul3li2tr2td2").innerHTML = 'Roller Super 220 mm';
			document.getElementById("ul3li2tr2td3").innerHTML = '45';
		    document.getElementById("ul3li2tr2td4").innerHTML = '55';
            
            document.getElementById("ul3li2tr3").style.display = 'table-row';
			document.getElementById("ul3li2tr3td1").innerHTML = '0051';
			document.getElementById("ul3li2tr3td2").innerHTML = 'Roller Super 250 mm';
			document.getElementById("ul3li2tr3td3").innerHTML = '45';
			document.getElementById("ul3li2tr3td4").innerHTML = '50';
			
            /*document.getElementById("ul3li2tr4").style.display = 'none';
			document.getElementById("ul3li2tr4td1").innerHTML = '';
			document.getElementById("ul3li2tr4td2").innerHTML = '';
			document.getElementById("ul3li2tr4td3").innerHTML = '';
			document.getElementById("ul3li2tr4td4").innerHTML = '';
            
            document.getElementById("ul3li2tr5").style.display = 'none';
			document.getElementById("ul3li2tr5td1").innerHTML = '';
			document.getElementById("ul3li2tr5td2").innerHTML = '';
			document.getElementById("ul3li2tr5td3").innerHTML = '';
			document.getElementById("ul3li2tr5td4").innerHTML = '';
            
            document.getElementById("ul3li2tr6").style.display = 'none';
			document.getElementById("ul3li2tr6td1").innerHTML = '';
			document.getElementById("ul3li2tr6td2").innerHTML = '';
			document.getElementById("ul3li2tr6td3").innerHTML = '';
			document.getElementById("ul3li2tr6td4").innerHTML = '';
            
            document.getElementById("ul3li2tr7").style.display = 'none';
			document.getElementById("ul3li2tr7td1").innerHTML = '';
			document.getElementById("ul3li2tr7td2").innerHTML = '';
			document.getElementById("ul3li2tr7td3").innerHTML = '';
			document.getElementById("ul3li2tr7td4").innerHTML = '';*/
            
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
            
            document.getElementById("ul3li2tr1").style.display = 'table-row';
			document.getElementById("ul3li2tr1td1").innerHTML = '0006';
			document.getElementById("ul3li2tr1td2").innerHTML = 'Refill Super 180 mm';
			document.getElementById("ul3li2tr1td3").innerHTML = '45';
			document.getElementById("ul3li2tr1td4").innerHTML = '140';
			
            document.getElementById("ul3li2tr2").style.display = 'table-row';
			document.getElementById("ul3li2tr2td1").innerHTML = '0007';
			document.getElementById("ul3li2tr2td2").innerHTML = 'Refill Super 220 mm';
			document.getElementById("ul3li2tr2td3").innerHTML = '45';
			document.getElementById("ul3li2tr2td4").innerHTML = '120';
			
            document.getElementById("ul3li2tr3").style.display = 'table-row';
			document.getElementById("ul3li2tr3td1").innerHTML = '0008';
			document.getElementById("ul3li2tr3td2").innerHTML = 'Refill Super 250 mm';
			document.getElementById("ul3li2tr3td3").innerHTML = '45';
			document.getElementById("ul3li2tr3td4").innerHTML = '100';
            

            /*document.getElementById("ul3li2tr4").style.display = 'none';
			document.getElementById("ul3li2tr4td1").innerHTML = '';
			document.getElementById("ul3li2tr4td2").innerHTML = '';
			document.getElementById("ul3li2tr4td3").innerHTML = '';
			document.getElementById("ul3li2tr4td4").innerHTML = '';
            
            document.getElementById("ul3li2tr5").style.display = 'none';
			document.getElementById("ul3li2tr5td1").innerHTML = '';
			document.getElementById("ul3li2tr5td2").innerHTML = '';
			document.getElementById("ul3li2tr5td3").innerHTML = '';
			document.getElementById("ul3li2tr5td4").innerHTML = '';
            
            document.getElementById("ul3li2tr6").style.display = 'none';
			document.getElementById("ul3li2tr6td1").innerHTML = '';
			document.getElementById("ul3li2tr6td2").innerHTML = '';
			document.getElementById("ul3li2tr6td3").innerHTML = '';
			document.getElementById("ul3li2tr6td4").innerHTML = '';
            
            document.getElementById("ul3li2tr7").style.display = 'none';
			document.getElementById("ul3li2tr7td1").innerHTML = '';
			document.getElementById("ul3li2tr7td2").innerHTML = '';
			document.getElementById("ul3li2tr7td3").innerHTML = '';
			document.getElementById("ul3li2tr7td4").innerHTML = '';*/
		
			
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
            
            document.getElementById("ul3li2tr1").style.display = 'table-row';
			document.getElementById("ul3li2tr1td1").innerHTML = 'Mini Roller Super 100 mm';
			document.getElementById("ul3li2tr1td2").innerHTML = '0365';
			document.getElementById("ul3li2tr1td3").innerHTML = '16';
			document.getElementById("ul3li2tr1td4").innerHTML = '100';
            
            document.getElementById("ul3li2tr2").style.display = 'none';
			document.getElementById("ul3li2tr2td1").innerHTML = '';
			document.getElementById("ul3li2tr2td2").innerHTML = '';
			document.getElementById("ul3li2tr2td3").innerHTML = '';
			document.getElementById("ul3li2tr2td4").innerHTML = '';
            
            document.getElementById("ul3li2tr3").style.display = 'none';
			document.getElementById("ul3li2tr3td1").innerHTML = '';
			document.getElementById("ul3li2tr3td2").innerHTML = '';
			document.getElementById("ul3li2tr3td3").innerHTML = '';
			document.getElementById("ul3li2tr3td4").innerHTML = '';
            
            /*document.getElementById("ul3li2tr4").style.display = 'none';
			document.getElementById("ul3li2tr4td1").innerHTML = '';
			document.getElementById("ul3li2tr4td2").innerHTML = '';
			document.getElementById("ul3li2tr4td3").innerHTML = '';
			document.getElementById("ul3li2tr4td4").innerHTML = '';
            
            document.getElementById("ul3li2tr5").style.display = 'none';
			document.getElementById("ul3li2tr5td1").innerHTML = '';
			document.getElementById("ul3li2tr5td2").innerHTML = '';
			document.getElementById("ul3li2tr5td3").innerHTML = '';
			document.getElementById("ul3li2tr5td4").innerHTML = '';
            
            document.getElementById("ul3li2tr6").style.display = 'none';
			document.getElementById("ul3li2tr6td1").innerHTML = '';
			document.getElementById("ul3li2tr6td2").innerHTML = '';
			document.getElementById("ul3li2tr6td3").innerHTML = '';
			document.getElementById("ul3li2tr6td4").innerHTML = '';
            
            document.getElementById("ul3li2tr7").style.display = 'none';
			document.getElementById("ul3li2tr7td1").innerHTML = '';
			document.getElementById("ul3li2tr7td2").innerHTML = '';
			document.getElementById("ul3li2tr7td3").innerHTML = '';
			document.getElementById("ul3li2tr7td4").innerHTML = '';*/
			
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
            
            document.getElementById("ul3li2tr1").style.display = 'table-row';
			document.getElementById("ul3li2tr1td1").innerHTML = 'Refill Super 100 mm';
			document.getElementById("ul3li2tr1td2").innerHTML = '0278';
			document.getElementById("ul3li2tr1td3").innerHTML = '16';
			document.getElementById("ul3li2tr1td4").innerHTML = '300';
            
            document.getElementById("ul3li2tr2").style.display = 'table-row';
			document.getElementById("ul3li2tr2td1").innerHTML = 'Pack 2 Refills Super 100 mm';
			document.getElementById("ul3li2tr2td2").innerHTML = '0279';
			document.getElementById("ul3li2tr2td3").innerHTML = '16';
			document.getElementById("ul3li2tr2td4").innerHTML = '200X2';
            
            document.getElementById("ul3li2tr3").style.display = 'table-row';
			document.getElementById("ul3li2tr3td1").innerHTML = 'Blister 10 Refills Super 100 mm';
			document.getElementById("ul3li2tr3td2").innerHTML = '0366';
			document.getElementById("ul3li2tr3td3").innerHTML = '16';
			document.getElementById("ul3li2tr3td4").innerHTML = '40X10';
            
            /*document.getElementById("ul3li2tr4").style.display = 'none';
			document.getElementById("ul3li2tr4td1").innerHTML = '';
			document.getElementById("ul3li2tr4td2").innerHTML = '';
			document.getElementById("ul3li2tr4td3").innerHTML = '';
			document.getElementById("ul3li2tr4td4").innerHTML = '';
            
            document.getElementById("ul3li2tr5").style.display = 'none';
			document.getElementById("ul3li2tr5td1").innerHTML = '';
			document.getElementById("ul3li2tr5td2").innerHTML = '';
			document.getElementById("ul3li2tr5td3").innerHTML = '';
			document.getElementById("ul3li2tr5td4").innerHTML = '';
            
            document.getElementById("ul3li2tr6").style.display = 'none';
			document.getElementById("ul3li2tr6td1").innerHTML = '';
			document.getElementById("ul3li2tr6td2").innerHTML = '';
			document.getElementById("ul3li2tr6td3").innerHTML = '';
			document.getElementById("ul3li2tr6td4").innerHTML = '';
            
            document.getElementById("ul3li2tr7").style.display = 'none';
			document.getElementById("ul3li2tr7td1").innerHTML = '';
			document.getElementById("ul3li2tr7td2").innerHTML = '';
			document.getElementById("ul3li2tr7td3").innerHTML = '';
			document.getElementById("ul3li2tr7td4").innerHTML = '';*/
            
            
			
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
            
            document.getElementById("ul3li3tr1").style.display = 'table-row';
			document.getElementById("ul3li3tr1td1").innerHTML = '0069';
			document.getElementById("ul3li3tr1td2").innerHTML = 'Roller Merino 180 mm';
			document.getElementById("ul3li3tr1td3").innerHTML = '45';
			document.getElementById("ul3li3tr1td4").innerHTML = '55';
            
            
            document.getElementById("ul3li3tr2").style.display = 'table-row';
			document.getElementById("ul3li3tr2td1").innerHTML = '0070';
			document.getElementById("ul3li3tr2td2").innerHTML = 'Roller Merino 220 mm';
			document.getElementById("ul3li3tr2td3").innerHTML = '45';
			document.getElementById("ul3li3tr2td4").innerHTML = '50';
            
            document.getElementById("ul3li3tr3").style.display = 'table-row';
			document.getElementById("ul3li3tr3td1").innerHTML = '0071';
			document.getElementById("ul3li3tr3td2").innerHTML = 'Roller Merino 250 mm';
			document.getElementById("ul3li3tr3td3").innerHTML = '45';
			document.getElementById("ul3li3tr3td4").innerHTML = '45';
            
            document.getElementById("ul3li3tr4").style.display = 'table-row';
			document.getElementById("ul3li3tr4td1").innerHTML = '0155';
			document.getElementById("ul3li3tr4td2").innerHTML = 'Roller Merino 180 mm';
			document.getElementById("ul3li3tr4td3").innerHTML = '50';
			document.getElementById("ul3li3tr4td4").innerHTML = '55';
            
            document.getElementById("ul3li3tr5").style.display = 'table-row';
			document.getElementById("ul3li3tr5td1").innerHTML = '0156';
			document.getElementById("ul3li3tr5td2").innerHTML = 'Roller Merino 220 mm';
			document.getElementById("ul3li3tr5td3").innerHTML = '50';
			document.getElementById("ul3li3tr5td4").innerHTML = '50';
            
            document.getElementById("ul3li3tr6").style.display = 'table-row';
			document.getElementById("ul3li3tr6td1").innerHTML = '0157';
			document.getElementById("ul3li3tr6td2").innerHTML = 'Roller Merino 250 mm';
			document.getElementById("ul3li3tr6td3").innerHTML = '50';
			document.getElementById("ul3li3tr6td4").innerHTML = '45';
			
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
            
            document.getElementById("ul3li3tr1").style.display = 'table-row';
			document.getElementById("ul3li3tr1td1").innerHTML = '0026';
			document.getElementById("ul3li3tr1td2").innerHTML = 'Refill Merino 180 mm';
			document.getElementById("ul3li3tr1td3").innerHTML = '45';
			document.getElementById("ul3li3tr1td4").innerHTML = '140';
            
            document.getElementById("ul3li3tr2").style.display = 'table-row';
			document.getElementById("ul3li3tr2td1").innerHTML = '0027';
			document.getElementById("ul3li3tr2td2").innerHTML = 'Refill Merino 220 mm';
			document.getElementById("ul3li3tr2td3").innerHTML = '45';
			document.getElementById("ul3li3tr2td4").innerHTML = '120';
            
            document.getElementById("ul3li3tr3").style.display = 'table-row';
			document.getElementById("ul3li3tr3td1").innerHTML = '0028';
			document.getElementById("ul3li3tr3td2").innerHTML = 'Refill Merino 250 mm';
			document.getElementById("ul3li3tr3td3").innerHTML = '45';
			document.getElementById("ul3li3tr3td4").innerHTML = '100';
            
            document.getElementById("ul3li3tr4").style.display = 'table-row';
			document.getElementById("ul3li3tr4td1").innerHTML = '0137';
			document.getElementById("ul3li3tr4td2").innerHTML = 'Refill Merino 180 mm';
			document.getElementById("ul3li3tr4td3").innerHTML = '50';
			document.getElementById("ul3li3tr4td4").innerHTML = '100';
            
            document.getElementById("ul3li3tr5").style.display = 'table-row';
			document.getElementById("ul3li3tr5td1").innerHTML = '0138';
			document.getElementById("ul3li3tr5td2").innerHTML = 'Refill Merino 220 mm';
			document.getElementById("ul3li3tr5td3").innerHTML = '50';
			document.getElementById("ul3li3tr5td4").innerHTML = '90';
            
            document.getElementById("ul3li3tr6").style.display = 'table-row';
			document.getElementById("ul3li3tr6td1").innerHTML = '0139';
			document.getElementById("ul3li3tr6td2").innerHTML = 'Refill Merino 250 mm';
			document.getElementById("ul3li3tr6td3").innerHTML = '50';
			document.getElementById("ul3li3tr6td4").innerHTML = '70';
			
            
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
			document.getElementById("ul3li3tr1td1").innerHTML = '';
			document.getElementById("ul3li3tr1td2").innerHTML = '';
			document.getElementById("ul3li3tr1td3").innerHTML = '';
			document.getElementById("ul3li3tr1td4").innerHTML = '';
			document.getElementById("ul3li3tr2td1").innerHTML = '';
			document.getElementById("ul3li3tr2td2").innerHTML = '';
			document.getElementById("ul3li3tr2td3").innerHTML = '';
			document.getElementById("ul3li3tr2td4").innerHTML = '';
			document.getElementById("ul3li3tr3td1").innerHTML = '';
			document.getElementById("ul3li3tr3td2").innerHTML = '';
			document.getElementById("ul3li3tr3td3").innerHTML = '';
			document.getElementById("ul3li3tr3td4").innerHTML = '';
			document.getElementById("ul3li3tr4td1").innerHTML = '';
			document.getElementById("ul3li3tr4td2").innerHTML = '';
			document.getElementById("ul3li3tr4td3").innerHTML = '';
			document.getElementById("ul3li3tr4td4").innerHTML = '';
			document.getElementById("ul3li3tr5td1").innerHTML = '';
			document.getElementById("ul3li3tr5td2").innerHTML = '';
			document.getElementById("ul3li3tr5td3").innerHTML = '';
			document.getElementById("ul3li3tr5td4").innerHTML = '';
			document.getElementById("ul3li3tr6td1").innerHTML = '';
			document.getElementById("ul3li3tr6td2").innerHTML = '';
			document.getElementById("ul3li3tr6td3").innerHTML = '';
			document.getElementById("ul3li3tr6td4").innerHTML = '';
			document.getElementById("ul3li3tr7td1").innerHTML = '';
			document.getElementById("ul3li3tr7td2").innerHTML = '';
			document.getElementById("ul3li3tr7td3").innerHTML = '';
			document.getElementById("ul3li3tr7td4").innerHTML = '';
			
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
			document.getElementById("ul3li3tr1td1").innerHTML = '';
			document.getElementById("ul3li3tr1td2").innerHTML = '';
			document.getElementById("ul3li3tr1td3").innerHTML = '';
			document.getElementById("ul3li3tr1td4").innerHTML = '';
			document.getElementById("ul3li3tr2td1").innerHTML = '';
			document.getElementById("ul3li3tr2td2").innerHTML = '';
			document.getElementById("ul3li3tr2td3").innerHTML = '';
			document.getElementById("ul3li3tr2td4").innerHTML = '';
			document.getElementById("ul3li3tr3td1").innerHTML = '';
			document.getElementById("ul3li3tr3td2").innerHTML = '';
			document.getElementById("ul3li3tr3td3").innerHTML = '';
			document.getElementById("ul3li3tr3td4").innerHTML = '';
			document.getElementById("ul3li3tr4td1").innerHTML = '';
			document.getElementById("ul3li3tr4td2").innerHTML = '';
			document.getElementById("ul3li3tr4td3").innerHTML = '';
			document.getElementById("ul3li3tr4td4").innerHTML = '';
			document.getElementById("ul3li3tr5td1").innerHTML = '';
			document.getElementById("ul3li3tr5td2").innerHTML = '';
			document.getElementById("ul3li3tr5td3").innerHTML = '';
			document.getElementById("ul3li3tr5td4").innerHTML = '';
			document.getElementById("ul3li3tr6td1").innerHTML = '';
			document.getElementById("ul3li3tr6td2").innerHTML = '';
			document.getElementById("ul3li3tr6td3").innerHTML = '';
			document.getElementById("ul3li3tr6td4").innerHTML = '';
			document.getElementById("ul3li3tr7td1").innerHTML = '';
			document.getElementById("ul3li3tr7td2").innerHTML = '';
			document.getElementById("ul3li3tr7td3").innerHTML = '';
			document.getElementById("ul3li3tr7td4").innerHTML = '';
			
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
            document.getElementById('accCoberturas').style.fontSize = '0.8em';
			document.getElementById('accArmacoesN').style.fontWeight = 'bold';
			document.getElementById('accTabuleiros').style.fontWeight = 'normal';
            document.getElementById('accBetumadeira').style.fontWeight = 'normal';
            document.getElementById('accBalde').style.fontWeight = 'normal';
            document.getElementById('accCoberturas').style.fontWeight = 'normal';
			document.getElementById('accArmacoesN').style.color = '#FFF';
			document.getElementById('accTabuleiros').style.color = '#FFF';
            document.getElementById('accBetumadeira').style.color = '#FFF';
            document.getElementById('accBalde').style.color = '#FFF';
            document.getElementById('accCoberturas').style.color = '#FFF';
            document.getElementById('ul3li4m1').className = "activeMenu";
            document.getElementById('ul3li4m2').className = "";
            document.getElementById('ul3li4m3').className = "";
            document.getElementById('ul3li4m4').className = "";
            document.getElementById('ul3li4m6').className = "";
            
            document.getElementById("ul3li4tr1").style.display = 'table-row';
			document.getElementById("ul3li4tr1td1").innerHTML = '0295';
			document.getElementById("ul3li4tr1td2").innerText = 'Frame for Mini Paint Rollers';
			document.getElementById("ul3li4tr1td3").innerHTML = '50 mm';
			document.getElementById("ul3li4tr1td4").innerHTML = '';
			
			document.getElementById("ul3li4tr2").style.display = 'table-row';
			document.getElementById("ul3li4tr2td1").innerHTML = '0100';
			document.getElementById("ul3li4tr2td2").innerHTML = 'Short Frame for Mini Paint Rollers';
			document.getElementById("ul3li4tr2td3").innerHTML = '100 mm';
			document.getElementById("ul3li4tr2td4").innerHTML = '';
			
			document.getElementById("ul3li4tr3").style.display = 'table-row';
			document.getElementById("ul3li4tr3td1").innerHTML = '0101';
			document.getElementById("ul3li4tr3td2").innerHTML = 'Long Frame for Mini Paint Rollers';
			document.getElementById("ul3li4tr3td3").innerHTML = '100 mm';
			document.getElementById("ul3li4tr3td4").innerHTML = '';
			
			document.getElementById("ul3li4tr4").style.display = 'table-row';
			document.getElementById("ul3li4tr4td1").innerHTML = '0341';
			document.getElementById("ul3li4tr4td2").innerHTML = 'Frame for Paint Rollers';
			document.getElementById("ul3li4tr4td3").innerHTML = '60 mm';
			document.getElementById("ul3li4tr4td4").innerHTML = '';
			
			document.getElementById("ul3li4tr5").style.display = 'table-row';
			document.getElementById("ul3li4tr5td1").innerHTML = '0339';
			document.getElementById("ul3li4tr5td2").innerHTML = 'Frame for Paint Rollers';
			document.getElementById("ul3li4tr5td3").innerHTML = '100 mm';
			document.getElementById("ul3li4tr5td4").innerHTML = '';
			
			document.getElementById("ul3li4tr6").style.display = 'table-row';
			document.getElementById("ul3li4tr6td1").innerHTML = '0282';
			document.getElementById("ul3li4tr6td2").innerHTML = 'Frame for Paint Rollers';
			document.getElementById("ul3li4tr6td3").innerHTML = '150 mm';
			document.getElementById("ul3li4tr6td4").innerHTML = '';
			
			document.getElementById("ul3li4tr7").style.display = 'table-row';
			document.getElementById("ul3li4tr7td1").innerHTML = '0305';
			document.getElementById("ul3li4tr7td2").innerHTML = 'Frame for Paint Rollers';
			document.getElementById("ul3li4tr7td3").innerHTML = '180 mm';	
			document.getElementById("ul3li4tr7td4").innerHTML = '';	
			
			document.getElementById("ul3li4tr8").style.display = 'table-row';
			document.getElementById("ul3li4tr8td1").innerHTML = '0297';
			document.getElementById("ul3li4tr8td2").innerHTML = 'Frame for Paint Rollers';
			document.getElementById("ul3li4tr8td3").innerHTML = '220 mm';
			document.getElementById("ul3li4tr8td4").innerHTML = '';
			
			document.getElementById("ul3li4tr9").style.display = 'table-row';
			document.getElementById("ul3li4tr9td1").innerHTML = '0300';
			document.getElementById("ul3li4tr9td2").innerHTML = 'Frame for Paint Rollers';
			document.getElementById("ul3li4tr9td3").innerHTML = '250 mm';
			document.getElementById("ul3li4tr9td4").innerHTML = '';
			
			document.getElementById("ul3li4tr10").style.display = 'table-row';
			document.getElementById("ul3li4tr10td1").innerHTML = '0296';
			document.getElementById("ul3li4tr10td2").innerText = 'Frame for Brushes';
			document.getElementById("ul3li4tr10td3").innerHTML = '';
			document.getElementById("ul3li4tr10td4").innerHTML = '500';
			
			document.getElementById("ul3li4tr11").style.display = 'table-row';
			document.getElementById("ul3li4tr11td1").innerHTML = '0332';
			document.getElementById("ul3li4tr11td2").innerText = 'Handles for Paint Rollers';
			document.getElementById("ul3li4tr11td3").innerHTML = '';
			document.getElementById("ul3li4tr11td4").innerHTML = '250';
			
			

			
			
		});

							   
		$('#accTabuleirosN').click(function() {
			$("#rightImageAcessorios").attr('src', 'images/acessorios/tabuleiros_500_375.jpg');
			document.getElementById('accArmacoesN').style.fontSize = '0.8em';
			document.getElementById('accTabuleiros').style.fontSize = '1.0em';
            document.getElementById('accBetumadeira').style.fontSize = '0.8em';
            document.getElementById('accBalde').style.fontSize = '0.8em';
            document.getElementById('accCoberturas').style.fontSize = '0.8em';
			document.getElementById('accArmacoesN').style.fontWeight = 'normal';
			document.getElementById('accTabuleiros').style.fontWeight = 'bold';
            document.getElementById('accBetumadeira').style.fontWeight = 'normal';
            document.getElementById('accBalde').style.fontWeight = 'normal';
            document.getElementById('accCoberturas').style.fontWeight = 'normal';
			document.getElementById('accArmacoesN').style.color = '#FFF';
			document.getElementById('accTabuleiros').style.color = '#FFF';
            document.getElementById('accBetumadeira').style.color = '#FFF';
            document.getElementById('accBalde').style.color = '#FFF';
            document.getElementById('accCoberturas').style.color = '#FFF';
            document.getElementById('ul3li4m1').className = "";
            document.getElementById('ul3li4m2').className = "activeMenu";
            document.getElementById('ul3li4m3').className = "";
            document.getElementById('ul3li4m4').className = "";
            document.getElementById('ul3li4m6').className = "";
            
            document.getElementById("ul3li4tr1").style.display = 'table-row';
			document.getElementById("ul3li4tr1td1").innerHTML = '0102';
			document.getElementById("ul3li4tr1td2").innerHTML = 'Paint Tray';
			document.getElementById("ul3li4tr1td3").innerHTML = 'Mini';
			document.getElementById("ul3li4tr1td4").innerHTML = '110';
			
			document.getElementById("ul3li4tr2").style.display = 'table-row';
			document.getElementById("ul3li4tr2td1").innerHTML = '0103';
			document.getElementById("ul3li4tr2td2").innerHTML = 'Paint Tray';
			document.getElementById("ul3li4tr2td3").innerHTML = 'Pequeno';
			document.getElementById("ul3li4tr2td4").innerHTML = '20';
			
			document.getElementById("ul3li4tr3").style.display = 'table-row';
			document.getElementById("ul3li4tr3td1").innerHTML = '0104';
			document.getElementById("ul3li4tr3td2").innerHTML = 'Paint Tray';
			document.getElementById("ul3li4tr3td3").innerHTML = 'Grande';
			document.getElementById("ul3li4tr3td4").innerHTML = '20';
			
            document.getElementById("ul3li4tr4").style.display = 'table-row';
			document.getElementById("ul3li4tr4td1").innerHTML = '0304';
			document.getElementById("ul3li4tr4td2").innerHTML = 'Handles for Paint Trays';
			document.getElementById("ul3li4tr4td3").innerHTML = '';
			document.getElementById("ul3li4tr4td4").innerHTML = '200';
			
            document.getElementById("ul3li4tr5").style.display = 'none';
			document.getElementById("ul3li4tr5td1").innerHTML = '';
			document.getElementById("ul3li4tr5td2").innerHTML = '';
			document.getElementById("ul3li4tr5td3").innerHTML = '';
			document.getElementById("ul3li4tr5td4").innerHTML = '';
            
            document.getElementById("ul3li4tr6").style.display = 'none';
			document.getElementById("ul3li4tr6td1").innerHTML = '';
			document.getElementById("ul3li4tr6td2").innerHTML = '';
			document.getElementById("ul3li4tr6td3").innerHTML = '';
			document.getElementById("ul3li4tr6td4").innerHTML = '';
			
            document.getElementById("ul3li4tr7").style.display = 'none';
			document.getElementById("ul3li4tr7td1").innerHTML = '';
			document.getElementById("ul3li4tr7td2").innerHTML = '';
			document.getElementById("ul3li4tr7td3").innerHTML = '';
			document.getElementById("ul3li4tr7td4").innerHTML = '';
            
            document.getElementById("ul3li4tr8").style.display = 'none';
            document.getElementById("ul3li4tr8td1").innerHTML = '';
			document.getElementById("ul3li4tr8td2").innerHTML = '';
			document.getElementById("ul3li4tr8td3").innerHTML = '';
			document.getElementById("ul3li4tr8td4").innerHTML = '';
			
			document.getElementById("ul3li4tr9").style.display = 'none';
			document.getElementById("ul3li4tr9td1").innerHTML = '';
			document.getElementById("ul3li4tr9td2").innerHTML = '';
			document.getElementById("ul3li4tr9td3").innerHTML = '';
			document.getElementById("ul3li4tr9td4").innerHTML = '';
			
			document.getElementById("ul3li4tr10").style.display = 'none';
			document.getElementById("ul3li4tr10td1").innerHTML = '';
			document.getElementById("ul3li4tr10td2").innerHTML = '';
			document.getElementById("ul3li4tr10td3").innerHTML = '';
			document.getElementById("ul3li4tr10td4").innerHTML = '';
			
			document.getElementById("ul3li4tr11").style.display = 'none';
			document.getElementById("ul3li4tr11td1").innerHTML = '';
			document.getElementById("ul3li4tr11td2").innerHTML = '';
			document.getElementById("ul3li4tr11td3").innerHTML = '';
			document.getElementById("ul3li4tr11td4").innerHTML = '';
			
		});
        
        
        $('#accBetumadeiraN').click(function() {
			$("#rightImageAcessorios").attr('src', 'images/acessorios/espatula_500_375.jpg');
			document.getElementById('accArmacoesN').style.fontSize = '0.8em';
			document.getElementById('accTabuleiros').style.fontSize = '0.8em';
            document.getElementById('accBetumadeira').style.fontSize = '1.0em';
            document.getElementById('accBalde').style.fontSize = '0.8em';
            document.getElementById('accCoberturas').style.fontSize = '0.8em';
			document.getElementById('accArmacoesN').style.fontWeight = 'normal';
			document.getElementById('accTabuleiros').style.fontWeight = 'normal';
            document.getElementById('accBetumadeira').style.fontWeight = 'bold';
            document.getElementById('accBalde').style.fontWeight = 'normal';
            document.getElementById('accCoberturas').style.fontWeight = 'normal';
			document.getElementById('accArmacoesN').style.color = '#FFF';
			document.getElementById('accTabuleiros').style.color = '#FFF';
            document.getElementById('accBetumadeira').style.color = '#FFF';
            document.getElementById('accBalde').style.color = '#FFF';
            document.getElementById('accCoberturas').style.color = '#FFF';
            document.getElementById('ul3li4m1').className = "";
            document.getElementById('ul3li4m2').className = "";
            document.getElementById('ul3li4m3').className = "activeMenu";
            document.getElementById('ul3li4m4').className = "";
            document.getElementById('ul3li4m6').className = "";
            
            document.getElementById("ul3li4tr1").style.display = 'table-row';
			document.getElementById("ul3li4tr1td1").innerHTML = '0112';
			document.getElementById("ul3li4tr1td2").innerHTML = 'Steel Scraper';
			document.getElementById("ul3li4tr1td3").innerHTML = '40 mm';
			document.getElementById("ul3li4tr1td4").innerHTML = '12';
			
            document.getElementById("ul3li4tr2").style.display = 'table-row';
			document.getElementById("ul3li4tr2td1").innerHTML = '0113';
			document.getElementById("ul3li4tr2td2").innerHTML = 'Steel Scraper';
			document.getElementById("ul3li4tr2td3").innerHTML = '50 mm';
			document.getElementById("ul3li4tr2td4").innerHTML = '12';
			
            document.getElementById("ul3li4tr3").style.display = 'table-row';
			document.getElementById("ul3li4tr3td1").innerHTML = '0114';
			document.getElementById("ul3li4tr3td2").innerHTML = 'Steel Scraper';
			document.getElementById("ul3li4tr3td3").innerHTML = '60 mm';
			document.getElementById("ul3li4tr3td4").innerHTML = '12';
			
            document.getElementById("ul3li4tr4").style.display = 'table-row';
			document.getElementById("ul3li4tr4td1").innerHTML = '0115';
			document.getElementById("ul3li4tr4td2").innerHTML = 'Steel Scraper';
			document.getElementById("ul3li4tr4td3").innerHTML = '80 mm';
			document.getElementById("ul3li4tr4td4").innerHTML = '12';
			
            document.getElementById("ul3li4tr5").style.display = 'table-row';
			document.getElementById("ul3li4tr5td1").innerHTML = '0116';
			document.getElementById("ul3li4tr5td2").innerHTML = 'Steel Scraper';
			document.getElementById("ul3li4tr5td3").innerHTML = '100 mm';
			document.getElementById("ul3li4tr5td4").innerHTML = '12';
			
            document.getElementById("ul3li4tr6").style.display = 'table-row';
			document.getElementById("ul3li4tr6td1").innerHTML = '0117';
			document.getElementById("ul3li4tr6td2").innerHTML = 'Steel Scraper';
			document.getElementById("ul3li4tr6td3").innerHTML = '120 mm';
			document.getElementById("ul3li4tr6td4").innerHTML = '12';
			
            document.getElementById("ul3li4tr7").style.display = 'table-row';
			document.getElementById("ul3li4tr7td1").innerHTML = '0118';
			document.getElementById("ul3li4tr7td2").innerHTML = 'Inox Scraper';
			document.getElementById("ul3li4tr7td3").innerHTML = '40 mm';
			document.getElementById("ul3li4tr7td4").innerHTML = '12';
			
            document.getElementById("ul3li4tr8").style.display = 'table-row';
			document.getElementById("ul3li4tr8td1").innerHTML = '0119';
			document.getElementById("ul3li4tr8td2").innerHTML = 'Inox Scraper';
			document.getElementById("ul3li4tr8td3").innerHTML = '60 mm';
			document.getElementById("ul3li4tr8td4").innerHTML = '12';
			
            document.getElementById("ul3li4tr9").style.display = 'table-row';
			document.getElementById("ul3li4tr9td1").innerHTML = '0120';
			document.getElementById("ul3li4tr9td2").innerHTML = 'Inox Scraper';
			document.getElementById("ul3li4tr9td3").innerHTML = '80 mm';
			document.getElementById("ul3li4tr9td4").innerHTML = '12';
			
            document.getElementById("ul3li4tr10").style.display = 'table-row';
			document.getElementById("ul3li4tr10td1").innerHTML = '0121';
			document.getElementById("ul3li4tr10td2").innerHTML = 'Inox Scraper';
			document.getElementById("ul3li4tr10td3").innerHTML = '100 mm';
			document.getElementById("ul3li4tr10td4").innerHTML = '12';

            document.getElementById("ul3li4tr11").style.display = 'none';
			document.getElementById("ul3li4tr11td1").innerHTML = '';
			document.getElementById("ul3li4tr11td2").innerHTML = '';
			document.getElementById("ul3li4tr11td3").innerHTML = '';
			document.getElementById("ul3li4tr11td4").innerHTML = '';

		});
        
        $('#accBaldeN').click(function() {
			$("#rightImageAcessorios").attr('src', 'images/acessorios/balde_500_375.jpg');
			document.getElementById('accArmacoesN').style.fontSize = '0.8em';
			document.getElementById('accTabuleiros').style.fontSize = '0.8em';
            document.getElementById('accBetumadeira').style.fontSize = '0.8em';
            document.getElementById('accBalde').style.fontSize = '1.0em';
            document.getElementById('accCoberturas').style.fontSize = '0.8em';
			document.getElementById('accArmacoesN').style.fontWeight = 'normal';
			document.getElementById('accTabuleiros').style.fontWeight = 'normal';
            document.getElementById('accBetumadeira').style.fontWeight = 'normal';
            document.getElementById('accBalde').style.fontWeight = 'bold';
            document.getElementById('accCoberturas').style.fontWeight = 'normal';
			document.getElementById('accArmacoesN').style.color = '#FFF';
			document.getElementById('accTabuleiros').style.color = '#FFF';
            document.getElementById('accBetumadeira').style.color = '#FFF';
            document.getElementById('accBalde').style.color = '#FFF';
            document.getElementById('accCoberturas').style.color = '#FFF';
            document.getElementById('ul3li4m1').className = "";
            document.getElementById('ul3li4m2').className = "";
            document.getElementById('ul3li4m3').className = "";
            document.getElementById('ul3li4m4').className = "activeMenu";
            document.getElementById('ul3li4m6').className = "";
            
            document.getElementById("ul3li4tr1").style.display = 'table-row';
			document.getElementById("ul3li4tr1td1").innerHTML = '0302';
			document.getElementById("ul3li4tr1td2").innerHTML = 'Paint Bucket';
			document.getElementById("ul3li4tr1td3").innerHTML = '8 Lts';
			document.getElementById("ul3li4tr1td4").innerHTML = '';

            document.getElementById("ul3li4tr2").style.display = 'table-row';
			document.getElementById("ul3li4tr2td1").innerHTML = '0105';
			document.getElementById("ul3li4tr2td2").innerHTML = 'Paint Bucket';
			document.getElementById("ul3li4tr2td3").innerHTML = '12 Lts';
			document.getElementById("ul3li4tr2td4").innerHTML = '';
			
            document.getElementById("ul3li4tr3").style.display = 'table-row';
			document.getElementById("ul3li4tr3td1").innerHTML = '0281';
			document.getElementById("ul3li4tr3td2").innerHTML = 'Paint Bucket';
			document.getElementById("ul3li4tr3td3").innerHTML = '14 Lts';
			document.getElementById("ul3li4tr3td4").innerHTML = '';
			
            document.getElementById("ul3li4tr4").style.display = 'table-row';
			document.getElementById("ul3li4tr4td1").innerHTML = '0334';
			document.getElementById("ul3li4tr4td2").innerHTML = 'Paint Bucket';
			document.getElementById("ul3li4tr4td3").innerHTML = '16 Lts';
			document.getElementById("ul3li4tr4td4").innerHTML = '';
			
            document.getElementById("ul3li4tr5").style.display = 'table-row';
			document.getElementById("ul3li4tr5td1").innerHTML = '0106';
			document.getElementById("ul3li4tr5td2").innerHTML = 'Paint Grid';
			document.getElementById("ul3li4tr5td3").innerHTML = '';
			document.getElementById("ul3li4tr5td4").innerHTML = '';
			
            document.getElementById("ul3li4tr6").style.display = 'none';
			document.getElementById("ul3li4tr6td1").innerHTML = '';
			document.getElementById("ul3li4tr6td2").innerHTML = '';
			document.getElementById("ul3li4tr6td3").innerHTML = '';
			document.getElementById("ul3li4tr6td4").innerHTML = '';
			
            document.getElementById("ul3li4tr7").style.display = 'none';
			document.getElementById("ul3li4tr7td1").innerHTML = '';
			document.getElementById("ul3li4tr7td2").innerHTML = '';
			document.getElementById("ul3li4tr7td3").innerHTML = '';
			document.getElementById("ul3li4tr7td4").innerHTML = '';
			
            document.getElementById("ul3li4tr8").style.display = 'none';
            document.getElementById("ul3li4tr8td1").innerHTML = '';
			document.getElementById("ul3li4tr8td2").innerHTML = '';
			document.getElementById("ul3li4tr8td3").innerHTML = '';
			document.getElementById("ul3li4tr8td4").innerHTML = '';
			
            document.getElementById("ul3li4tr9").style.display = 'none';
			document.getElementById("ul3li4tr9td1").innerHTML = '';
			document.getElementById("ul3li4tr9td2").innerHTML = '';
			document.getElementById("ul3li4tr9td3").innerHTML = '';
			document.getElementById("ul3li4tr9td4").innerHTML = '';
			
			document.getElementById("ul3li4tr10").style.display = 'none';
			document.getElementById("ul3li4tr10td1").innerHTML = '';
			document.getElementById("ul3li4tr10td2").innerHTML = '';
			document.getElementById("ul3li4tr10td3").innerHTML = '';
			document.getElementById("ul3li4tr10td4").innerHTML = '';
			
			document.getElementById("ul3li4tr11").style.display = 'none';
			document.getElementById("ul3li4tr11td1").innerHTML = '';
			document.getElementById("ul3li4tr11td2").innerHTML = '';
			document.getElementById("ul3li4tr11td3").innerHTML = '';
			document.getElementById("ul3li4tr11td4").innerHTML = '';
			
		});
        
        
        
        $('#accCoberturasN').click(function() {
			$("#rightImageAcessorios").attr('src', 'images/acessorios/cobertura_500_375.jpg');
			document.getElementById('accArmacoesN').style.fontSize = '0.8em';
			document.getElementById('accTabuleiros').style.fontSize = '0.8em';
            document.getElementById('accBetumadeira').style.fontSize = '0.8em';
            document.getElementById('accBalde').style.fontSize = '0.8em';
            document.getElementById('accCoberturas').style.fontSize = '1.0em';
			document.getElementById('accArmacoesN').style.fontWeight = 'normal';
			document.getElementById('accTabuleiros').style.fontWeight = 'normal';
            document.getElementById('accBetumadeira').style.fontWeight = 'normal';
            document.getElementById('accBalde').style.fontWeight = 'normal';
            document.getElementById('accCoberturas').style.fontWeight = 'bold';
			document.getElementById('accArmacoesN').style.color = '#FFF';
			document.getElementById('accTabuleiros').style.color = '#FFF';
            document.getElementById('accBetumadeira').style.color = '#FFF';
            document.getElementById('accBalde').style.color = '#FFF';
            document.getElementById('accCoberturas').style.color = '#FFF';
            document.getElementById('ul3li4m1').className = "";
            document.getElementById('ul3li4m2').className = "";
            document.getElementById('ul3li4m3').className = "";
            document.getElementById('ul3li4m4').className = "";
            document.getElementById('ul3li4m6').className = "activeMenu";
            
            document.getElementById("ul3li4tr1").style.display = 'table-row';
			document.getElementById("ul3li4tr1td1").innerHTML = '0109';
			document.getElementById("ul3li4tr1td2").innerHTML = 'Thin Plastic Drop';
			document.getElementById("ul3li4tr1td3").innerHTML = '20 m²';
			document.getElementById("ul3li4tr1td4").innerHTML = '20';
			
            document.getElementById("ul3li4tr2").style.display = 'table-row';
			document.getElementById("ul3li4tr2td1").innerHTML = '0108';
			document.getElementById("ul3li4tr2td2").innerHTML = 'Thin Plastic Drop';
			document.getElementById("ul3li4tr2td3").innerHTML = '50 m²';
			document.getElementById("ul3li4tr2td4").innerHTML = '10';
			
            document.getElementById("ul3li4tr3").style.display = 'none';
			document.getElementById("ul3li4tr3td1").innerHTML = '';
			document.getElementById("ul3li4tr3td2").innerHTML = '';
			document.getElementById("ul3li4tr3td3").innerHTML = '';
			document.getElementById("ul3li4tr3td4").innerHTML = '';

            document.getElementById("ul3li4tr4").style.display = 'none';
			document.getElementById("ul3li4tr4td1").innerHTML = '';
			document.getElementById("ul3li4tr4td2").innerHTML = '';
			document.getElementById("ul3li4tr4td3").innerHTML = '';
			document.getElementById("ul3li4tr4td4").innerHTML = '';
			
            document.getElementById("ul3li4tr5").style.display = 'none';
			document.getElementById("ul3li4tr5td1").innerHTML = '';
			document.getElementById("ul3li4tr5td2").innerHTML = '';
			document.getElementById("ul3li4tr5td3").innerHTML = '';
			document.getElementById("ul3li4tr5td4").innerHTML = '';
			
            document.getElementById("ul3li4tr6").style.display = 'none';
			document.getElementById("ul3li4tr6td1").innerHTML = '';
			document.getElementById("ul3li4tr6td2").innerHTML = '';
			document.getElementById("ul3li4tr6td3").innerHTML = '';
			document.getElementById("ul3li4tr6td4").innerHTML = '';
			
            document.getElementById("ul3li4tr7").style.display = 'none';
			document.getElementById("ul3li4tr7td1").innerHTML = '';
			document.getElementById("ul3li4tr7td2").innerHTML = '';
			document.getElementById("ul3li4tr7td3").innerHTML = '';
			document.getElementById("ul3li4tr7td4").innerHTML = '';
			
            document.getElementById("ul3li4tr8").style.display = 'none';
            document.getElementById("ul3li4tr8td1").innerHTML = '';
			document.getElementById("ul3li4tr8td2").innerHTML = '';
			document.getElementById("ul3li4tr8td3").innerHTML = '';
			document.getElementById("ul3li4tr8td4").innerHTML = '';
			
            document.getElementById("ul3li4tr9").style.display = 'none';
			document.getElementById("ul3li4tr9td1").innerHTML = '';
			document.getElementById("ul3li4tr9td2").innerHTML = '';
			document.getElementById("ul3li4tr9td3").innerHTML = '';
			document.getElementById("ul3li4tr9td4").innerHTML = '';
			
			document.getElementById("ul3li4tr10").style.display = 'none';
			document.getElementById("ul3li4tr10td1").innerHTML = '';
			document.getElementById("ul3li4tr10td2").innerHTML = '';
			document.getElementById("ul3li4tr10td3").innerHTML = '';
			document.getElementById("ul3li4tr10td4").innerHTML = '';
			
			document.getElementById("ul3li4tr11").style.display = 'none';
			document.getElementById("ul3li4tr11td1").innerHTML = '';
			document.getElementById("ul3li4tr11td2").innerHTML = '';
			document.getElementById("ul3li4tr11td3").innerHTML = '';
			document.getElementById("ul3li4tr11td4").innerHTML = '';
			
		});
		
		document.getElementById("msgNome").placeholder = "Name";
        document.getElementById("msgEmail").placeholder = "Email";
        document.getElementById("msgAssunto").placeholder = "Subject";
        document.getElementById("msgMensagem").placeholder = "Message";
        document.getElementById("msgEnviar").innerText = "Send Message";
        document.getElementById("msgContacto").innerText = "Contact us !!!";

        //END DOCUMENT.READY FUNCTION
	});
	
	
	

})(jQuery);