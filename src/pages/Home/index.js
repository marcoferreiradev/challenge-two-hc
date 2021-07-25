import React  from 'react'
import { useAuth } from '../../providers/auth';
import Header from '../../components/Header';
import Lottie from 'react-lottie';

import animationMaintenance from '../../resources/lotties/maintenance-work-in-progress.json';

import * as S from './styled';

function Home() {
  document.title = 'Home';

  const { user } = useAuth();
  console.log(user) ;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationMaintenance,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <S.Container>
      <Header />
      <S.ContainerWrapper>
        <S.BigTitle>
          Em progresso...
        </S.BigTitle>
        <S.AnimationWrapper>
          <Lottie
            options={defaultOptions}
            height={500}
            width={500}
          />
        </S.AnimationWrapper>
      </S.ContainerWrapper>
    </S.Container>
  )
}

export default Home
