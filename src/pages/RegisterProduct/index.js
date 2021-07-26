import React from 'react'
import { useForm } from "react-hook-form";
import Lottie from 'react-lottie';

import Button from '../../components/Button';
import animationProductHunt from '../../resources/lotties/product-hunt.json';
import Logo from '../../components/Logo';
import Line from '../../assets/images/line';
import * as Form from '../../components/Form';
import * as S from './styled';

function RegisterProduct() {
  document.title = 'Cadastro de produto';

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationProductHunt,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  const {register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = (data) => {
    alert('Produto cadastrado');
    const productsStorage = JSON.parse(localStorage.getItem("products"));
    if(productsStorage) {
      const dataProducts = [ ...productsStorage, data]
      localStorage.setItem("products", JSON.stringify(dataProducts))
    } else {
      localStorage.setItem("products", JSON.stringify([data]))
    }
  }

  return (
    <S.Container>
      <S.ContainerAside>
        <S.AsideWrapper>
          <S.LogoWrapper>
            <Logo />
          </S.LogoWrapper>
          <S.Title>
            Cadastro de <br /> produtos
          </S.Title>
          <S.AnimationWrapper>
            <Lottie
              options={defaultOptions}
              height={300}
              width={300}
            />
          </S.AnimationWrapper>
          {/* <S.FooterWrapper>
            <S.FooterItem target="_blank" href="https://github.com/marcoferreiradev/" rel="noopener noreferrer">
              Github
            </S.FooterItem>
            <S.FooterItem target="_blank" href="https://www.linkedin.com/in/marco-william-24a7b8162/" rel="noopener noreferrer">
              Linkedin
            </S.FooterItem>
          </S.FooterWrapper> */}
        </S.AsideWrapper>
      </S.ContainerAside>
      <S.ContainerMain>
        <S.MainWrapper>
        <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <S.FormTitle>
              Realize seu cadastro
            </S.FormTitle>
            <Form.Group>
              <Form.GroupText>
                <Form.Label>
                  Código:
                </Form.Label>
                <Form.Errors>
                  {errors?.codigo?.type === "required" && <p> Obrigatório </p>}
                </Form.Errors>
              </Form.GroupText>
              <Form.Input
                {...register("codigo", {
                  required: true,
                })}
                placeholder="Ex: 12345"
                className={errors?.codigo && 'in--error'}
              />
            </Form.Group>
            <Form.Group>
              <Form.GroupText>
                <Form.Label>
                  EAN:
                </Form.Label>
                <Form.Errors>
                  {errors?.ean?.type === "required" && <p> Obrigatório </p>}
                </Form.Errors>
              </Form.GroupText>
              <Form.Input
                {...register("ean", {
                  required: true,
                })}
                placeholder="Ex: 78940079841"
                className={errors?.ean && 'in--error'}
              />
            </Form.Group>
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
                placeholder="Ex: Headphone X"
                className={errors?.nome && 'in--error'}
              />
            </Form.Group>
            <Form.Group>
              <Form.GroupText>
                <Form.Label>
                  Descrição:
                </Form.Label>
                <Form.Errors>
                  {errors?.descricao?.type === "required" && <p> Obrigatório </p>}
                </Form.Errors>
              </Form.GroupText>
              <Form.Input
                {...register("descricao", {
                  required: true,
                })}
                placeholder="Ex: Grave de ..."
                className={errors?.descricao && 'in--error'}
              />
            </Form.Group>
            <Form.Group>
              <Form.GroupText>
                <Form.Label>
                  Categoria:
                </Form.Label>
                <Form.Errors>
                  {errors?.categoria?.type === "required" && <p> Obrigatório </p>}
                </Form.Errors>
              </Form.GroupText>
              <Form.Input
                {...register("categoria", {
                  required: true,
                })}
                placeholder="Ex: Headphones"
                className={errors?.categoria && 'in--error'}
              />
            </Form.Group>
            <Form.Group>
              <Form.GroupText>
                <Form.Label>
                  Marca:
                </Form.Label>
                <Form.Errors>
                  {errors?.marca?.type === "required" && <p> Obrigatório </p>}
                </Form.Errors>
              </Form.GroupText>
              <Form.Input
                {...register("marca")}
              />
            </Form.Group>
            <Form.Group>
              <Form.GroupText>
                <Form.Label>
                  Preço de Venda:
                </Form.Label>
                <Form.Errors>
                  {errors?.precoDeVenda?.type === "required" && <p> Obrigatório </p>}
                </Form.Errors>
              </Form.GroupText>
              <Form.Input
                {...register("precoDeVenda", {
                  required: true,
                })}
                placeholder="Ex: R$ 25,80"
                className={errors?.precoDeVenda && 'in--error'}
              />
            </Form.Group>
            <Form.Group>
              <Form.GroupText>
                <Form.Label>
                  Imagem:
                </Form.Label>
                <Form.Errors>
                  {errors?.imagem?.type === "required" && <p> Obrigatório </p>}
                </Form.Errors>
              </Form.GroupText>
              <Form.Input
                {...register("imagem", {
                  required: true,
                })}
                placeholder="Ex: url da imagem"
                className={errors?.imagem && 'in--error'}
              />
            </Form.Group>
            <Form.Group>
              <Form.GroupText>
                <Form.Label>
                  Observações:
                </Form.Label>
                <Form.Errors>
                  {errors?.observacao?.type === "required" && <p> Obrigatório </p>}
                </Form.Errors>
              </Form.GroupText>
              <Form.InputWrapper>
                <Form.Input
                  {...register("observacao")}
                  placeholder="Ex: beatriz.lima@gmail.com"
                  className={errors?.observacao && 'in--error'}
                />
              </Form.InputWrapper>
            </Form.Group>
            <S.FormButton>
              <Button  type="submit" primary>
                Cadastrar
              </Button>
              <Line />
            </S.FormButton>
          </S.FormWrapper>
        </S.MainWrapper>
      </S.ContainerMain>
    </S.Container>
  )
}

export default RegisterProduct;
