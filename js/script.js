window.onload = function () {

	console.log("running");

	var canvas = document.getElementById("canvas");
	var paper = new Raphael(canvas);
    var pWidth = paper.canvas.offsetWidth;
    var pHeight = paper.canvas.offsetHeight;
    console.log("pWidth is " + pWidth + ", and pHeight is " + pHeight);
    var viewportHeight = window.screenY;

    //draw the axis
	var axisY = pHeight-100;
	var axis = paper.path("M50,"+(axisY-20)+"L50,"+axisY+"L207,"+axisY+"L207,"+(axisY-20)+"L207,"+axisY+"L364,"+axisY+"L364,"+(axisY-20)+"L364,"+axisY+"L521,"+axisY+"L521,"+(axisY-20)+"L521,"+axisY+"L678,"+axisY+"L678,"+(axisY-20)+"L678,"+axisY+"L835,"+axisY+"L835,"+(axisY-20)+"L835,"+axisY+"L992,"+axisY+"L992,"+(axisY-20)+"L992,"+axisY+"L1150,"+axisY+"L1150,"+(axisY-20));
	axis.attr({
		stroke:"#dddfd4",
		'stroke-width':4
	})

	//draw column labels
	var oH = paper.text(129,axisY+30,"HIGH").attr({'font-size': 15,'font-weight':"bold",'font-family':"Segoe UI",'text-align':"center",fill:'#dddfd4'});
	var oM = paper.text(286,axisY+30,"MEDIUM").attr({'font-size': 15,'font-weight':"bold",'font-family':"Segoe UI",'text-align':"center",fill:'#dddfd4'});
	var oL = paper.text(443,axisY+30,"LOW").attr({'font-size': 15,'font-weight':"bold",'font-family':"Segoe UI",'text-align':"center",fill:'#dddfd4'});
	var nE = paper.text(600,axisY+30,"NEUTRAL").attr({'font-size': 15,'font-weight':"bold",'font-family':"Segoe UI",'text-align':"center",fill:'#dddfd4'});
	var eL = paper.text(757,axisY+30,"LOW").attr({'font-size': 15,'font-weight':"bold",'font-family':"Segoe UI",'text-align':"center",fill:'#dddfd4'});
	var eM = paper.text(914,axisY+30,"MEDIUM").attr({'font-size': 15,'font-weight':"bold",'font-family':"Segoe UI",'text-align':"center",fill:'#dddfd4'});
	var eH = paper.text(1071,axisY+30,"HIGH").attr({'font-size': 15,'font-weight':"bold",'font-family':"Segoe UI",'text-align':"center",fill:'#dddfd4'});

	//draw the data
	var colorM = '#00a651';
	var colorF = '#ec008c';
	var colorMF = '#00aeef';
	var r = [];

	//Objectification High
	
	//Objectification Medium
	r[24] = paper.rect(262,axisY-70,50,50,7).attr({fill:colorMF,'stroke-width':0});
	r[21] = paper.rect(262,axisY-130,50,50,7).attr({fill:colorM,'stroke-width':0});
	r[10] = paper.rect(262,axisY-190,50,50,7).attr({fill:colorM,'stroke-width':0});
	
	//Objectification Low
	r[30] = paper.rect(419,axisY-70,50,50,7).attr({fill:colorM,'stroke-width':0});
	r[27] = paper.rect(419,axisY-130,50,50,7).attr({fill:colorMF,'stroke-width':0});
	r[23] = paper.rect(419,axisY-190,50,50,7).attr({fill:colorMF,'stroke-width':0});
	r[17] = paper.rect(419,axisY-250,50,50,7).attr({fill:colorM,'stroke-width':0});
	r[14] = paper.rect(419,axisY-310,50,50,7).attr({fill:colorM,'stroke-width':0});
	r[9] = paper.rect(419,axisY-370,50,50,7).attr({fill:colorM,'stroke-width':0});
	
	//Neutral
	r[29] = paper.rect(576,axisY-70,50,50,7).attr({fill:colorF,'stroke-width':0});
	r[26] = paper.rect(576,axisY-130,50,50,7).attr({fill:colorM,'stroke-width':0});
	r[19] = paper.rect(576,axisY-190,50,50,7).attr({fill:colorM,'stroke-width':0});
	r[16] = paper.rect(576,axisY-250,50,50,7).attr({fill:colorM,'stroke-width':0});
	r[15] = paper.rect(576,axisY-310,50,50,7).attr({fill:colorMF,'stroke-width':0});
	r[12] = paper.rect(576,axisY-370,50,50,7).attr({fill:colorM,'stroke-width':0});
	r[8] = paper.rect(576,axisY-430,50,50,7).attr({fill:colorM,'stroke-width':0});
	r[3] = paper.rect(576,axisY-490,50,50,7).attr({fill:colorM,'stroke-width':0});
	r[1] = paper.rect(576,axisY-550,50,50,7).attr({fill:colorM,'stroke-width':0});

	//Empowerment Low
	r[25] = paper.rect(733,axisY-70,50,50,7).attr({fill:colorM,'stroke-width':0});
	r[13] = paper.rect(733,axisY-130,50,50,7).attr({fill:colorF,'stroke-width':0});
	r[11] = paper.rect(733,axisY-190,50,50,7).attr({fill:colorM,'stroke-width':0});
	r[5] = paper.rect(733,axisY-250,50,50,7).attr({fill:colorM,'stroke-width':0});

	//Empowerment Medium
	r[22] = paper.rect(890,axisY-70,50,50,7).attr({fill:colorF,'stroke-width':0});
	r[18] = paper.rect(890,axisY-130,50,50,7).attr({fill:colorF,'stroke-width':0});
	r[7] = paper.rect(890,axisY-190,50,50,7,7).attr({fill:colorF,'stroke-width':0});
	r[6] = paper.rect(890,axisY-250,50,50,7).attr({fill:colorM,'stroke-width':0});

	//Empowerment High
	r[28] = paper.rect(1047,axisY-70,50,50,7).attr({fill:colorF,'stroke-width':0});
	r[20] = paper.rect(1047,axisY-130,50,50,7).attr({fill:colorF,'stroke-width':0});
	r[4] = paper.rect(1047,axisY-190,50,50,7).attr({fill:colorM,'stroke-width':0});
	r[2] = paper.rect(1047,axisY-250,50,50,7).attr({fill:colorM,'stroke-width':0});

	//mouse func
	var items = 30;

	for (i = 1; i <= items; i++){

		r[i].id = 'r'+i;
		r[i].div = document.getElementById(r[i].id);
		r[i].active = true;

		r[i].mouseover(function(){
			if (this.active){
				this.current = true;
				console.log(this.id);
				this.div.style.display = 'block';
				this.g = this.glow({color:'#000', width: 20, opacity: 0.5});
			}
		})

		r[i].mousemove(function(e){
			console.log(event.screenY)
			if (this.current){
				if (e.screenY > screen.height/2){
					this.div.style.left = e.pageX+15;				
					this.div.style.top = e.pageY-300;
				} else {
					this.div.style.left = e.pageX+15;				
					this.div.style.top = e.pageY+15;
				}
			}
		})

		r[i].mouseout(function(){
			this.current = false;
			this.div.style.display = 'none';
			this.g.remove();
		})
	}

	//gender filter
	for (i = 1; i <= 6; i++){r[i].gender = 'M';}
	r[7].gender = 'F';
	for (i = 8; i <= 12; i++){r[i].gender = 'M';}
	r[13].gender = 'F';
	r[14].gender = 'M';
	r[15].gender = 'MF';
	for (i = 16; i <= 17; i++){r[i].gender = 'M';}
	r[18].gender = 'F';
	r[19].gender = 'M';
	r[20].gender = 'F';
	r[21].gender = 'M';
	r[22].gender = 'F';
	for (i = 23; i <= 24; i++){r[i].gender = 'MF';}
	for (i = 25; i <= 26; i++){r[i].gender = 'M';}
	r[27].gender = 'MF';
	for (i = 28; i <= 29; i++){r[i].gender = 'F';}
	r[30].gender = 'M';

	var btnAll = document.getElementById("btnAll");
	var btnFemale = document.getElementById("btnFemale");
	var btnMale = document.getElementById("btnMale");
	var btnMixed = document.getElementById("btnMixed");

	btnAll.onclick = function(){
		for (i = 1; i <= items; i++) {
			r[i].attr({'opacity':1});
			r[i].active = true;
		}
	}

	btnFemale.onclick = function(){
		for (i = 1; i <= items; i++) {
			if (r[i].gender !== 'F'){
				r[i].attr({'opacity':0.2});	
				r[i].active = false;			
			} else {
				r[i].attr({'opacity':1});
				r[i].active = true;
			}
		}
	}

	btnMale.onclick = function(){
		for (i = 1; i <= items; i++) {
			if (r[i].gender !== 'M'){
				r[i].attr({'opacity':0.2});
				r[i].active = false;		
			} else {
				r[i].attr({'opacity':1});
				r[i].active = true;
			}
		}
	}

	btnMixed.onclick = function(){
		for (i = 1; i <= items; i++) {
			if (r[i].gender !== 'MF'){
				r[i].attr({'opacity':0.2});
				r[i].active = false;		
			} else {
				r[i].attr({'opacity':1});
				r[i].active = true;
			}
		}
	}

	//next button
	//var next = document.getElementById("next");
	//next.onclick = function(){
	//	window.location.hash = 'vis';
	//};
}