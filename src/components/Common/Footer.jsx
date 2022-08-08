import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import UserContext from '../../Context/UserContext'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"


export default function Footer() {

    const { progress } = useContext(UserContext)

    return (
        <Wrapper>
            <div>
                <Link to={`/habitos`}>
                    Hábitos
                </Link>
            </div>
            <Today>
                <MiddleButton>
                    <CircularProgressbar
                        value={progress}
                        text={'Hoje'}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent",
                        })}
                    />
                </MiddleButton>
                <Link to={`/hoje`} />
            </Today>
            <div>
                <Link to={`/historico`}>
                    Histórico
                </Link>
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    & {
        position: fixed;
        left: 0;
        bottom: 0;

        height: 70px;

        background: #FFFFFF;

        z-index: 1;

        justify-content: space-between;

        padding: 0px 30px;
    }

    div {
        width: fit-content;
    }
    
    a {
        font-size: 18px;

        color: #52B6FF;
    }
`

const Today = styled.div`
    & {
        position: relative;

        bottom: 20px;
        left: 0;
        right: 0;

        border-radius: 50%;
        min-width: 90px;
        max-width: 90px;
        height: 90px;
    }

    a {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`

const MiddleButton = styled.div`
    & * {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`