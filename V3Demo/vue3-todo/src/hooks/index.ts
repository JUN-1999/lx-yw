import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_TODO_STATUS, SET_DOING_STATUS, } from "@/store/actionTypes"
import { ITodo, TODO_STATUS } from "@/typings"
import { watch } from "vue";
import { useStore, Store } from "vuex"

export interface IUseTodo {
    setTodo: (value: string) => void;
    setTodoList: () => void;
    removeTodo: (id: number) => void;
    setStatus: (id: number) => void;
    setDoing: (id: number) => void;
}

interface IUseLoaclStorage {
    getLocalList: () => ITodo[];
    setLoaclList: (todoList: ITodo[]) => void;
}

function useTodo(): IUseTodo {

    const store: Store<any> = useStore()
    const { getLocalList, setLoaclList }: IUseLoaclStorage = useLocalStorage();
    const todoList: ITodo[] = getLocalList();

    watch(()=>{
        return store.state.list;
    },()=>{
        setLoaclList(store.state.list);
    })

    function setTodo(value: string): void {
        const todo: ITodo = {
            id: new Date().getTime(),
            content: value,
            status: TODO_STATUS.WILLDO
        }
        store.dispatch(SET_TODO, todo)
       
    }

    function setTodoList() {
        store.dispatch(SET_TODO_LIST, todoList);
    }

    function removeTodo(id: number): void {
        store.dispatch(REMOVE_TODO, id);
    }

    function setStatus(id: number): void {
        store.dispatch(SET_TODO_STATUS, id);
    }

    function setDoing(id: number): void {
        store.dispatch(SET_DOING_STATUS, id);
    }

    return {
        setTodo,
        setTodoList,
        removeTodo,
        setStatus,
        setDoing
    }
}

function useLocalStorage(): IUseLoaclStorage {
    function getLocalList(): ITodo[] {
        return JSON.parse(localStorage.getItem('todoList') || '[]')
    }
    function setLoaclList(todoList: ITodo[]): void {
        localStorage.setItem('todoList', JSON.stringify(todoList))
    }

    return {
        getLocalList,
        setLoaclList
    }
}

export {
    useTodo
}