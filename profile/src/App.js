import Profile from './Profile/Profile';
import './App.css';
import image from './profilePic.jpg'
function App() {
  const user={id:1,
  fullname:'Dwayne The Rock',
  email:'theRockIsCooking@WWE.com',
  role:'Admin',
  password:'BigWayne2020WWE',
  image:image,
  username:"Rocky"

  }
const handleClick=()=>{
  alert(`user : ${user.fullname}
          role: ${user.role}`)
}
  return (
    <div>
      <Profile fullname={user.fullname} email={user.email} role={user.role} password={user.password} image={user.image} handleClick={handleClick} />
      
    </div>
  );
}

export default App;
