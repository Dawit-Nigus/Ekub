var dataa  = [];
var nameInput   = document.getElementById("name");
var amountInput = document.getElementById("amount");
var messageBox  = document.getElementById("display");

function insert ( ) {
  var name = nameInput.value;
  var amount = amountInput.value;

	dataa.push({
    name: name,
    amount: amount
  });
  clearAndShow(); 
  addData();
  
}

function clearAndShow () {
  nameInput.value = "";
  amountInput.value = "";

  var html = "";

  html += "<tr>";
  html += "<td>Name</td>";
  html += "<td>Amount</td>";
  html += "</tr>";
  for(i = 0; i <= dataa.length - 1; i++)
  {
    html += "<tr>";
    html += "<td>" + dataa[i].name + "</td>";
    html += "<td>" + dataa[i].amount + "</td>";
    html += "</tr>";
  }
  messageBox.innerHTML = html;
}
  function getRandom(){
   
      return "Congratulations To "+ dataa[Math.floor(Math.random()*dataa.length)].name;  
     
  }
 
// Chart

function addData() {
  for(i=0; i < dataa.length; i++){
    var xValue = [dataa[i].name,dataa[i+1].name,dataa[i+2].name];
    var yValue = [dataa[i].amount,dataa[i+1].amount,dataa[i+2].amount];
         
    var barColors = ["red", "green","blue","orange","brown"];
    new Chart( "myChart",
        {
        type: "bar",
        data: {
          labels: xValue,
          datasets: [{
            backgroundColor: barColors,
            data: yValue
          }]
        },
        options: {
          legend: {display: false},
          title: {
            display: true,
            text: "Users"
          }
        }
      });
  }
}
  



