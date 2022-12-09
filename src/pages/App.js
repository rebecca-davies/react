import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex mx-auto flex-col items-center justify-center min-h-screen">
          <h1 className="text-2xl">Welcome to your Application!</h1>
          <p className="text-lg font-thin">Happy coding!</p>
        </div>
        <div className="absolute bottom-0 flex gap-1 mx-auto min-w-full justify-center p-5 text-sm">
          <p>Powered by:</p>
          <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-800">
            react, webpack, tailwind
          </p>
          <p>and lots of ❤️.</p>
        </div>
      </div>
    );
  }
}

export default App;
