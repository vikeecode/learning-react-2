import{createContext, useContext} from 'react'

export const TodoContext = createContext({
   todos: [{
        id:1,
        todo:"Todo msg",
        completed: false,
   }
   ],
   addTodo: (todo)=>{},//here is working only define what todos want for doing any working
   updatedTodo: (id,todo)=>{},
   deleteTodo: (id)=>{},
   toggleComplete:(id)=>{}
})

export const useTodo = ()=>{
    return useContext (TodoContext)
}

export const TodoProvider = TodoContext.Provider