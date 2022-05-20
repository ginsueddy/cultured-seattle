import { getAuth, onIdTokenChanged } from '@firebase/auth';
import { firebaseApp } from '../config';
import { setIdToken } from './request';
import * as api from '../api';

const auth = getAuth(firebaseApp);

const checkTokenAndReturnValidOne = (user, getNewToken) => {
    return new Promise((resolve, reject) => {
        user.getIdToken(getNewToken).then((idToken) => {
            api.isTokenValid(idToken).then((isTokenValid) => {
                if (isTokenValid) {
                    console.log('firebase token is valid');
                    resolve(idToken);
                } else {
                    console.log('firebase token is NOT valid');
                    checkTokenAndReturnValidOne(user, true);
                }
            });
        }).catch((error) => {
            reject(error);
        });
    });
};

export const refreshUserIdToken = () => {
    return new Promise((resolve, reject) => {
        onIdTokenChanged(auth, (user) => {
            if (user) {
                // @ts-ignore
                checkTokenAndReturnValidOne(user).then((idToken) => {
                    setIdToken(idToken);
                    resolve(true);
                });
                resolve(true);
            } else {
                reject();
            }
        });
    });
};

export const fetchServerUser = (localUser) => {
    refreshUserIdToken();

    // small helper method for promise below
    const getCurrentUserFromServer = (resolve, reject, user) => {
        api.getCurrentUser().then((serverUser) => {
            if (!serverUser) {
                console.log('i need to register a new user');
            } else {
                resolve({
                    ...serverUser,
                    uid: user.uid
                });
            }
        }).catch((error) => {
            alert('an error has occured during sign in');
            reject(error);
        });
    };
  
  return new Promise((resolve, reject) => {
        // @ts-ignore
        checkTokenAndReturnValidOne(localUser).then((idToken) => {
            setIdToken(idToken);
            getCurrentUserFromServer(resolve, reject, localUser);
        }).catch((error) => {
            reject(error);
        });
    });
};