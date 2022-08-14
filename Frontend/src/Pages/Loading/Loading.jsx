import React from 'react'
import { BinWrapper, MainBackGround } from '../../styles/BackgroundStyle'

const Loading = () => {
  return (
    <MainBackGround>
      <BinWrapper mt="auto" mb="auto">
      <BinWrapper display="flex" jc="center" ai="center">
          처리를 진행하고 있습니다!
        </BinWrapper>
        <img src="https://i.postimg.cc/TwRHzjp8/main-belu-min.gif" alt="loading-belu-min" style={{width: "100%"}}/>
      </BinWrapper>
    </MainBackGround>
  )
}

export default Loading