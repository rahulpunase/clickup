import React from "react";


type ButtonGroupProps = {
    size: 'sm' | 'md' | 'lg';
} & React.HTMLAttributes<HTMLDivElement>;


const ButtonGroup = ({ size = 'md', children, ...props }: ButtonGroupProps) => {
    if (!children) {
        throw new Error('ButtonGroup requires at least 2 buttons');
    }
    if (Array.isArray(children)) {
        const length = children.length;
        if (length < 2) {
            throw new Error('ButtonGroup requires at least 2 buttons');
        }
        const firstButton = children[0];
        const allMiddleButtons = children.slice(1, length - 1);
        const lastButton = children[length - 1];
        return (
            <div className={'flex flex-row'} {...props} role="group">
                {React.cloneElement(firstButton, { size, className: `rounded-e-none` })}
                {allMiddleButtons.map((button, index) => React.cloneElement(button, { size, key: index, className: `rounded-none border-s-none! border-e-none!` }))}
                {React.cloneElement(lastButton, { size, className: `rounded-s-none ${lastButton.props.className}` })}
            </div>
        )
    }
    return null

}

export { ButtonGroup };