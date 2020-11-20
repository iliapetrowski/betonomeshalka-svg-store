import React, {useState} from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types'




const MixerBlock = ({sizes, types, price, name, imageUrl}) => {
    const mods = ['ручная', 'электрическая']
    const availableSizes = [26,30,40]
    const [activeType, setActiveType] = useState(0);
    const onSelectType = (index) => {
        setActiveType(index)
    }
    const [activeSize, setActiveSize] = useState(1);
    const onSelectSize = (index) => {
        setActiveSize(index)
    }

    return (
        <div className="mixer-block">
            <img
                className="mixer-block__image"
                src={imageUrl}
                alt="Mixer"
            />
            <h4 className="mixer-block__title">{name}</h4>
            <div className="mixer-block__selector">
                <ul>
                    {mods.map((mode, index) =>
                        <li
                            key={mode}
                            onClick={()=> onSelectType(index)}
                            className={classNames({
                                active: activeType === index,
                                disabled: !types.includes(index)
                            })}>
                            {mode}
                        </li>
                    )}

                </ul>
                <ul>
                    {availableSizes.map((size, index) => <li
                        onClick={()=> onSelectSize(index)}
                        key={size}
                        className={classNames({

                            active: activeSize === index,
                            disabled: availableSizes.includes(index)
                        })}

                    >
                        {size}
                    </li>)}

                </ul>
            </div>
            <div className="mixer-block__bottom">
                <div className="mixer-block__price">от {price} $</div>
                <div className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                </div>
            </div>
        </div>
    );
};
MixerBlock.propTypes = {
    name: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    types: PropTypes.arrayOf([PropTypes.number]).isRequired,
    sizes: PropTypes.arrayOf([PropTypes.number]).isRequired,

}

MixerBlock.defaultProps = {
    types: [],
    sizes: [],
}

export default MixerBlock;
