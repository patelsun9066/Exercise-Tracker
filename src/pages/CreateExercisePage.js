import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const CreateExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('kgs');
    const [date, setDate] = useState('');

    
    const history = useHistory();

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'post',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the exercise!");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    };


    return (
        <>
        <article>
            <h2>Add A New Exercise to the Journal !</h2>
            <p>Please fill out the following form to register a new exercise data point to the Journal </p>
            <br></br>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Every field must be filled out below for successfull submission</legend>
                    <br></br>
                    <label for="name">Exercise name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name"
                        minLength="1"
                        required="required" />
                    
                    <label for="reps">Reps Performed</label>
                    <input
                        type="number"
                        value={reps}
                        onChange={e => setReps(e.target.value)} 
                        id="reps"
                        min="1"
                        required="required" />

                    <label for="weight">Weight Lifted</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight"
                        min="1"
                        required="required" />

                    <label for="unit">Units</label>
                    <select name="unit" id="unit" value={unit} onChange={e => setUnit(e.target.value)} required="required">
                        <option value="kgs">Kgs</option>
                        <option value="lbs">Lbs</option>
                        <option value="miles">Miles</option>
                        <option value="seconds">Seconds</option>
                    </select>

                    <label for="date">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date"
                        required="required" />

                    <br></br>
                    <br></br>
                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addExercise}
                        id="submit"
                    >Add to Journal</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default CreateExercisePage;