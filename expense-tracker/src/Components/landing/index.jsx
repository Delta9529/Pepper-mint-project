import React, { useState } from "react";
import TableRow from "../table-row";
import "./styles.css"



export default function Landing() {
    const [amount,setAmount] = useState(0);
    const [description,setDescription] = useState("");
    const [date,setDate] = useState("");
    const [type, setType] = useState('Income');
    const [entries, setEntries] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const parsedAmount = parseFloat(amount);
        console.log(date,type,description,amount)
        setEntries([...entries,{date,type,description,amount:parsedAmount}])

        setAmount(0);
        setDescription("");
        setDate("");
        setType("Income")

    }

    const totalAmount = entries.filter(entry => entry.type === 'Income').reduce((total,entry) => total+entry.amount,0);
    const totalExpense = entries.filter(entry => entry.type === 'Expense').reduce((total,entry) => total+entry.amount,0);
    const netAmount = (totalAmount-totalExpense).toFixed(2)

    const deleteEntry = (index) => {
        const newEntries = entries.filter((entry,i) => i !== index);
        setEntries(newEntries);
    }

    // const netAmount = entries.reduce((total,entry) => total.entry.amount,0);
    return (
        <>
            <h1>Expense-Tracker</h1>
            <div className="container">
                <div className="inputFields">
                    <form onSubmit={handleSubmit}>
                        <input type="Number" name="amount" id="amount" value={amount}placeholder="Enter Amount" onChange={(e) => setAmount(e.target.value)}/>
                        <input type="text" name="description" id="description" value={description}placeholder="Enter Description" onChange={(e) => setDescription(e.target.value)}/>
                        <input type="date" name="datetime" value={date} id="datetime" placeholder="Select Date" onChange={(e) => setDate(e.target.value)}/>
                        <select name="typeOf" id="type" value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="Income">Income</option>
                            <option value="Expense">Expense </option>
                        </select>
                        <input type="submit" />
                    </form>
                    <div className="displayData">
                        <table className="displayTable">
                            <thead>
                                <td>Amount</td>
                                <td>Description</td>
                                <td>Date</td>
                                <td>Type</td>
                                <td></td>
                            </thead>
                            <tbody className="displayTableBody">
                                {entries.map((entry,index) => (
                                    <TableRow amount = {entry.amount} description = {entry.description} date = {entry.date} type = {entry.type} onClick = {() => deleteEntry(index)}/>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="results">
                    <h3>Total Net Income : ${netAmount}</h3>
                </div>
            </div>
        </>
    )
}