import React, {useState, FC} from 'react';

const EventExamples: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
    }
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG')
    }
    const overHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)

    }
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)

    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        console.log('drop')
        setIsDrag(false)
    }
    return (
        <div>
            <input type="text" value={value} onChange={changeHandler}/>
            <button onClick={clickHandler}>send</button>
            <div draggable onDrag={dragHandler} style={{width: 200, height: 200, backgroundColor: 'red'}}> </div>
            <div onDrop={dropHandler} onDragLeave={leaveHandler}
                 onDragOver={overHandler} style={{width: 200, height: 200, backgroundColor: isDrag? 'blue': 'red', marginTop: 30}}> </div>
        </div>
    );
};
export default EventExamples;