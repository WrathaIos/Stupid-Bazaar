const params = new URLSearchParams(window.location.search)
function getQueryString(){
	var pageHeader = document.getElementById("pageHeader").innerHTML = params.get('name');
	var orderItem = document.getElementById("orderItem").value = params.get('name');
	var price = document.getElementById("price").value += params.get('price');
	var itemDescription = document.getElementById("itemDescription").value = params.get('description');
}
//Get querystring function used to give all variables thier values.


