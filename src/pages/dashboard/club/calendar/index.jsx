import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import "./style.css"
import { Container } from '@nextui-org/react';

export const ClubCalendar = () => (
    <Container fluid>
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            weekends={false}
            events={[
              { title: 'event 1', date: '2023-05-17' },
              { title: 'event 2', date: '2019-04-02' }
            ]}
        />
    </Container>
);