import { atom } from 'recoil';

export const isLoginAtom = atom({
  key: "isLogin",
  default: false,
})

export const userInfo = atom({
  key : 'userInfo',
  default : {
    userName : '',
    userEmail : '',
    userPoint : '',
    userCnt : '',
    userImage: '',
  }
})