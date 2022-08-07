import React from 'react'
import {Link, useNavigate} from "react-router-dom";

import {
  SubLoginBackgroundView,
  Wrap,
  MainText,
  HeaderWrapper,
  MainButton,
  ButtonText,
} from '../../styles/SubLoginStyles';
import {BinWrapper} from "../../styles/BackgroundStyle";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useQuery } from '@tanstack/react-query';
import { fetchNotice } from '../../api/notice';


const Notice = () => {

  const { isSuccess, isLoading, data } = useQuery(
    ['noticeList'],
    async () => await fetchNotice()
  );

  return (
    <SubLoginBackgroundView>
      <Wrap>
        <HeaderWrapper>
          <BinWrapper flex='1'>
            <Link to='/'>
              <ArrowBackIosIcon color='black' />
            </Link>
          </BinWrapper>
          <MainText flex='3'>공지사항</MainText>
          <BinWrapper flex='1'></BinWrapper>
        </HeaderWrapper>
      {data.pstTitle}<br/>
      {data.pstCtnt}
      </Wrap>
    </SubLoginBackgroundView>
  )
}

export default Notice