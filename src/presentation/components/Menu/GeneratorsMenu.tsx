import * as React from 'react';
import {Link} from "react-router-dom";
import {MenuMain} from "@/presentation/components/Menu/Menu";
import {MenuItem, styled} from "@mui/material";

const ItemMenuButton = styled(Link)(({ theme }) => ({
    color: "#222",
    textDecoration: "none",
}));

export const GeneratorsMenu = () => {
    const menuItens = [
        <ItemMenuButton to="/generators/random">Branch Name</ItemMenuButton>,
    ]
    return (
        <MenuMain name={"Generators"} menuItems={menuItens}/>
    );
};
