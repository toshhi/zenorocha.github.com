	(function($) {
		
		var json = [],
			username = 'zenorocha';
		
		$.getJSON('https://api.github.com/users/' + username + '/repos', function(result){
	    	
			$.each(result, function(i, field) {
	    		if (field.language != null)
	    			json.push(field);
			});

			json.sort(function(a, b) {
				
				var langA = a.language, 
					langB = b.language;

			 	if (langA < langB)
			  		return -1;
			 	if (langA > langB)
			  		return 1;

			});

			console.log(json);

		});

		
		
	})(jQuery);