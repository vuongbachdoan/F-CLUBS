import { Button, Container, Grid, Input, Modal, Text, Textarea, useInput, useModal } from "@nextui-org/react";
import { Plus, User } from "react-iconly";
import { ClubCard } from "../components/clubCard";
import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";
import { createClub } from "../../../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import React from "react";

export const Clubs = () => {
    const {value: clubName, reset: resetClubName, bindings: bindingsClubName} = useInput();
    const {value: details, reset: resetDetails, bindings: bindingsDetails} = useInput();
    const { setVisible, bindings } = useModal();
    const uploader = Uploader({
        apiKey: "free"
    });
    const options = {
        editor: {
            images: {
                preview: true,          // True by default if cropping is enabled. Supports videos & PDFs too.
                crop: true,             // True by default. False disables the image editor / cropper.
                cropRatio: 4 / 3,
                cropShape: "rect"       // "rect" | "circ"
            }
        },
        maxFileCount: 1,
        maxFileSizeBytes: 5 * 1024 * 1024,
        mimeTypes: ["image/jpeg", "image/jpg", "image/png"],
        multi: false,
    }

    React.useMemo(() => {
        console.log(clubName)
    }, [clubName])

    const addClub = () => {
        API.graphql(
            graphqlOperation(
                createClub,
                {

                }
            )
        )
    }

    return (
        <>
            <Container css={{ marginTop: "$5" }}>
                <Button
                    auto
                    icon={<Plus set="bold" primaryColor="white" />}
                    onPress={() => setVisible(true)}
                >
                    Add a club
                </Button>
                <Modal
                    scroll
                    width="600px"
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    {...bindings}
                >
                    <Modal.Header>
                        <Text id="modal-title" size={18}>
                            Club details
                        </Text>
                    </Modal.Header>
                    <Modal.Body>
                        <Container fluid>
                            <UploadDropzone
                                uploader={uploader}
                                options={options}
                                width="200px"
                                height="200px"
                                onUpdate={files => {      // Optional.
                                    if (files.length === 0) {
                                        console.log('No files selected.')
                                    } else {
                                        console.log('Files uploaded:');
                                        console.log(files.map(f => f.fileUrl));
                                    }
                                }} />
                        </Container>
                        <Input {...bindingsClubName} label="Name" placeholder="Name should be fully meanning" />
                        <Textarea {...bindingsDetails} label="Details" placeholder="Give some information of your club here" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button auto flat color="error" onPress={() => setVisible(false)}>
                            Close
                        </Button>
                        <Button auto onPress={() => addClub()}>
                            Agree
                        </Button>
                    </Modal.Footer>
                </Modal>
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