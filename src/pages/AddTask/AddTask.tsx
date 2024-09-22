import React, { useState } from 'react';
import styled from 'styled-components';

interface AddTaskProps {
    onAddTask: (task: string) => void;
}

const Form = styled.form`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    width: 50vw;
`;

const Input = styled.input`
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: #ed145b;
    color: white;
    border: none;
    border-radius: 4px;
    display: none;
`;

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
    const [taskName, setTaskName] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddTask(taskName);
        setTaskName(''); // Clear the input field
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder='Enter a task'
            />
            <Button type="submit">Add</Button>
        </Form>
    );
}

export default AddTask;