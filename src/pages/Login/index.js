import React from 'react'
// import { useAuth } from "../../providers/auth";
import { useForm } from "react-hook-form";
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';

import ButtonLink from '../../components/ButtonLink';
import animationLogin from '../../resources/lotties/person-in-login.json';
import Logo from '../../components/Logo';
import Line from '../../assets/images/line';
import * as Form from '../../components/Form';
import * as S from './styled';


function Login() {
  document.title = "Login";
  // const [input, setInput] = useState({
  //   name: '',
  // });
  // const { user, setUser  } = useAuth();

  // const handleLogin = () => {
  //   const loginData = {...input, isAuthenticated: true};
  //   localStorage.setItem('user', JSON.stringify(loginData));
  //   setUser(loginData);
  // }

  // const handleLogout = () => {
  //   localStorage.removeItem('user');
  //   setUser({
  //     name: "",
  //     isAuthenticated: false
  //   })
  // }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLogin,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  const {register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = (data) => {
    console.log('Clicou no login');
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
            Som de alta <br/> qualidade diz tudo
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
        <S.MainWrapper>
          <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <S.FormTitle>
              Faça seu login
            </S.FormTitle>
            <Form.Group>
              <Form.GroupText>
                <Form.Label>
                  Email:
                </Form.Label>
                <Form.Errors>
                  {errors?.email?.type === "required" && <p> Obrigatório </p>}
                  {errors?.email?.type === "pattern" && (
                    <p> E-mail incorreto </p>
                  )}
                </Form.Errors>
              </Form.GroupText>
              <Form.InputWrapper>
                <Form.Input
                  {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i
                  })}
                  placeholder="Ex: beatriz.lima@gmail.com"
                  className={errors?.email && 'in--error'}
                />
              </Form.InputWrapper>
            </Form.Group>
            <Form.Group>
            <Form.GroupText>
                <Form.Label>
                  Senha:
                </Form.Label>
                <Form.Errors>
                  {errors?.password?.type === "required" && <p> Obrigatório </p>}
                </Form.Errors>
              </Form.GroupText>
              <Form.InputWrapper>
                <Form.Input
                  {...register("password", {
                    required: true,
                  })}
                  // placeholder="Ex: Sua senha"
                  className={errors?.password && 'in--error'}
                  type="password"
                />
              </Form.InputWrapper>
            </Form.Group>
            <S.FormButton>
              <ButtonLink url="/" type="submit">
                Entrar
              </ButtonLink>
              <Line />
            </S.FormButton>
            <S.TextBottom>
              Não tem uma conta?  <Link to="/signup"> Cadastre-se </Link>
            </S.TextBottom>
          </S.FormWrapper>
        </S.MainWrapper>
      </S.ContainerMain>
    </S.Container>
  )
}

export default Login
