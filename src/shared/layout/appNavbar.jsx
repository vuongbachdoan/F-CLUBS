import { Navbar, Text } from "@nextui-org/react";
import { UserCard } from "../components/userCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Logo } from "../../assets/icons/iconLogo";

export const AppNavBar = () => {
    const currentRoute = useLocation();
    useEffect(() => {
        console.log(currentRoute)
    }, [currentRoute])

    const navigate = useNavigate();
    const changeRoute = (href) => {
        navigate(href, {
            replace: true
        });
    }
    return (
        <Navbar isBordered variant="sticky">
            <Navbar.Brand>
                <Logo fill={"#0072f5"} size={32} />
                <Text b color="inherit" hideIn="xs">
                    F-CLUBS
                </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs">
                {/* Manager links */}
                <Navbar.Item
                    onClick={() => changeRoute("/app/manager/home")}
                    isActive={"/app/manager/home" === currentRoute.pathname}
                >Home</Navbar.Item>
                <Navbar.Item
                    onClick={() => changeRoute("/app/manager/clubs")}
                    isActive={"/app/manager/clubs" === currentRoute.pathname}
                >Clubs</Navbar.Item>
                <Navbar.Item
                    onClick={() => changeRoute("/app/manager/events")}
                    isActive={"/app/manager/events" === currentRoute.pathname}
                >Events</Navbar.Item>

                {/* Club links */}
                <Navbar.Item
                    onClick={() => changeRoute("/app/club/home")}
                    isActive={"/app/club/home" === currentRoute.pathname}
                >Home</Navbar.Item>
                <Navbar.Item
                    onClick={() => changeRoute("/app/club/events")}
                    isActive={"/app/club/events" === currentRoute.pathname}
                >Events</Navbar.Item>
                <Navbar.Item
                    onClick={() => changeRoute("/app/club/calendar")}
                    isActive={"/app/club/calendar" === currentRoute.pathname}
                >Calendar</Navbar.Item>
                <Navbar.Item
                    onClick={() => changeRoute("/app/club/members")}
                    isActive={"/app/club/members" === currentRoute.pathname}
                >Members</Navbar.Item>
                <Navbar.Item
                    onClick={() => changeRoute("/app/club/about")}
                    isActive={"/app/club/about" === currentRoute.pathname}
                >About</Navbar.Item>
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
                <UserCard />
            </Navbar.Content>
        </Navbar>
    );
}