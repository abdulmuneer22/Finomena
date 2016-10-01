import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';



var result = <div></div>

const Questions = [

{
  question : '1. Who Is The Prime Minister Of India',
  Options : {
    A : 'Narendra Modi',
    B : 'Manmohan Singh'},
  Answer : 'A',
  _answer : 'Narendra Modi'
  
},
{
  question : '2. Who Is The President  Of USA',
  Options : {
    A : 'Narendra Modi',
    B : 'Barak Obama'},
  Answer : 'B',
  _answer : 'Barak Obama'
  
},
{
  question : '3 . Where is Tajmahal ?',
  Options : {
    A : 'Britain',
    B : 'India'},
  Answer : 'B',
  _answer : 'India'
  
  
},
{
  question : '4. Least Whole Number ?',
  Options : {
    A : '1',
    B : '0'},
  Answer : 'B',
  _answer : '0'
  
},
{
  question : '5. What Day is today ?',
  Options : {
    A : 'Saturday',
    B : 'Sunday'},
  Answer : 'A',
  _answer : 'Saturday'

  
},


]


var currentQ = ''

function deepAccessUsingString(obj, key){
  return key.split('.').reduce((nestedObject, key) => {
    if(nestedObject && key in nestedObject) {
      return nestedObject[key];
    }
    return undefined;
  }, obj);
}

  function onChangeUserName(event){
    
    var  username = event.target.value
    

    //alert(username);
    //console.log(event.target.value)
    //this.updateNavBarColor()
  };



const page1 = <div>
<h1>
<MuiThemeProvider>
 <TextField
          hintText="Enter Name"
          onChange={onChangeUserName.bind(this)}
          />
</MuiThemeProvider>

</h1>

</div>

const page2 = 
<div>
<div>

            
            <MuiThemeProvider>
            <Card>
            <CardHeader
            
            />

            <p>Q1 . Whos is the prime minister of india ?</p>
            
            </Card>
            </MuiThemeProvider>
            

            </div>        

            <div>


            <MuiThemeProvider>
            <Card>
            <CardHeader
            
            
            />
            <RaisedButton primary={true} style={{
              margin : 10,
              alignItems : 'center',
              flex : 1
          }}>
            <div style={{
              //margin : 10
            
          }}>
            <p>A . Narendra Modi</p>
            </div>
            </RaisedButton>


            <RaisedButton primary={true} style={{
              margin : 10,
              alignItems : 'center',
              flex : 1
          }}>
            <div style={{
              //margin : 10
            
          }}>
            <p>B . Manmohan Singh</p>
            </div>
            </RaisedButton>
            
            </Card>
            </MuiThemeProvider>

            </div>  


             <div>

            
            </div>  


