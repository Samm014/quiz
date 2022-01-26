import styles from '../styles/Display.module.css';

interface displayProps{
    value: any
    text: string
    BackColor?: string
    fontColor?: string
}

export default function Display(props: displayProps){
    return(
        <div className={styles.display}>
            <div className={styles.value} style={{
                backgroundColor: props.BackColor ?? "#FDD60F",
                color: props.fontColor ?? "#333",
            }}>
                {props.value}
            </div>
            <div className={styles.text}>
                {props.text}
            </div>
        </div>
    )
}