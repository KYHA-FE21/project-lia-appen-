import React from 'react';
import '../styles/auth.scss';
import { Mail, Lock } from 'lucide-react';
import TextField from '../components/textField';
import Logo from '../components/logo';
import Path from '../components/path';
import Btn from '../components/btn';
import usePOST from '../hooks/usePost';
import { useNavigate, useParams } from 'react-router-dom';

const Reset = () => {
  const { data, loading, error, fetchPost } = usePOST;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const [notSame, setNotSame] = React.useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleGetResetCredentials = (e) => {
    e.preventDefault();
    fetchPost('/api/user/reset/getCredentials', { email });
  };

  const handleReset = (e) => {
    e.preventDefault();
    fetchPost('/api/user/reset/confirmCredentials', { id, password });
  };

  React.useEffect(() => {
    if (data)
      setTimeout(() => {
        navigate('/signin');
      }, 3000);
  }, [data]);

  React.useEffect(() => {
    if (password === password2) setNotSame(false);
    else setNotSame(true);
  }, [password, password2]);

  return (
    <div className="authContainer">
      <div className="authContent">
        <Logo />
        {!data ? (
          <>
            {id === '*' ? (
              <form onSubmit={handleGetResetCredentials}>
                <TextField
                  icon={<Mail strokeWidth={1} />}
                  type="email"
                  placeholder="E-post"
                  value={email}
                  setValue={setEmail}
                  isError={error?.type === 'email' && error.message}
                />
                <Btn title="FORTSÄTT" loading={loading} disabled={notSame} />
              </form>
            ) : (
              <form onSubmit={handleReset}>
                <div className="authSignupPasswordContainer">
                  <TextField
                    icon={<Lock strokeWidth={1} />}
                    type="password"
                    placeholder="Nytt lösenord"
                    value={password}
                    setValue={setPassword}
                    isError={error?.type === 'password' && error.message}
                  />
                  <TextField
                    type="password"
                    placeholder="Repetera lösenord"
                    value={password2}
                    setValue={setPassword2}
                  />
                </div>
                <Btn title="ÅTERSTÄLL LÖSENORD" loading={loading} disabled={notSame} />
              </form>
            )}
            <Path links={[{ path: '/signin', title: 'Tillbaka' }]} />
          </>
        ) : (
          <>
            <div className="authResetResponseContent">{data}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Reset;
