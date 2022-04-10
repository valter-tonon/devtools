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
    [ '@media (max-width: 600px)' ]: {
        width: 300,
    }
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
                <Grid
                      lg={6}
                      sm={12}
                      sx={{backgroundImage:`url("${modalLoginBackground}")`, backgroundPosition:'bottom', backgroundSize:'cover', backgroundRepeat:'no-repeat',
                      [ '@media (max-width: 600px)' ]: {
                          display: 'none',
                      }}}
                      display={'flex'} justifyContent={'center'}
                      alignItems={'center'}
                >
                    <Typography variant="h4">
                        DevTools
                    </Typography>
                </Grid>
                <Grid
                      lg={6}
                      sm={12}
                      sx={{backgroundColor: "#1C1D3B", height:"100%", [ '@media (max-width: 600px)' ]: {
                              width: '100%',
                          } }} p={5}
                      textAlign={"center"}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      flexDirection={'column'}
                >
                    <Typography variant="h4" sx={{  [ '@media (min-width: 600px)' ]: {
                            display: 'none',
                        }}}>
                        DevTools
                    </Typography>
                    <Typography variant="h6" mb={3}>
                        Log In
                    </Typography>
                    <GoogleLoginButton/>
                </Grid>
            </Grid>
        </Modal>
    );
};
