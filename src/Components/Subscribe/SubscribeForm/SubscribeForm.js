import "./SubscribeForm.css";
import { toast } from "react-toastify";

export default function SubscribeForm() {
  const onSubmit = (e) => {
    e.preventDefault();
    toast(`We send message to ${e.target.elements.email.value}`);

    e.target.reset();
  };
  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        className="form__input"
        type="mail"
        name="email"
        placeholder="Enter your email here"
        required
      />
      <button type="submit" className="btn-first form__btn btn">
        Join now
      </button>
    </form>
  );
}
