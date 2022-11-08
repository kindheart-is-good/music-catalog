import {combineReducers, legacy_createStore} from "redux";
import tracksReducer from "./tracks-reducer";

let reducers = combineReducers({
    tracksPage: tracksReducer,
});

//let store = createStore(reducers);
let store = legacy_createStore(reducers);

/*  Для дебага из консоли браузера. Сохраняем ссылку на наш объект store в глобальный объект.   */
/*  Создаём в объекте window свойство store. Записываем туда store созданный при помощи Redux фунции legacy_createStore(reducers)   */
/*  У Redux store есть метод getState(), его и нужно вбить в консоли браузера.  */
/*  Пример: store.getState().contentPage.tracks    */
window.store = store;

export default store;