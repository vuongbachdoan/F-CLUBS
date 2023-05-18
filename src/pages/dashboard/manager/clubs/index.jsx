import { Button, Container, Grid } from "@nextui-org/react";
import { Plus } from "react-iconly";
import { ClubCard } from "../components/clubCard";

export const Clubs = () => {
    return (
        <>
            <Container css={{ marginTop: "$5" }}>
                <Button
                    auto
                    icon={<Plus set="bold" primaryColor="white" />}
                >
                    Add a club
                </Button>
            </Container>
            <Grid.Container gap={2}>
                <Grid xs={4}>
                    <ClubCard />
                </Grid>
                <Grid xs={4}>
                    <ClubCard />
                </Grid>
                <Grid xs={4}>
                    <ClubCard />
                </Grid>
                <Grid xs={4}>
                    <ClubCard />
                </Grid>
                <Grid xs={4}>
                    <ClubCard />
                </Grid>
            </Grid.Container>
        </>
    );
}