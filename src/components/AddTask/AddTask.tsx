import React, { useState } from 'react';

interface AddTaskProps {
    onAddTask: (task: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
    const [taskName, setTaskName] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddTask(taskName);
        setTaskName(''); // Clear the input field
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder='Enter a task'
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTask;