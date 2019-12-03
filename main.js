
function getJson(){
	var html = "";
    // 1. Create a new XMLHttpRequest object
	var xhr = new XMLHttpRequest();
    // 2. Configure it: GET-request for the URL college_degrees.json
	xhr.open('GET', 'degrees.json');
    // 3. Send the request over the network
    xhr.send();
    // 4. This will be called after the response is received
	xhr.onload = function() {
	    if (xhr.status === 200) {	// analyze HTTP status of the response
	    	html += "<table class='table' border='1'>";
	    	html += "<tr>";
	    	html += "<td class='thead'>School</td>";
	    	html += "<td class='thead'>Program</td>";
	    	html += "<td class='thead'>Type</td>";
	    	html += "<td class='thead'>Year Conferred</td>";
	    	html += "</tr>";
	        var result = JSON.parse(xhr.responseText); // responseText is the JSON data returned
	        for(var i = 0; i < result.length; i++){
	        	 html += "<tr>"; 
	 		var json_data = result[i];

	 		var res = [];

			for(var j in json_data){
			    res.push([j, json_data [j]]);
			    html += "<td>"+json_data [j]+"</td>"; 
			}
			 html += "</tr>"; 
			}
			html += "</table>";
	    }
	    else {
	        // if some error
	        alert('Request failed.  Returned status of ' + xhr.status);
	    }

	    //append the generated html inside the table
	   document.getElementById("degrees").innerHTML = html;  

	};

}

