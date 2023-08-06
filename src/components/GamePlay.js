import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import { styled } from 'styled-components'
import RoleDice from './RoleDice'
import { useState } from 'react'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'


export default function GamePlay() {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("")
    const [showRules, setShowRules]= useState(false)

    const generateRandomNumber = (min, max) => {

        return Math.floor(Math.random() * (max - min) + min);
    };


    const roleDice = () => {
        if (!selectedNumber) {
            setError("You have not selected any number")
            return;
        }
        const randomNumber = generateRandomNumber(1, 7);

        setCurrentDice((prev) => randomNumber);


        if (randomNumber === selectedNumber) {
            setScore((prev) => prev + randomNumber)
        } else {
            setScore((prev) => prev - 2)
        }
        setSelectedNumber(undefined)
    }

    const resetScore=()=>{
        setScore(0);
    }


    return (
        <MainContainer>
            <div className='top_section'>
                <TotalScore score={score} />
                <NumberSelector
                    error={error}
                    setError={setError}
                    selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber}
                />
            </div>
            <RoleDice
                currentDice={currentDice}
                roleDice={roleDice}
            />
            <div className='btns'>
                <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
                <Button onClick={()=> setShowRules((prev)=> !prev)}>{showRules ? "Hide ":"Show "}Rules</Button>
            </div>
            {showRules && <Rules/>}
        </MainContainer>
    )
}

const MainContainer = styled.div`
padding-top: 50px;
padding-left: 20px;
padding-right: 20px;
    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
    .btns{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`;
    