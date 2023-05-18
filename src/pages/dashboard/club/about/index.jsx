import { Card, Col, Text, Row, Button, Container } from "@nextui-org/react"

export const ClubAbout = () => {
    return (
        <Container>
            <Card css={{ w: "100%", h: "400px" }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    <Col>
                        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
                            Up comming events
                        </Text>
                        <Text h3 color="white">
                            Workshop: Mobile in 4.0
                        </Text>
                    </Col>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src="https://nextui.org/images/card-example-5.jpeg"
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        alt="Relaxing app background"
                    />
                </Card.Body>
                <Card.Footer
                    isBlurred
                    css={{
                        position: "absolute",
                        bgBlur: "#0f111466",
                        borderTop: "$borderWeights$light solid $gray800",
                        bottom: 0,
                        zIndex: 1,
                    }}
                >
                    <Row>
                        <Col>
                            <Row>
                                <Col span={3}>
                                    <Card.Image
                                        src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/341088088_174154688842953_8522330254088174654_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zPlKIPWzOPYAX_PwexR&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfA0TkF1Nly4XO8_44-SSaxCPat8ZGaOrCpqDWPMVfh06A&oe=646A1A95"
                                        css={{ bg: "black", br: "50%" }}
                                        height={40}
                                        width={40}
                                        alt="Breathing app icon"
                                    />
                                </Col>
                                <Col>
                                    <Text weight="bold" color="#d1d1d1" size={12}>
                                        FU Dever
                                    </Text>
                                    <Text color="#d1d1d1" size={12}>
                                        @IT club
                                    </Text>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row justify="flex-end">
                                <Button
                                    flat
                                    auto
                                    rounded
                                    css={{ color: "#94f9f0", bg: "#94f9f026" }}
                                >
                                    <Text
                                        css={{ color: "inherit" }}
                                        size={12}
                                        weight="bold"
                                        transform="uppercase"
                                    >
                                        Regist Now
                                    </Text>
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
            <Text
                h1
                size={60}
                css={{
                    textGradient: "45deg, $blue600 20%, $pink600 70%",
                    textAlign: "center"
                }}
                weight="bold"
            >
                Overview
            </Text>
            <Text
                size="$lg"
                css={{textAlign: "center"}}
                weight="thin"
            >Dever là một câu lạc bộ học thuật, theo xu hướng nghiên cứu và phát triển sản phẩm.</Text>
        </Container>
    );
}