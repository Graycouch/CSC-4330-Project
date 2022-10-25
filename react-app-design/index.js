import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    isLoggedIn: false,
    localhost: "192.168.0.69",
    user: null
})

export { useGlobalState, setGlobalState };