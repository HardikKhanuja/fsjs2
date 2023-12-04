import './App.css';
import {useEffect,useState} from 'react';

function App() {
  
  const [userPoints, setUserPoints]= useState(0);
  const [computerPoints, setComputerPoints]= useState(0);
  const [userChoice, setUserChoice]= useState('rock');
  const [computerChoice, setComputerChoice]= useState('rock');
  const [turnResult, setTurnResult]=useState('Result Pending');
  const [finalResult, setFinalResult]=useState('Let\'s see who wins');
  const [gameOver, setGameOver]=useState(false);
  const [buttonCount, setButtonCount]= useState(0);

  const choices = ['Rock','Paper','Scissors'];

  const handleOnCLick=(choice)=>{
    setUserChoice(choice);
    generateComputerChoice();
    setButtonCount(buttonCount+1);
  }

  const generateComputerChoice=()=>{
    const randomChoice= choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }

  const reset=()=>{
    window.location.reload();
    setButtonCount(0);
  }
  useEffect(() => {
    const comboMove = userChoice + computerChoice;
    if (userPoints < 5 && computerPoints < 5) { 
      if (comboMove === 'RockScissors' || comboMove === 'PaperRock' || comboMove === 'ScissorsPaper') {
        const updatedUserPoints = userPoints + 1;
        setUserPoints(updatedUserPoints);
        setTurnResult('You got 1 point.');
        if (updatedUserPoints === 5) {
          setGameOver(true);
          setFinalResult('YOU ARE THE WINNER');
        }
      }
      if (comboMove === 'RockPaper' || comboMove === 'PaperScissors' || comboMove === 'ScissorsRock') {
        const updatedComputerPoints = computerPoints + 1;
        setComputerPoints(updatedComputerPoints);
        setTurnResult('Computer got 1 point.');
        if (updatedComputerPoints === 5) {
          setGameOver(true);
          setFinalResult('COMPUTER IS THE WINNER');
        }
      }
      if (comboMove === 'RockRock' || comboMove === 'PaperPaper' || comboMove === 'ScissorsScissors') {
        setTurnResult('DRAW');
      }
    }
  }, [userChoice, computerChoice,buttonCount]);
  


  return (
    <div className="App">
      <h1 className="game-heading">
        Rock Paper Scissors Game       
      </h1>
      <div className='points'>
        <h1 className='user-points'> Your Points : {userPoints}</h1>
        <h1 className='computer-points'> Computer Points : {computerPoints}</h1>
      </div>
      <div className='images'>
        <img className='user-image' src={`../images/${userChoice}.png`} alt="User's Choice" />
        <img className='computer-image' src={`../images/${computerChoice}.png`} alt="Computer's Choice" />
      </div>
      <div className='choice-btn-div'>
         {choices.map((choice, index) => (
           <button className='choice-btn' key={index} onClick={() => handleOnCLick(choice)}>
              {choice}
            </button>
         ))}
      </div>

      <div className='results-div'>
        <h1 className='turn-result'> Turn Result : {turnResult}</h1>
        <h1 className='final-result'> Final Result : {finalResult}</h1>  
      </div>
      <div className='reset-btn-div'>
        {gameOver &&
        <button className='reset-btn' onClick={()=>reset()}> Reset Game</button>}
      </div>
    </div>
  );
}

export default App;















