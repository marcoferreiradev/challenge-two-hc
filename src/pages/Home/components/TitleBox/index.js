import React from 'react'

import * as S from './styled';

const TitleBox = ({ PreTitle, Title }) => {
  return (
    <S.Container>
      <S.PreTitle>
        {PreTitle}
      </S.PreTitle>
      <S.Title>
        {Title}
      </S.Title>
    </S.Container>
  )
}

export default TitleBox
