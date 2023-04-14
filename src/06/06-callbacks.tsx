import React, {ChangeEvent, MouseEvent} from "react";

export const User = () => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>): void => {
        alert(e.currentTarget.name)
    }

    const onNameChanged = () => {
        console.log('имя изменилось')
    }

    const noAgeChanged = (e: ChangeEvent<HTMLInputElement>): void => {
        console.log(`{'возраст изменился '${e.currentTarget.value}`)
    }

    const onFocus = () => {
        console.log('в фокусе')
    }

    const onBlur = () => {
        console.log('фокус потерян')
    }

    return (
        <div>
            <div><textarea onBlur={onBlur} onFocus={onFocus} onChange={onNameChanged}>Sergey</textarea></div>
            <div><input onChange={noAgeChanged}/></div>
            <button name={'1'} onClick={deleteUser}>delete</button>
            <button name={'2'} onClick={deleteUser}>delete</button>
        </div>
    )
}