document.getElementById("start-btn").addEventListener("click", function() {
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("birthday-site").style.display = "block";
    document.getElementById("birthday-song").style.display = "block";
    document.getElementById("birthday-song").play();
  });

  $(document).ready(function() {
    $("#start-btn").click(function() {
      $("#start-btn").hide();
      $("#birthday-site").removeClass("d-none");
      startConfetti(); // Add this line to start the confetti animation
    });
  });