import React, {useState, useEffect} from 'react'
import { clear, copy, enter, linkIcon, tick } from '../../assets'
import { summarizeText } from '../services/rapidapi'
import { loader } from '../../assets'

function Demo() {
    const [article, setarticle] = useState({
        url:"",
        summary:""
    })

    const [allarticles,setallarticles]=useState([])

    const [isloading, setisloading]=useState(false)
    const [copied, setcopied] = useState("")

    


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

                const updatedArticles = [newarticle, ...allarticles];
                setallarticles(updatedArticles)

                //now add to localstorage- only stores in form of string
                localStorage.setItem("articles",JSON.stringify(updatedArticles))
                
                

            }


            
        } catch (error) {
            console.log("some error occured",error);
            
        }finally{
            setisloading(false)
            
        }



        

    }

    function cleartext(){
        setarticle({...article, url:""})

    }

    function copytoclipboard(link){
        navigator.clipboard.writeText(link)
        // alert("Copied to clipboard")
        setcopied(link)
        setTimeout(() => {
            setcopied("")
            
        }, 2000);

    }

    useEffect(()=>{
        
        const storageData=localStorage.getItem("articles")
        if(storageData){
            setallarticles(JSON.parse(storageData))
        }
        
        console.log("all articles are -> ",JSON.parse(storageData));
        return

    },[])

  return (
    <section id='#main ' className='mt-6'>
        <form className='flex relative flex-row justify-center items-center  ' onSubmit={(e)=> handlesubmit(e)}>

            <img src={linkIcon} alt="link_icon" className='mr-2' />
            <input value={article.url} onChange={(e)=> setarticle({...article, url:e.target.value})} className='p-4 w-2/3 border rounded-md focus:border-2' type="url" name="url" id="url" placeholder='Enter your url here' />

            <button className='hover:scale-105 transition ml-2 ' type="submit"> 
                <img className='' src={enter} alt="" />
            </button>
            <button type='button' onClick={cleartext} className='hover:scale-105 transition ml-2 '>
                <img className='h-6 w-6' src={clear} alt="clear-text" />
            </button>


        </form>
        

        {/* browser history */}
        <div className="history flex flex-col p-4 w-full justify-center items-center max-h-60 overflow-y-auto">
            {allarticles.map((ele,index)=>{
                return (
                    <div onClick={()=> setarticle(ele) } key={index} className='flex flex-row justify-center items-center   border hover:bg-gray-100 transition w-[80%] p-2 '>
                        <img onClick={()=> copytoclipboard(ele.url)} src={copied === ele.url ? tick : copy} alt="copy" className='w-[2%] h-[2%] object-contain mr-4 transition' />
                        <p className="text-blue-500">{ele.url}</p>

                    </div>
                )
            })}
        </div>

        {/* summary area */}
        <div className='flex my-10 max-w-full justify-center items-center'>
            {isloading ? (
            <div className="loading flex justify-center mt-4">
                <img  className='h-20 w-20' src={loader} alt="loading..." />

            </div>
        ) : (
            <div className="content flex flex-col gap-3 p-5">
                <div className='flex flex-col gap-3 '></div>
                <h2 className='text-4xl'>Article <span className='text-orange-500 font-bold'>Summary</span></h2>
                <div className="sum_box rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-4">
                    <p className='text-xl'>{article.summary}</p>
                </div>

            </div>
        )}

        </div>



      
    </section>
  )
}

export default Demo
