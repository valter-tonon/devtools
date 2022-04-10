import * as React from 'react';
import {Box, Container, Typography} from "@mui/material";
import {Navbar} from "@/presentation/components/Navbar";
import {useEffect} from "react";


type PageProps = {
    title: string
};
export const appContext = React.createContext(null);
export const Page:React.FC<PageProps> = (props) => {
    const [loggedUser, setLoggedUser] = React.useState(null);

    return (
        <Container>
            <appContext.Provider value={{loggedUser, setLoggedUser}}>
                <Navbar/>
                <Typography sx={{ color: '#999999'}} component={"h1"} variant={"h5"} paddingTop={5} marginTop={5}>
                    {props.title}
                </Typography>
                <Box paddingTop={3} marginTop={2}>
                    {props.children}
                </Box>

            </appContext.Provider>
        </Container>
    );
};
