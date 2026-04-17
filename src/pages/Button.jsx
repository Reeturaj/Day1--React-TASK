import styles from "../assets/global.module.css";


function Button(){
  return(
    <button className={ `${styles.button} ${styles.p}`}>Click Me</button>
  )
}

export default Button