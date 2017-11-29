jQuery(document).ready(function() {
        jQuery("li.comment p").each(function( index ) {
          jQuery(this).html(jQuery(this).html().replace(":)", '<img src="https://emojicodes.com/wp-content/uploads/2014/02/smile.png" />'));
          jQuery(this).html(jQuery(this).html().replace(":(", '<img src="http://emojicodes.com/wp-content/uploads/2014/02/frown.png" />'));
        });
      });
