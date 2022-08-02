import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/img/TrackIt.svg'
import profilePhoto from '../../assets/img/SpongeBob.svg'

export default function Header() {
    return (
        <Wrapper>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="profilePhoto">
                <img src={profilePhoto} alt="" />
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    & {
        position: fixed;
        top: 0;
        left: 0;

        background: #126BA5;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

        height: 70px;
    }

    .logo {
        justify-content: flex-start;
        margin-left: 20px;
    }

    .logo img {
        width: 100px;
        height: 50px;
    }

    .profilePhoto {
        justify-content: flex-end;
        margin-right: 20px;
        border-radius: 50%;
    }

    .profilePhoto img {
        width: 50px;
        height: 50px;
    }
`