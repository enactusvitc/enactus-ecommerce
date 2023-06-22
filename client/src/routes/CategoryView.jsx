import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactLoading from 'react-loading';
import Category from '../components/Category/Category';

const CategoryView = () => {
    const param = useParams()
    const [ inaraItems, setInaraItems ] = useState()
    const [ pooranyaItems, setPooranyaItems ] = useState()
    const [ malarItems, setMalarItems ] = useState()
    const [ naariItems, setNaariItems ] = useState()
    const [ minavarItems, setMinavarItems ] = useState()
    const [ loading , setLoading ] = useState(true) 

    useEffect(() => {
        axios.get("https://shema-backend.vercel.app/api/items")
            .then(res => {
                setInaraItems(res.data.filter((item) => item.category === "inara"))
                setPooranyaItems(res.data.filter((item) => item.category === "pooranya" ))
                setMalarItems(res.data.filter((item) => item.category === "malar")) 
                setNaariItems(res.data.filter((item) => item.category === "naari")) 
                setMinavarItems(res.data.filter((item) => item.category === "minavar")) 
                setLoading(false)
            })
            .catch(err => console.log(err))

        window.scrollTo(0, 0)
    }, [param.id])
    
    return ( 
        <div className='d-flex min-vh-100 w-100 justify-content-center align-items-center m-auto'>
            {loading && <ReactLoading type="balls" color='#FFE26E' height={100} width={100} className='m-auto'/>}
            { inaraItems && param.id === 'inara' && <Category name="Inara Products" items={inaraItems} category="inara"/>}
            { pooranyaItems && param.id === 'pooranya' && <Category name="Pooranya Products" items={pooranyaItems} category="pooranya"/>}
            { malarItems && param.id === 'malar' && <Category name="Malar Products" items={malarItems} category="malar"/>}
            { naariItems && param.id === 'naari' && <Category name="Naari Products" items={naariItems} category="naari"/>}
            { minavarItems && param.id === 'minavar' && <Category name="Minavar Products" items={minavarItems} category="minavar"/>}
        </div>
     );
}
 
export default CategoryView;