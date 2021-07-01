import styles from './index.module.css';
import { useState, useEffect } from 'react';

const StepOne = ({ step, setData,data,setStep }) => {
    const [error, setErrpr] = useState({
        prop: '',
        type: false,
    });

    useEffect(()=>{
        if(error.type){
            setTimeout(()=>{
                setErrpr({
                    prop:'',
                    type:false
                })
            },2000)
        }
    },[error]);

    const submitHandler = (e) => {
        e.preventDefault()
        let newObject = {
            name: e.target.name.value,
            surname: e.target.surname.value,
            email: e.target.email.value,
            step: 2
        }
        if (newObject.name === '' || newObject.surname === '') {
            setErrpr({
                prop: "Please insert your name and surname",
                type: true
            })
            return
        } else if (!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(newObject.email)) {
            setErrpr({
                prop: "Please insert a valid email",
                type: true
            })
        } else {
            setData({...data,...newObject})
            setStep(2)
        }
    }
    return (
        <div className={ styles.stepOneContainer }>
            <header onClick={()=>setStep(1)}>
                <h2>Step 1 : Your details</h2>
            </header>
            {error.type&&<h5>{error.prop}</h5>}
            { step &&
                <form action="" onSubmit={ submitHandler }>
                    <div>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div>
                            <label htmlFor="surname">Surname</label>
                            <input type="text" name="surname" id="surname" />
                        </div>
                        <div>
                            <label htmlFor="emai">Email</label>
                            <input type="text" name="email" id="email" />
                        </div>

                    </div>
                    <button>Next &gt;</button>
                </form>
            }
        </div>
    );
}

export default StepOne;