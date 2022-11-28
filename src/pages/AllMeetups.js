import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is meeting 1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/405px-Stadtbild_M%C3%BCnchen.jpgogle.com/url?sa=i&url=https%3A%2F%2Fwww.history.com%2Ftopics%2Fgermany&psig=AOvVaw3quuXSvzmJxrQF7IF-ou5h&ust=1669562836811000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLjR6bOUzPsCFQAAAAAdAAAAABAD',
        address: 'MeetUp Street, 12345, Germany',
        description: 'This is a first meeting. Amazing meeting whihc you defenitely should not miss. It will be unforgettable'
    },

    {
        id: 'm2',
        title: 'This is meeting 2',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cntraveler.com%2Factivities%2Fbarcelona%2Fcamp-nou&psig=AOvVaw1I2I3Fnj8Q_y7qylM1LJtn&ust=1669563063529000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPjv_Z-VzPshttps://media.cntraveler.com/photos/5d1ba00e94f7490008610682/16:9/w_2560,c_limit/Camp_Nou-2019_GettyImages-544827412.jpgCFQAAAAAdAAAAABAI',
        adress: 'Barcelona, FCB street, campnou',
        description: 'My favourite meeting. I love this city and this football club'
    }
];

function AllMeetUpsPage() {
    return <section>
        <h1>Meetings</h1>
        <MeetupList meetups={DUMMY_DATA} />
    </section>
}


export default AllMeetUpsPage;