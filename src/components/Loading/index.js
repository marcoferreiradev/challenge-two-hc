import React from 'react'
import Lottie from 'react-lottie';

import animationLoading from '../../resources/lotties/loading.json';

import * as S from './styled';

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <S.LoadingContainer>
      <Lottie
        options={defaultOptions}
        height={500}
        width={500}
      />
    </S.LoadingContainer>
  )
}

export default Loading
