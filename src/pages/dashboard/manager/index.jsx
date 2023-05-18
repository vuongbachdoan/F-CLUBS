import React from "react";
import { Container, styled } from "@nextui-org/react";
import { AppNavBar } from "../../../shared/layout/appNavbar";
import { Outlet } from "react-router-dom";

export const Manager = () => {
    return (
        <Box
            css={{
                maxW: "100%"
            }}
        >
            <AppNavBar />
            <Container fluid>
                <Outlet/>
            </Container>
        </Box>
    )
}

const Box = styled("div", {
    boxSizing: "border-box",
});