</div>
//import Question from './Question'
class Home extends React.Component {

constructor(){
    super();
    this.state={
        name : "Home",
        isLoggedIn : true,
        page : page1,
        username : '',
        wrongAnswerCount : 0,
        rightAnserCount : 0,
        questionNumber : 0,
        A : '',
        currentQuestion : 'test',
        rightAnswer : '',
        result : ''
        
    }
    //var questions = ["Who is the prime minister of india ?","What is the capital of India","What is 1+1"]
    injectTapEventPlugin();


}

componentWillMount(){

//alert(this.state.rightAnswer)
var id = this.state.questionNumber

//currentQ = deepAccessUsingString(Questions, _id);
var currentQ = Questions[id].question
var OptA = Questions[id].Options.A
var OptB = Questions[id].Options.B
var Answer = Questions[id].Answer


//this.setState({currentQuestion : deepAccessUsingString(Questions, '1')})
this.setState({
  currentQuestion : currentQ,
  A : Questions[id].Options.A,
  B : Questions[id].Options.B,
  rightAnswer : Questions[id].Answer
  

})


  console.log(Answer)
  
}



handleAnswer(option){
  var answer = this.state.rightAnswer
  
  
  if(answer != option){
    //alert("wrong")
    var _wrongAnswerCount = this.state.wrongAnswerCount + 1
    this.setState({wrongAnswerCount : _wrongAnswerCount})
  }
  else{
  //alert("right")
  var _rightAnserCount = this.state.rightAnserCount + 1
  
  this.setState({rightAnserCount : _rightAnserCount})
  }
  //alert("wrong answer : " + _wrongAnswerCount)
}




handleFinish(){
  
  //alert(questions[qcount])
  var answer = Questions[0].Answer
  
  

  var _result = <div>
  

  <p>{Questions[0].question}</p>
  <p>{Questions[0].Answer}</p>
  <p>{Questions[0]._answer}</p>
  
  


  <p>{Questions[1].question}</p>
  <p>{Questions[1].Answer}</p>
  <p>{Questions[1]._answer}</p>


  <p>{Questions[2].question}</p>
  <p>{Questions[2].Answer}</p>
  <p>{Questions[2]._answer}</p>
  

  <p>{Questions[3].question}</p>
  <p>{Questions[3].Answer}</p>
  <p>{Questions[3]._answer}</p>
  

  <p>{Questions[4].question}</p>
  <p>{Questions[4].Answer}</p>
  <p>{Questions[4]._answer}</p>
  

  <p>You Have Answered : </p>
  <p>Correct : {this.state.rightAnserCount}</p>
  <p>Wrong : {this.state.wrongAnswerCount}</p>
  <p>Percentage : {(this.state.rightAnserCount/5*100)} %</p>
  
  </div>

  this.setState({result : _result})
  //alert("You have"+this.state.rightAnserCount+ " Right Answers and "+this.state.wrongAnswerCount+ " Wrong Answers")
  //console.log(result)
  
}


handleNext(){
  var number = this.state.questionNumber + 1
  this.setState({questionNumber : number})

  var OptA = Questions[number].Options.A
  var OptB = Questions[number].Options.B
  var Answer = Questions[number].Answer
  
  var currentQ = Questions[number].question
console.log(currentQ)
//this.setState({currentQuestion : deepAccessUsingString(Questions, '1')})
this.setState({
  currentQuestion : currentQ,
  A : OptA,
  B : OptB,
  rightAnswer : Answer


})

  
  
}

   render() {
      return (<div>
         <div style={styles.container}>
         
        <MuiThemeProvider>
        <AppBar
        title="QuizAPP"
        />
        </MuiThemeProvider>


        <MuiThemeProvider>
              <Card>
              <CardHeader

              />

              <p>{this.state.currentQuestion}</p>

              </Card>
        </MuiThemeProvider>


        <MuiThemeProvider>
            <RaisedButton id = "parent" primary={true} style={{
            margin : 10,
            alignItems : 'center',
            flex : 1
            }}

            onClick={this.handleAnswer.bind(this,'A')}
            >
            <div>
            <p>{this.state.A}</p>
            </div>
            </RaisedButton>
        </MuiThemeProvider>


        <MuiThemeProvider>
            <RaisedButton secondary={true} style={{
            margin : 10,
            alignItems : 'center',
            flex : 1
            }}

            onClick={this.handleAnswer.bind(this,'B')}
            >
            <div>
            <p>{this.state.B}</p>
            </div>
            </RaisedButton>
        </MuiThemeProvider>

         </div>


         <MuiThemeProvider>
            <RaisedButton primary={true} style={{
            margin : 10,
            alignItems : 'center',
            flex : 1
            }}

            onClick={this.handleFinish.bind(this)}
            >
            <div>
            <p>Finish</p>
            </div>
            </RaisedButton>
        </MuiThemeProvider>


        <MuiThemeProvider>
            <RaisedButton primary={true} style={{
            margin : 10,
            alignItems : 'center',
            flex : 1
            }}

            onClick={this.handleNext.bind(this)}
            >
            <div>
            <p>Next Question</p>
            </div>
            </RaisedButton>
        </MuiThemeProvider>

        <div>
        {this.state.result}
        </div>

 </div>          
      );
   }
}

export default Home;




const styles = {
  container: {
    margin : 10,
    backgroundColor : "#B0BEC5",
  }

};
