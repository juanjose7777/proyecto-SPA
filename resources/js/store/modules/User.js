import axios from 'axios'
import { update } from 'lodash'

const state = {
    message: '',
    listUsers: [],
    errorMenssage: []
}
const actions = {
    getLogin({commit}, user){
        commit('SET_MESSAGE', "")
        commit('SET_ERRORS', [])
        axios.post('user/login', {
            email: user.email,
            password: user.password
        })
        .then(response => {
            console.log(response)
            if(response.data.user){
                localStorage.setItem("blog_token", response.data.access_token)
                window.location.replace('home')
            }

            if(response.data.message){
               commit('SET_MESSAGE', response.data.message)
            }
        }).catch((e) => {
            if(e.response.data.errors){
                 commit('SET_ERRORS', e.response.data.errors)
            }
        })
   },


   getCurrent({commit}){
      axios.get('user/current')
      .then(response => {
          console.log(response)
      })
   },

   getLogout(){
       localStorage.removeItem('blog_token');
       window.location.replace('login')
  
    },
   getList({commit}){
       axios.get('user/users')
       .then(response => {
           commit('SetUsers', response.data.users)
       })
   },
   async saveUser({commit}, user){
       const response = await axios.post('user/users/store',{
           name: user.name,
           email: user.email,
           password: user.password
       })
       console.log(response)
   },

   async updateUser({commit}, user){
       const response = await axios.put('user/users/update',{
           id: user.id,
           name: user.name,
           email: user.email,
           password: user.password
       })
       console.log(response)
   }
}
const mutations = {
    SET_MESSAGE(state, data){
        state.message = data
    },

    SetUsers(state, data){
        state.listUsers = data
    },

    SET_ERRORS(state, data){
        state.errorMenssage = data
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}