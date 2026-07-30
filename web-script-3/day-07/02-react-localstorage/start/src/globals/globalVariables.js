const appTitle = "Awesome App";
const appStorageName = 'awesomeAppUser';

const initialState = { 
    user: null, 
    location: null 
};

const ACTIONS = {
    CREATE_USER: 'CREATE_USER',
    DELETE_USER: 'DELETE_USER'
}

export {appTitle, appStorageName, initialState, ACTIONS}
