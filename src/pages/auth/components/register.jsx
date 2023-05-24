import { Input, Row, Text, Checkbox, Modal, Button, Link, useInput } from "@nextui-org/react"
import { Password } from "../../../assets/icons/iconMail"
import { Mail } from "../../../assets/icons/iconPassword"
import { useNavigate } from "react-router-dom"
import React from "react";
import { signUp } from "../../../core/api/auth/authService";

export const Register = () => {
    const navigate = useNavigate();
    const handleSignUp = () => {
        signUp(email, password)
            .then((res) => {
                Promise.all([
                    localStorage.setItem("user", JSON.stringify(res.user)),
                    navigate("/auth/verify")
                ])
            })
    }

    const { value: email, reset: resetEmail, bindings: bindingsEmail } = useInput("");
    const validateEmail = (value) => {
        return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    };
    const helperEmail = React.useMemo(() => {
        if (!email)
            return {
                text: "",
                color: "",
            };
        const isValid = validateEmail(email);
        return {
            text: isValid ? "Correct email" : "Enter a valid email",
            color: isValid ? "success" : "error",
        };
    }, [email]);

    const { value: password, reset: resetPassword, bindings: bindingsPassword } = useInput("");

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
                    Sign-Up to
                    <Text b size={18}>
                        &nbsp;NextUI
                    </Text>
                </Text>
            </Modal.Header>
            <Modal.Body>
                <Input
                    {...bindingsEmail}
                    clearable
                    fullWidth
                    shadow={false}
                    onClearClick={resetEmail}
                    status={helperEmail.color}
                    color={helperEmail.color}
                    helperColor={helperEmail.color}
                    helperText={helperEmail.text}
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    contentLeft={<Mail fill="currentColor" />}
                />
                <Input
                    {...bindingsPassword}
                    clearable
                    shadow={false}
                    onClearClick={resetPassword}
                    fullWidth
                    type="password"
                    label="Password"
                    placeholder="Password"
                    contentLeft={<Password fill="currentColor" />}
                />
                <Input
                    {...bindingsPassword}
                    clearable
                    shadow={false}
                    onClearClick={resetPassword}
                    fullWidth
                    type="password"
                    label="Confirm password"
                    placeholder="Confirm password"
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
                <Button onPress={handleSignUp}>
                    Sign up
                </Button>
                <Text>
                    Already have an account,
                    <Link onClick={(e) => changeRoute(e, "/auth/login")} href="/auth/login">
                        &nbsp;Sign in.
                    </Link>
                </Text>
            </Modal.Footer>
        </Modal>
    </>
}