import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LoggedIn = () => {
  const location = useLocation();
  console.log({ location });

  //const { name, authorized } = state;
  const navigate = useNavigate();

  useEffect(() => {
    !location.state?.authorized && navigate('/');
  }, [location, navigate]);

  return (
    <div>
      <h2>You have successfully logged in {location.state?.name}</h2>
    </div>
  );
};

export default LoggedIn;
