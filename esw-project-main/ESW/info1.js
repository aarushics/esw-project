// var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
//4d657373616765
  
  
// $("#target").load("https://api.thingspeak.com/channels/1579833/fields/1.json?results=2")


fetch('https://api.thingspeak.com/channels/1579833/feeds.json?results=2')
  .then((response) => response.json())
  .then((data) => document.getElementById("temp1").innerHTML = data["feeds"][0]["field1"]);//get data for UserId (feild) user 1
  
// fetch('https://api.thingspeak.com/channels/1579833/fields/1.json?results=1')
//   .then((response) => response.json())
//   .then((data) => {
//     // var decrypted = CryptoJS.AES.decrypt(data["feeds"][1]["field1"], "Secret Passphrase");
//     document.getElementById("temp1").innerHTML = decrypted;});


// //function maybe useful for looping 
// function showQuestion(id)
// {
// var thediv = document.getElementById("q"+id);
// WriteQuestionIn(thediv); //Ajax
// }


  
  
  
  
  
  
  // TAB
  // $(document).on('click', '.tab-wrap ul li a', function (e) {
  //     var curTabContentId = $(this).attr('href');
  //     $(this).parents('.tab-wrap').find('ul li').removeClass('active');
  //     $(this).parents('li').addClass('active');
  //     $(this).parents('.tab-wrap').find('.tab-content-id').removeClass('active');
  //     $(curTabContentId).addClass("active");
  //     e.preventDefault();
  // });