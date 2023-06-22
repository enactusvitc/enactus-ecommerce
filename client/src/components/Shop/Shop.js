import { useEffect, useState } from 'react';
import { TabTitle } from '../../utils/General';
import axios from "axios";
import ShopCategory from './Container/ShopCategory';
import './Shop.css';
import ReactLoading from 'react-loading';

const Shop = () => {
    TabTitle("Shop - SHEMA")
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
    
    }, [])

    return ( 
        <div className="shop__contianer">
            {loading && <ReactLoading type="balls" color='#FFE26E'  height={100} width={100} className='container h-100 w-10 justify-self-center align-self-center m-auto'/>}
            {inaraItems && <ShopCategory name="Inara" key="inara" items={inaraItems}/>}
            {pooranyaItems && <ShopCategory name="Pooranya" key="pooranya" items={pooranyaItems}/>}
            {malarItems && <ShopCategory name="Malar" key="malar" items={malarItems}/>}
            {naariItems && <ShopCategory name="Naari" key="naari" items={naariItems}/>}
            {minavarItems && <ShopCategory name="Minavar" key="minavar" items={minavarItems}/>}
        </div>
     );
}
 
export default Shop;