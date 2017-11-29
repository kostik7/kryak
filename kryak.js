var smileys = {":)": "https://emojicodes.com/wp-content/uploads/2014/02/smile.png",":(":"http://emojicodes.com/wp-content/uploads/2014/02/frown.png",":P":"http://emojicodes.com/wp-content/uploads/2014/02/tongue.png"}

var smileys_bar = "";

for(key in smileys) {
      smileys_bar += '<img src="'+ smileys[keys] + '" alt="' + key + '" />'
}

function smileys_bar() {
        if(jQuery("#commentsHolder").find("#smileys-bar") == 0) {
                jQuery("#commentsHolder").prepend("<div id='smileys-bar'>' + smileys_bar + '</div>");
        }
        
        jQuery("#smileys-bar img").on("drop", function(event){
                console.log(event);
        });
}

jQuery(document).ready(function() {
        jQuery("li.comment p").each(function( index ) {
          jQuery(this).html(jQuery(this).html().replace(":)", '<img src="https://emojicodes.com/wp-content/uploads/2014/02/smile.png" />'));
          jQuery(this).html(jQuery(this).html().replace(":(", '<img src="http://emojicodes.com/wp-content/uploads/2014/02/frown.png" />'));
          jQuery(this).html(jQuery(this).html().replace(":P", '<img src="http://emojicodes.com/wp-content/uploads/2014/02/tongue.png" />'));
        });
        
        jQuery("a[kind='i']").click(function() {setTimeout(smileys_bar, 600);});
      });
