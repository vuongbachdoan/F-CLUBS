import { Card, Grid, Text, Link, Avatar } from "@nextui-org/react";
import { Storage } from "aws-amplify";
import { useEffect, useState } from "react";

export const ClubCard = ({data}) => {
    const [clubThumbnail, setClubThumbnail] = useState(null);
    useEffect(( ) => {
        Storage.get(data.thumbnail)
        .then((res) => setClubThumbnail(res))
    }, [])

    return (
        <Card key={data.id} css={{ p: "$6", mw: "400px", maxHeight: "258px"}}>
            <Card.Header>
                <Avatar
                    squared
                    alt="nextui logo"
                    src={clubThumbnail}
                    size="xl"
                />
                <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                        <Text h4 css={{ lineHeight: "$xs" }}>
                            {
                            data.name
                            }
                        </Text>
                    </Grid>
                    <Grid xs={12}>
                        <Text css={{ color: "$accents8" }}>{data.type}</Text>
                    </Grid>
                </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
                <Text>
                    {
                        data.introdution
                    }
                </Text>
            </Card.Body>
            <Card.Footer>
                <Link
                    icon
                    color="primary"
                    target="_blank"
                    href="club.dever@gmail.com"
                >
                    {
                        data.email
                    }
                </Link>
            </Card.Footer>
        </Card>
    );
}
