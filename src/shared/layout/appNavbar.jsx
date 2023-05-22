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
                <Navbar.Link href="/app/manager/home" isActive={"/app/manager/home" === currentRoute.pathname}>Home</Navbar.Link>
                <Navbar.Link href="/app/manager/clubs" isActive={"/app/manager/clubs" === currentRoute.pathname}>Clubs</Navbar.Link>
                <Navbar.Link href="/app/manager/events" isActive={"/app/manager/events" === currentRoute.pathname}>Events</Navbar.Link>
            
                {/* Club links */}
                <Navbar.Link href="/app/club/home" isActive={"/app/club/home" === currentRoute.pathname}>Home</Navbar.Link>
                <Navbar.Link href="/app/club/events" isActive={"/app/club/events" === currentRoute.pathname}>Events</Navbar.Link>
                <Navbar.Link href="/app/club/calendar" isActive={"/app/club/calendar" === currentRoute.pathname}>Calendar</Navbar.Link>
                <Navbar.Link href="/app/club/members" isActive={"/app/club/members" === currentRoute.pathname}>Members</Navbar.Link>
                <Navbar.Link href="/app/club/about" isActive={"/app/club/about" === currentRoute.pathname}>About</Navbar.Link>
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