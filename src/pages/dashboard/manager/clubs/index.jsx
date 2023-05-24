import { Button, Container, Grid, Input, Modal, Text, Textarea, useInput, useModal } from "@nextui-org/react";
import { Plus, User } from "react-iconly";
import { ClubCard } from "../components/clubCard";
import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";
import { createClub } from "../../../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import React, { useCallback, useState } from "react";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

export const Clubs = () => {
    const { value: clubName, reset: resetClubName, bindings: bindingsClubName } = useInput();
    const { value: details, reset: resetDetails, bindings: bindingsDetails } = useInput();
    const { setVisible, bindings } = useModal();
    const [image, setImage] = useState(null);

    const onSelectFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () => setImage(reader.result));
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const addClub = async () => {
        try {
            await Storage.put(`club_${clubName}`, image, {
                completeCallback: (event) => {
                    console.log(`Successfully uploaded ${event.key}`);
                },
                progressCallback: (progress) => {
                    console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
                },
                errorCallback: (err) => {
                    console.error('Unexpected error while uploading', err);
                }
            });
        } catch (error) {
            console.log("Error uploading file: ", error);
        }
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
                        <Container fluid justify="center">
                            {
                                !image &&
                                <label htmlFor="file-input">
                                    <img src="https://host-image.s3.amazonaws.com/camera_placeholder.jpg" alt="logo club" />
                                </label>
                            }
                            <input style={{ display: "none" }} id="file-input" type="file" accept="image/*" onChange={onSelectFile} />
                            {
                                image &&
                                <>
                                    <img src={image} alt="Preview" />
                                    <Button onPress={() => setImage(null)}>Choose another image</Button>
                                </>
                            }
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