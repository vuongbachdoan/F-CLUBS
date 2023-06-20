import { Input, Row, Text, Checkbox, Modal, Button, Link, useInput } from "@nextui-org/react"
import React from "react";
import { confirmSignUp, resendConfirmationCode } from "../../../core/api/auth/authService";
import { useNavigate } from "react-router-dom";

export const Verify = () => {
    const navigate = useNavigate();
    const handleVerify = () => {
        confirmSignUp(JSON.parse(localStorage.getItem("user")).username, code)
            .then((res) => {
                if (res === "SUCCESS") {
                    navigate("/app/manager/home", {
                        replace: true
                    })
                } else {
                    setIsDisable(false);
                    resetCode();
                }
            })
    }

    const [isDisable, setIsDisable] = React.useState(false);
    const { value: code, reset: resetCode, bindings: bindingsCode } = useInput("");
    React.useMemo(() => {
        if (code.length === 6) {
            Promise.all([
                setIsDisable(true),
                handleVerify()
            ])
        }
    }, [code]);

    const handleResendCode = () => {
        resendConfirmationCode(JSON.parse(localStorage.getItem("user")).username)
        .then((res) => {
            resetCode();
            console.log("Please re-enter code")
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
                    Sign-Up to
                    <Text b size={18}>
                        &nbsp;NextUI
                    </Text>
                </Text>
            </Modal.Header>
            <Modal.Body>
                <Input
                    {...bindingsCode}
                    clearable
                    fullWidth
                    shadow={false}
                    onClearClick={resetCode}
                    disabled={isDisable}
                    type="text"
                    label="Verification code"
                    placeholder="Enter code"
                />
                <Row justify="flex-end">
                    <Text size={14}>Forgot password?</Text>
                </Row>
            </Modal.Body>
            <Modal.Footer css={{ display: "flex", justifyContent: "center" }}>
                <Button onPress={handleResendCode}>
                    Resend Code
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