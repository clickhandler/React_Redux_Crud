import * as types from "./actionType"
import axios from "axios"

const getUser = (users) => ({
    type: types.GET_USERS,
    payload: users
})

const userDeleted = () => ({
    type: types.DELETE_USER

})

const userAdded = () => ({
    type: types.ADD_USER

})

const userUpdated = () => ({
    type: types.UPDATE_USER

})

const getSingle=(user)=>({
    type:types.GET_SINGLE_USER,
    payload:user,
})


export const loadUser = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}`).then(res => {
            console.log("RESPONSE", res)
            dispatch(getUser(res.data))
        }).catch(er => {
            console.log("ERROR")
        })
    }

}


export const deleteuser = (id) => {
    return function (dispatch) {
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then(res => {
            console.log("RESPONSE", res)
            dispatch(userDeleted())
            dispatch(loadUser())
        }).catch(er => {
            console.log("ERROR")
        })
    }

}

export const adduser = (user) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}`, user).then(res => {
            console.log("RESPONSE", res)
            dispatch(userAdded())

        }).catch(er => {
            console.log("ERROR")
        })
    }

}

export const getSingleUser = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/${id}`).then(res => {
            console.log("RESPONSE", res)
            dispatch(getSingle(res.data))
            dispatch(loadUser())
        }).catch(er => {
            console.log("ERROR")
        })
    }

}


export const update_User = (user,id) => {
    return function (dispatch) {
        axios.put (`${process.env.REACT_APP_API}/${id}`,user).then(res => {
            console.log("RESPONSE", res)
            dispatch(userUpdated())
            dispatch(loadUser())
        }).catch(er => {
            console.log("ERROR")
        })
    }

}