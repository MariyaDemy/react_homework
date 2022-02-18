export const APIfetchUsers = () => fetch('https://api.github.com/users')
.then(response => response.json());



export const APIfetchUser = () => fetch('https://api.github.com/users/MariyaDemy')
.then(response => response.json());