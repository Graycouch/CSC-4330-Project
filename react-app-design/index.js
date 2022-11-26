import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    isLoggedIn: false,
    localhost: "10.50.141.198",
    staticContentURL: "https://csc4330project.s3.amazonaws.com",
    conversations: [],
    searchValue: "",
    user: {},
    allUsers: []//TODO: use 
})

export { useGlobalState, setGlobalState };