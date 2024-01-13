document.getElementById('search').addEventListener('submit', function(event) {
  event.preventDefault();
  var query = document.getElementById('search-input').value;
  search(query);
});

function search(query) {
  // Perform the search operation based on the query
  // Replace this code with your own search implementation
  
  // Example code:
  var verses = [
    "Romans 8:28 - And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    "Jeremiah 29:11 - For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.",
    "1 Corinthians 16:14 - Let all that you do be done in love.",
    "John 3:16 - For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    "Proverbs 3:5-6 - Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    "Psalms 119:105 (KJV) - Thy word is a lamp unto my feet, and a light unto my path."
  ];

  var results = verses.filter(function(verse) {
    return verse.toLowerCase().includes(query.toLowerCase());
  });

  displaySearchResults(results);
}

function displaySearchResults(results) {
  var resultsContainer = document.getElementById('search-results');
  resultsContainer.innerHTML = '';

  if (results.length > 0) {
    var ul = document.createElement('ul');
    ul.classList.add('search-results-list');
    results.forEach(function(result) {
      var li = document.createElement('li');
      li.classList.add('search-results-item');
      var div = document.createElement('div');
      div.classList.add('search-results-box');
      div.textContent = result;
      li.appendChild(div);
      ul.appendChild(li);
    });
    resultsContainer.appendChild(ul);
  } else {
    resultsContainer.textContent = 'No results found.';
  }
}

document.getElementById('search-input').placeholder = 'Enter verses on site';