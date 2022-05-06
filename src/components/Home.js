import Announcements from "./Announcements";
import RSVP from "./RSVP";
const Home = (props) => {
  return (
    <div className='main-content p-2 p-md-4 rounded shadow bg-light'>
      <div className='row'>
        <RSVP history={props.history} />
        <Announcements />
      </div>
    </div>
  );
};

export default Home;
