// RTK
import { configureStore } from "@reduxjs/toolkit";
// Redux-Persist
import { persistStore, persistReducer } from "redux-persist";
// rootReducer
import { rootPersistConfig, rootReducer } from "./rootReducer";
//-----------------------------------------------------------

const store = configureStore({
    reducer: persistReducer(rootPersistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }),
});

const persistor = persistStore(store);


export { store, persistor };