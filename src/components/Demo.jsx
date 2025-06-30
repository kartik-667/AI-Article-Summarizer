import React, {useState} from 'react'
import { enter, linkIcon } from '../../assets'

function Demo() {
    const [article, setarticle] = useState({
        url:"",
        summary:""
    })


    const handlesubmit= async(e)=>{
        e.preventDefault()
        console.log('submit fn was called');
        

    }

  return (
    <section id='#main ' className='mt-6'>
        <form className='flex relative flex-row justify-center items-center  ' onSubmit={(e)=> handlesubmit(e)}>

            <img src={linkIcon} alt="link_icon" className='mr-2' />
            <input className='p-4 w-2/3 border rounded-md focus:border-2' type="url" name="url" id="url" placeholder='Enter your url here' />

            <button className='hover:scale-105 transition ml-2 ' onSubmit={()=>{}}> 
                <img className='' src={enter} alt="" />
            </button>


        </form>

      
    </section>
  )
}

export default Demo
