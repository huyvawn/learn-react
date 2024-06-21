import logo from './logo.svg';
import './App.css';

function UserProfile() {
  return (
    <div>
      <h1>
        Mark
      </h1>
      <img src="https://images.pexels.com/photos/1704488/pexels-photo-
1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=".." class="user-profile-pic" />
<h2>Hobbies</h2>
<ul>
  <li>Badminton</li>
  <li>CHess</li>
  <li>Gaming</li>
</ul>
    </div>
  )
}

function Welcome() {
const name = "Mark"
return (
  <section>
    <h2 className="user-name">
      Hello, <span className="user-first-name">{name}</span> 🎉🌹
    </h2>
  </section>
);
}

function User() {
  const name="Mark";
  const pic="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
return (
  <section>
    <img src={pic} alt={name} className="user-profile-pic" />
    <h2 className="user-name">
      Hello, <span className="user-first-name">{name}</span>🌹🎉
    </h2>
  </section>
);
}

export default User;
