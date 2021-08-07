import React  from 'react'
import { useAuth } from '../../providers/auth';
import Header from '../../components/Header';
import Lottie from 'react-lottie';

import animationHeadWithHeadphones from '../../resources/lotties/nodding-head-with-headphones.json';

import SvgDivider from '../../assets/images/divider';
import * as S from './styled';
import BoxProducts from './components/BoxProducts';

function Home() {
  document.title = 'Home';

  const { user } = useAuth();
  console.log(user) ;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationHeadWithHeadphones,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <S.Container>
      <Header />
      <S.ContainerWrapper>
        <S.AnimationWrapper>
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
          />
        </S.AnimationWrapper>
        <S.Title>
          Paixão por som, design e qualidade
        </S.Title>
        <S.Description>
          Especializada em soluções de áudio Premium que apresentam inovação tecnológica, design e elegância. Nós entregamos uma excelente experiência de som através de uma ampla gama de sistemas de caixas de som e fones de ouvido para entretenimento pessoal e excelência profissional.
        </S.Description>
        <S.DividerWrapper>
          <SvgDivider />
        </S.DividerWrapper>
        <BoxProducts />
      </S.ContainerWrapper>
    </S.Container>
  )
}

export default Home
