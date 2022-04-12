import * as React from 'react';
import {useContext, useEffect} from 'react';
import {AppBar, Button, IconButton, styled, Toolbar, Tooltip, Typography} from "@mui/material";
import {GeneratorsMenu} from "@/presentation/components/Menu/GeneratorsMenu";
import {Link} from "react-router-dom";
import {ModalLogin} from "@/presentation/components/ModalLogin/ModalLogin";
import {makeRemoteAuthentication} from "@/main/factories/useCases/authentication/remoteAuthenticationFactory";
import {useGoogleLogout} from "react-google-login";
import {appContext} from "@/presentation/components/Page/Page";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {makeLoggedUserGet} from "@/main/factories/useCases/loggedUser/loggedUserGetFactory";


const Title = styled(Typography)(({ theme }) => ({
    flexGrow: 1,
    fontWeight: "700",
    fontSize: "1.5rem",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    textDecoration: "none",
    color: theme.palette.primary.contrastText,
})) as typeof Typography;

const Menu = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#1C1D3B'
    ,
}));

export const modalContext = React.createContext(null)
export const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const [isLogged, setIsLogged] = React.useState(false);
    const {loggedUser, setLoggedUser} = useContext(appContext)
    useEffect(() => {
        const token = JSON.parse(sessionStorage.getItem('access_token'));
        if (token) {
            setIsLogged(true)
            getUser(token)
        }
    }, [isLogged])
    const getUser = (token) => {
        let loggedUser = makeLoggedUserGet()
        let headers = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        loggedUser.get(headers)
            .then(response => {
                setLoggedUser(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
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


    return (
        <Menu>
            <modalContext.Provider value={{open, setOpen, authentication: makeRemoteAuthentication(), setIsLogged, isLogged}}>
                <Toolbar >
                    <Title component={Link} to={'/'} >
                        <img width={"35px"} src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpERUMxREYxNDk0RTgxMUU5OUFGM0U4NzYyNTg2MzQ3RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpERUMxREYxNTk0RTgxMUU5OUFGM0U4NzYyNTg2MzQ3RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkRFQzFERjEyOTRFODExRTk5QUYzRTg3NjI1ODYzNDdFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRFQzFERjEzOTRFODExRTk5QUYzRTg3NjI1ODYzNDdFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5fJCcwAAAwNJREFUeNrs3U12qkAQBlDIyS4cZiGJKxNWJi7EYdbBiyGe1yIYVAINfb+BxzjIT3utqjYdktd1nYmc82IJBAgBQoAQIAQIAUKAECBkjuSWYAE5borWI1X29lkBsc4n++Pr9uPno/fg/r05ATl833v7LIBY3qt9N8FXK++tJkBMVwF2M38ng3AAsW4Efa2l7IMBRBoIBsMAYpyZYLfgn+ACBhCPV4PdEzuCGHNCUQCRVjX4FcWrZznJatAbIG5Xg/dUIACRblsAYoVbRiDMB0BoC0BoC0BoC5GBaBYs+6sDF9rCsnI+QrfvOJWzzGpw3Jx+lhqGx5IHZXX/81j5zIkbs8GiU+bBwu6DPntqH4eoYST6TuJ0IK5RZFFVjP+VAILJQDQL33fBiOmrxrTnD6UHRDhPZDdxjHkc/PL0MQDRgBiO4uqTdcI5g+nexSj/iwDxOApZOIj+P+VrXtlba5RWbv9tZ4OiskxAhCi2UAABBRBQyL3Xh4ACCCiAGIqitHxAhCiKzPsUQLRQVFAA0YfCXAFEgMKwCYRhEwjDJhAPt5BcCwFCCwFicAtRLYC42oWoFkCoFkAMqxZ2IkB07kS0ESBabQQMIMwXQNw7X4CRPIg2DK0ECDMGEPfC0E6A6J0zVI2Rs46r4bvS3Fgp1/fvEVxqCIgbVeNcOSR5EHAAAQcQ5g0g4AACDiDMG0CoGkCoGkCoGlGDePGsPpHmN7CrOtADxDgwVnPSCwgwgAADCDCAiBJGCYS0dyVRXzcDiHlgRNtGgNBGgIiujURULYCIq1pUQEjXbAGEBNVixhYChBYChBYCxBpaCBAyPQogDJtAGDaBWOOwWQEhf44CCCiAgAIIKICAAggpgZCwSpwqxBYIGQ0FEFAAkRCKCgh5aucBRBoogJCLbIGQ9jxRAiEhimLIPAGEeQII8wQQMnCeAMI8AYR8pwRCfm0dQGgdFRDS2zqAUCUuWoeLn0uT42b/dXt4tRISto68rmtLIWYIAUKAECAECAFCgBAgBAiZN/8EGADmWE2WkX/wDgAAAABJRU5ErkJggg=='} alt="climba"/>
                        DevTools
                        <GeneratorsMenu/>
                    </Title>
                    {
                        loggedUser
                            ?
                            <>
                                <Typography color={"inherit"}>{loggedUser.name}</Typography>
                                <Tooltip title={'Sair'} arrow>
                                    <IconButton color={"inherit"} onClick={signOut}>
                                        <ExitToAppIcon color={'inherit'}/>
                                    </IconButton>
                                </Tooltip>
                            </>
                            :
                            <Button color={"inherit"} onClick={handleOpen}>Login</Button>
                    }
                </Toolbar>
                <ModalLogin/>
            </modalContext.Provider>
        </Menu>
    );
};
