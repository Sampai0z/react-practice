import React,{useState} from 'react'
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button"
import ErrorModal from "../UI/ErrorModal"


export default function AddUser (props){
  const [enteredUsername, setEnteredUsername] = useState("")
  const [enteredAge, setEnteredAge] = useState("")
  const [error, setError] = useState()

  const addUserHandler = (event)=>{
    event.preventDefault()

    if(enteredUsername.trim().length === 0 || enteredAge.trim() === 0){
      setError({
        title:"Invalid input",
        message:"please enter a valid name and age (non-empty values)"
      });
      return;
    }
    if(+enteredAge < 1){
      setError({
        title:"Invalid age",
        message:"please enter a valid age (> 0)"
      });
      return;
    }

    setEnteredUsername("")
    setEnteredAge("")
    props.onEventProp(enteredUsername, enteredAge)
  }

  const errorHandler = () => {
    setError(null)
  }

  const usernameChangeHandler = (e) =>{
    setEnteredUsername(e.target.value)
  }
  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id='username' value={enteredUsername} onChange={usernameChangeHandler}/>

          <label htmlFor="age">Age (years)</label>
          <input type="number" id='age' value={enteredAge} onChange={(e)=>{setEnteredAge(e.target.value)}}/>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  )
}