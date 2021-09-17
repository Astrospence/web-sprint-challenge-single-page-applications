import React from 'react';

export default function OrderForm(props) {
    const { values, submit, disabled, change, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <form id="pizza-form" onSubmit={onSubmit}>

            <h2>Customize Your Pizza</h2>

            <div>
                <h3>Who have we the honor of serving?</h3>
            </div>

            <div className="name">
                <label>Please enter your name&nbsp;&nbsp;
                    <input
                        id="name-input"
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                    />
                </label>
            </div>

            <div>
                <h3>Pizza Size</h3>
            </div>

            <div className="size-choices">
                <select 
                    id="size-dropdown"
                    name="size"
                    value={values.size}
                    onChange={onChange}
                >
                    <option value="">-select-</option>
                    <option value="large">Large</option>
                    <option value="huge">Huge</option>
                    <option value="gargantuan">Gargantuan</option>
                </select>
            </div>

            <div>
                <h3>Sauce</h3>
            </div>

            <div className="sauce-choices">
                <label>Original
                    <input
                        type="radio"
                        name="sauce"
                        value="original"
                        checked={values.sauce}
                        onChange={onChange}
                    />
                </label>
                <label>Alfredo
                    <input
                        type="radio"
                        name="sauce"
                        value="alfredo"
                        checked={values.sauce}
                        onChange={onChange}
                    />
                </label>
                <label>Garlic
                    <input
                        type="radio"
                        name="sauce"
                        value="garlic"
                        checked={values.sauce}
                        onChange={onChange}
                    />
                </label>
                <label>BBQ
                    <input
                        type="radio"
                        name="sauce"
                        value="bbq"
                        checked={values.sauce}
                        onChange={onChange}
                    />
                </label>
            </div>

            <div>
                <h3>Toppings</h3>
            </div>

            <div>
                <h4>Choose up to 4 options (cheese is already included)</h4>
                <label>Pepperoni
                    <input
                        type="checkbox"
                        name="pepperoni"
                        checked={values.pepperoni}
                        onChange={onChange}
                    />
                </label>
                <label>Bacon
                    <input
                        type="checkbox"
                        name="bacon"
                        checked={values.bacon}
                        onChange={onChange}
                    />
                </label>
                <label>Canadian Bacon
                    <input
                        type="checkbox"
                        name="canadianBacon"
                        checked={values.canadianBacon}
                        onChange={onChange}
                    />
                </label>
                <label>Sausage
                    <input
                        type="checkbox"
                        name="sausage"
                        checked={values.sausage}
                        onChange={onChange}
                    />
                </label>
                <label>Chicken
                    <input
                        type="checkbox"
                        name="chicken"
                        checked={values.chicken}
                        onChange={onChange}
                    />
                </label>
                <label>Onions
                    <input
                        type="checkbox"
                        name="onions"
                        checked={values.onions}
                        onChange={onChange}
                    />
                </label>
                <label>Spinach
                    <input
                        type="checkbox"
                        name="spinach"
                        checked={values.spinach}
                        onChange={onChange}
                    />
                </label>
                <label>Artichoke Hearts
                    <input
                        type="checkbox"
                        name="artichokeHearts"
                        checked={values.artichokehearts}
                        onChange={onChange}
                    />
                </label>
            </div>

            <div>
                <h3>Special Instructions</h3>
            </div>

            <div>
                <label>Enter any special instructions here&nbsp;&nbsp;
                    <input
                        type="text"
                        name="instructions"
                        value={values.instructions}
                        onChange={onChange}
                    />
                </label>
            </div>

            <div>
                <button id="order-button" disabled={disabled} >Add to Order</button>
            </div>

        </form>
    )
}