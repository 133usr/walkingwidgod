
   speed = document.querySelector(':root');     
   
   
              function loadData (){
  // ========================================================================================================================================================================================
                url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQgGVCkiEIqgEUQXFai3HUE5Z16kmKgBXAbtM49zPSWZIq7ADyWVj5gPT_D8kKDrBusIGfnfmtlrhxv/pub?gid=1203789969&single=true&output=csv&range=i2";
    // 1 ROYAL Challengers         
                fetch(url) 
                .then(response => response.text())
                .then(text => {
                 console.log(text)
                 speed.style.setProperty('--t_1data', text ); 
               //  text= text.replace("%","");                           // remove % from number in 'text' var
                 //text = text * 10000; 
                 //text = text/100;
          //       document.getElementById("t_1_id").innerHTML='Royal Challengers ' + "<br />" + text + ' Km.'; //display on html page
                              } 
                    //pass url value to variable
                  ); delete url;
                     delete text;
 // =====================================================================================================================================================================================================       
                url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQgGVCkiEIqgEUQXFai3HUE5Z16kmKgBXAbtM49zPSWZIq7ADyWVj5gPT_D8kKDrBusIGfnfmtlrhxv/pub?gid=1203789969&single=true&output=csv&range=i3";
    // 2 warrior of truth         
                fetch(url) 
                .then(response => response.text())
                .then(text => {
                 console.log(text)
                 speed.style.setProperty('--t_2data', text ); 
               //  text= text.replace("%","");                           // remove % from number in 'text' var
            //     text = text * 10000; 
              //   text = text/100;
              //   document.getElementById("t_2_id").innerHTML='Warriors of Truth ' + "<br />" + text + ' Km.'; //display on html page
                              } 
                    //pass url value to variable
                  ); delete url;
                     delete text; 
// =====================================================================================================================================================================================================       
                url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQgGVCkiEIqgEUQXFai3HUE5Z16kmKgBXAbtM49zPSWZIq7ADyWVj5gPT_D8kKDrBusIGfnfmtlrhxv/pub?gid=1203789969&single=true&output=csv&range=i4";
    // 3 Servanta of mother         
                fetch(url) 
                .then(response => response.text())
                .then(text => {
                 console.log(text)
                 speed.style.setProperty('--t_3data', text ); 
             //    text= text.replace("%","");                           // remove % from number in 'text' var
               //  text = text * 10000; 
                 //text = text/100;
               //  document.getElementById("t_3_id").innerHTML='Servants of Mother ' + "<br />" + text + ' Km.'; //display on html page
                              } 
                    //pass url value to variable
                  ); delete url;
                     delete text;
// =====================================================================================================================================================================================================       
                url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQgGVCkiEIqgEUQXFai3HUE5Z16kmKgBXAbtM49zPSWZIq7ADyWVj5gPT_D8kKDrBusIGfnfmtlrhxv/pub?gid=1203789969&single=true&output=csv&range=i5";
    // 4 ROYAL BLOOD         
                fetch(url) 
                .then(response => response.text())
                .then(text => {
                 console.log(text)
                 speed.style.setProperty('--t_4data', text ); 
             //    text= text.replace("%","");                           // remove % from number in 'text' var
               //  text = text * 10000; 
                 //text = text/100;
         //        document.getElementById("t_4_id2").innerHTML='Royal Blood ' + "<br />" + text + ' Km.'; //display on html page
                              } 
                    //pass url value to variable
                  ); delete url;
                     delete text;

// =====================================================================================================================================================================================================       
url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQgGVCkiEIqgEUQXFai3HUE5Z16kmKgBXAbtM49zPSWZIq7ADyWVj5gPT_D8kKDrBusIGfnfmtlrhxv/pub?gid=1203789969&single=true&output=csv&range=i6";
// 4 ROYAL BLOOD         
            fetch(url) 
            .then(response => response.text())
            .then(text => {
             console.log(text)
             speed.style.setProperty('--t5data', text ); 
         //    text= text.replace("%","");                           // remove % from number in 'text' var
           //  text = text * 10000; 
             //text = text/100;
     //        document.getElementById("t_4_id2").innerHTML='Royal Blood ' + "<br />" + text + ' Km.'; //display on html page
                          } 
                //pass url value to variable
              ); delete url;
                 delete text;

                                                             } 
                                                             
                                                             
