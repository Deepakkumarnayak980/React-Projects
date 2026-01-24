const ShowTask = ({ taskList = [], setTaskList, setTask }) => {

  const handleEdit = (id) => {
    const selectedTask = taskList.find(t => t.id === id);
    if (selectedTask) setTask(selectedTask);
  };

  const handleDelete = (id) => {
    setTaskList(prev => prev.filter(t => t.id !== id));
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>

        <button
          className="clearAll"
          onClick={() => setTaskList([])}
        >
          Clear All
        </button>
      </div>

      <ul>
        {taskList.map(task => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>

            <i
              className="bi bi-pencil-square"
              onClick={() => handleEdit(task.id)}
            ></i>

            <i
              className="bi bi-trash"
              onClick={() => handleDelete(task.id)}
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
