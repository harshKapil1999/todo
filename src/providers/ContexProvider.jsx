import { createContext, useContext, useReducer } from 'react';


const TasksContex = createContext(null);
const TasksDispatchContex = createContext(null);

export function TasksProvider({ children }) {
    const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasks
    );

    return (
        <TasksContex.Provider value={tasks}>
            <TasksDispatchContex.Provider value={dispatch}>
                {children}
            </TasksDispatchContex.Provider>
        </TasksContex.Provider>
    );
}

export function useTasks() {
    return useContext(TasksContex);
}

export function useTasksDispatch() {
    return useContext(TasksDispatchContex);
}

function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'added': {
            return [...tasks, {
                id: action.id,
                text: action.text,
                done: false
            }];
        }
        case 'changed': {
            return tasks.map((t) => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
        });
        }
        case 'deleted': {
            return tasks.filter(t => t.id !== action.id);
        }
        default: {
            throw Error('Unnown action: ' + action.type);
        }
    }
}

const initialTasks = [
    { id: 0, text: 'eat', done: false},
    { id: 1, text: 'sleep', done: false},
    { id: 2, text: 'code', done: false},
    { id: 3, text: 'repeat', done: false},
]