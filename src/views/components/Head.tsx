import React from "react";
interface Props {
    title: string;
}

export const Head = ({ title }: Props) => {
    return (
        <>
            <head>
                <title>{title}</title>
            </head>
        </>
    );
};
