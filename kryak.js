var smileys = 
    {
     ":)": "//emojicodes.com/wp-content/uploads/2014/02/smile.png",
     ":(":"//emojicodes.com/wp-content/uploads/2014/02/frown.png",
     ":P":"//emojicodes.com/wp-content/uploads/2014/02/tongue.png",
     ":D":"//emojicodes.com/wp-content/uploads/2014/02/grin.png",
     ":O":"//emojicodes.com/wp-content/uploads/2014/02/gasp.png", 
     ";)":"//emojicodes.com/wp-content/uploads/2014/02/wink.png",
     "B-)":"//emojicodes.com/wp-content/uploads/2014/02/glasses.png",
     "B|":"//emojicodes.com/wp-content/uploads/2014/02/sunglasses.png",
     ">:(":"//emojicodes.com/wp-content/uploads/2014/02/grumpy.png",
     ":'(":"//emojicodes.com/wp-content/uploads/2014/02/cry.png",
     "3:)":"//emojicodes.com/wp-content/uploads/2014/02/devil.png",
     "O:)":"//emojicodes.com/wp-content/uploads/2014/02/angel.png",
     ":*":"//emojicodes.com/wp-content/uploads/2014/02/kiss.png",
     "<3":"//emojicodes.com/wp-content/uploads/2014/02/heart.png",
     "^_^":"//emojicodes.com/wp-content/uploads/2014/02/kiki.png",
     "-_-":"//emojicodes.com/wp-content/uploads/2014/02/squint.png",
     "o.O":"//emojicodes.com/wp-content/uploads/2014/02/confused.png",
     "(y)":"//emojicodes.com/wp-content/uploads/2014/02/like.png",
     "[[roxsign]]":"//emojicodes.com/wp-content/uploads/2014/02/rox.png",
     "[[notbaad]]":"//emojicodes.com/wp-content/uploads/2014/02/notbad.png"
    }

jQuery(document).ready(function() {
        jQuery("li.comment p").each(function( index ) {
          for(key in smileys) {
                jQuery(this).html(jQuery(this).html().replace(smileys[key], key));
                jQuery(this).html(jQuery(this).html().replace(key, "<img src='https:" + smileys[key] + "' style='width:20px;height:20px;vertical-align: middle;' />"));
          }
        });
            var smileys_bar = "";
            var isChrome = !!window.chrome && !!window.chrome.webstore;
    
            if(!isChrome) {
                for(key in smileys) {
                      smileys_bar += '<div style="float:left;margin-right:5px;"><img src="'+ smileys[key] + '" alt="' + key + '" style="width:20px;height:20px;vertical-align: middle;" />' + '</div>';
                }
                jQuery("p.comment-footer").before("<div><div>Перетащите смайлик в сообщение:</div> " + smileys_bar + "</div>");
            }
            else {
                for(key in smileys) {
                      smileys_bar += '<div style="margin-right:5px;"><img src="'+ smileys[key] + '" alt="' + key + '" style="width:20px;height:20px;vertical-align: middle;" /> ' + key +  '</div>';
                }
                jQuery("p.comment-footer").before("<div><div>Скопируйте код смайлика в сообщение:</div> " + smileys_bar + "</div>");
            }
      });
