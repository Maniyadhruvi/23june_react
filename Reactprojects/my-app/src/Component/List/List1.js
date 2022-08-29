import React from 'react'

function ListComp(props) {
    return <li>Color :{props.color}</li>
}

export default function List1() {
    const color = ["red", "green", "blue", "yellow"];

    return (
        <div>
            <h1>List The color</h1>
            <ul>
                {
                    color.map((c) =>
                        <ListComp color={c} />
                    )
                }
            </ul>
        </div>

    );
}
