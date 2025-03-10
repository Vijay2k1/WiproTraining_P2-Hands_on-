export const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TASK":
        return { tasks: [...state.tasks, action.payload] };
      case "EDIT_TASK":
        return {
          tasks: state.tasks.map((task) =>
            task.id === action.payload.id ? action.payload.updatedTask : task
          ),
        };
      case "DELETE_TASK":
        return { tasks: state.tasks.filter((task) => task.id !== action.payload) };
      default:
        return state;
    }
  };
  