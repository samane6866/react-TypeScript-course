import { useRef } from "react";


// in this point we are using useRef hook for accessing input field ,first we will 1-import our useRef
// 2-we introduce our useRef that already  stored in useName varieble to the desired input in ths case is : input -name.
// 3 for accesing to value of our input we 

function Form() {
  let useName = useRef<HTMLInputElement>(null);
  let useAge = useRef<HTMLInputElement>(null);
  const person={name:"", age:0}
  // this is also other way for submit function to create other function like handel submit and the pass this function to onSubmit function like this :onSubmit(handelSubmit)
  // const handelSubmit = (event: FormEvent) => {
  //     event.preventDefault();
  //     console.log("submitted")
  // }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // we had an error on useName.current, that saying useName.current is probably null, for this reason we are checking before with if conditional, if useName.current isnt null..
         if(useName.current!==null)
           person.name=useName.current.value;
        if (useAge.current !== null)
          person.age = parseInt(useAge.current.value);
        console.log(person);
      }}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={useName} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={useAge} id="age" type="number" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form;
