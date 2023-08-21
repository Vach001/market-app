import styles from "./About.module.css"

export default function About() {
    return (
      <div className={styles.aboutLayout}>
        <div>
          <h1>Մեր մասին</h1>
          <p>
            Մեր խանութը բացվել է 2021 թվականի ապրիլի 1-ին:
            <br />
            Մեր նպատակն է մեր հաճախորդներին ներկայացնել միայն որակյալ ապրանքներ 
            <br />
            <em>Այս օնլայն խանութը Ձեզ հնարավորություն կտա խնայել ձեր ժամանակն ու միջոցներն:</em>
          </p>
        </div>
        <img
          src="https://www.forumdaily.com/wp-content/uploads/2020/12/shutterstock_373602469.jpg"
          height="275"
          width="183"
          className={styles.rounded}
          alt="Նկարը անհասնելի է..."
        />
      </div>
    );
  }