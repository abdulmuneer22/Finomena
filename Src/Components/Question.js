import React from 'react';

class Question extends React.Component {

constructor(){
    super();
    this.state={
        name : "Home"
    }
    injectTapEventPlugin();


}

   render() {
      return (
         <div>
           <h1></h1>
         </div>
      );
   }
}

export default Question;




const styles = {
  container: {
    margin : 10,
    backgroundColor : "#B0BEC5",
  }

};
