import styles from './index.module.css';
import { useState, useEffect } from 'react';

const StepThree = ({ step, setData, data, setStep }) => {
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
    }, [error]);

    const submitHandler = (e) => {
        e.preventDefault()
        let newObject = {
            comment: e.target.comment.value,
        };

        if (newObject.comment.length < 10) {
            setErrpr({
                prop: "Please write a comment at least 10 characters long",
                type: true
            })
            return
        } else {

            if (data.name === '' || data.surname === '' || data.email === '') {
                setStep(1);
            } else if (data.phone === '' || data.gander === '' || data.dob === '') {
                setStep(2)
            } else {
                fetch('http://localhost:4000/data', {
                    method: 'POST',
                    body: JSON.stringify({ ...data, ...newObject }),
                    headers: {
                        "Content-type": "application/json",
                    }
                }).then(() => {
                    setStep(4);
                }).catch(err => console.log(err))
            }
        }
    }

    return (
        <div className={ styles.stepThreeContainer }>
            <header onClick={ () => setStep(3) }>
                <h2>Step 3 : Final Comments</h2>
            </header>
            <h5>{ error.prop }</h5>
            { step &&
                <form action="" onSubmit={ submitHandler }>
                    <div>
                        <div>
                            <label htmlFor="phone">Comments</label>
                            <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <button>Next &gt;</button>
                </form>
            }
        </div>
    );
}

export default StepThree;