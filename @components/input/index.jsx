import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import "../../@styling/components/input.scss";

export default function NaflowsInput ({
    onUserInput = () => {},
    defaultValue = "",
    placeholder = "",
    fillCondition = (e) => {
        return e.length > 0;
    },
    warning = (e) => {
        return false;
    }
}) {
    const [IN, setIn] = useState(false);
    const [filled, setFilled] = useState(false);
    const selectRef = useRef(null);
    const [warningMessage, setWarningMessage] = useState("");

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
            if (filled) {
                setIn(true);
            } else {
                setIn(false);
            }
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return (
        <>
            <div className={`input ${IN ? "in" : ""}`}>
                <input
                    onInput={(event) => {
                        onUserInput(event);
                        if (event.target.value.length > 0) {
                            setFilled(true);
                        } else {
                            setFilled(false);
                        }

                        if (!fillCondition(event.target.value)) {
                            setWarningMessage(warning(event.target.value));
                        } else setWarningMessage("");

                    }}
                    onBlur={() => {
                        if (filled) {
                            setIn(true);
                        } else {
                            setIn(false);
                        }
                    }}
                    type="text"
                ></input>
                <label className={warningMessage!=''?'warning-enabled':''}>{placeholder}</label>
                <div  className="warning">
                    {warningMessage}
                </div>
            </div>
        </>
    )
}


NaflowsInput.propTypes = {
    onUserInput: PropTypes.func,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    fillCondition: PropTypes.func,
    warning: PropTypes.func
};




