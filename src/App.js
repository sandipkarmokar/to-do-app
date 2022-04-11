import React from 'react';
import { useReducer, useState } from 'react';

import InputForm from './components/inputForm';
import List from './components/list';
import Modal from './components/modal';
import Info from './components/info';
import './App.css';

const App = () => {
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState('');
    const [showAlert, setShowAlert] = useState({
        msg: 'Please Enter Task',
        type: 'default',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task) {
            let id = new Date().getTime().toString();
            setTaskList([...taskList, { task: task, id: id }]);
            setShowAlert({ msg: 'Task Entered Successfully', type: 'success' });
            setTask('');
        } else {
            setShowAlert({ msg: 'Please Enter Task', type: 'request' });
        }
    };

    const handleRemove = (id) => {
        setTaskList(taskList.filter((item) => item.id !== id));
        setShowAlert({ msg: 'Task Removed', type: 'remove' });
    };
    const handleEdit = (id) => {
        const editTask = taskList.find((item) => item.id === id);
        setTask(editTask.task);
        handleRemove(editTask.id);
        console.log(editTask);
        setShowAlert({ msg: 'Enter Edited Task', type: 'edit' });
    };

    const clearTasks = () => {
        if (taskList.length == 0) {
            setShowAlert({ msg: 'Task List Empty', type: 'default' });
        } else {
            setTaskList([]);
            setShowAlert({ msg: 'All Tasks Removed', type: 'removeAll' });
        }
    };

    return (
        <div className="App">
            <div className="app-container">
                <p>Task It!</p>
                <Info clearTasks={clearTasks}></Info>
                <Modal showAlert={showAlert}></Modal>
                <InputForm
                    task={task}
                    setTask={setTask}
                    handleSubmit={handleSubmit}
                ></InputForm>

                <div className="list">
                    <div className="list-container">
                        {taskList.map((el) => {
                            return (
                                <List
                                    el={el}
                                    handleRemove={handleRemove}
                                    handleEdit={handleEdit}
                                ></List>
                            );
                        })}
                    </div>
                </div>
                <footer>
                    <p>
                        Build with ❤️ using React JS, by{' '}
                        <span className="underline">Sandip Karmokar</span>{' '}
                    </p>
                    <p>
                        <span className="underline">source code</span>
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default App;
