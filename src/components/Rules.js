import React from 'react'
import styled from "styled-components"


export default function Rules() {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <ul className='text'>
            <li>Slect any number</li>
            <li>Click on the dice image</li>
            <li>After click on dice if selected number is equal to dice number you will get same point as dice{""}</li>
            <li>If you get wrong then 2 points will be deducted</li>
        </ul>
    </RulesContainer>
  )
}

const RulesContainer= styled.div`
    background-color: #fbf1f1;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    border-radius: 10px;
    margin-top: 40px;
    margin-bottom: 40px;

    h2{
        font-size: 24px;
    }
    .text{
        margin: 24px;
    }

`;
