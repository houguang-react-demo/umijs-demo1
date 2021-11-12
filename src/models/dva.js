import { request } from "umi";

const getLists = () => {
  return request("/api/lists")
}

export default {
  namespace:"dva",
  state:{
    tagsLists:[]
  },

  //调用服务端接口，获取数据
  effects:{
    *fetchLists({payload,callback},{put,call}){
      const res = yield call(getLists)

      yield put({
        type:"setLists",
        payload:res
      })
    }
  },

  //更新state
  reducers:{
    setLists(state,action){
      console.log(state.action,"reducers setLists")
      return {...state,tagsLists: action.payload}
    }
  },
}
