import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const isLoginAtom = atom({
  key: "isLogin",
  default: false,
  effects_UNSTABLE: [persistAtom]
})

export const userInfo = atom({
  key : 'userInfo',
  default : {
    userName : '',
    userEmail : '',
    userPoint : '',
    userCnt : '',
    userImage: '',
  },
  effects_UNSTABLE: [persistAtom]
})