http_check = getHTTPObject();

function getHTTPObject(){
  //Create a boolean variable to check for a valid Internet Explorer instance.
var xmlhttp = false;
//Check if we are using IE.
 try {
  //If the Javascript version is greater than 5.
  xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
 } catch (e) {
  //If not, then use the older active x object.
  try {
  //If we are using Internet Explorer.
  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
 } catch (E) {
//Else we must be using a non-IE browser.
xmlhttp = false;
 }
}
//If we are using a non-IE browser, create a javascript instance of the object.
if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
 xmlhttp = new XMLHttpRequest();
 }
 
  return xmlhttp;
}


function check_file(path_of_file) 
{
    http_check.open("HEAD", path_of_file);
    http_check.onreadystatechange = handleHttpResponse_check;
    http_check.send(null);

    function handleHttpResponse_check()
    {
        if(http_check.readyState == 4){
            if (http_check.status == 200) {
                document.write(path_of_file);
            }else if (http_check.status == 404) {
            }
        }
    }
}
