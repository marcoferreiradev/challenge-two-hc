import React from 'react'
import { useAuth } from '../../providers/auth';
import { useForm } from "react-hook-form";
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Logo from '../../components/Logo';
import animationSignUp from '../../resources/lotties/person-work.json';
import Line from '../../assets/images/line';
import * as S from './styled';
import * as Form from '../../components/Form';

function SignUp() {
  document.title = "Cadastre-se";
  const { user, setUser } = useAuth();

  const {register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = (data) => {
    const { nome, email, password } = data;
    const userData = {email, password, nome, data: { ...data}, isAuthenticated: true};
    localStorage.setItem('user', JSON.stringify(userData));
    setUser('user', userData);
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationSignUp,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }


  return (
    <S.Container>
      <S.ContainerMain>
        <S.MainWrapper>
          <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <S.FormTitle>
              Realize seu cadastro
            </S.FormTitle>
            <Form.Group>
              <Form.GroupText>
                <Form.Label>
                  Nome:
                </Form.Label>
                <Form.Errors>
                  {errors?.nome?.type === "required" && <p> Obrigatório </p>}
                </Form.Errors>
              </Form.GroupText>
              <Form.Input
                {...register("nome", {
                  required: true,
                })}
                placeholder="Ex: Beatriz"
              />
            </Form.Group>
            <Form.Group>
              <Form.GroupText>
                <Form.Label>
                  Telefone:
                </Form.Label>
                <Form.Errors>
                  {errors?.telefone?.type === "required" && <p> Obrigatório </p>}
                  {errors?.telefone?.type === "pattern" && (
                    <p> Telefone incompatível</p>
                  )}
                </Form.Errors>
              </Form.GroupText>
              <Form.Input
                {...register("telefone", {
                  required: true,
                  pattern: /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/i
                })}
                type="tel"
                placeholder="Ex: (11) 99999-9999"
              />
            </Form.Group>
            <Form.Group>
              <Form.GroupText>
                <Form.Label>
                  Rua:
                </Form.Label>
                <Form.Errors>
                  {errors?.rua?.type === "required" && <p> Obrigatório </p>}
                </Form.Errors>
              </Form.GroupText>
              <Form.Input
                {...register("rua", {
                  required: true,
                })}
                placeholder="Ex: Rua Av. dos Anjos"
              />
            </Form.Group>
            <Form.Group>
              <Form.GroupText>
                <Form.Label>
                  Número:
                </Form.Label>
                <Form.Errors>
                  {errors?.numero?.type === "required" && <p> Obrigatório </p>}
                </Form.Errors>
              </Form.GroupText>
              <Form.Input
                {...register("numero", {
                  required: true,
                })}
              />
            </Form.Group>
            <Form.Group>
              <Form.GroupText>
                <Form.Label>
                  Complemento:
                </Form.Label>
                <Form.Errors>
                  {errors?.complemento?.type === "required" && <p> Obrigatório </p>}
                </Form.Errors>
              </Form.GroupText>
              <Form.Input
                {...register("complemento")}
              />
            </Form.Group>
            <Form.Group>
              <Form.GroupText>
                <Form.Label>
                  Bairro:
                </Form.Label>
                <Form.Errors>
                  {errors?.bairro?.type === "required" && <p> Obrigatório </p>}
                </Form.Errors>
              </Form.GroupText>
              <Form.Input
                {...register("bairro", {
                  required: true,
                })}
                placeholder="Ex: Jardim Brasil"
              />
            </Form.Group>
            <Form.Group>
              <Form.GroupText>
                <Form.Label>
                  Cidade:
                </Form.Label>
                <Form.Errors>
                  {errors?.cidade?.type === "required" && <p> Obrigatório </p>}
                </Form.Errors>
              </Form.GroupText>
              <Form.Input
                {...register("cidade", {
                  required: true,
                })}
                placeholder="Ex: São Paulo"
              />
            </Form.Group>
            <Form.Group>
              <Form.GroupText>
                <Form.Label>
                  CEP:
                </Form.Label>
                <Form.Errors>
                  {errors?.cep?.type === "required" && <p> Obrigatório </p>}
                </Form.Errors>
              </Form.GroupText>
              <Form.Input
                {...register("cep", {
                  required: true,
                })}
                placeholder="Ex: 18147-000"
              />
            </Form.Group>
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
              <Button  type="submit" primary>
                Entrar
              </Button>
              <Line />
            </S.FormButton>
            <S.TextBottom>
              Já tem uma conta?  <Link to="/login"> Faça login </Link>
            </S.TextBottom>
          </S.FormWrapper>
        </S.MainWrapper>
      </S.ContainerMain>
      <S.ContainerAside>
        <S.AsideWrapper>
          <S.LogoWrapper>
            <Logo />
          </S.LogoWrapper>
          <S.Title>
            A boa qualidade sonora está a sua espera...
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
    </S.Container>
  )
}

export default SignUp;
