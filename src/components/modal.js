const Modal = ({ showAlert }) => {
    return (
        <div className={`modal ${showAlert.type}`}>
            <p>{showAlert.msg}</p>
        </div>
    );
};

export default Modal;
