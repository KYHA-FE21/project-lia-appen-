import {useContext} from 'react';
import Routes from './routes';
import { AuthContext } from './context';

const App = () => {

	const [role, token] = useContext(AuthContext);

  return (
		<AuthContext.Provider value={{role, token}}>
			<Routes />
		</AuthContext.Provider>
	);
};

export default App;
