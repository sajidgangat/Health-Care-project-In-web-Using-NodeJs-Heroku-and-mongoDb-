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
    //alert("in ready")
   function getAllPosts(){
       // alert("main function")
        $.ajax({
        url: root + '/test',
        method: 'GET'
        }).then(function(data) {
            posts = data;
            noPosts = posts.length;
          var id="";
            var patient_name="";
            var blood_presure="";
             var cholestrol="";
              var heart_rate="";
               var temprature="";
                var date="";
             
            data.forEach(function(el) {
                    
   
                       
                        id += 
                "<h4 class=''>("+el._id+") </h4>"; 
               patient_name +=                 "<h4 class=''> "+el.patient_name+"</h4>"; 
                  blood_presure +=                 "<h4 class=''> "+el.blood_presure+"</h4>"; 
                 cholestrol +=                 "<h4 class=''> "+el.cholesterol+"</h4>"; 
                 heart_rate +=                 "<h4 class=''> "+el.heart_rate+"</h4>"; 
                 temprature +=                 "<h4 class=''> "+el.temperature+"</h4>"; 
                 date +=                 "<h4 class=''> "+el.date+"</h4>"; 
              
                

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
    //    alert("in html")
            $("#list1").html(patient_name);
              $("#list2").html(blood_presure);
               $("#list3").html(cholestrol);
                $("#list4").html(heart_rate);
                 $("#list5").html(temprature);
                  $("#list6").html(date);
             
                  
            printPost(0);
            current=1;
        });
    };

    getAllPosts();
    
    
});