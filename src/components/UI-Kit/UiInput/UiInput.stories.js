import { useState } from "react";
import UiInput from "./UiInput";


export default {
    title: 'UI-Kit/UiInput',
    component: UiInput
}

const Template = (arg) => {
    const [value, setValue] = useState('')

    const handleInputChange = value => {
        setValue(value)
    }

    return(
        <UiInput
            {...arg}
            value = {value}
            handleInputChange = {handleInputChange}
        />
    )

}

const props = {
    value: "Lable",
    handleInputChange: () => console.log('Change'),
    placeholder: "placeholder",
    classes: ''
}

export const Default = Template.bind({})

Default.arg = {
    ...props
}