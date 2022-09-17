import React from "react";
interface Props {
    title: string;
}

export const Head = ({ title }: Props) => {
    return (
        <>
            <head>
                <title>{title}</title>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
            </head>
        </>
    );
};
