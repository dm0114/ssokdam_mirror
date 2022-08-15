import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { fetchUseState } from '../../api/Loading';
import { BinWrapper, MainBackGround } from '../../styles/BackgroundStyle'

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let isCigar = setInterval(() => {
      fetchUseState().then((res) => {
        res.json().then((res) => {
          console.log(res);
        });
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(isCigar);
      navigate('/complete');
    }, 7000);
  }, []);

  return (
    <MainBackGround>
      <BinWrapper mt="auto" mb="auto">
      <BinWrapper display="flex" jc="center" ai="center">
      <p style={{fontSize: "24px", fontWeight: 600}}>처리를 진행하고 있습니다!</p>
        </BinWrapper>
        <img src="https://i.postimg.cc/TwRHzjp8/main-belu-min.gif" alt="loading-belu-min" style={{width: "100%"}}/>
      </BinWrapper>
    </MainBackGround>
  )
}

export default Loading