/* 
 *

  Add Comments to Implementation of API Parameters
  Work with a partner to add comments describing the functionality of the code found in Unsolved/src/main.ts.

  📝 Notes
  Refer to the documentation: 
  https://docs.github.com/en/rest/using-the-rest-api/getting-started-with-the-rest-api?apiVersion=2022-11-28

  🏆 Bonus
  Q: What are query strings, and how are they used to create parameters for APIs?
  A: Query strings are additional information included in a URL which is used for API parameters 
     to filter results similar to a database query. A query string begins with the ? character
     followed by one or more key value pairs separated by & (e.g. ?name=bob&age=30)
  Q: What is the difference between HTTP and HTTPS? How does this difference affect our HTTP requests? 
  A: HTTP is insecure unencrypted web data transfer. HTTPS uses TLS encryption with a certificate and
     so any sensitive data, including credentials are transferred securely.

*
*/

import './style.css';

// Explain each parameter in comments below.
const REQUEST_URL =
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc';

// fetch runs an HTTP GET (default) of the github REST api URL 
fetch(REQUEST_URL)
  // the the server responds with the requested data in json format
  //    which is parsed here
  .then((response) => response.json())
  // the json result is displayed in the web client console
  .then((data) => {
    console.log(data);
  });
