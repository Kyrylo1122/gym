import "./SubscribeForm.css";
export default function SubscribeForm() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.email.value);
    e.target.reset();
  };
  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        className="form__input"
        type="mail"
        name="email"
        placeholder="Enter your email here"
      />
      <button type="submit" className="btn-first form__btn btn">
        Join now
      </button>
    </form>
  );
}
