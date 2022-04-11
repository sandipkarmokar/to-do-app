// import { useState } from 'react';
// import { FaEdit, FaTrash, FaCheckCircle } from 'react-icons/fa';

// const List = ({ taskList, handleRemove, handleEdit }) => {
//     const [isCompleted, setIsCompleted] = useState(false);

//     const handleComplete = (e) => {
//         setIsCompleted(!isCompleted);
//     };

//     return (
//         <div className="list">
//             <div className="list-container">
//                 {taskList.map((el) => {
//                     return (
//                         <div className="task" key={el.id}>
//                             <p className="task-text">{el.task}</p>
//                             <div className="buttons">
//                                 <button
//                                     type="button"
//                                     className="remove"
//                                     onClick={() => handleRemove(el.id)}
//                                 >
//                                     <FaTrash
//                                         style={{ color: '#16A34A' }}
//                                     ></FaTrash>
//                                 </button>
//                                 <button
//                                     type="button"
//                                     className="edit"
//                                     onClick={() => handleEdit(el.id)}
//                                 >
//                                     <FaEdit
//                                         style={{ color: '#CA8A04' }}
//                                     ></FaEdit>
//                                 </button>
//                                 <button
//                                     type="button"
//                                     className="completed"
//                                     onClick={handleComplete}
//                                 >
//                                     <FaCheckCircle
//                                         style={{ color: '#DC2626' }}
//                                     ></FaCheckCircle>
//                                 </button>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default List;

import { useState } from 'react';
import { FaEdit, FaTrash, FaCheckCircle } from 'react-icons/fa';

const List = ({ handleRemove, handleEdit, el }) => {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleComplete = (e) => {
        setIsCompleted(!isCompleted);
    };

    return (
        <div className="task" key={el.id}>
            <p className={`task-text ${isCompleted ? 'finished' : ''}`}>
                {el.task}
            </p>
            <div className="buttons">
                <button
                    type="button"
                    className="remove"
                    onClick={() => handleRemove(el.id)}
                >
                    <FaTrash style={{ color: '#16A34A' }}></FaTrash>
                </button>
                <button
                    type="button"
                    className="edit"
                    onClick={() => handleEdit(el.id)}
                >
                    <FaEdit style={{ color: '#CA8A04' }}></FaEdit>
                </button>
                <button
                    type="button"
                    className="completed"
                    onClick={handleComplete}
                >
                    <FaCheckCircle style={{ color: '#DC2626' }}></FaCheckCircle>
                </button>
            </div>
        </div>
    );
};

export default List;
