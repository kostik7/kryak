jQuery(document).ready(function() {
        jQuery("li.comment p").each(function( index ) {
          for(key in smileys) {
                jQuery(this).html(jQuery(this).html().replace(key, smileys[key]));
          }
        });
 
            var smileys = {":)": "https://emojicodes.com/wp-content/uploads/2014/02/smile.png",":(":"http://emojicodes.com/wp-content/uploads/2014/02/frown.png",":P":"http://emojicodes.com/wp-content/uploads/2014/02/tongue.png"}
            var smileys_bar = "";
            for(key in smileys) {
                  smileys_bar += key + ' - <img src="'+ smileys[key] + '" alt="' + key + '" />';
            }
            jQuery("p.comment-footer").before("<div>" + smileys_bar + "</div>");
      });
