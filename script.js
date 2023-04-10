
  $(document).ready(function() {
    $("#start-btn").click(function() {
      $("#start-btn").fadeOut(); // Fade out the button
      $("#birthday-site").fadeIn(); // Fade in the content
      document.getElementById("birthday-song").play(); // Play the song
    });
  });