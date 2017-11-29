var smileys = 
    {
     ":)": "https://emojicodes.com/wp-content/uploads/2014/02/smile.png",
     ":(":"https://emojicodes.com/wp-content/uploads/2014/02/frown.png",
     ":P":"https://emojicodes.com/wp-content/uploads/2014/02/tongue.png",
     ":D":"https://emojicodes.com/wp-content/uploads/2014/02/grin.png",
     ":O":"https://emojicodes.com/wp-content/uploads/2014/02/gasp.png", 
     ";)":"https://emojicodes.com/wp-content/uploads/2014/02/wink.png",
     "B-)":"https://emojicodes.com/wp-content/uploads/2014/02/glasses.png",
     "B|":"https://emojicodes.com/wp-content/uploads/2014/02/sunglasses.png",
     ">:(":"https://emojicodes.com/wp-content/uploads/2014/02/grumpy.png",
     ":/":"https://emojicodes.com/wp-content/uploads/2014/02/unsure.png",
     ":'(":"https://emojicodes.com/wp-content/uploads/2014/02/cry.png",
     "3:)":"https://emojicodes.com/wp-content/uploads/2014/02/devil.png",
     "O:)":"https://emojicodes.com/wp-content/uploads/2014/02/angel.png",
     ":*":"https://emojicodes.com/wp-content/uploads/2014/02/kiss.png",
     "<3":"https://emojicodes.com/wp-content/uploads/2014/02/heart.png",
     "^_^":"https://emojicodes.com/wp-content/uploads/2014/02/kiki.png",
     "-_-":"https://emojicodes.com/wp-content/uploads/2014/02/squint.png",
     "o.O":"https://emojicodes.com/wp-content/uploads/2014/02/confused.png",
     "(y)":"https://emojicodes.com/wp-content/uploads/2014/02/like.png"
    }

jQuery(document).ready(function() {
        jQuery("li.comment p").each(function( index ) {
          for(key in smileys) {
                jQuery(this).html(jQuery(this).html().replace(smileys[key], "<img src='" + smileys[key] + "' style='width:16px;height:16px;vertical-align: middle;' />"));
          }
        });
            var smileys_bar = "";
            for(key in smileys) {
                  smileys_bar += '<div style="float:left;margin-right:10px;">' + key + ' <img src="'+ smileys[key] + '" alt="' + key + '" style="width:16px;height:16px;vertical-align: middle;" />' + '</div>';
            }
            jQuery("p.comment-footer").before("<div><div>Перетащите смайлик в сообщение:</div> " + smileys_bar + "</div>");
      });
