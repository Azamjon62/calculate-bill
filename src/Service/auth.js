import instance from "./api";

const AuthService = {
    async userSignIn({collectionName, data}) {
        const response = await instance.post('/addDataToFirestore', {collectionName, data});
        return response
    },
} 


export default AuthService;