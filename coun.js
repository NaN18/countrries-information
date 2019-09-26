function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://restcountries.eu/rest/v2/all", true);
  xhttp.send();
 
  xhttp.onload = function() 
  {
    if (this.status == 200) 
    {
     var response = JSON.parse(this.responseText);
     for(var i=0;i<response.length;i++)
     {
        var data = response[i].name;
      
      if(count != 0)
      {
      var select1 = document.getElementById("mySelect");
       var strUser = select1.options[select1.selectedIndex].value;
       
      if(strUser == response[i].name)
      {
           
            var capital = response[i].capital;
            var population = response[i].population;
            var lang;
            if(response[i].languages.length>1)
            {
            lang=response[i].languages[0].name+" and "+response[i].languages[1].name;
            }
            else
            {
              lang=response[i].languages[0].name;
            }
            var cal=response[i].callingCodes;
            var reg=response[i].region;
            var cur=response[i].currencies[0].name;
            var area=response[i].area;
            var time=response[i].timezones;
            var bor=response[i].borders;
            document.getElementById('cap').innerHTML="<h2>Capital:</h2>  "+"<h1>"+ capital+"</h1>"
            var table="<tr><th>POPULATION</th><th>LANGUAGES</th><th>CALLING CODE</th><th>CONTINENT</th><th>CURRENCY</th><th>AREA</th><th>BORDERS</th></tr>";
              table += "<tr><td>" + population +"</td><td>" + lang+"</td><td>" + cal+
                  "</td><td>" + reg+"</td><td>" + cur+"</td><td>" + area+"</td><td>" + bor+"</td></tr>";
              document.getElementById('demo').innerHTML = table;
              
        

      }
      }
      else
      {
          var select = document.getElementById("mySelect");
          var option = document.createElement("option");
          option.appendChild(document.createTextNode(data));
          option.value = data;
          select.appendChild(option);
          
        }
     }
    }
  };
}

var count = 0;

function displayCapital()
{

count++;
loadDoc();
}

loadDoc();
