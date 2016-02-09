(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 450,
	height: 600,
	fps: 24,
	color: "#404040",
	manifest: []
};



// symbols:



(lib.Bemvindo = function() {
	this.spriteSheet = ss["rolo_xico_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.rolo = function() {
	this.spriteSheet = ss["rolo_xico_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Interpolação3 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.rolo();
	this.instance.setTransform(-176,-234.6,1.173,1.173);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-176,-234.6,528,704);


// stage content:
(lib.roloxico = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Camada 2
	this.instance = new lib.Interpolação3("synched",0);
	this.instance.setTransform(176.5,234.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:176,y:734.6},69).wait(1));

	// Camada 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgkYAvgMAAAhe/MBIxAAAMAAABe/g");
	var mask_graphics_1 = new cjs.Graphics().p("EgkYAurMAAAhdVMBIxAAAMAAABdVg");
	var mask_graphics_2 = new cjs.Graphics().p("EgkYAt2MAAAhbrMBIwAAAMAABBbrg");
	var mask_graphics_3 = new cjs.Graphics().p("EgkXAtBMgABhaBMBIwAAAMAABBaBg");
	var mask_graphics_4 = new cjs.Graphics().p("EgkXAsLMgABhYVMBIwAAAMAABBYVg");
	var mask_graphics_5 = new cjs.Graphics().p("EgkXArWMgABhWrMBIwAAAMAABBWrg");
	var mask_graphics_6 = new cjs.Graphics().p("EgkXAqgMgABhU/MBIwAAAMAABBU/g");
	var mask_graphics_7 = new cjs.Graphics().p("EgkWAprMgABhTVMBIuAAAMAABBTVg");
	var mask_graphics_8 = new cjs.Graphics().p("EgkWAo1MgABhRqMBIuAAAMAABBRqg");
	var mask_graphics_9 = new cjs.Graphics().p("EgkWAoAMgABhQAMBIuAAAMAABBQAg");
	var mask_graphics_10 = new cjs.Graphics().p("EgkWAnLMgABhOVMBIuAAAMAABBOVg");
	var mask_graphics_11 = new cjs.Graphics().p("EgkVAmWMgAChMrMBItAAAMAACBMrg");
	var mask_graphics_12 = new cjs.Graphics().p("EgkVAlgMgAChK/MBItAAAMAACBK/g");
	var mask_graphics_13 = new cjs.Graphics().p("EgkVAkrMgAChJVMBIsAAAMAADBJVg");
	var mask_graphics_14 = new cjs.Graphics().p("EgkVAj1MgABhHqMBIsAAAMAABBHqg");
	var mask_graphics_15 = new cjs.Graphics().p("EgkUAjAMgAChF/MBIrAAAMAACBF/g");
	var mask_graphics_16 = new cjs.Graphics().p("EgkUAiLMgADhEVMBIsAAAMAADBEVg");
	var mask_graphics_17 = new cjs.Graphics().p("EgkTAhVMgADhCqMBIrAAAMAACBCqg");
	var mask_graphics_18 = new cjs.Graphics().p("EgkTAggMgADhA/MBIqAAAMAADBA/g");
	var mask_graphics_19 = new cjs.Graphics().p("EgkTAfrMgADg/VMBIqAAAMAADA/Vg");
	var mask_graphics_20 = new cjs.Graphics().p("EgkTAe1MgADg9pMBIqAAAMAADA9pg");
	var mask_graphics_21 = new cjs.Graphics().p("EgkTAeAMgADg7/MBIpAAAMAAEA7/g");
	var mask_graphics_22 = new cjs.Graphics().p("EgkSAdLMgAEg6VMBIpAAAMAAEA6Vg");
	var mask_graphics_23 = new cjs.Graphics().p("EgkSAcVMgAEg4qMBIpAAAMAAEA4qg");
	var mask_graphics_24 = new cjs.Graphics().p("EgkSAbgMgADg2/MBIoAAAMAAEA2/g");
	var mask_graphics_25 = new cjs.Graphics().p("EgkSAarMgADg1VMBInAAAMAAFA1Vg");
	var mask_graphics_26 = new cjs.Graphics().p("EgkRAZ1MgAEgzpMBInAAAMAAEAzpg");
	var mask_graphics_27 = new cjs.Graphics().p("EgkRAZAMgAEgx/MBInAAAMAAEAx/g");
	var mask_graphics_28 = new cjs.Graphics().p("EgkRAYLMgAEgwVMBInAAAMAAEAwVg");
	var mask_graphics_29 = new cjs.Graphics().p("EgkRAXVMgAEgupMBImAAAMAAFAupg");
	var mask_graphics_30 = new cjs.Graphics().p("EgkRAWgMgAEgs/MBImAAAMAAFAs/g");
	var mask_graphics_31 = new cjs.Graphics().p("EgkQAVqMgAFgrUMBImAAAMAAFArUg");
	var mask_graphics_32 = new cjs.Graphics().p("EgkQAU1MgAFgppMBImAAAMAAFAppg");
	var mask_graphics_33 = new cjs.Graphics().p("EgkPAUAMgAGgn/MBImAAAMAAFAn/g");
	var mask_graphics_34 = new cjs.Graphics().p("EgkPATLMgAFgmVMBIlAAAMAAEAmVg");
	var mask_graphics_35 = new cjs.Graphics().p("EgkPASVMgAFgkpMBIkAAAMAAFAkpg");
	var mask_graphics_36 = new cjs.Graphics().p("EgkPARgMgAFgi/MBIkAAAMAAFAi/g");
	var mask_graphics_37 = new cjs.Graphics().p("EgkPAQqMgAFghUMBIjAAAMAAGAhUg");
	var mask_graphics_38 = new cjs.Graphics().p("EgkOAP1IgG/pMBIjAAAIAGfpg");
	var mask_graphics_39 = new cjs.Graphics().p("EgkOAPAIgG9/MBIjAAAIAGd/g");
	var mask_graphics_40 = new cjs.Graphics().p("EgkOAOKIgG8TMBIjAAAIAGcTg");
	var mask_graphics_41 = new cjs.Graphics().p("EgkNANVIgH6pMBIjAAAIAGapg");
	var mask_graphics_42 = new cjs.Graphics().p("EgkNAMgIgH4/MBIiAAAIAHY/g");
	var mask_graphics_43 = new cjs.Graphics().p("EgkNALqIgH3TMBIiAAAIAHXTg");
	var mask_graphics_44 = new cjs.Graphics().p("EgkMAK1IgI1pMBIiAAAIAHVpg");
	var mask_graphics_45 = new cjs.Graphics().p("EgkMAJ/IgHz+MBIgAAAIAHT+g");
	var mask_graphics_46 = new cjs.Graphics().p("EgkMAJKIgIyTMBIhAAAIAHSTg");
	var mask_graphics_47 = new cjs.Graphics().p("EgkMAIVIgHwpMBIgAAAIAHQpg");
	var mask_graphics_48 = new cjs.Graphics().p("EgkLAHfIgIu9MBIgAAAIAHO9g");
	var mask_graphics_49 = new cjs.Graphics().p("EgkLAGqIgItTMBIfAAAIAINTg");
	var mask_graphics_50 = new cjs.Graphics().p("EgkLAF1IgIrpMBIfAAAIAILpg");
	var mask_graphics_51 = new cjs.Graphics().p("EgkLAE/IgIp+MBIfAAAIAIJ+g");
	var mask_graphics_52 = new cjs.Graphics().p("EgkKAEKIgJoTMBIfAAAIAIITg");
	var mask_graphics_53 = new cjs.Graphics().p("EgkKADVIgJmpMBIeAAAIAJGpg");
	var mask_graphics_54 = new cjs.Graphics().p("EgkKACfIgIk9MBIdAAAIAIE9g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:253.6,y:303.7}).wait(1).to({graphics:mask_graphics_1,x:253.5,y:309.1}).wait(1).to({graphics:mask_graphics_2,x:253.5,y:314.5}).wait(1).to({graphics:mask_graphics_3,x:253.5,y:319.9}).wait(1).to({graphics:mask_graphics_4,x:253.5,y:325.3}).wait(1).to({graphics:mask_graphics_5,x:253.5,y:330.7}).wait(1).to({graphics:mask_graphics_6,x:253.5,y:336.1}).wait(1).to({graphics:mask_graphics_7,x:253.4,y:341.5}).wait(1).to({graphics:mask_graphics_8,x:253.4,y:346.9}).wait(1).to({graphics:mask_graphics_9,x:253.4,y:352.3}).wait(1).to({graphics:mask_graphics_10,x:253.4,y:357.7}).wait(1).to({graphics:mask_graphics_11,x:253.4,y:363}).wait(1).to({graphics:mask_graphics_12,x:253.3,y:368.4}).wait(1).to({graphics:mask_graphics_13,x:253.3,y:373.8}).wait(1).to({graphics:mask_graphics_14,x:253.3,y:379.2}).wait(1).to({graphics:mask_graphics_15,x:253.3,y:384.6}).wait(1).to({graphics:mask_graphics_16,x:253.3,y:390}).wait(1).to({graphics:mask_graphics_17,x:253.2,y:395.4}).wait(1).to({graphics:mask_graphics_18,x:253.2,y:400.8}).wait(1).to({graphics:mask_graphics_19,x:253.2,y:406.2}).wait(1).to({graphics:mask_graphics_20,x:253.2,y:411.6}).wait(1).to({graphics:mask_graphics_21,x:253.2,y:417}).wait(1).to({graphics:mask_graphics_22,x:253.1,y:422.4}).wait(1).to({graphics:mask_graphics_23,x:253.1,y:427.8}).wait(1).to({graphics:mask_graphics_24,x:253.1,y:433.2}).wait(1).to({graphics:mask_graphics_25,x:253.1,y:438.5}).wait(1).to({graphics:mask_graphics_26,x:253.1,y:443.9}).wait(1).to({graphics:mask_graphics_27,x:253.1,y:449.4}).wait(1).to({graphics:mask_graphics_28,x:253,y:454.7}).wait(1).to({graphics:mask_graphics_29,x:253,y:460.1}).wait(1).to({graphics:mask_graphics_30,x:253,y:465.5}).wait(1).to({graphics:mask_graphics_31,x:253,y:470.9}).wait(1).to({graphics:mask_graphics_32,x:253,y:476.3}).wait(1).to({graphics:mask_graphics_33,x:252.9,y:481.7}).wait(1).to({graphics:mask_graphics_34,x:252.9,y:487.1}).wait(1).to({graphics:mask_graphics_35,x:252.9,y:492.5}).wait(1).to({graphics:mask_graphics_36,x:252.9,y:497.9}).wait(1).to({graphics:mask_graphics_37,x:252.9,y:503.3}).wait(1).to({graphics:mask_graphics_38,x:252.9,y:508.7}).wait(1).to({graphics:mask_graphics_39,x:252.8,y:514.1}).wait(1).to({graphics:mask_graphics_40,x:252.8,y:519.5}).wait(1).to({graphics:mask_graphics_41,x:252.8,y:524.9}).wait(1).to({graphics:mask_graphics_42,x:252.8,y:530.2}).wait(1).to({graphics:mask_graphics_43,x:252.8,y:535.6}).wait(1).to({graphics:mask_graphics_44,x:252.8,y:541}).wait(1).to({graphics:mask_graphics_45,x:252.7,y:546.4}).wait(1).to({graphics:mask_graphics_46,x:252.7,y:551.8}).wait(1).to({graphics:mask_graphics_47,x:252.7,y:557.2}).wait(1).to({graphics:mask_graphics_48,x:252.7,y:562.6}).wait(1).to({graphics:mask_graphics_49,x:252.7,y:568}).wait(1).to({graphics:mask_graphics_50,x:252.6,y:573.4}).wait(1).to({graphics:mask_graphics_51,x:252.6,y:578.8}).wait(1).to({graphics:mask_graphics_52,x:252.6,y:584.2}).wait(1).to({graphics:mask_graphics_53,x:252.6,y:589.6}).wait(1).to({graphics:mask_graphics_54,x:252.6,y:595}).wait(16));

	// Camada 1
	this.instance_1 = new lib.Bemvindo();
	this.instance_1.setTransform(20.6,7);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({y:10},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(225.5,300,528,704);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;