import { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import { firebaseApp } from './config';
import { fetchServerUser } from './utils';
import { Context as UserContext } from './context/UserContext';
import Home from './components/screens/Home';
import Booking from './components/screens/Booking';
import Logistics from './components/screens/Logistics';
import Login from './components/screens/Login';
import Account from './components/screens/Account';
import ItineraryDetails from './components/screens/ItineraryDetails';
import './App.css';

function App() {
    const {
        setCurrentUserFromFirebase
    } = useContext(UserContext);

    useEffect(() => {
        const auth = getAuth(firebaseApp);
    
        const shouldSignOut = false; // used to sign out for testing purposes
        if (shouldSignOut) {
            signOut(auth);
        } else {
            const unsubscribe = authenticate();
            return () => {
                unsubscribe();
            };
        }
      }, []);
    
    const authenticate = () => {
        const auth = getAuth(firebaseApp);
        return onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                fetchServerUser(firebaseUser).then((currentUser) => {
                    setCurrentUserFromFirebase(currentUser);
                });
            }
        })
    };

    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/booking' element={<Booking />} />
                <Route path='/logistics' element={<Logistics />} />
                <Route path='/login' element={<Login />} />
                <Route path='/account' element={<Account />}  />
                <Route path='/itinerary' element={<ItineraryDetails />}  />
            </Routes>
        </HashRouter>
    );
}

export default App;
