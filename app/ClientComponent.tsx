"use client"

import { useEffect } from "react";
import { create } from "./create";
import { useFormState } from "react-dom";

export function ClientComponent({submit}) {
  useEffect(() => {
    console.log('en client component')
  }, [])
  return (
    <div>
      <p>Client component</p>
      <Form submit={submit} />
    </div>
  );
}

const initialState = {
  name: ''
}

function Form({submit}) {
  const [state, formAction] = useFormState(create, initialState)
  
  return (
    <form action={submit}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
      <p>{state.name}</p>
    </form>
  )
}

