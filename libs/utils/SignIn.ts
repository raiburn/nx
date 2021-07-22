import axios from "axios";



const SignIn = async (userData : {email:string, username:string, name:string, password:string, cel:string}):Promise<boolean>  => {
        try{
           const {data} = await axios.post(`${window.location.protocol}//${window.location.hostname}theURL` ,{
                email:userData.email,
                username:userData.username,
                name:userData.name,
                password: userData.password,
                cel:userData.cel
              })
              return(true);
        }
        catch(error) {
          console.log(error);
        }
}
export default SignIn;