import React from 'react';

export default function OrderForm(props) {
    return (
        <form id="pizza-form">
            <h2>Customize Your Pizza</h2>

            <div>
                <h3>Size</h3>
            </div>

            <div className="size-choices">
                <select id="size-dropdown">
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
                    />
                </label>
                <label>Alfredo
                    <input
                        type="radio"
                        name="sauce"
                        value="alfredo"
                    />
                </label>
                <label>Garlic
                    <input
                        type="radio"
                        name="sauce"
                        value="garlic"
                    />
                </label>
                <label>BBQ
                    <input
                        type="radio"
                        name="sauce"
                        value="bbq"
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
                    />
                </label>
                <label>Bacon
                    <input
                        type="checkbox"
                        name="bacon"
                    />
                </label>
                <label>Canadian Bacon
                    <input
                        type="checkbox"
                        name="canadianBacon"
                    />
                </label>
                <label>Sausage
                    <input
                        type="checkbox"
                        name="sausage"
                    />
                </label>
                <label>Chicken
                    <input
                        type="checkbox"
                        name="chicken"
                    />
                </label>
                <label>Onions
                    <input
                        type="checkbox"
                        name="onions"
                    />
                </label>
                <label>Spinach
                    <input
                        type="checkbox"
                        name="spinach"
                    />
                </label>
                <label>Artichoke Hearts
                    <input
                        type="checkbox"
                        name="artichokeHearts"
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
                    />
                </label>
            </div>
        </form>
    )
}