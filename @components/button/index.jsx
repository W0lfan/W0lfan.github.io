import PropTypes from "prop-types";

import "../../@styling/components/button.scss";


export default function NaflowsButton({
    onUserClick = () => {},
    type='tertiary',
    style={},
    content=[]
}) {
    return (
        <button style={style} onClick={onUserClick} className={type}>
            {content}
        </button>
    )
}

NaflowsButton.propTypes = { 
    onUserClick: PropTypes.func,
    type: PropTypes.string,
    style: PropTypes.object,
    content: PropTypes.array
};