var smileys = {":)": "https://emojicodes.com/wp-content/uploads/2014/02/smile.png",":(":"http://emojicodes.com/wp-content/uploads/2014/02/frown.png",":P":"http://emojicodes.com/wp-content/uploads/2014/02/tongue.png"}

var smileys_bar = "";

for(key in smileys) {
      smileys_bar += key - '<img src="'+ smileys[key] + '" alt="' + key + '" />';
}

function smileys_bar_func() {
        if(jQuery(".comment-replybox-single").find("#smileys-bar").length == 0) {
                jQuery(".comment-replybox-single").prepend("<div id='smileys-bar'>Скопируйте смайлик в сообщение: " + smileys_bar + "</div>");
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
        
        jQuery("a[kind='i']").click(function() {setTimeout(smileys_bar_func, 1500);});
      });
