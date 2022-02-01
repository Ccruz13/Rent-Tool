import react, {createContext, useContext} from "react";
import {useProductReducer} from "./reducers"

const storeContext = createContext();
const {Provider} = StoreContext;

const StoreProvider = ({value = [], ...props}) => {
    const [state, dispatch] = useProductReducer ({
        product: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: '',
    });
    return <Provider value = {[state, dispatch]}{...props}/>;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext};