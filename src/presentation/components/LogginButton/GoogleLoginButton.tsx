import * as React from 'react';
import {useContext, useEffect} from 'react';
import {GoogleLogin} from "react-google-login";
import {modalContext} from "@/presentation/components/Navbar";
import {makeSessionStorageAdapter} from "@/main/factories/cache/sessionStorageAdapterFactory";
import {saveAccessToken} from "@/main/factories/useCases/saveAccessToken";

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
            client_id: process.env.CLIENT_JWT,
            client_secret: process.env.CLIENT_SECRET
            }
        ).then((response)  => {
            if (response.access_token) {
                setIsLogged(true);
                let saveToken = saveAccessToken()
                saveToken.save(JSON.stringify(response.access_token))
            }
            setOpen(false);
        })
    }
    useEffect(() => {
        if (!isLogged) {
            setToken('');
        }
    }, [isLogged]);

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
