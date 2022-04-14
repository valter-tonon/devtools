import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Drawer,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemText,
    Typography
} from '@mui/material';
import * as React from 'react';
import {useState} from 'react';
import {Menu} from "@mui/icons-material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {useGoogleLogout} from "react-google-login";


function ExpandMoreIcon() {
    return null;
}



export const MobileMenu = (props) => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const clientId = process.env.CLIENT_ID;
    const {signOut} = useGoogleLogout({
        clientId,
        onLogoutSuccess: () => {
            logout()
        }
    })
    const logout = () => {
        console.log("logout")
        sessionStorage.removeItem('access_token');
        props.isLogged(false)
        props.loggedUser1(null)
    }

    return (
        <>
            <Drawer open={openDrawer} onClose={()=> setOpenDrawer(false)} anchor={"right"}>
                <List>
                    <ListItem>
                        <ListItemText>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Generators</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Link href={"#"}>Branch Name</Link>
                                </AccordionDetails>
                            </Accordion>
                        </ListItemText>
                    </ListItem>
                </List>
                <List style={{ marginTop: `auto` }} >
                    <ListItem>
                        <ListItemText>
                            {
                                props.loggedUser
                                    ?
                                    <>
                                        <Typography>{props.loggedUser?.name}</Typography>
                                        <Typography>{props.loggedUser?.email}</Typography>
                                        <Box onClick={signOut}  sx={{width: "100%"}} display={"flex"} alignItems={"center"}>
                                            <Typography variant="button" mr={2}>Sair</Typography>
                                            <ExitToAppIcon/>
                                        </Box>
                                    </>
                                    :
                                    <Button onClick={props.onClick}>Login</Button>
                            }
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} color={'inherit'}>
                <Menu/>
            </IconButton>
        </>
    );
};
