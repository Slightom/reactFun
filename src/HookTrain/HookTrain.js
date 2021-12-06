import { useEffect, useState, useRef, useContext } from 'react';
import { keyframes } from 'styled-components';
import { ConfigContext } from '..';
import styled from 'styled-components'
import * as loginApi from '../api/loginApi';
import * as formsApi from '../api/formsApi';
import * as seniorsApi from '../api/seniorsApi';
import { setUserAndTokenData } from '../common/Helper';
import { Link as L } from 'react-router-dom'
import { Button, Divv } from './Elements';

const deegree = 0.5;
// Create the keyframes
const rotate = keyframes`

  0%   {transform: rotate(-${deegree}deg);}
  25%  {transform: rotate(0deg);}
  50%  {transform: rotate(${deegree}deg);}
  75%  {transform: rotate(0deg);}
  100% {transform: rotate(-${deegree}deg);}
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 01s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;






const HookTrainApp = () => {
    const [counter, setCounter] = useState(0);
    const [history, setHistory] = useState([]);
    const [weather, setWeather] = useState(null);
    const [forms, setForms] = useState([]);
    const [seniors, setSeniors] = useState([]);

    const [incrementClickedLast, setIncrementClickedLast] = useState(null);

    const context = useContext(ConfigContext);

    const getData = () => {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Bialystok&appid=55ef9a0c716184784724a5ba23a54324')
            .then(response => response.json())
            .then(json => { setWeather(json); console.log(json) });
        return true;
    }
    useEffect(() => {
        setCounter(5);
        getData();
    }, [])

    useEffect(() => {
        setHistory([...history, counter]);
    }, [counter])

    const increment = () => { setCounter(counter + 1); setIncrementClickedLast(true) }
    const decrement = () => { setCounter(counter - 1); setIncrementClickedLast(false) }

    const _getForms = async () => {
        const forms = await formsApi.getForms();
        setForms(forms);
    }

    const _getSeniors = async () => {
        const seniors = await seniorsApi.getSeniors();
        setSeniors(seniors);
    }

    const login = async () => {
        const user = await loginApi.login('dupa', 'romana');
        console.log(user);
        setUserAndTokenData(user);
        _getSeniors();
    }




    return (
        <Divv>
            <h1>Counter: {counter}</h1>
            <Button clickedLast={incrementClickedLast} onClick={increment}>Click me to incremenet</Button>
            <Button clickedLast={incrementClickedLast !== null ? !incrementClickedLast : false} onClick={decrement}>Click me to decrement</Button>

            <L to={'/formtrain'}>
                <Button >goToFormTrain</Button>
            </L>
            <div>
                <Button onClick={login}>Click to Login</Button>
            </div>
            {/* <div>
                {forms && forms.map(f => <p key={f.id}>lp:{f.lp} info:{f.info}</p>)}
            </div> */}
            {/* {senior && <h1>{senior.firstName} {senior.lastName}</h1>} */}
            <div>
                {seniors && seniors.map(f => <p key={f.id}>{f.id} {f.firstName} {f.lastName}</p>)}
            </div>
            {context.title} {' | '}
            {weather && Math.round((weather.main.temp - 270) * 10) / 10}
            <div>
                <Rotate>
                    <ImageToggleOnMouseOver primaryImg='/static/1.jpg'
                        secondaryImg='/static/2.jpg'
                        alt='' />
                </Rotate>
            </div>
            {history.map((h, i) => {
                return <div>{i}: {h}</div>
            })
            }
        </Divv>
    );
}

export default HookTrainApp;

















export const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null);
    const [color, setColor] = useState('#00FF00');
    return (
        <img
            onMouseOver={() => { imageRef.current.src = secondaryImg; setColor('#0000FF') }}
            onMouseOut={() => { imageRef.current.src = primaryImg; setColor('#00FF00') }}
            src={primaryImg}
            alt=''
            width='200px'
            ref={imageRef}
            style={{ 'border': `solid 20px ${color}` }} />
    )
}


