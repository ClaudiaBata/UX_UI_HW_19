console.log("Your index.js file is loaded correctly!");

$(document).ready(function(){
    // Show modal popup on hover
    $('#sticky-circle').hover(function(){
      $('#modal-popup').css('display', 'block');
    });
  
    // Hide modal popup when close button is clicked
    $('.close').click(function(){
      $('#modal-popup').css('display', 'none');
    });
  
    // Hide modal popup when submit button is clicked
    $('#submit-feedback').click(function(){
      var feedback = $('#feedback-text').val();
      // You can handle the feedback submission here
      $('#modal-popup').css('display', 'none');
    });
  });
  