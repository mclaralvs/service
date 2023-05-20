import { useEffect, useState } from 'react'
import axios from 'axios'

// styles ✨
import { ButtonTheme, Header, Logo, MainContainer, SubContainer, Light, Dark } from '../../styles/theme'
import '../../styles/general.css'

// components ✨
import { Right } from '../../components/right'
import { Left } from '../../components/left'
import { CgDarkMode } from 'react-icons/cg'
import logo from '../../assets/logo.png'
import { useContexto } from '../../hooks'

export function Home() {
    const { theme, setTheme } = useContexto()

    const ThemeChange = () => {
        if (theme.name === 'light') {
            setTheme(Dark);
        }
        else {
            setTheme(Light);
        }
    }

    return (
        <>
            <Header>
                <Logo src={logo} alt="logo" />
            </Header>

            <MainContainer>
                <SubContainer>
                    <Left />
                    <Right />

                    <div></div>
                    <CgDarkMode onClick={ThemeChange} />
                </SubContainer>
            </MainContainer>
        </>
    )
}