data2=[{
   
    imgSrc:"./images/mediator.png",
    personality: "Mediator"
    },{
    imgSrc:"./images/logistician.png",
    personality: "Logistician"
    },{
    imgSrc:"./images/compaigner.png",
    personality: "Campaigner"
    },{
    imgSrc:"./images/executive.png",
    personality: "Executive"
    },{
    imgSrc:"./images/debator.png",
    personality: "Debater"
    },{
    imgSrc:"./images/Architect-amico.png",
    personality: "Architect"
    },{
    imgSrc:"./images/entrepreneur.png",
    personality: "Entrepreneur"
    },{
    imgSrc:"./images/entertainer.png",
    personality: "Entertainer"
    }]
    
    
var each = function (coll,func){
    if (Array.isArray(coll)){
        for (var i =0;i<coll.length;i++){
        func(coll[i],i)
    }
    }
    else {
        for (var key in coll){
            func(coll[key],key)
        }
    }
}

var filter = function(array,predicate){
var acc = [];
each(array,function(e,i){
    if (predicate(e,i)){
        acc.push(e)
    }
})
return acc;
}
each(data2,function(elem,i){
    var div=$("<div></div>")
    div.attr("id",i)
    div.attr("class","grid-item1")
    var img=$("<img />")
    img.attr("src",elem.imgSrc)
    img.appendTo(div)
    $("#container1").append(div)
    var btn=$("<button id='btn'>read more...</button>")
    var name = $("<p>" + elem.personality + "</p>");
    name.appendTo(div);
    btn.appendTo(div);
    $("#container").append(div)
})
$("#btn1").on("click", function(e) {
  $("#container1").empty();
        $("#container1").append("<div> <img src='./images/adventurer.png'</div>");
        $("#container1").append("<p> Who is An Adventurer (ISFP)? An Adventurer (ISFP) is a person with the Introverted, Observant, Feeling, and Prospecting personality traits. They tend to have open minds, approaching life, new experiences, and people with grounded warmth. Their ability to stay in the moment helps them uncover exciting potentials.</p>")
    });
    $("#btn2").on("click", function(e) {
        $("#container1").empty();
              $("#container1").append("<div> <img src='./images/compaigner.png'</div>");
              $("#container1").append("<p> Campaigners (ENFPs) are true free spirits – outgoing, openhearted, and open-minded. With their lively, upbeat approach to life, they stand out in any crowd. But even though they can be the life of the party, Campaigners don’t just care about having a good time. These personality types run deep – as does their longing for meaningful, emotional connections with other people.</p>")
          })
          $("#btn3").on("click", function(e) {
            $("#container1").empty();
                  $("#container1").append("<div> <img src='./images/logistician.png'</div>");
                  $("#container1").append("<p> A Logistician (ISTJ) is someone with the Introverted, Observant, Thinking, and Judging personality traits. These people tend to be reserved yet willful, with a rational outlook on life. They compose their actions carefully and carry them out with methodical purpose.</p>")
              })
              $("#btn4").on("click", function(e) {
                $("#container1").empty();
                      $("#container1").append("<div> <img src='./images/entrepreneur.png'</div>");
                      $("#container1").append("<p>An Entrepreneur (ESTP) is someone with the Extraverted, Observant, Thinking, and Prospecting personality traits. They tend to be energetic and action-oriented, deftly navigating whatever is in front of them. They love uncovering life's opportunities, whether socializing with others or in more personal pursuits.</p>")
                  })