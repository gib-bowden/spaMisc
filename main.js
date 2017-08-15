
var testString = "Racecar";
	
	function reversal(str) {
		return str.split("").reverse().join("");
	}

	function alphabits(str) {
		return str.split("").sort().join("").toLowerCase();
	}

	function palindrome(str) {
		str = str.toLowerCase();
		return (str === reversal(str) ? true : false)
	}	


function stringManipulator() {
	var inputValue = document.getElementById("input").value;
	console.log(reversal(inputValue));
	console.log(alphabits(inputValue));
	console.log(palindrome(inputValue));
}

	
	
	console.log(input);
	
	var submitButton = document.getElementById("submit-btn");
	

	submitButton.addEventListener("click", stringManipulator);



stringManipulator(testString);








