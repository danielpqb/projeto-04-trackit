import React from 'react'
import styled from 'styled-components'

export default function TodayTask() {

    return (
        <Wrapper>

            <Text>
                <h1>{'Test'}</h1>
                <h2>{`Sequência atual: ${''}`}</h2>
                <h2>{`Seu recorde: ${''}`}</h2>
            </Text>

            <Button>

            </Button>

        </Wrapper>
    )
};

const Wrapper = styled.div`
    & {
        height: 100px;
        background: #FFFFFF;
        border-radius: 5px;

        padding: 15px;
    }
`

const Text = styled.div`
    & {
        flex-direction: column;
        align-items: flex-start;

        color: #666666;
    }

    h1 {
        font-size: 19.976px;
        line-height: 25px;
        margin-bottom: 10px;
    }

    h2 {
        font-size: 12.976px;
        line-height: 16px;
    }
`
const Button = styled.div`
    & {
        height: 70px;
        min-width: 70px;
        max-width: 70px;
        background: #8FC549;
        border-radius: 5px;
    }
`