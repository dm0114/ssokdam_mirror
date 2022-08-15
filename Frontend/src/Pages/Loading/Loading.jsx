import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { fetchUseState } from '../../api/Loading';
import { BinWrapper, MainBackGround } from '../../styles/BackgroundStyle'

const Loading = () => {
  const navigate = useNavigate();
  const [embedStatus, setEmbedStatus] = useState('');

  
  useEffect(() => {
    let isCigar = setInterval(fetchApi, 2000);
    let timer = setTimeout(timeOut, 10000);
    function timeOut() {
      clearInterval(isCigar)
      navigate('/')
    }
  
    function fetchApi() {
      fetchUseState().then((res) => {
        res.json().then((res) => {
          console.log(res.ok);
          if (res.ok === "Y") {
            clearTimeout(timer)
            clearInterval(isCigar)
            navigate('/complete');
          } 
          else if (res.ok === "N") {
            clearTimeout(timer)
            clearInterval(isCigar)
            navigate('/fail');
          } 
          else if (res.ok === "X") {
            clearTimeout(timer)
            clearInterval(isCigar)
            navigate('/fail');
          }
        });
      });
    }
  }, [])
 


  // useEffect(() => {
  //   console.log(embedStatus)
  //   if (embedStatus === 'Y') {
  //     clearTimeout(timer)
  //     clearInterval(isCigar);
  //     console.log(embedStatus)
  //     navigate('/complete');
  //   } 
  //   else if (embedStatus === 'N') {
  //     clearTimeout(timer)
  //     clearInterval(isCigar);
  //     console.log(embedStatus)
  //     navigate('/fail');
  //   } 
  //   else if (embedStatus === 'X') {
  //     clearTimeout(timer)
  //     clearInterval(isCigar);
  //     console.log(embedStatus)
  //     navigate('/fail');
  //   }
  // }, [embedStatus]);

  return (
    <MainBackGround>
      <BinWrapper mt="auto" mb="auto">
      <BinWrapper display="flex" jc="center" ai="center">
      <p style={{fontSize: "24px", fontWeight: 600}}>꽁초를 넣어주세요!</p>
        </BinWrapper>
        <img src="https://i.postimg.cc/TwRHzjp8/main-belu-min.gif" alt="loading-belu-min" style={{width: "100%"}}/>
        <BinWrapper display="flex" jc="center" ai="center">
            처리를 진행하고 있습니다!
        </BinWrapper>
      </BinWrapper>
    </MainBackGround>
  )
}

export default Loading