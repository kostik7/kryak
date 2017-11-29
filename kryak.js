var smileys = {":)": "https://emojicodes.com/wp-content/uploads/2014/02/smile.png",":(":"http://emojicodes.com/wp-content/uploads/2014/02/frown.png",":P":"http://emojicodes.com/wp-content/uploads/2014/02/tongue.png"}

jQuery(document).ready(function() {
        jQuery("li.comment p").each(function( index ) {
          for(key in smileys) {
                jQuery(this).html(jQuery(this).html().replace(key, "<img src='" + smileys[key] + "' style='width:16px;height:16px;vertical-align: middle;' />"));
          }
        });
            var smileys_bar = "";
            for(key in smileys) {
                  smileys_bar += key + ' - <img src="'+ smileys[key] + '" alt="' + key + '" style="width:16px;height:16px;vertical-align: middle;" />';
            }
            jQuery("p.comment-footer").before("<div>Скопируйте смайлик в сообщение: " + smileys_bar + "</div>");
      });
