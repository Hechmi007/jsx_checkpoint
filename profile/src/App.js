import logo from './logo.svg';
import ProfileHeader from './Components/ProfileHeader';
import ProfileBody from './Components/ProfileBody';
import './App.css';

function App() {
  const user={id:1,
  fullname:'Dwayne The Rock',
  email:'theRockIsCooking@WWE.com',
  role:'Admin',

  }
  return (
    <div>
      <ProfileHeader  />
      <ProfileBody></ProfileBody>
    </div>
  );
}

export default App;
