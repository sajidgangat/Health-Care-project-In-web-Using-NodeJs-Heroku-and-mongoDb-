var root = 'https://bytemenode.herokuapp.com';
    var posts = null;
    var noPosts = 0;
    var current = 1;


function printPost(id){
        if(id>=0 && id<noPosts){
        var el = posts[id];
        let ctnt = 
                "<div class='col-sm-12 col-md-8 col-lg-8 pannel panel-default'><div class='panel-heading'><h3 class=''>("+el.id+")"+el.title+"</h3></div><div class='pannel-body' id='pannel"+el.id+"'>"+el.body+"</div></div>";       
            
            $("#posts").html(ctnt);
            current = el.id;
            
            //getAuthor(el.id, el.userId);
        }    

    }

    
$( document ).ready(function() {
    
   function getAllPosts(){
       // alert("main function")
        $.ajax({
        url: root + '/patient/:id',
        method: 'GET'
        }).then(function(data) {
            alert(data)
            posts = data;
            noPosts = posts.length;
            var id = "";
            var pname="";
            var age="";
             var gender="";
              var contactnum="";
               var email="";
                var address="";
                 var status="";
            data.forEach(function(el) {
                    
               id += 
                "<h4 class=''>("+el._id+") </h4>"; 
                       
               pname += 
                "<h4 class=''> "+el.patient_name+"</h4>"; 
                  age += 
                "<h4 class=''> "+el.age+"</h4>"; 
                 gender += 
                "<h4 class=''> "+el.gender+"</h4>"; 
                 contactnum += 
                "<h4 class=''> "+el.contact_number+"</h4>"; 
                 email += 
                "<h4 class=''> "+el.email+"</h4>"; 
                 address += 
                "<h4 class=''> "+el.address+"</h4>"; 
                  status += 
                "<h4 class=''> "+el.patient_status+"</h4>"; 
                

                //---------------------------------------------------------

                      /*  "<table class=''>"  
                                   " <thead>"
                                       " <tr>"
                                            "<th>Patient ID</th>"
                                           " <th>Name</th>"
                                            "<th>Contact Number</th>"
                                           "<th>Age</th>"
                                            "<th>Date Of Birth</th>"
                                            "<th>Status</th>"
                                       " </tr>"
                                   " </thead>"
                                  "  <tbody>"
                                        "<tr class=''>"
                                           " <td>"+el._id+"</td>"
                                           " <td>"+el.patient_name+"</td>"
                                            "<td></td>"
                                           "<td></td>"
                                           "<td></td>"
                                            "<td></td>"
                                      " </tr>"
                                       
                                    "</tbody>"
                               "</table>";*/
                //-------------------------------------------------------      
                
            });
            $("#list").html(id);
            $("#list1").html(pname);
              $("#list2").html(age);
               $("#list3").html(gender);
                $("#list4").html(contactnum);
                 $("#list5").html(email);
                  $("#list6").html(address);
                   $("#list7").html(status);
                  
            printPost(0);
            current=1;
        });
    };

    getAllPosts();
    
});