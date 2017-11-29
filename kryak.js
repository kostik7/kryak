jQuery(document).ready(function() {
        jQuery("li.comment p").each(function( index ) {
          jQuery(this).replace(":)", '<img src="https://emojicodes.com/wp-content/uploads/2014/02/smile.png" />');
        });
      });