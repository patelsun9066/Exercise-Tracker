import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

export const EditExercisePage = ({ exercise }) => {
 
    const [name, setName] = useState(exercise.name);
    const [reps, setReps] = useState(exercise.reps);
    const [weight, setWeight] = useState(exercise.weight);
    const [unit, setUnit] = useState(exercise.unit);
    const [date, setDate] = useState(exercise.date.toLocaleString("en-US").slice(0,10));
    
    const history = useHistory();

    const editExercise = async () => {
        const response = await fetch(`/exercises/${exercise._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name, 
                reps: reps, 
                weight: weight,
                unit: unit,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert("Successfully edited exercise!");
        } else {
            const errMessage = await response.json();
            alert(`Failed to update exercise. Status ${response.status}. ${errMessage.Error}`);
        }
        history.push("/");
    }

    return (
        <>
        <article>
            <h2>Edit This Prior Exercise From The Journal !</h2>
            <p>Make necessary corrections or edits to prior workout entry</p>
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
                        onClick={editExercise}
                        id="submit"
                    >Save updates to Journal</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditExercisePage;