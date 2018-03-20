$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");

    $("ul#user").children("li").first().click(function() {
    $(this).remove();
  });
  $("ul#webpage").children("li").first().click(function() {
    $(this).remove();
  });
  });


  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");

    $("ul#user").children("li").first().click(function() {
    $(this).remove();
  });
  $("ul#webpage").children("li").first().click(function() {
    $(this).remove();
  });

  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");

    $("ul#user").children("li").first().click(function() {
    $(this).remove();
  });
  $("ul#webpage").children("li").first().click(function() {
    $(this).remove();
  });

  });


  //cat vs dog
  $("button#cat").click(function() {
    $("ul#cat").prepend("<li>mow</li>");
    // $("ul#dog").prepend("<li>bark!</li>");

    $("ul#cat").children("li").first().click(function() {
    $("ul#cat li").removeClass( "bg-pink" );
    $(this).addClass("bg-pink");
  });

  $("ul#dog").removeClass("bg-pink");

  // $("ul#dog").children("li").first().click(function() {
  //   $(this).addClass("bg-pink");
  // });
  });

  $("button#dog").click(function() {
    // $("ul#cat").prepend("<li>mow</li>");

    $("ul#dog").prepend("<li>bark!</li>");

  //   $("ul#cat").children("li").first().click(function() {
  //   $(this).addClass("bg-pink");
  // });
  $("ul#dog").children("li").first().click(function() {
    $("ul#dog li").removeClass( "bg-pink" );
    $(this).addClass("bg-pink");
  });

  $("ul#cat").removeClass("bg-pink");

});



});
