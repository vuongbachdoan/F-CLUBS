import { User, Dropdown, Text, Link } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../core/api/auth/authService";

export const UserCard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Promise.all([
      signOut(),
      localStorage.removeItem("user"),
      navigate("/auth/login", {
        replace: true
      })
    ])
  }

  return (
    <Dropdown placement="bottom-left">
      <Dropdown.Trigger>
        <User
          src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/346643379_796917595320606_3128176729066261796_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LhIJqGuyKHwAX-y8XcX&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfCUgE0uayjb7nlS0KLbMMYRc79fu6JQOZkIu7bZdoOvQw&oe=646A2E78"
          name="Bach Doan Vuong"
        >
          <User.Link href="https://nextui.org/">@manager</User.Link>
        </User>
      </Dropdown.Trigger>
      <Dropdown.Menu color="primary" aria-label="User Actions">
        <Dropdown.Item key="settings">
          Profile
        </Dropdown.Item>
        <Dropdown.Item key="team_settings">My Settings</Dropdown.Item>
        <Dropdown.Item key="analytics" withDivider>
          Analyze
        </Dropdown.Item>
        <Dropdown.Item key="system">Events</Dropdown.Item>
        <Dropdown.Item key="configurations">Calendar</Dropdown.Item>
        <Dropdown.Item key="help_and_feedback" withDivider>
          Help & Feedback
        </Dropdown.Item>
        <Dropdown.Item key="logout" color="error" withDivider onPress={handleLogout}>
          <Link
            href="/auth/login"
            css={{
              display: "block",
              width: "100%"
            }}
            className="link-auto"
          >Log Out</Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
