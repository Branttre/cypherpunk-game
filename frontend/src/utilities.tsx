import axios from 'axios';
//import React, { useState, useEffect, useRef } from 'react';

export const signUp = async(name:any, email:any, password:any) => {
    let response = await axios.post('../usersignupfunction/', {
        'name': name,
        'email': email,
        'password': password
    })
    return response.data.success
}

export const logIn = async(email:any, password:any) => {
    let response = await axios.post('../userloginfunction/', {
        'email' : email,
        'password' : password
    })
    console.log(response.data.login)
    return response.data.login

    //setUser(response.data)
}

export const currUser = async() =>{
    let response = await axios.get('../user/curruser/')
    console.log(response.data)
    return response.data
}

// export const logOut = async(setUser:any) => {

export const logOut = async() => {
    let response = await axios.post('../user/logout/')
    if(response.data.logout){
        console.log(response.data.logout)
        // setUser(null)

    }

    
}