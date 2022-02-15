import './Modal.css'
import PropTypes from 'prop-types';



const Modal = (props) => {
    return (
        <div className="modal">
            <div>{props.title}</div>
            <div>{props.content}</div>
            <div>{props.id}</div>
        </div>
    )
}

Modal.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
}

export default Modal;