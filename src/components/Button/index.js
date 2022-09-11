import { Link } from "react-router-dom"

const Button = ({
    children,
    className, 
    onClick, 
    href, 
    to, 
    disabled, 
    ...passProps
}) => {

    var Com = 'button'
    const props = {onClick, className, disabled, ...passProps}

    // clear listener if disabled
    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function')
                delete props[key]
        })
    }

    if (to) {
        props.to = to;
        Com = Link
    } else if (href) {
        props.href = href
        Com = 'a'
    }

    if (disabled) {
        console.log("disabled button")
    }

    return (
        <Com
            {...props}
        >
            {children}
        </Com>
    )
}

export default Button