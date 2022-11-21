import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    isLoggedIn: false,
    localhost: "167.96.119.217",
    staticContentURL: "https://csc4330project.s3.amazonaws.com",
    conversations: [],
    searchValue: "",
    user: {},
    allUsers: []
})

export { useGlobalState, setGlobalState };