import React from 'react';
import '../styles/auth.scss';
import { Mail, Lock } from 'lucide-react';
import TextField from '../components/textField';
import Logo from '../components/logo';
import Path from '../components/path';
import Btn from '../components/btn';
import External from '../components/external';
import usePOST from '../hooks/usePost';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const { data, loading, error, fetchPost } = usePOST;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchPost('/api/user/signin', { email, password });
  };

  const navigate = useNavigate();
  React.useEffect(() => {
    if (data) navigate('/profile');
  }, [data]);

  return (
    <div className="authContainer">
      <div className="authContent">
        <Logo />
        <form onSubmit={handleSubmit}>
          <TextField
            icon={<Mail strokeWidth={1} />}
            type="email"
            placeholder="E-post"
            value={email}
            setValue={setEmail}
            isError={error?.type === 'email' && error.message}
          />
          <TextField
            icon={<Lock strokeWidth={1} />}
            type="password"
            placeholder="Lösenord"
            value={password}
            setValue={setPassword}
            isError={error?.type === 'password' && error.message}
          />
          <Btn title="LOGGA IN" loading={loading} />
        </form>
        <Path
          links={[
            { path: '/signup', title: 'Skapa Konto' },
            { path: '/reset/*', title: 'Glöm Lösenord?' },
          ]}
        />
        <External />
      </div>
    </div>
  );
};

export default Signin;