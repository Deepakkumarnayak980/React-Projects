const AddTask = ({ taskList, setTaskList, task, setTask }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name.trim()) return;

    const date = new Date();

    if (task.id) {
      setTaskList(prev =>
        prev.map(t =>
          t.id === task.id
            ? {
                ...t,
                name: task.name,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
              }
            : t
        )
      );
    } else {
      setTaskList(prev => [
        ...prev,
        {
          id: date.getTime(),
          name: task.name,
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }
      ]);
    }

    setTask({ id: null, name: "" });
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add task"
          maxLength="25"
          value={task.name}   
          onChange={e =>
            setTask(prev => ({ ...prev, name: e.target.value }))
          }
        />
        <button type="submit">
          {task.id ? "Update" : "Add"}
        </button>
      </form>
    </section>
  );
};

export default AddTask;
