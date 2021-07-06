
   speed = document.querySelector(':root');     
   
   
              function loadData (){
  // ========================================================================================================================================================================================
                url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR45xjRksAnj4s3bWcLyARSjUWp7hY7rYcATEPty0MHEPdMT6-2WH2In9bjldlgTHSkR2SQn5Jl8tCm/pub?gid=1203789969&single=true&output=csv&range=i2";
    // 1 ROYAL Challengers         
                fetch(url) 
                .then(response => response.text())
                .then(text => {
                 console.log(text)
                 speed.style.setProperty('--prmdata', text ); 
               //  text= text.replace("%","");                           // remove % from number in 'text' var
                 //text = text * 10000; 
                 //text = text/100;
          //       document.getElementById("prmid").innerHTML='Royal Challengers ' + "<br />" + text + ' Km.'; //display on html page
                              } 
                    //pass url value to variable
                  ); delete url;
                     delete text;
 // =====================================================================================================================================================================================================       
                url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR45xjRksAnj4s3bWcLyARSjUWp7hY7rYcATEPty0MHEPdMT6-2WH2In9bjldlgTHSkR2SQn5Jl8tCm/pub?gid=1203789969&single=true&output=csv&range=i5";
    // 2 warrior of truth         
                fetch(url) 
                .then(response => response.text())
                .then(text => {
                 console.log(text)
                 speed.style.setProperty('--marmydata', text ); 
               //  text= text.replace("%","");                           // remove % from number in 'text' var
            //     text = text * 10000; 
              //   text = text/100;
              //   document.getElementById("marmyid").innerHTML='Warriors of Truth ' + "<br />" + text + ' Km.'; //display on html page
                              } 
                    //pass url value to variable
                  ); delete url;
                     delete text; 
// =====================================================================================================================================================================================================       
                url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR45xjRksAnj4s3bWcLyARSjUWp7hY7rYcATEPty0MHEPdMT6-2WH2In9bjldlgTHSkR2SQn5Jl8tCm/pub?gid=1203789969&single=true&output=csv&range=i3";
    // 3 Servanta of mother         
                fetch(url) 
                .then(response => response.text())
                .then(text => {
                 console.log(text)
                 speed.style.setProperty('--msdata', text ); 
             //    text= text.replace("%","");                           // remove % from number in 'text' var
               //  text = text * 10000; 
                 //text = text/100;
               //  document.getElementById("msid").innerHTML='Servants of Mother ' + "<br />" + text + ' Km.'; //display on html page
                              } 
                    //pass url value to variable
                  ); delete url;
                     delete text;
// =====================================================================================================================================================================================================       
                url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR45xjRksAnj4s3bWcLyARSjUWp7hY7rYcATEPty0MHEPdMT6-2WH2In9bjldlgTHSkR2SQn5Jl8tCm/pub?gid=1203789969&single=true&output=csv&range=i4";
    // 4 ROYAL BLOOD         
                fetch(url) 
                .then(response => response.text())
                .then(text => {
                 console.log(text)
                 speed.style.setProperty('--pjdata', text ); 
             //    text= text.replace("%","");                           // remove % from number in 'text' var
               //  text = text * 10000; 
                 //text = text/100;
         //        document.getElementById("pjid2").innerHTML='Royal Blood ' + "<br />" + text + ' Km.'; //display on html page
                              } 
                    //pass url value to variable
                  ); delete url;
                     delete text;

// =====================================================================================================================================================================================================       
url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR45xjRksAnj4s3bWcLyARSjUWp7hY7rYcATEPty0MHEPdMT6-2WH2In9bjldlgTHSkR2SQn5Jl8tCm/pub?gid=1203789969&single=true&output=csv&range=i6";
// 4 ROYAL BLOOD         
            fetch(url) 
            .then(response => response.text())
            .then(text => {
             console.log(text)
             speed.style.setProperty('--t5data', text ); 
         //    text= text.replace("%","");                           // remove % from number in 'text' var
           //  text = text * 10000; 
             //text = text/100;
     //        document.getElementById("pjid2").innerHTML='Royal Blood ' + "<br />" + text + ' Km.'; //display on html page
                          } 
                //pass url value to variable
              ); delete url;
                 delete text;

                                                             } 
                                                             
                                                             
