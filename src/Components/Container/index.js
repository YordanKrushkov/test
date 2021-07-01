import StepOne from '../StepOne';
import StepThree from '../StepThree';
import StepTwo from '../StepTwo';
import styles from './index.module.css';
import { useState } from 'react';
import Congrats from '../Congrats';

const Container = () => {
    const [step,setStep]=useState(1);
    const [data, setData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        gander: '',
        dob: '',
        comment: '',
        step: 1,
    })

    return (
        <div className={ styles.container }>
            <StepOne step={ step === 1 } setStep={setStep} setData={setData} data={data}/>
            <StepTwo step={ step === 2 } setStep={setStep} setData={setData} data={data}/>
            <StepThree step={ step === 3 } setStep={setStep} setData={setData} data={data} />
           {step===4 && <Congrats setStep={setStep} setData={setData}/>}
        </div>

    );
}

export default Container;

