import React, {useState, useEffect} from 'react'
import { enter, linkIcon } from '../../assets'
import { summarizeText } from '../services/rapidapi'
import { loader } from '../../assets'
function Demo() {
    const [article, setarticle] = useState({
        url:"",
        summary:""
    })

    const [allarticles,setallarticles]=useState([])

    const [isloading, setisloading]=useState(false)

    


    const handlesubmit= async(e)=>{
        e.preventDefault()
        console.log('submit fn was called');
        setisloading(true)
        try {
            const response=await summarizeText(article.url)
            if(response){
                const rec_summary=response.summary
                
                const newarticle={...article,summary:rec_summary}
                setarticle(newarticle)

                setallarticles([...allarticles,newarticle])
                

            }


            
        } catch (error) {
            console.log("some error occured",error);
            
        }finally{
            setisloading(false)
            
        }



        

    }

    useEffect(()=>{
        console.log("all articles are -> ",allarticles);
        

    },[allarticles])

  return (
    <section id='#main ' className='mt-6'>
        <form className='flex relative flex-row justify-center items-center  ' onSubmit={(e)=> handlesubmit(e)}>

            <img src={linkIcon} alt="link_icon" className='mr-2' />
            <input value={article.url} onChange={(e)=> setarticle({...article, url:e.target.value})} className='p-4 w-2/3 border rounded-md focus:border-2' type="url" name="url" id="url" placeholder='Enter your url here' />

            <button className='hover:scale-105 transition ml-2 ' type="submit"> 
                <img className='' src={enter} alt="" />
            </button>


        </form>
        {isloading && (
            <div className="loading flex justify-center mt-4">
                <img className='h-20 w-20' src={loader} alt="loading..." />

            </div>
        )}

      
    </section>
  )
}

export default Demo
