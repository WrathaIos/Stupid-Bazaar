
function calculateTotal()
		{
		var price = document.getElementById("price").value;
		var quantityBowl = document.getElementById("quantityBowl").value;
		var price = price.replace("$", "");
		
		
		if (price == 0 ||
			price == null) {
			var price = document.getElementById("price").value;
			
			}
		
		var totalPrice = (quantityBowl * price);
		//calculates total price
	
		if ( quantityBowl <= 0 ||
			 quantityBowl == null) {  
		alert("Please enter an amount of at least 1");//used to check if price is 0, null or less than 0
		}
		else {
		document.getElementById("orderTotal").value=("$" + totalPrice);
		}
		
		}
		
		function clearValues()
		{ 
			document.getElementById("orderTotal").value = "";
			document.getElementById("quantityBowl").value = document.getElementById("quantityBowl").defaultValue;
		}
		//clears all input and changed form data
		function validate() {
			var itemDescription = document.getElementById("itemDescription").value;
			var orderItem = "Copper Red Bowl";
			var quantityBowl = document.getElementById("quantityBowl").value;
			var price = document.getElementById("price").value;
			var orderTotal = document.getElementById("orderTotal").value;
			
			
			 var accept = confirm('Order Item =    ' + orderItem  + '\r\nItem Description =    ' + itemDescription + '\r\nQuantity =    ' + quantityBowl + '\r\nPrice =    ' + price + '\r\nTotal Price =    ' + orderTotal + '\r\nIs this information correct?');
				if (accept == true) {
				return true;
				}
				else {
				clearValues()
				}
				//lists all items in alert screen
		}
		
		function exitButton() {
				window.close()
			
		}
		//closes page