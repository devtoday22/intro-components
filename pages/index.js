import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";



export default function Home() {
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
          <form className={styles.inputform} action="">
          <div className={styles.inputFields}>
            <input
              type="text"
              className={styles.inputField}
              placeholder="First Name"
              autofocus
            />
          </div>
          <div className={styles.lastName}>
            <input type="text" className={styles.inputField} placeholder="Last Name" />
          </div>
          <div className={styles.email}>
            <input type="email" className={styles.inputField} placeholder="Email Address" />
          </div>
          <div className={styles.password}>
            <input type="password" className={styles.inputField} placeholder="Password" />
          </div>
          <button className={styles.button}>Claim your free trial</button>
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