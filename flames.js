
function match(){

	var flames=["FRIENDS","LOVE", "ACCEPT", "MARRIAGE", "ENEMY","SWEETHEART"]
	var name1= document.getElementById('name1').value
	var name2= document.getElementById('name2').value

	if(name1.length!=0 && name2.length!=0){
		name1=name1.toLowerCase()
		name2=name2.toLowerCase()
		name1=name1.replace(/ /g,'')
		name2=name2.replace(/ /g,'')
		//document.getElementById('text').innerHTML = ""+name1+" "+name2+"";
		var i=0,j=0,k=0;count =0; 
		var abc=''; var sim=' ';
		
		if(name1.length>=name2.length){

			//concatenates similar letters
			for( i=0; i<name1.length; i++){
				for( j=0; j<name2.length; j++){
					if(name1[i]==name2[j]){
						abc = abc +""+name1[i]+""
					}
				}
			}
			
			 //delete double letters
			 	for(i=0; i<abc.length; i++){
			 		for(j=0; j<sim.length; j++){
			 			if(abc[i]==sim[j]){
			 				count++;
			 			}
					}
					if(count==0){
						sim= sim + ""+abc[i]+""
						
					}
					count=0;
				}
			//countsss
			count=0;//no. of similar letters
				for( i=0; i<sim.length; i++){
					for( j=0; j<name1.length; j++){
						if(sim[i]==name1[j]){
							count++;
						}
					}
				}
				for( i=0; i<sim.length; i++){
					for( j=0; j<name2.length; j++){
						if(sim[i]==name2[j]){
							count++;
						}
					}
				}

				//FLAMES
			
				var r=count%6
					if(r==0){
						r=5;
					}
					else{
						r=r-1;
					}
		}else{
			//concatenates similar letters
			for( i=0; i<name2.length; i++){
				for( j=0; j<name1.length; j++){
					if(name2[i]==name1[j]){
						abc = abc +""+name2[i]+""
					}
				}
			}
			
			 //delete double letters
			 	for(i=0; i<abc.length; i++){
			 		for(j=0; j<sim.length; j++){
			 			if(abc[i]==sim[j]){
			 				count++;
			 			}
					}
					if(count==0){
						sim= sim + ""+abc[i]+""
						
					}
					count=0;
				}
			//countsss
			count=0;//no. of similar letters
				for( i=0; i<sim.length; i++){
					for( j=0; j<name2.length; j++){
						if(sim[i]==name2[j]){
							count++;
						}
					}
				}
				for( i=0; i<sim.length; i++){
					for( j=0; j<name1.length; j++){
						if(sim[i]==name1[j]){
							count++;
						}
					}
				}

				//FLAMES
			
				var r=count%6
					if(r==0){
						r=5;
					}
					else{
						r=r-1;
					}
		}
	document.getElementById("text").innerHTML = ""+flames[r]+"";
	}else{
		alert("Please fill up everything!")
		document.getElementById("text").innerHTML = "";
	}

}