import { FormEvent } from "react";





function FormState() {
    
    const handelSubmit = (event: FormEvent) => {
        
        event.preventDefault();
    }




    return (
      <form
        onSubmit={handelSubmit}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input  id="name" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input id="age" type="number" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
  
  export default FormState;