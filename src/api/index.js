const apiKey = 'AIzaSyBDgHKkAxcIZ_smKguciXPnYsdPOoUfrnU'

export const signUp = async (newUser) => {
    try {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, 
        {
            method: 'POST',
            body: JSON.stringify(newUser)
        })
        
        if(!response.ok){
            throw new Error("Something is getting wrong authApi")
        }

        return response.json()
    } catch(error) {
        return false
    }
        
}   

export const signIn = async (existUser) => {
    try {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, 
        {
            method: 'POST',
            body: JSON.stringify(existUser)
        })
        
        if(!response.ok){
            throw new Error("Something is getting wrong authApi")
        }
    
        return response.json()
    } catch(error) {
        return false
    }
}   

export const getData = async () => {
    try {
        const response = await fetch('https://udemy-test-1e458-default-rtdb.europe-west1.firebasedatabase.app/users.json')
        
        if(!response.ok){
            throw new Error("Something is getting wrong databaseApi")
        }
    
        return response.json()
    } catch(error) {
        return false
    }
}

export const postData =  async (userInfo) => {
    try {
        const response = await fetch('https://udemy-test-1e458-default-rtdb.europe-west1.firebasedatabase.app/users.json', 
        {
            method: 'POST',
            body: JSON.stringify(userInfo)
        })
        
        if(!response.ok){
            throw new Error("Something is getting wrong databaseApi")
        }

        return response.json()
    } catch(error) {
        return false
    }
}

