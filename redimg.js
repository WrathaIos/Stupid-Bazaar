/*
var rows = 4;
var col = 5;
var potImg = params.get('id');
//potimg vairable used to get id from querystring.js


	 for (var i = 0; i < rows; i++) {
	document.write("<tr>");
		for(var j = 0; j < col; j++){
		document.write("<td class = 'red'>");
		document.write("<img class = 'red' src = '../images/Splits/" + (potImg) + "_r" + (i+1) + "_c" + (j+1) + ".jpg'");
		document.write("</td>");
		}
		document.write("</tr>");
		
		
	}
// Old Image split loading code
*/
var preloadPot = [];
function preloadImg() {
var rows = 4;
var col = 5;
var potImg = params.get('id');
	for (var i = 0; i < rows; i++) {
		preloadPot[i] = [];
		for(var j = 0; j < col; j++){
			preloadPot[i][j] = new Image();
			preloadPot[i][j].src = "../images/Splits/" + (potImg) + "_r" + (i+1) + "_c" + (j+1) + ".jpg";
	}
}

}
preloadImg();
//Preloading img code using param.id to get the correct picture Id
function assemblepotImg() {
        var row = 4;
        var col = 5;
        var assembleImg = document.getElementById("prodImage");
        var imgTable = "<table class = 'red'>";

        for (var r = 0; r < row; r++) {
            imgTable += "<tr>";
            for (var c = 0; c < col; c++) {
                imgTable += "<td class = 'red'>";
                imgTable += "<img class = 'red' src=" + preloadPot[r][c].src + ">";
                imgTable += "</td>";

                
            }
            imgTable += "</tr>";
        }
        imgTable += "</table>";
      
        assembleImg.innerHTML = imgTable;
        
		
    }
    assemblepotImg();
//Assembling the image splits code using preloaded images from preloadPot