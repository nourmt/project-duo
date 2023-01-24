var data = [

    {
        name:"47 Tucanae",
        imgSrc:"./images/47.jpeg",
        person:"Architect",
        briefexpl:"The cluster was recorded in 1751-2 by Nicolas-Louis de Lacaille, who initially thought it was the nucleus of a bright comet.[13] Lacaille then listed it as 'Lac I-1', the first object listed in his deep-sky catalogue."
    },{
        name:"butterfly cluster",
        imgSrc:"./images/butterfly.jpeg",
        person:"Mediator",
        briefexpl:"The cluster was recorded in 1751-2 by Nicolas-Louis de Lacaille, who initially thought it was the nucleus of a bright comet.[13] Lacaille then listed it as 'Lac I-1', the first object listed in his deep-sky catalogue."
    },{
        name:"coma star cluster",
        imgSrc:"./images/comastar.jpeg",
        person:"Entertainer",
        briefexpl:"The cluster was recorded in 1751-2 by Nicolas-Louis de Lacaille, who initially thought it was the nucleus of a bright comet.[13] Lacaille then listed it as 'Lac I-1', the first object listed in his deep-sky catalogue."
    },{
        name:"hyades",
        imgSrc:"./images/hyades.jpeg",
        person:"Debater",
        briefexpl:"In Greek mythology, the Hyades are the rain nymphs. They pass, according to the sources, for the daughters of Atlas and Ethra or and Pleione, or Hyas and Boeotia, or Ocean, or Melissa, or Cadmilos, or Erechtheus. The sources differ on their number and their name."
    },{
        name:"jewel box cluster",
        imgSrc:"./images/jewel.jpeg",
        person:"Campaigner",
        briefexpl:"The Jewel Box lies just to the side of Beta Crucis, one of the crossbar stars of the Southern Cross. To the naked eye it is only a faint point of light, but good binoculars show a bright orange star, Kappa Crucis, set among a number of blue stars"
    },{
        name:"little beehive cluster",
        imgSrc:"./images/little beehive.jpeg",
        person:"Logistician",
        briefexpl:"Here is a wide-field view of the star Sirius and the open cluster Messier 41 (M41), just squeezing them both in the field of view using the Williams Optics Redcat and Canon 6D camera. Sirius, Alpha Canis Majoris, is also known as the Dog Star, Nile Star, The Sparkling One and many others. At a distance of 8.7 light years, Sirius is the 10th nearest star to Earth."
    },{
        name:"omega centauri",
        imgSrc:"./images/omega centauri.jpeg",
        person:"Executive",
        briefexpl:"A new discovery has resolved some of the mystery surrounding Omega Centauri, the largest and brightest globular cluster in the sky. Images obtained with the Advanced Camera for Surveys onboard the NASA/ESA Hubble Space Telescope and data obtained by the GMOS spectrograph on the Gemini South telescope in Chile show that Omega Centauri appears to harbour an elusive intermediate-mass black hole in its centre."

    },{
        name:"pleiades",
        imgSrc:"./images/pleiades.jpeg",
        person:"Adventurer",
        briefexpl:"The name Pleiades ostensibly derived from the name of their mother, Pleione, effectively meaning 'daughters of Pleione'. However, the name of the star-cluster likely came first, and Pleione was invented to explain it.[3] According to another suggestion Pleiades derived from πλεῖν (plein , 'to sail') because of the cluster's importance in delimiting the sailing season in the Mediterranean Sea: 'the season of navigation began with their heliacal rising'.[4]"
    },{
        name:"wishing well cluster",
        imgSrc:"./images/wish.jpeg",
        person:"Entrepreneur",
        briefexpl:"NGC 3532 (also called the Wishing Well Cluster) is about 300 million years old and contains about 400 stars. It is located in the constellation Carina. Famed astronomer John Herschel observed multiple binary stars within the cluster when he observed the open star cluster in the 1830s, according to ESO"
    },
    
    ];
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
each(data,function(elem,i){
    var div=$("<div></div>")
    div.attr("class","grid-item")
    var img=$("<img />")
    img.attr("src",elem.imgSrc)
    img.appendTo(div)
    var name = $("<p>" + elem.name + "</p>");
    name.appendTo(div);
    var disc=$("<p>"+elem.briefexpl+"</p>");
    disc.appendTo(div);
    $("#container").append(div)
})


$("#list").on("click",function (e) {
    var value = $("#list").val();
    var Dataf=filter(data,function(e,i){
        return e.person===value
    })
    $("#container").empty()
    each(Dataf,function(elem,i){
        $("#container").append('<div id="'+i+'" class="grid-item"><img id="img'+i+'" src="'+elem.imgSrc+'"/></div>')
        $("#container").append('<div class="back">'+elem.briefexpl+'</div>')
        })
})