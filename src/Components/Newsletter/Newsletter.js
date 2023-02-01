import "./Newsletter.css";
export const Newsletter = () => {
  const submitForm = (e) => {
    e.preventDefault();
   // const data = new FormData(e.target);
    //const email = data.get("email");
    const {email} = e.target.elements
    console.log(e.target.elements.value);
    console.log(email.value);

  };

  return (
    
    <form className="Newsletter" onSubmit={submitForm}>
      <label htmlFor="Newsletter">Newsletter</label>
      <input
        type="text"
        id="Newsletter"
        placeholder="ivan@abv.bg"
        name="email"
      />
      <button>Subscribe</button>
    </form>
  
  );
};
