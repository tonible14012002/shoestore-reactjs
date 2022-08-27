import { Link } from "react-router-dom"

const Button = ({
    children,
    leftIcon, 
    rightIcon,
    className, 
    onClick, 
    href, 
    to, 
    disabled, 
    ...passProps
}) => {

    var Com = 'button'
    const props = {onClick, ...passProps}

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


    return (
        <Com className={className} 
            {...props}
        >
            {children}
        </Com>
    )
}

export default Button