import { Card, Grid, Text, Link, Avatar } from "@nextui-org/react";

export const ClubCard = () => {
    return (
        <Card css={{ p: "$6", mw: "400px" }}>
            <Card.Header>
                <Avatar
                    squared
                    alt="nextui logo"
                    src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/341088088_174154688842953_8522330254088174654_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zPlKIPWzOPYAX_PwexR&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfA0TkF1Nly4XO8_44-SSaxCPat8ZGaOrCpqDWPMVfh06A&oe=646A1A95"
                    size="xl"
                />
                <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                        <Text h4 css={{ lineHeight: "$xs" }}>
                            FU Dever
                        </Text>
                    </Grid>
                    <Grid xs={12}>
                        <Text css={{ color: "$accents8" }}>@IT Club</Text>
                    </Grid>
                </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
                <Text>
                    Dever là một câu lạc bộ học thuật, theo xu hướng nghiên cứu và phát triển sản phẩm.
                </Text>
            </Card.Body>
            <Card.Footer>
                <Link
                    icon
                    color="primary"
                    target="_blank"
                    href="club.dever@gmail.com"
                >
                    club.dever@gmail.com
                </Link>
            </Card.Footer>
        </Card>
    );
}
