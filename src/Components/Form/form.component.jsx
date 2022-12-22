import { useState, useContext } from "react";
import FormInput from "../Form-Input/form-input.component";
import browserImg from "../../Assets/Images/form-web.jpg";
import mobileImg from "../../Assets/Images/form-mobile.jpg";
import googleLogo from "../../Assets/Images/google_logo.png";
import Button from "../Buttons/buttons.component";
import "./form.styles.scss";
import { useMediaQuery } from "@mui/material";
import { signInWithGooglePopup } from "../../Utilities/Firebase/firebase.config";
import { createUserDocFromAuth } from "../../Utilities/Firebase/firebase.config";
import { createAuthUserWithEmailAndPassword } from "../../Utilities/Firebase/firebase.config";
import { ModalContext, setModalShow } from "../../Contexts/context";

const defaultFormState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  modalShwon: false,
};

const Form = () => {
  const [FormState, setFormState] = useState(defaultFormState);
  const { displayName, email, password, confirmPassword } = FormState;
  const { setModalShow } = useContext(ModalContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...FormState, [name]: value });
  };

  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocFromAuth(user);
      setModalShow(true);
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case "auth/popup-blocked":
          alert("Unable to establish a connection with the popup.");
          break;
        case "auth/popup-closed-by-user":
          alert(
            "The popup has been closed by the user before finalizing the operation."
          );
          break;
        default:
          alert(err.code);
      }
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (FormState.password !== FormState.confirmPassword) {
      resetFormFields();
      alert("Passwords not matching!");
      return null;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocFromAuth(user);
      setModalShow(true);
      resetFormFields();
    } catch (err) {
      resetFormFields();
      switch (err.code) {
        case "auth/email-already-in-use":
          alert("This email is already in use. Please try another one.");
          break;
        case "auth/invalid-email":
          alert("Wrong email format. Please try again with a valid email.");
          break;
        case "auth/weak-password":
          alert("The password must be 6 characters long or more.");
          break;
        default:
          alert(err.code);
      }
    }
  };

  const resetFormFields = () => {
    setFormState(defaultFormState);
  };

  return (
    <div className="form-container">
      <img
        src={useMediaQuery("(min-width:1024px)") ? browserImg : mobileImg}
        className="form-image"
        alt="browser-form-img"
      />
      <form onSubmit={handleFormSubmit}>
        <p>Create an account and get early access to our shop</p>

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password*"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <span className="password-info">
          *Password should be at least 6 characters.
        </span>
        <div className="buttons-container">
          <Button type="submit" buttonType="inverted">
            CREATE
          </Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            CREATE WITH GOOGLE{" "}
            <img src={googleLogo} className="google-image" alt="google-logo" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
