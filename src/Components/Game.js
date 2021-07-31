import { useState, useEffect } from "react"
import Card from "./Card"
import Images from "./Images"

const Game = () => {
  const [numbers] = useState(Images)
  const [shuffledNum, setShuffledNum] = useState([])
  const [chosenNum, setChosenNum] = useState([])
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  } 

  const handleShuffle = () => {
    const newArr = [...numbers]
    shuffleArray(newArr)
    setShuffledNum(newArr)
  }


  const handleHighScore = () => {
    if(score > highScore){
      setHighScore(score)
    }      
  }

  const getPickedNumber = (e) => {
    const pickedNumber = numbers.filter((number) => number.id == e.target.id)[0]
    return pickedNumber
  } 

  const getMatch = (e) => {
    const matchBO = chosenNum.some((item) => item.id == e.target.id)
    return matchBO
  }

  const handleMatch = (e) => {
    const pick  = getPickedNumber(e)
    const match = getMatch(e)

    if(match){
      setScore(0)
      handleHighScore()
      resetChosenNum()
    }else{
      setChosenNum([...chosenNum, pick])
      setScore(score + 1)
    }
  } 

  const resetChosenNum = () => {
    setChosenNum([])
  }
 
  useEffect(() => {
    handleShuffle()
  }, [])

  useEffect(() => {
    handleShuffle()
  }, [score])

  return(
    <div>
      <Card handleMatch={handleMatch} shuffledNum={shuffledNum}/>
      <button onClick={handleShuffle}>shuffle</button>
      <p>Score: {score}</p>
      <p>High Score: {highScore}</p>
    </div>
  )
}

export default Game