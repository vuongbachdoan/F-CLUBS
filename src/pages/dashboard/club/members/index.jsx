import { Table, Row, Col, Tooltip, User, Text, styled } from "@nextui-org/react";
import { Delete, Edit, Show } from "react-iconly";

export const ClubMembers = () => {
    const columns = [
        { name: "NAME", uid: "name" },
        { name: "ROLE", uid: "role" },
        { name: "ACTIONS", uid: "actions" },
    ];
    const users = [
        {
            id: 1,
            name: "Tony Reichert",
            role: "CEO",
            team: "Management",
            age: "29",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            email: "tony.reichert@example.com",
        },
        {
            id: 2,
            name: "Zoey Lang",
            role: "Technical Lead",
            team: "Development",
            age: "25",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
            email: "zoey.lang@example.com",
        },
        {
            id: 3,
            name: "Jane Fisher",
            role: "Senior Developer",
            team: "Development",
            age: "22",
            avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            email: "jane.fisher@example.com",
        },
        {
            id: 4,
            name: "William Howard",
            role: "Community Manager",
            team: "Marketing",
            age: "28",
            avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
            email: "william.howard@example.com",
        },
        {
            id: 5,
            name: "Kristen Copper",
            role: "Sales Manager",
            team: "Sales",
            age: "24",
            avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
            email: "kristen.cooper@example.com",
        },
    ];
    const renderCell = (user, columnKey) => {
        const cellValue = user[columnKey];
        switch (columnKey) {
            case "name":
                return (
                    <User squared src={user.avatar} name={cellValue} css={{ p: 0 }}>
                        {user.email}
                    </User>
                );
            case "role":
                return (
                    <Col>
                        <Row>
                            <Text b size={14} css={{ tt: "capitalize" }}>
                                {cellValue}
                            </Text>
                        </Row>
                        <Row>
                            <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                                {user.team}
                            </Text>
                        </Row>
                    </Col>
                );

            case "actions":
                return (
                    <Row justify="center" align="center">
                        <Col css={{ d: "flex" }}>
                            <Tooltip content="Details">
                                <IconButton onClick={() => console.log("View user", user.id)}>
                                    <Show set="bold" primaryColor="#979797" />
                                </IconButton>
                            </Tooltip>
                        </Col>
                        <Col css={{ d: "flex" }}>
                            <Tooltip content="Edit user">
                                <IconButton onClick={() => console.log("Edit user", user.id)}>
                                    <Edit set="bold" primaryColor="#979797" />
                                </IconButton>
                            </Tooltip>
                        </Col>
                        <Col css={{ d: "flex" }}>
                            <Tooltip
                                content="Delete user"
                                color="error"
                                onClick={() => console.log("Delete user", user.id)}
                            >
                                <IconButton>
                                    <Delete set="bold" primaryColor="#FF0080" />
                                </IconButton>
                            </Tooltip>
                        </Col>
                    </Row>
                );
            default:
                return cellValue;
        }
    };
    return (
        <Table
            aria-label="Example table with custom cells"
            css={{
                height: "auto",
                minWidth: "100%",
            }}
            selectionMode="none"
        >
            <Table.Header columns={columns}>
                {(column) => (
                    <Table.Column
                        key={column.uid}
                        hideHeader={column.uid === "actions"}
                        align={column.uid === "actions" ? "center" : "start"}
                    >
                        {column.name}
                    </Table.Column>
                )}
            </Table.Header>
            <Table.Body items={users}>
                {(item) => (
                    <Table.Row>
                        {(columnKey) => (
                            <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                        )}
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
    );
}


const IconButton = styled('button', {
    dflex: 'center',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    padding: '0',
    margin: '0',
    bg: 'transparent',
    transition: '$default',
    '&:hover': {
        opacity: '0.8'
    },
    '&:active': {
        opacity: '0.6'
    }
});

const StyledBadge = styled('span', {
    display: 'inline-block',
    textTransform: 'uppercase',
    padding: '$2 $3',
    margin: '0 2px',
    fontSize: '10px',
    fontWeight: '$bold',
    borderRadius: '14px',
    letterSpacing: '0.6px',
    lineHeight: 1,
    boxShadow: '1px 2px 5px 0px rgb(0 0 0 / 5%)',
    alignItems: 'center',
    alignSelf: 'center',
    color: '$white',
    variants: {
        type: {
            active: {
                bg: '$successLight',
                color: '$successLightContrast'
            },
            paused: {
                bg: '$errorLight',
                color: '$errorLightContrast'
            },
            vacation: {
                bg: '$warningLight',
                color: '$warningLightContrast'
            }
        }
    },
    defaultVariants: {
        type: 'active'
    }
});