import React, { Component } from "react";

class App extends Component {
    render() {
      return (
        <div className="App">
          <div className='flex mx-auto flex-col items-center justify-center min-h-screen'>
            <h1 className="text-2xl">Welcome to your Application!</h1>
            <p className="text-lg font-thin">Happy coding!</p>
          </div>
          <div className="absolute bottom-0 flex gap-5 mx-auto min-w-full justify-center p-5">
            <p className="text-sm">Powered by:</p>
            <p className='text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-500'>react</p>
            <p className='text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-600'>typescript</p>
            <p className='text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700'>tailwind</p>
            <p className='text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-800'>webpack</p>
          </div>
        </div>
      );
    }
  }
  
  export default App;