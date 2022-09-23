
var interv;
// var chart;
$(document).ready(function () {
    var xValues = [];
    var yValues = [];
    var chart = new Chart("myChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [
          {
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: yValues,
          },
        ],
      },
      options: {
        legend: { display: false },
        // scales: {
        //   yAxes: [{ ticks: { min: 0, max: 100 } }],
        // },
      },
    });
    
    var esw = JSON.parse(localStorage.getItem("esw"));
    document.getElementById("table").innerHTML = ``;
    for (k in esw) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            //   console.log(xhttp.responseText, ["feeds"]);
              js = JSON.parse(xhttp.responseText);
              document.getElementById("table").innerHTML += `
                  <tr>
                  <td class='Click-here'>${k}</td>
                    <td class='Click-here'>${js["feeds"][0]["field1"]}</td>
                    <td class='Click-here'>${js["feeds"][0]["field2"]}</td>
                    <td class='Click-here'>${js["feeds"][0]["field3"]}</td>
                    <td class='Click-here'>${js["feeds"][0]["field4"]}</td>
                    <td class='Click-here'>${js["feeds"][0]["field5"]}</td>
                    <td><a href="https://maps.google.com/?q=${js["feeds"][0]["field6"]}">${js["feeds"][0]["field6"]}</td>
                    
                  `; 
                  
                  if(js["feeds"][0]["field7"] == 1 ){
                    document.getElementById("table").innerHTM +=  `
                    
                    <td style="color:yellow">ADL Fall</td> 
                    </tr>
                    <div class="callout">

                    <div class="callout-header">Fall Detected</div>
                  
                    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                  
                    <div class="callout-container">
                  
                      <p>An ADL Fall of User: ${k} has been detected at <a href="https://maps.google.com/?q=${js["feeds"][0]["field6"]}">Location</a> at <span id='datetime'></span>.</p>
                  
                      <script>
                          var dt = new Date();
                          document.getElementById('datetime').innerHTML += dt.getDate() + "\" + dt.getMonth() + "\" + dt.getYear() + "  " + dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() ;
                      </script>
                  
                    </div>
                  
                  </div>
                  </div>
                    `                    
                  }
                  else
                  {
                    if(js["feeds"][0]["field7"] == 2 ){
                      document.getElementById("table").innerHTM +=  `
                      
                      <td style="color:red">Fall</td> 
                      </tr>
                      <div class="callout">

                      <div class="callout-header" , style="background-color:red,color:black;">Fall Detected</div>

                        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>

                        <div class="callout-container">

                          <p>A Fall of User: ${k} has been detected at <a href="https://maps.google.com/?q=${js["feeds"][0]["field6"]}">Location</a> at <span id='datetime'></span>.</p>

                          <script>
                              var dt = new Date();
                              document.getElementById('datetime').innerHTML += dt.getDate() + "\" + dt.getMonth() + "\" + dt.getYear() + "  " + dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() ;
                          </script>

                        </div>

                      </div>
                    </div>
                      `
                                      
                    }
                    else
                    {
                      
                        document.getElementById("table").innerHTM +=  `
                        
                        <td style="color:aquamare">ADL</td> 
                        </tr>
                        `                    
                    
                    }
                  }
          }
        };
        console.log(esw[k]["thing"], k);
        xhttp.open("GET", esw[k]["thing"], false);
        xhttp.send();
            
          
        
    }
    
    
    $(".close-btn, .bg-overlay").click(function () {
        console.log("SA");
      $(".custom-model-main").removeClass("model-open");
      $(".custom-model-main2").removeClass("model-open2");
    //   chart.destroy();
       chart.data.labels = [];
       chart.data.datasets.forEach((dataset) => {
         dataset.data = [];
       });
       chart.update();
      clearInterval(interv);
  });
  $(".toggle-menu").click(function () {
    $(this).toggleClass("active");
    $("#menu").toggleClass("open");
  });
//   setInterval(() => {
    // fetch(
    //   "https://api.thingspeak.com/channels/1857262/feeds.json?api_key=334BRP15JBJPIJ0K&results=1"
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     chart.data.labels.push(chart.data.labels.at(-1) + 10);
    //     chart.data.datasets.forEach((dataset) => {
    //       dataset.data.push(data["feeds"][0]["field1"]);
    //     });
    //     chart.update();
    //   });
//   }, 15000);
    
    setInterval(() => {
        var rows = $("#table").find("tr");
        console.log(rows.length);
        for (var i = 0; i < rows.length; i++) {
            var cols = $(rows[i]).find("td");
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
              if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                //   console.log(xhttp.responseText, ["feeds"]);
                js = JSON.parse(xhttp.responseText);
                cols[1].innerText = js["feeds"][0]["field1"];
                cols[2].innerText = js["feeds"][0]["field2"];
                cols[3].innerText = js["feeds"][0]["field3"];
              }
            };
            console.log(esw[k]["thing"], k);
            xhttp.open("GET", esw[i]["thing"], false);
            xhttp.send();
            // console.log(cols.length);
            // fetch(esw[i]["thing"])
            //   .then((response) => response.json())
            //   .then((data) => {
                // for (var k = 0; k < cols.length; k++) {
                //     var col = cols[k];
                //     col.innerText = data["feeds"][0]["field1"]
                // }
                //   console.log(esw, i - 1, esw[i - 1]);
                //   cols[0].innerText = i-1;
                //   cols[1].innerText = data["feeds"][0]["field1"]
                //   cols[2].innerText = data["feeds"][0]["field2"];
                //    cols[3].innerText = data["feeds"][0]["field3"];
                //    cols[4].innerText = esw[i-1]["name"];
                //    cols[5].innerText = esw[i-1]["job"];
                //    cols[6].innerText = esw[i-1]["age"];
                //    cols[7].innerText = esw[i-1]["thing"];
            //   });
            
        }
    }, 15000);
    
    
    


    
    
    
    $(document.body).on("click", ".Click-here", function () {
      // chart.destroy();
        
        // $("pop-up-content-wrap");
        
        if (this.cellIndex == 0)
        { 
            $(".custom-model-main2").addClass("model-open2");
            console.log(this.innerHTML);
            document.getElementById("info").innerHTML = `
            Name: ${esw[this.innerHTML]["name"]}<br>
            Age:${esw[this.innerHTML]["age"]}<br>
            Gender:M<br>
            Job:${esw[this.innerHTML]["job"]}<br>
            Thingspeak url:${esw[this.innerHTML]["thing"]}<br>
            `;
            console.log($("#info"));
            // return;
        }
        else
        {
            $(".custom-model-main").addClass("model-open");
            // $("pop-up-content-wrap").innerHTML = "<canvas id='myChart' style='width:100%;max-width:600px'></canvas>"
        }
          fetch(esw[this.parentElement.cells[0].innerHTML]["thing"])
            .then((response) => response.json())
            .then((data) => {
              chart.data.labels.push(0);
              chart.data.datasets.forEach((dataset) => {
                dataset.data.push(data["feeds"][0]["field" + this.cellIndex]);
              });
              chart.update();
            });
      console.log(this);
         interv = setInterval(() => {
      fetch(esw[this.parentElement.cells[0].innerHTML]["thing"])
        .then((response) => response.json())
        .then((data) => {
          chart.data.labels.push(chart.data.labels.at(-1) + 15);
          chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data["feeds"][0]["field" + this.cellIndex]);
          });
          chart.update();
        });
        }, 15000);
    });

});

