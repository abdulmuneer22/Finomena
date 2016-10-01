import React from 'react';

import Home from './Src/Components/home'

class App extends React.Component {

constructor(){
    super();
    this.state={
        name : "Muneer"
    }
}

   render() {
      return (
         <div>
            <Home/>
         </div>
      );
   }
}

export default App;
