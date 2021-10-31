var movieList = ["Rush hour", " X-Men", " Avengers"];   
document.write("<b><br> Initially elements in array: </b>" + movieList + "<br>");  

function pushFunction() {   
  //add new elementin list array        
  var noOfElement = movieList.push(" Twilight", " Caption America");   
  document.write("<b> Elements after adding new elements: </b>" + movieList);  
  document.write("<br> Number of elements in array: " + noOfElement);  
}   
pushFunction();  

var seriesList = ["Sherlock", " Harry Potter", " Games of Throne"];   
    document.write("<b> Initially elements in array: </b>" + seriesList + "<br>");  
    
    function pushFunction() {   
      //add new element in array        
      seriesList.push(" Avengers", " Prison Break", " The Spy");   
      //return the array with new values  
      document.getElementById("result").innerHTML = "<b> Array after adding new elements: </b> </br>" + seriesList;  
    }   