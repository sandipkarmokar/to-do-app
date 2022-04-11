const InputForm = ({ handleSubmit, task, setTask }) => {
    return (
        <div className="inputForm">
            <form onSubmit={handleSubmit} className="inputForm-container">
                <input
                    type="text"
                    placeholder="Enter Task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button>Add Task</button>
            </form>
        </div>
    );
};

export default InputForm;
