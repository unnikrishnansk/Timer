import React , {useState , useEffect} from 'react';


const Timer = ({starttime,endtime}) => {

    const [timer, settimer] = useState(starttime);

    useEffect(() => {
        const id = setInterval(() => {

            if(timer>=endtime)
            {
                clearInterval(id);
            }
            else
            {
                settimer((prev)=> prev+1);
            }
        },1000)
        return () => {
            clearInterval(id)
        }
    }, [timer])
  return (
    <div><h1>Timer</h1>
    <div>
        <h3>{`Initial Time : ${starttime}`}</h3>
        <h3>{`Ending Time : ${endtime}`}</h3>
    </div>
        <div className='timer'>
        {timer}
        </div>
    </div>
  )
}

export default Timer;