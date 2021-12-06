import { Formik } from 'formik';
import { useEffect, useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../hookTrain/Elements';
import * as loginApi from '../../api/loginApi';
import * as seniorsApi from '../../api/seniorsApi';
import { setUserAndTokenData } from '../../common/Helper';
import { GlobalSettingsConsumer } from '../../context/GlobalSettings.context';


const FormTrain = () => {
    const [senior, setSenior] = useState(null);
    const [fetched, setFetched] = useState(false);
    const [color, setColor] = useState('');

    useEffect(async () => {

        const user = await loginApi.login('dupa', 'romana');
        console.log(user);
        setUserAndTokenData(user);

        const senior = await seniorsApi.getSenior(-2);
        setSenior(senior);
        setFetched(true);
    }, [])

    return (
        <div>
            <Link to={'/'}>
                <Button >goToMain</Button>
            </Link>
            <GlobalSettingsConsumer>
                {({ fontColor, changeFontColor }) => (
                    <>
                        <p style={{ color: fontColor }}>formTrain</p>
                        <input type='text' value={color} onChange={e => setColor(e.target.value)} />
                        <button onClick={() => changeFontColor(color)}>UpdateColor</button>
                    </>
                )}

            </GlobalSettingsConsumer>

            {senior && <h1>{senior.firstName} {senior.lastName}</h1>}

            {fetched
                ? <Formik
                    initialValues={{ ...senior }}
                    onSubmit={(values) => {
                        console.log('submitted', values)
                    }}
                    render={({
                        values,
                        errors,
                        touched,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        isSubmitting
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <input name='firstName'
                                onChange={handleChange}
                                value={values.firstName} />
                            <br />
                            <button type='submit'>Update</button>
                        </form>
                    )}
                />
                : <p>Loadng...</p>}
        </div>
    )
}

export default FormTrain;