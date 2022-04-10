import * as React from 'react';
import {Box, Grid, Modal, Typography} from "@mui/material";
import {modalContext} from "@/presentation/components/Navbar";
import {useContext} from "react";
import {GoogleLoginButton} from "@/presentation/components/LogginButton/GoogleLoginButton";
import {modalLoginBackground} from "@/presentation/components/Background/modalLoginBackground";



const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 300,
    color: '#fff',
    boxShadow: 24,
    flexGrow:1,
};

export const ModalLogin = () => {
    const {open, setOpen} = useContext(modalContext)
    const handleClose = () => setOpen(false);
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <Grid container sx={style}>
                <Grid xs={6}
                      sx={{backgroundImage:`url("${modalLoginBackground}")`, backgroundPosition:'bottom', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}
                      display={'flex'} justifyContent={'center'}
                      alignItems={'center'}
                >
                    <Typography variant="h4">
                        DevTools
                    </Typography>
                </Grid>
                <Grid xs={6}
                      sx={{backgroundColor: "#1C1D3B", height:"100%"}} p={5}
                      textAlign={"center"}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      flexDirection={'column'}
                >
                    <Typography variant="h6" mb={3}>
                        Log In
                    </Typography>
                    <GoogleLoginButton/>
                </Grid>
            </Grid>
        </Modal>
    );
};
