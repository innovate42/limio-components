async function currentAuthenticatedUser(){
    return {
        userName: "id-f8ac1477f11de7a06f6be66a303d7f58",
        attributes: {
            issuer: "https://localhost:8003",
            iat: 1712160991,
            exp: 1712164582,
            sub: "id-f8ac1477f11de7a06f6be66a303d7f58",
            email: "user@limio.com",
            email_verified: true,
        }
    }
}

async function signOut({global}){
    console.log("logging out")
}




export const Auth ={
    currentAuthenticatedUser,
    signOut,
}
