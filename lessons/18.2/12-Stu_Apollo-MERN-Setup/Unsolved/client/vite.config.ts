/* 
This configuration is commonly used in full-stack apps where the front-end and 
back-end servers are developed simultaneously.

It configures the Vite dev server with React support, running on port 3000. 
It automatically opens the browser when the server starts
It proxies requests for /graphql to a back-end server running on port 3001, 
It handles cross-origin (CORS) requests appropriately. 


More about CORS (Cross-Origin Resource Sharing):
CORS is a security feature implemented by web browsers to prevent malicious websites 
from making requests to a different domain than the one that served the web page. It 
restricts how resources on a web page can be requested from another domain.

CORS Policies: When a front-end application makes a request to a back-end server 
on a different origin (domain, protocol, or port), the browser checks the CORS policy 
of the server. If the server allows requests from that origin, it will respond with 
appropriate CORS headers.

Modifying the Origin of the Host Header
Host Header: When a request is made to a server, it includes a "Host" header that 
indicates the domain name of the server being requested. For example, if a request is 
made from a front-end application running on http://localhost:3000 to 
http://localhost:3001, the Host header would be localhost:3000.

Changing the Origin: By using a proxy configuration, the client-side app can modify 
the origin of the Host header to match the target URL (http://localhost:3001).
This can help bypass CORS restrictions during development, allowing the front-end 
application to communicate with the back-end server seamlessly without running into 
CORS errors.
*/

import { defineConfig } from 'vite' // import the vite dev configuration
import react from '@vitejs/plugin-react'  // import the React plugin for Vite to support React

// https://vitejs.dev/config/
// configure vite build and dev server options (and IntelliSense) for React
export default defineConfig({
  /* use the react plugin for JSX support and hot reloading */
  plugins: [react()],
  server: {
    port: 3000, // run the vite dev server on port 3000
    open: true, // automatically load the page in the browser
    proxy: {
      /* proxy requests for /graphql to another server */
      '/graphql': {
        /* forwards requests. Connect the front-end to the back-end server on
        another port (http://localhost:3001 ) */
        target: 'http://localhost:3001',
        /* For CORS (Cross-Origin Resource Sharing): 
        Allows the client-side app to proxy requests to the back-end server, modifying 
        the origin of the Host header to match the target URL. This is particularly 
        useful during development to avoid CORS issues and streamline communication 
        between the front-end and back-end components of an application. */
        changeOrigin: true,
        /* Disables verification of the SSL certificate for requests to the target
        Setting it to false is useful for development purposes, especially if the 
        target server is using a self-signed certificate */
        secure: false,
      },
    },
  },
});
