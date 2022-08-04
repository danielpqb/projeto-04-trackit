import React, { useContext } from 'react'
import styled from 'styled-components'
import logo from '../../assets/img/TrackIt.svg'
import UserContext from '../../Context/UserContext'

export default function Header() {

    const { userData } = useContext(UserContext)

    return (
        <Wrapper>
            <Logo>
                <img src={logo} alt="" />
            </Logo>
            <ProfilePhoto>
                <img src={userData.image} alt="" />
            </ProfilePhoto>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    & {
        position: fixed;
        top: 0;
        left: 0;

        padding: 0px 20px;

        background: #126BA5;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

        height: 70px;
    }
`

const Logo = styled.div`
    & {
        justify-content: flex-start;
    }

    img {
        width: 100px;
        height: 50px;
    }
`

const ProfilePhoto = styled.div`
    & {
        justify-content: flex-end;
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
`