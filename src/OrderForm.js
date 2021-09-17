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

    const orderConfirmation = () => {

    }

    return (
        <form id="pizza-form" className="form" onSubmit={onSubmit}>

            <h2>Customize Your Pizza</h2>

            <div className="banners">
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
                <div>{errors.name}</div>
            </div>

            <div className="banners">
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

            <div className="banners">
                <h3>Sauce</h3>
            </div>

            <div className="sauce-choices">
                <label>Original
                    <input
                        type="radio"
                        name="sauce"
                        value="original"
                        checked={values.sauce === 'original'}
                        onChange={onChange}
                    />
                </label>
                <label>Alfredo
                    <input
                        type="radio"
                        name="sauce"
                        value="alfredo"
                        checked={values.sauce === 'alfredo'}
                        onChange={onChange}
                    />
                </label>
                <label>Garlic
                    <input
                        type="radio"
                        name="sauce"
                        value="garlic"
                        checked={values.sauce === 'garlic'}
                        onChange={onChange}
                    />
                </label>
                <label>BBQ
                    <input
                        type="radio"
                        name="sauce"
                        value="bbq"
                        checked={values.sauce === 'bbq'}
                        onChange={onChange}
                    />
                </label>
            </div>

            <div className="banners">
                <h3>Toppings</h3>
            </div>

            <div className="topping-choices">
                <h4>Choose up to 4 options (cheese is already included)</h4>
                <label>Extra cheese
                    <input
                        type="checkbox"
                        name="cheese"
                        checked={values.cheese}
                        onChange={onChange}
                        data-cy="toppings"
                    />
                </label>
                <label>Pepperoni
                    <input
                        type="checkbox"
                        name="pepperoni"
                        checked={values.pepperoni}
                        onChange={onChange}
                        data-cy="toppings"
                    />
                </label>
                <label>Bacon
                    <input
                        type="checkbox"
                        name="bacon"
                        checked={values.bacon}
                        onChange={onChange}
                        data-cy="toppings"
                    />
                </label>
                <label>Canadian Bacon
                    <input
                        type="checkbox"
                        name="canadianBacon"
                        checked={values.canadianBacon}
                        onChange={onChange}
                        data-cy="toppings"
                    />
                </label>
                <label>Sausage
                    <input
                        type="checkbox"
                        name="sausage"
                        checked={values.sausage}
                        onChange={onChange}
                        data-cy="toppings"
                    />
                </label>
                <label>Chicken
                    <input
                        type="checkbox"
                        name="chicken"
                        checked={values.chicken}
                        onChange={onChange}
                        data-cy="toppings"
                    />
                </label>
                <label>Onions
                    <input
                        type="checkbox"
                        name="onions"
                        checked={values.onions}
                        onChange={onChange}
                        data-cy="toppings"
                    />
                </label>
                <label>Spinach
                    <input
                        type="checkbox"
                        name="spinach"
                        checked={values.spinach}
                        onChange={onChange}
                        data-cy="toppings"
                    />
                </label>
                <label>Artichoke Hearts
                    <input
                        type="checkbox"
                        name="artichokeHearts"
                        checked={values.artichokehearts}
                        onChange={onChange}
                        data-cy="toppings"
                    />
                </label>
            </div>

            <div className="banners">
                <h3>Special Instructions</h3>
            </div>

            <div className="special">
                <label>Enter any special instructions here&nbsp;&nbsp;
                    <input
                        id="special-text"
                        type="text"
                        name="special"
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