import * as React from 'react';
import {useContext, useEffect} from 'react';
import {GoogleLogin} from "react-google-login";
import {modalContext} from "@/presentation/components/Navbar";

type Props = {

};
export const GoogleLoginButton = (props: Props) => {

    const {open, setOpen, authentication, setIsLogged, isLogged}= useContext(modalContext);
    const CLIENT_ID = process.env.CLIENT_ID;
    const [token, setToken] = React.useState('');


    useEffect(() => {
        if( token){
            authenticate(token);
        }
    }, [token]);

    const authenticate = (token: string) => {
        authentication.auth({
                grant_type: 'social',
                provider: 'google',
                access_token: token,
                client_id: 2,
                client_secret: '3MYKKrtD3UqQnjliuaZpkbPNEw8q1p4qPYqVBcyL',
            }
        ).then((response)  => {
            if (response.access_token) {
                setIsLogged(true);
                sessionStorage.setItem('access_token', JSON.stringify(response.access_token));
            }
            setOpen(false);
        })
    }

    useEffect(() => {
        if (!isLogged) {
            setToken('');
        }
    }, [isLogged]);

        // Success Handler
    const responseGoogleSuccess = (response) => {
        setToken(response.accessToken);
    };

    // Error Handler
    const responseGoogleError = (response) => {
        console.log(response);
    };

    return (
        <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Entrar com Google"
            onSuccess={responseGoogleSuccess}
            onFailure={responseGoogleError}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
        />
    );
};
