import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <div>
        <p>this route does not exist? why are you here?</p>
        <Link to="/" style={{ background: 'none' }}>
          Click here to goto home
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
