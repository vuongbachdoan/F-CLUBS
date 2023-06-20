import { Input, Row, Text, Checkbox, Modal, Button, Link, useInput, Loading, Spacer } from "@nextui-org/react"
import { Password } from "../../../assets/icons/iconMail"
import { Mail } from "../../../assets/icons/iconPassword"
import { login } from "../../../core/api/auth/authService"
import { redirect, useNavigate } from "react-router-dom"
import React from "react"

export const Login = () => {
    const navigate = useNavigate();
    const { value: email, reset: resetEmail, bindings: bindingsEmail } = useInput("");
    const { value: password, reset: resetPassword, bindings: bindingsPassword } = useInput("");
    const [isLogin, setIsLogin] = React.useState(false);
    const handleLogin = () => {
        setIsLogin(true)
        login(email, password)
            .then((res) => {
                console.log(res)
                if (res.attributes) {
                    Promise.all([
                        localStorage.setItem("user", JSON.stringify(res.attributes)),
                        navigate("/app/manager/home", {
                            replace: true
                        }),
                    ])
                }
            }).catch(() => {
                setIsLogin(false);
            })
    }
    const changeRoute = (event, href) => {
        event.preventDefault();
        navigate(href, {
            replace: true
        })
    }

    return <>
        <Modal
            blur
            aria-labelledby="modal-title"
            open={true}
            preventClose
        >
            <Modal.Header>
                <Text id="modal-title" size={18}>
                    Welcome to
                    <Text b size={18}>
                        &nbsp;NextUI
                    </Text>
                </Text>
            </Modal.Header>
            <Modal.Body>
                <Input
                    {...bindingsEmail}
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Email"
                    contentLeft={<Mail fill="currentColor" />}
                />
                <Input
                    {...bindingsPassword}
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    type="password"
                    placeholder="Password"
                    contentLeft={<Password fill="currentColor" />}
                />
                <Row justify="space-between">
                    <Checkbox>
                        <Text size={14}>Remember me</Text>
                    </Checkbox>
                    <Text size={14}>Forgot password?</Text>
                </Row>
            </Modal.Body>
            <Modal.Footer css={{ display: "flex", justifyContent: "center" }}>
                <Button onPress={handleLogin}>
                    {isLogin ?
                        <>
                            Loading
                            <Spacer />
                            <Loading size="sm" color="white" />
                        </> :
                        <>Sign in</>
                    }
                </Button>
                <Text>
                    Don't have an account,
                    <Link onClick={(e) => changeRoute(e, "/auth/sign-up")} href="/auth/sign-up">
                        &nbsp;Sign up.
                    </Link>
                </Text>
            </Modal.Footer>
        </Modal>
    </>
}