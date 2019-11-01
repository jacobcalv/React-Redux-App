import React from 'react'
import styled from 'styled-components'

function Display() {
    const Title = styled.h1`
    font-family: 'Staatliches', cursive;
    color: white;
    text-align:center;
    font-size: 3rem;
    `
    return (
        <div>
            <Title>Harvard Art Auction</Title>
        </div>
    )
}

export default Display
