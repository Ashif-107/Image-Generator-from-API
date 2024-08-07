import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          navigate(`/${inputValue}`);
        }
      };

    return (


        <div className="h-[100vh] bg-[#e6d8c0] flex justify-center items-center flex-row">
           <div className='flex flex-col'>
            
            <h1 className="text-4xl">Magic Picture Generator - by Ashif</h1>
            <input
            className='mt-10 p-2 text-2xl bg-[#FFA07A] text-blue-900 rounded-full border-2 border-black placeholder-custom'
            type="text"
                id="myInput"
                value={inputValue}
                onChange={handleChange}
                placeholder='Type here to see the magic'
                onKeyDown={handleKeyDown}
            />
            </div>
        </div >
    )
}

export default Home
