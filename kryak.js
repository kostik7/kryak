var smileys = 
    {
     ":)": "https://emojicodes.com/wp-content/uploads/2014/02/smile.png",
     ":(":"http://emojicodes.com/wp-content/uploads/2014/02/frown.png",
     ":P":"http://emojicodes.com/wp-content/uploads/2014/02/tongue.png",
     ":D":"http://emojicodes.com/wp-content/uploads/2014/02/grin.png",
     ":O":"http://emojicodes.com/wp-content/uploads/2014/02/gasp.png", 
     ";)":"http://emojicodes.com/wp-content/uploads/2014/02/wink.png",
     "B-)":"http://emojicodes.com/wp-content/uploads/2014/02/glasses.png",
     "B|":"http://emojicodes.com/wp-content/uploads/2014/02/sunglasses.png",
     ">:(":"http://emojicodes.com/wp-content/uploads/2014/02/grumpy.png",
     ":/":"http://emojicodes.com/wp-content/uploads/2014/02/unsure.png",
     ":'(":"http://emojicodes.com/wp-content/uploads/2014/02/cry.png",
     "3:)":"http://emojicodes.com/wp-content/uploads/2014/02/devil.png",
     "O:)":"http://emojicodes.com/wp-content/uploads/2014/02/angel.png",
     ":*":"http://emojicodes.com/wp-content/uploads/2014/02/kiss.png",
     "<3":"http://emojicodes.com/wp-content/uploads/2014/02/heart.png",
     "^_^":"http://emojicodes.com/wp-content/uploads/2014/02/kiki.png",
     "-_-":"http://emojicodes.com/wp-content/uploads/2014/02/squint.png",
     "o.O":"http://emojicodes.com/wp-content/uploads/2014/02/confused.png",
     "(y)":"http://emojicodes.com/wp-content/uploads/2014/02/like.png"
    }

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
