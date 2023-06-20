import { Button, Container, Grid, Input, Modal, Text, Textarea, useInput, useModal } from "@nextui-org/react";
import { Plus, User } from "react-iconly";
import { ClubCard } from "../components/clubCard";
import { API, DataStore, Storage } from "aws-amplify";
import { useEffect, useState } from "react";
import { Club } from "../../../../models";
import { listClubs } from "../../../../graphql/queries";

export const Clubs = () => {
    const { value: clubName, reset: resetClubName, bindings: bindingsClubName } = useInput();
    const { value: details, reset: resetDetails, bindings: bindingsDetails } = useInput();
    const { value: clubEmail, reset: resetClubEmail, bindings: bindingsClubEmail } = useInput();
    const { setVisible, bindings } = useModal();
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [imageExtension, setImageExtension] = useState("");

    const onSelectFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () => setImagePreview(reader.result));
            reader.readAsDataURL(e.target.files[0]);

            setImage(e.target.files[0]);
            setImageExtension(e.target.value.split('.').pop());
        }
    };

    const addClub = async () => {
        try {
            await DataStore.save(
                new Club({
                    "name": clubName,
                    "introdution": details,
                    "type": "IT",
                    "members": [],
                    "events": [],
                    "email": clubEmail,
                    "thumbnail": `club_${clubName}.${imageExtension}`
                })
            );
            await Storage.put(`club_${clubName}.${imageExtension}`, image, {
                completeCallback: (event) => {
                    console.log(`Successfully uploaded ${event}`);
                    console.log(event);
                },
                progressCallback: (progress) => {
                    console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
                },
                errorCallback: (err) => {
                    console.error('Unexpected error while uploading', err);
                }
            });
            setVisible(false);
        } catch (error) {
            console.log("Error uploading file: ", error);
        }
    }

    const [clubs, setClubs] = useState([]);
    useEffect(() => {
        getClubs()
            .then((clubs) => {
                setClubs(clubs);
            })
    }, [clubEmail])

    const getClubs = async () => {
        const clubsData = await API.graphql({ query: listClubs });
        const clubs = clubsData.data.listClubs.items;
        return clubs;
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
                                imagePreview &&
                                <>
                                    <img src={imagePreview} alt="Preview" />
                                    <Button onPress={() => setImage(null)}>Choose another image</Button>
                                </>
                            }
                        </Container>
                        <Input {...bindingsClubName} label="Name" placeholder="Name should be fully meanning" />
                        <Input {...bindingsClubEmail} label="Club Contact" placeholder="Enter your club's email" />
                        <Textarea {...bindingsDetails} label="Details" placeholder="Give some information of your club here" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button auto flat color="error" onPress={() => setVisible(false)}>
                            Close
                        </Button>
                        <Button auto onPress={addClub}>
                            Agree
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>

            <Grid.Container gap={2}>
                {
                    clubs &&
                    clubs.map((club) => {
                        return <Grid xs={4}>
                            <ClubCard data={club} />
                        </Grid>
                    })
                }
            </Grid.Container>
        </>
    );
}