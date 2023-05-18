import { Grid } from "@nextui-org/react";
import { EventCard } from "../components/eventCard";

export const Events = () => {
    return (
        <>
            <Grid.Container gap={2} justify="center">
                <Grid xs={12} sm={12}>
                    <EventCard />
                </Grid>
                <Grid xs={12} sm={4}>
                    <EventCard />
                </Grid>
                <Grid xs={12} sm={4}>
                    <EventCard />
                </Grid>
                <Grid xs={12} sm={4}>
                    <EventCard />
                </Grid>
            </Grid.Container>
        </>
    );
}