import { useEffect, useState } from 'react'
import axios from 'axios'

// styles ✨
import { Header, Logo, MainContainer, SubContainer } from '../../styles/theme'
import '../../styles/general.css'

// components ✨
import { Right } from '../../components/right'
import { Left } from '../../components/left'
import logo from '../../assets/logo.png'

export function Home() {
    return (
        <>
            <Header>
                <Logo src={logo} alt="logo" />
            </Header>
            <MainContainer>
                <SubContainer>
                    <Left />
                    <Right />
                </SubContainer>
            </MainContainer>
        </>
    )
}