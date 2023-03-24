import React from 'react';

export const SaveToken = (token) => {
    localStorage.setItem('token', JSON.stringify(token));
}

export const GetToken = () => {
    var value = localStorage.getItem("token");
    return JSON.parse(value);
}