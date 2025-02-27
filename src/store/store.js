import { configureStore } from "@reduxjs/toolkit";
import responseReducer from "../features/serverResponse";
import pageReducer from "../features/pageCounter";
import loginReducer from "../features/loginState";
import favoriteReducer from "../features/favoriteStore";
import favoritePageReducer from "../features/favoritePageCounter";
import singleStoreReducer from "../features/singleProductStore";
import favoriteProductsReducer from "../features/favoriteFullInformation";
import filterReducer from "../features/filterStore";
import inputReducer from "../features/inputStore";
import { baseApi } from "../features/baseApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { loggerMiddleware } from "./logger";

export const store = configureStore({
  reducer: {
    response: responseReducer,
    favoritePage: favoritePageReducer,
    page: pageReducer,
    log: loginReducer,
    favorite: favoriteReducer,
    favoriteProducts: favoriteProductsReducer,
    singleStore: singleStoreReducer,
    filterStore: filterReducer,
    inputStore: inputReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware, loggerMiddleware),
});

setupListeners(store.dispatch);
