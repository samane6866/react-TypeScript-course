function Form() {
  // this is also other way for submit function to create seprate function like handel submit and the pass this function to onSubmit function like this :onSubmit(handelSubmit)
  // const handelSubmit = (event: FormEvent) => {
  //     event.preventDefault();
  //     console.log("submitted")
  // }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log("submitted");
      }}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" type="text" className="form-control" />
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

export default Form;
