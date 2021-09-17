import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('please enter your name')
        .min(2, 'name must be at least 2 characters'),
    size: yup.string(),
    sauce: yup.string(),
    cheese: yup.boolean(),
    pepperoni: yup.boolean(),
    bacon: yup.boolean(),
    canadianBacon: yup.boolean(),
    sausage: yup.boolean(),
    chicken: yup.boolean(),
    onions: yup.boolean(),
    spinach: yup.boolean(),
    artichokeHearts: yup.boolean(),
    special: yup.string()
})

export default formSchema;