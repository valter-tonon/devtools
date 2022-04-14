// @flow
import * as React from 'react';
import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {useGoogleLogout} from "react-google-login";
import {MenuMain} from "@/presentation/components/Menu/Menu";


type Props = {
    loggedUser: {
        name: string,
        email: string,
    },
    setIsLogged: (isLogged: boolean) => void,
    setLoggedUser: (loggedUser: {
        name: string,
        email: string,
    }) => void,
};
export const AccountButton = ({loggedUser, setIsLogged, setLoggedUser}: Props) => {
    const clientId = process.env.CLIENT_ID;
    const {signOut} = useGoogleLogout({
        clientId,
        onLogoutSuccess: () => {
            logout()
        }
    })
    const logout = () => {
        sessionStorage.removeItem('access_token');
        setIsLogged(false)
        setLoggedUser(null)
    }
    const menuItems = [
        <Typography variant="body2" aria-readonly>{loggedUser.email}</Typography>,
        <Box onClick={signOut} sx={{width: "100%"}} display={"flex"} alignItems={"center"}>
            <Typography variant="button" mr={2}>Sair</Typography>
            <ExitToAppIcon/>
        </Box>
    ]

    return (
        <>
            <MenuMain name={loggedUser.name} menuItems={menuItems}/>
        </>
    );
};
