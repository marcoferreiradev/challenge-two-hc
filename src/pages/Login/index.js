import React, { useState } from 'react'
import { useAuth } from "../../providers/auth";
import Lottie from 'react-lottie';
import animationLogin from '../../resources/lotties/person-in-login.json';


import  IconLogo  from '../../assets/images/logo.svg';
import Logo from '../../components/Logo';
import * as S from './styled';

function Login() {
  document.title = "Login";
  const [input, setInput] = useState({
    name: '',
  });
  const { user, setUser  } = useAuth();

  const handleLogin = () => {
    const loginData = {...input, isAuthenticated: true};
    localStorage.setItem('user', JSON.stringify(loginData));
    setUser(loginData);
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser({
      name: "",
      isAuthenticated: false
    })
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLogin,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }


  return (
    // <div>
    //   Login

    //   {user.isAuthenticated ?
    //     ( <p> Usuário está logado </p>)
    //     : ( <p> Usuário não logado </p>)
    //   }
    //   <input type="text" onChange={(e) => setInput({name: e.target.value})} />
    //   <button onClick={handleLogin}> Login </button>
    //   <button onClick={handleLogout}> Logout </button>
    //   <hr />
    // </div>
    <S.Container>
      <S.ContainerAside>
        <S.AsideWrapper>
          <S.LogoWrapper>
            <Logo />
          </S.LogoWrapper>
          <S.Title>
          Make the world’s products accessible
          </S.Title>
          <S.AnimationWrapper>
            <Lottie
              options={defaultOptions}
              height={500}
              width={500}
            />
          </S.AnimationWrapper>
          <S.FooterWrapper>
            <S.FooterItem target="_blank" href="https://github.com/marcoferreiradev/" rel="noopener noreferrer">
              Github
            </S.FooterItem>
            <S.FooterItem target="_blank" href="https://www.linkedin.com/in/marco-william-24a7b8162/" rel="noopener noreferrer">
              Linkedin
            </S.FooterItem>
          </S.FooterWrapper>
        </S.AsideWrapper>
      </S.ContainerAside>
      <S.ContainerMain>

      </S.ContainerMain>
    </S.Container>
  )
}

export default Login
