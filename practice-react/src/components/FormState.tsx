import { FormEvent, useState } from "react";

function FormState() {
  // first we create useState hook with our object
  const [person, setPerson] = useState({ name: "", age: 0 });

  // our inputs will have onChange event that is triggered every time that user types
  // a keystroke
  const handelSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handelSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          id="name"
          type="text"
          value={person.name}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          id="age"
          type="number"
          className="form-control"
          value={person.age}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default FormState;
