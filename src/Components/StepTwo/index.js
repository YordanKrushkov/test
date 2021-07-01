import styles from './index.module.css';
import { useState, useEffect } from 'react';

const StepTwo = ({ step, setData, data, setStep }) => {
    const [error, setErrpr] = useState({
        prop: '',
        type: '',
    });
    useEffect(() => {
        if (error.type) {
            setTimeout(() => {
                setErrpr({
                    prop: '',
                    type: false
                })
            }, 2000)
        }
    }, [error])
    const submitHandler = (e) => {
        e.preventDefault()
        let newObject = {
            phone: e.target.phone.value,
            gander: e.target.gender.value,
            dob: `${e.target.day.value}/${e.target.month.value}/${e.target.year.value}`,
            step: 3
        }
        if (newObject.gander === '' || newObject.dob === '') {
            setErrpr({
                prop: "Please insert your gander",
                type: true
            })
            return
        } else if (!/\+?\d{9,13}/.test(newObject.phone)) {
            setErrpr({
                prop: "Please insert a valid phone number",
                type: true
            })
        } else if (!/[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2,4}/.test(newObject.dob)) {
            setErrpr({
                prop: "Please insert a valid date of birth (dd/mm/year)",
                type: true
            })
        }
        else {
            setData({ ...data, ...newObject });
            setStep(3);
        }
    }
    return (
        <div className={ styles.stepTwoContainer }>
            <header onClick={ () => setStep(2) }>
                <h2>Step 2 : More comments</h2>
            </header>
            { error.type && <h5>{ error.prop }</h5> }
            { step &&
                <form action="" onSubmit={ submitHandler }>
                    <div>
                        <div>
                            <label htmlFor="phone">Telephone Number</label>
                            <input type="text" name="phone" id="phone" />
                        </div>
                        <div>
                            <label htmlFor="gender">Gender</label>
                            <select name="gender" id="gender" >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="dob">Date of birth</label>
                            <div className={ styles.dob }>
                                <input type="text" name="day" id="day" />
                                <input type="text" name="month" id="month" />
                                <input type="text" name="year" id="year" />
                            </div>
                        </div>
                    </div>
                    <button>Next &gt;</button>
                </form>
            }
        </div>
    );
}

export default StepTwo;