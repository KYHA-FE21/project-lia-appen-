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

const Signup = () => {
  const { data, loading, error, fetchPost } = usePOST;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const [notSame, setNotSame] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchPost('/api/user/signup', { email, password });
  };

  const navigate = useNavigate();
  React.useEffect(() => {
    if (data) navigate('/profile');
  }, [data]);

  React.useEffect(() => {
    if (password === password2) setNotSame(false);
    else setNotSame(true);
  }, [password, password2]);

  return (
    <div className="authContainer">
      <div className="authContent">
        <Logo />
        <form onSubmit={handleSubmit}>
          <TextField
            icon={<Mail strokeWidth={1} />}
            type="email"
            placeholder="Email"
            value={email}
            setValue={setEmail}
            isError={error?.type === 'email' && error.message}
          />
          <div className="authSignupPasswordContainer">
            <TextField
              icon={<Lock strokeWidth={1} />}
              type="password"
              placeholder="Password"
              value={password}
              setValue={setPassword}
              isError={error?.type === 'password' && error.message}
            />
            <TextField type="password" placeholder="Password again" value={password2} setValue={setPassword2} />
          </div>

          <Btn title="SIGN UP" loading={loading} disabled={notSame} />
        </form>
        <Path links={[{ path: '/signin', title: 'Already Registered?' }]} />
        <External />
      </div>
    </div>
  );
};

export default Signup;
