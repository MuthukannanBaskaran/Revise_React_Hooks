import React, { useId } from 'react'

export default function UseIdHook() {
    const elementId = useId();
    return (
        <>
            <input type="text" name="nameInput" id={`${elementId}-name`} />
            <input type="email" name="emailInput" id={`${elementId}-email`} />
        </>
    )
}