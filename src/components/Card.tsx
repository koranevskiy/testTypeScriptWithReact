import React, {FC, ReactChild, ReactNode} from 'react';
export enum CardVariant{
    fill = 'fill it',
    border = 'just border'
}
interface CardProps{
    width?: string;
    height?: string;
    children?: ReactChild | ReactNode;
    variant: CardVariant;
    onClick: () => void;
}
const Card: FC<CardProps> = ({width, height,
                                 children,
                                 variant,
                                 onClick}) => {
    return (
        <div style={{width, height, background: variant===CardVariant.fill? 'red': 'none',
        border: variant===CardVariant.border? '3px solid black' : 'none'
        }}
        onClick={() => onClick()}
        >
            {children}
        </div>
    );
};

export default Card;