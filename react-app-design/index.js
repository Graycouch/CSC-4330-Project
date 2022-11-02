import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    isLoggedIn: false,
    localhost: "192.168.0.69",
    staticContentURL: "https://csc4330project.s3.amazonaws.com",
    searchValue: "",
    user: null,
    allUsers: []
})

export { useGlobalState, setGlobalState };