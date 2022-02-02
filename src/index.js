import SomeClass from "./someClass";
import {store} from "./reducers/store";
import {setIntValueActionCreator} from "./reducers/testReducer";


let someClass = new SomeClass();
someClass.someMethod();
someClass.someMethod();
someClass.someMethod();


console.log(store.getState().testPage);
console.log('------------------------------')
console.log(store.getState().fooPage);

store.dispatch(setIntValueActionCreator(145676));
console.log('------------------------------')
console.log(store.getState());