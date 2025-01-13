/* 
📐 Create a TypeScript React App
Before We Begin
As we learned in the last module, initializing a React application using npm create vite@4.4.1 is fast and simple. This time, we'll use TypeScript instead of JavaScript as the "variant" (i.e. programming language).

Instructions
To create a new TypeScript React application, use the following steps:

In the command line, navigate to the desired parent folder and run npm create vite@4.4.1.

🔑 Note: This command will automatically create a subfolder to house your React application; you don't need to perform a mkdir command to create one manually.
Enter the desired name of your new project folder.

From the first list of options, select your framework for our activities in class. As before, we'll be using React.

From the second list of options, select your variant for our activities in class. This time, we'll be using TypeScript.

cd into your newly created project folder and run npm install.

Run npm run dev and navigate to the provided URL to see your application running.

Separate your application's Counter functionality into its own component as follows:

Replace the App.tsx in your application with the file ./Unsolved/src/App.tsx.

Copy the folder ./Unsolved/src/components into your src folder.

Rerun the command npm run dev and navigate to the provided URL to see that your application is now running using a Counter component.

📝 Notes
Refer to the documentation:

Getting Started with Vite

🏆 Bonus
If you've completed this activity, work through the following challenge with your partner to further your knowledge:

What are the primary differences between using vite with JavaScript and using vite with TypeScript? 
*/

import Counter from './components/Counter';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
