import { atom } from 'recoil';
<<<<<<< HEAD
import { recoilPersist } from 'recoil-persist'
=======
import {recoilPersist} from "recoil-persist";
>>>>>>> a2fecdc1c930e26b64976b93c804d9f6bbb4e8be

const { persistAtom } = recoilPersist()

export const isLoginAtom = atom({
  key: "isLogin",
  default: false,
<<<<<<< HEAD
  effects_UNSTABLE: [persistAtom]
=======
  effects_UNSTABLE: [persistAtom],
>>>>>>> a2fecdc1c930e26b64976b93c804d9f6bbb4e8be
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
<<<<<<< HEAD
  effects_UNSTABLE: [persistAtom]
=======
  effects_UNSTABLE: [persistAtom],
>>>>>>> a2fecdc1c930e26b64976b93c804d9f6bbb4e8be
})