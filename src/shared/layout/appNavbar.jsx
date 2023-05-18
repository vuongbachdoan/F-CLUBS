import { Navbar, Text } from "@nextui-org/react";
import { UserCard } from "../components/userCard";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Logo } from "../../assets/icons/iconLogo";

export const AppNavBar = () => {
    const currentRoute = useLocation();
    useEffect(() => {
        console.log(currentRoute)
    }, [currentRoute])
    return (
        <Navbar isBordered variant="sticky">
            <Navbar.Brand>
                <Logo fill={"#0072f5"} size={32}/>
                <Text b color="inherit" hideIn="xs">
                    F-CLUBS
                </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs">
                {/* Manager links */}
                <Navbar.Link href="/manager/home" isActive={"/manager/home" === currentRoute.pathname}>Home</Navbar.Link>
                <Navbar.Link href="/manager/clubs" isActive={"/manager/clubs" === currentRoute.pathname}>Clubs</Navbar.Link>
                <Navbar.Link href="/manager/events" isActive={"/manager/events" === currentRoute.pathname}>Events</Navbar.Link>
            
                {/* Club links */}
                <Navbar.Link href="/club/home" isActive={"/club/home" === currentRoute.pathname}>Home</Navbar.Link>
                <Navbar.Link href="/club/events" isActive={"/club/events" === currentRoute.pathname}>Events</Navbar.Link>
                <Navbar.Link href="/club/calendar" isActive={"/club/calendar" === currentRoute.pathname}>Calendar</Navbar.Link>
                <Navbar.Link href="/club/members" isActive={"/club/members" === currentRoute.pathname}>Members</Navbar.Link>
                <Navbar.Link href="/club/about" isActive={"/club/about" === currentRoute.pathname}>About</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                {/* <Navbar.Link color="inherit" href="#">
                    Login
                </Navbar.Link>
                <Navbar.Item>
                    <Button auto flat as={Link} href="#">
                        Sign Up
                    </Button>
                </Navbar.Item> */}
                <UserCard/>
            </Navbar.Content>
        </Navbar>
    );
}