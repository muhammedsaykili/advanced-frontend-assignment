import React from 'react'; // Import React for JSX syntax and component rendering
import UserCard from '../components/UserCard'; // Importing UserCard component to display individual user information

export default function UserList() { // Main component to render the list of users
  return (
    // Rendering individual UserCard components with user details
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
      <UserCard name="Lucas Smith" age={30} bio="Software Developer | Loves coding, gaming, and AI research" />
      <UserCard name="Ava Johnson" age={25} bio="Graphic Designer | Enjoys digital art, photography, and painting" />
      <UserCard name="Liam Martinez" age={49} bio="Mechanical Engineer | Passionate about cars, robotics, and 3D printing" />
      <UserCard name="Olivia Brown" age={27} bio="Teacher | Loves reading, writing, and volunteering" />
      <UserCard name="Noah Anderson" age={43} bio="Chef | Interested in culinary arts, food blogging, and traveling" />
      <UserCard name="Emma Garcia" age={55} bio="Doctor | Enjoys hiking, yoga, and medical research" />
      <UserCard name="Ethan Wilson" age={65} bio="Musician | Passionate about playing guitar, composing, and live performances" />
      <UserCard name="Sophia Lopez" age={53} bio="Architect | Loves designing, urban planning, and sketching buildings" />
      <UserCard name="Mason Taylor" age={22} bio="Police Officer | Interested in fitness, self-defense, and community service" />
      <UserCard name="Isabella Martinez" age={19} bio="Journalist | Loves storytelling, investigative journalism, and podcasting" />
    </div>
  );
}
