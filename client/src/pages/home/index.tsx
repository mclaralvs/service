import { useEffect, useState } from 'react'
import axios from 'axios'

// styles ✨
import { ButtonTheme, Header, Logo, MainContainer, SubContainer } from '../../styles/theme'
import '../../styles/general.css'

// components ✨
import { Right } from '../../components/right'
import { Left } from '../../components/left'
import logo from '../../assets/logo.png'
import { CgDarkMode } from 'react-icons/cg'

export function Home() {
    const [theme, setTheme] = useState('light');

    const ThemeChange = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }

    return (
        <>
            <Header>
                <Logo src={logo} alt="logo" />
            </Header>
            <MainContainer theme={theme}>
                <SubContainer theme={theme}>
                    <Left />
                    <Right />
                    
                    <div></div>
                    <CgDarkMode onClick={ThemeChange} />
                </SubContainer>
            </MainContainer>
        </>
    )
}