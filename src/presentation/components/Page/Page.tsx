import * as React from 'react';
import {Box, Container, Typography} from "@mui/material";
import {Navbar} from "@/presentation/components/Navbar";


type PageProps = {
    title: string
};
export const Page:React.FC<PageProps> = (props) => {
    return (
        <Container>
            <Navbar/>
            <Typography sx={{ color: '#999999'}} component={"h1"} variant={"h5"} paddingTop={5} marginTop={5}>
                {props.title}
            </Typography>
            <Box paddingTop={3} marginTop={2}>
                {props.children}
            </Box>
        </Container>
    );
};
