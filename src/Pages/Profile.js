import React, { useEffect } from 'react';
import { useNavigate, Link, Routes, Route, useRouteMatch } from 'react-router-dom';
import EditProfile from '../components/EditProfile';
import ViewProfile from '../components/ViewProfile';

const Profile = ({ login }) => {
  // React Router V6 > useHistory
  const navigate = useNavigate();

  useEffect(() => {
    if (!login) {
      navigate('/about');
    }
  }, [login, navigate]);

  return (
    <>
      <h1>Profile</h1>

      <ul>
        <li>
          <Link to="viewprofile">View Profile</Link>
        </li>
        <li>
          <Link to="editprofile">Edit Profile</Link>
        </li>
      </ul>

      <Routes>
        <Route path="viewprofile" element={<ViewProfile />} />
        <Route path="editprofile" element={<EditProfile />} />
      </Routes>
    </>
  );
};

export default Profile;
