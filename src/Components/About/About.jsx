import styles from "./About.module.css"

export default function About() {
    return (
      <div className={styles.aboutLayout}>
        <div>
          <h1>About us</h1>
          <p>
            Our store opened on April 1, 2021.
            <br />
            Our goal is to present only quality products to our customers 
            <br />
            <em>This online store will give you the opportunity to save your time and money.</em>
          </p>
        </div>
        <img
          src="https://www.forumdaily.com/wp-content/uploads/2020/12/shutterstock_373602469.jpg"
          height="275"
          width="183"
          className={styles.rounded}
          alt="Unable to show, please update!"
        />
      </div>
    );
  }