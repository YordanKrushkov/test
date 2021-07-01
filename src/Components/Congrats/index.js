import styles from './index.module.css';

const Congrats = ({setStep,setData}) => {
    const clickHandler=()=>{
        setData({
            name: '',
            surname: '',
            email: '',
            phone: '',
            gander: '',
            dob: '',
            comment: '',
        });
        setStep(1);
    }
    return ( 
        <div className={styles.wrapper}>
            <header>
                <h1>You have successfully submitted your details</h1>                
            </header>
                <button onClick={clickHandler}>OK</button>
        </div>
     );
}
 
export default Congrats;