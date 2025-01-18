import PropTypes from 'prop-types';
import { useState } from 'react';
import { v4 } from 'uuid';


function UISelector({ selectorID }) {
    return (
        <div className="selector-display" id={selectorID}></div>
    )
}

function OnClick(onChange, value, option, selectorID, parameters) {
    const el = document.getElementById(selectorID+option.content.toLowerCase());
    const selector = document.getElementById(selectorID);
    if (el && selector) {
        selector.style.width = `${el.offsetWidth-20}px`;
        selector.style.height = `${el.offsetHeight}px`;
        selector.style.transform = `translateY(${el.offsetTop}px) translateX(${el.offsetLeft}px)`;
        if (parameters.slideType == "horizontal") {
            selector.style.transform = `translateY(${el.offsetTop}) translateX(${el.offsetLeft})`;
        } else if (parameters.slideType == "vertical") {
            if (parameters.slideStyle == "line") {
                const range = document.createRange();
                range.selectNodeContents(el);
                const rect = range.getBoundingClientRect();
                selector.style.width = `${rect.width}px`;
            } else {
                selector.style.transform = `translateY(${el.offsetTop}px)`;
            }
        }
    }

    onChange(option.content);

}


function UIOptions({
    option, current, id, parameters
}) {
    return (
        <div className={
            `selection ${current === option.content ? 'active' : ''}`
        } id={id} style={{
            justifyContent: parameters.justifyContent,
            width : parameters.autoWidth ? "fit-content" : ""
        }}>
            {option.content}
        </div>
    )
}



export default function NaflowsPicker({
    parameters,
    options,
    onChange,
    value
}) {

    let _parameters = parameters;
    if (!_parameters.slideStyle) _parameters.slideStyle = "center";
    if (!parameters) {
        parameters = {
            slideType: 'horizontal',
            justifyContent: 'start',
            slideStyle: 'center',
            property : 'normal',
            autoWidth : false
        };
    }

    const [selectorID, setSelectorID] = useState(v4());
    


    if (options.length > 0 && Array.isArray(options)) {
        if (_parameters.property == "normal") {
            return (
                <div className={`picker ${_parameters.slideType} ${_parameters.slideStyle}`}>
                    <div className="selector">
                        {options.map((option) => {
                            return (
                                <div key={option.id} onClick={() => {
                                    OnClick(onChange, value, option, _parameters.selectorID || selectorID, _parameters,options);
                                }}>
                                    <UIOptions parameters={_parameters} option={option} id={(_parameters.selectorID||selectorID)+option.content.toLowerCase()} current={value} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        } else if (_parameters.property == "menu") {
            const ID = v4();
            return (
                <div className={
                    `menu-picker ${_parameters.slideType} ${_parameters.slideStyle}`
                } id={ID}>
                    {options.map((option,index) => {
                        const key = Object.keys(option)[0];
                        const g = option[key];
                        return (
                            <div className="pick" key={key+index}>
                                <div className="title">
                                    {key}
                                </div>
                                <NaflowsPicker
                                    options={g}
                                    parameters={{
                                        slideType: _parameters.slideType,
                                        justifyContent: _parameters.justifyContent,
                                        slideStyle: _parameters.slideStyle,
                                        property : 'normal',
                                        selectorID : selectorID,
                                        autoWidth : _parameters.autoWidth
                                    }}
                                    onChange={onChange}
                                    value={value}

                                />
                            </div>
                        )
                    })}

                </div>
            )
        }
    } 
}

NaflowsPicker.propTypes = {
    parameters: PropTypes.object,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

UISelector.propTypes = {
    selectorID : PropTypes.string.isRequired,
    data : PropTypes.string
};

UIOptions.propTypes = {
    option: PropTypes.object.isRequired,
    current : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired,
    parameters : PropTypes.object
};