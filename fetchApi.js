'use strict';
var mainApi = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&category=[\"category1\",\"category2\",\"category3\"]&pretty=true";
const mainSection = $(".mainSection");
var words = []
function getData(apiStr){
    return fetch(apiStr)
    .then(response => response.json())
    .then(function (result){
        mainSection.empty();
        for (var i = 0; i < result.length; i++) {
            words.push(result[i])
          }
          console.log('Words', words)
          createElements(result);
    })
    .catch(error => console.log('error', error));
}
function createElements(arr){

for (var i = 0; i < arr.length; i++) {
    var div = "<div class='dataDiv'>" 
    +"<div class='iconClassMain'>"
    +"<p class='iconStyle'>"+ `${arr[i]["fname"][0]}` + "</p>"
    +"<p class='iconStyle'>"+ `${arr[i]["lname"][0]}` + "</p>"
    +"</div>"
    +"<p>"+ arr[i]["fname"] + " " + arr[i]["lname"]+ "</p>"
    +"<p class='categoryPara'>"+ arr[i]["category"]+ "</p>"
    "</div>";
    mainSection.append(div)
    
  }
console.log(mainSection);
}

getData(mainApi)
$(".categoryBtn").click(function(){
    var className = this.className.split(" ");
    className[0] = "\"" + className[0] + "\"";
    var api = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&category=[\"category1\",\"category2\",\"category3\"] ${} &pretty=true";
    let a = `http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&category=[${className[0]}]&pretty=true`;
    console.log(a);
    getData(a);
  });


