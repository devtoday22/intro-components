import { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" }); // Clear error when typing
  };

  const validateForm = () => {
    const errors = {};
    if (!formValues.firstName.trim()) errors.firstName = "First name is required";
    if (!formValues.lastName.trim()) errors.lastName = "Last name is required";
    if (!formValues.email.trim()) errors.email = "Email is required";
    if (!formValues.password.trim()) errors.password = "Password is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      console.log("Form submitted successfully");
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <>
      <Head>
        <title>Intro component</title>
        <meta name="description" content="Intro component next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Body part */}
      <main className={styles.mainContainer}>
        <div className={styles.text}>
          <h1>Learn to code by watching others</h1>
          <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
        </div>
        {/* Form component */}
        <div className={styles.form}>
          <div className={styles.priceHeadline}>
            <span>Try it free 7 days</span> then $20/mo. thereafter
          </div>
          {/* Input fields */}
          <form className={styles.inputform} onSubmit={handleSubmit} noValidate>
            <div className={styles.inputFields}>
              <input
                type="text"
                name="firstName"
                className={styles.inputField}
                placeholder="First Name"
                value={formValues.firstName}
                onChange={handleInputChange}
                autoFocus
              />
              {formErrors.firstName && <p className={styles.errorText}>{formErrors.firstName}</p>}
            </div>
            <div className={styles.inputFields}>
              <input
                type="text"
                name="lastName"
                className={styles.inputField}
                placeholder="Last Name"
                value={formValues.lastName}
                onChange={handleInputChange}
              />
              {formErrors.lastName && <p className={styles.errorText}>{formErrors.lastName}</p>}
            </div>
            <div className={styles.inputFields}>
              <input
                type="email"
                name="email"
                className={styles.inputField}
                placeholder="Email Address"
                value={formValues.email}
                onChange={handleInputChange}
              />
              {formErrors.email && <p className={styles.errorText}>{formErrors.email}</p>}
            </div>
            <div className={styles.inputFields}>
              <input
                type="password"
                name="password"
                className={styles.inputField}
                placeholder="Password"
                value={formValues.password}
                onChange={handleInputChange}
              />
              {formErrors.password && <p className={styles.errorText}>{formErrors.password}</p>}
            </div>
            <button type="submit" className={styles.button}>Claim your free trial</button>
            {isSubmitted && <p className={styles.successText}>Form submitted successfully!</p>}
            <p className={styles.termsText}>
              By clicking the button, you are agreeing to our
              <Link className={styles.link} href="/">Terms and Services</Link>
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
