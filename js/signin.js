
var passwd;
var validuser;

function signin()
{
	//alert("signin")
    var usern=document.getElementById('user').value;
    var pswd=document.getElementById('pswd').value;
//alert(usern)
//alert(pswd)
    var request = $.ajax(
    "https://bytemenode.herokuapp.com/doctor",
    {
        method: "GET",
        dataType: "json",
        crossDomain:"true"
    });            

    request.done(function( msg ) {

        var jsonOptions = JSON.parse(request.responseText);

        // Loop over the JSON array.
        if(jsonOptions.length!=0){
            jsonOptions.forEach(function(item) {
                validuser=item.doc_name;
                passwd = item.password;
                //alert(validuser)
               //alert(passwd)
                if (pswd==passwd && validuser==usern) {
                    //window.open("view.html?id="+item._id+"&profile="+item.profile,"_self");
                    window.open("viewpatients.html");
                } else {
                    alert('Invalid User name or password!');
                }
            });
        } else {
            alert('Invalid user!');
        }
        
    });  

}



