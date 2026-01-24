export const AddTask = ({ taskList, setTaskList, tasks, setTasks }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();

    // EDIT MODE
    if (tasks.id) {
      const updatedTaskList = taskList.map(todo =>
        todo.id === tasks.id
          ? {
              ...todo,
              name: tasks.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
          : todo
      );

      setTaskList(updatedTaskList);
      setTasks({}); // clear edit state
    }
    // ADD MODE
    else {
      const newTask = {
        id: date.getTime(),
        name: tasks.name,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      };

      setTaskList(prev => [...prev, newTask]);
      setTasks({});
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={tasks.name || ""}
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
          onChange={e =>
            setTasks(prev => ({ ...prev, name: e.target.value }))
          }
        />
        <button type="submit">
          {tasks.id ? "Update" : "Add"}
        </button>
      </form>
    </section>
  );
};

export default AddTask;
