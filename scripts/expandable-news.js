
	document.getElementsByClassName("expandable-feed--more-news-button")[0].addEventListener("click", showArticles); // More News button click event

	// initially hides all articles on load
	(function hideArticle() {
		var allArticles = document.getElementsByTagName("article");
		for (i = 0; i < allArticles.length; i++) {
			allArticles[i].setAttribute("style", "display:none");
		}
	})();

	var articleCount = 15; // set the article counter

	// shows articles that were previously hidden, only showing the first 15
	function showArticles() {

		var allArticles = document.getElementsByTagName("article"); // get all Articles

		var moreNewsButton = document.getElementsByClassName("expandable-feed--more-news-button"); // get More News button

		var selector = ".c-news-feed-01 article:nth-child(-n+" + articleCount + ")"; // Set the number of to iterate through in groups of 9

		var articles = document.querySelectorAll(selector); // Store these articles in a new variable

		// Hide More News button if articles exceeds article counter
		if (allArticles.length < articleCount) {
			moreNewsButton[0].setAttribute("style", "display:none");
		}

		// Loop through each individual item and add setAttribube display:block to each item, break out if article count exceeds number of articles
		for (i = 0; i < articleCount; i++) {
			if (i >= allArticles.length) {
				break;
			}
			articles[i].setAttribute("style", "display:block");
		}

		articleCount = articleCount + 9; // increment the article counter to show the next 9

	}

	showArticles();
