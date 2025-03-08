import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import { products, categorys } from '../../data/data';
import { useProductHook } from '../../custom_hook/useProductHook';

const HookCustom = () => {
    const [category, setCategory] = useState(0);
    const [product, setProduct] = useState(0);
    const [ vegetable, setVegetable ] = useProductHook();
    const handleSelect = (value) =>{
        setCategory (value);
        if(value === 0){
            setVegetable([]);
        } else {
            setVegetable(products.filter(prod=>prod.cat_id===parseInt(value)));
        }
    }
  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/hooks">Hooks</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    Custome Hooks
                </li>
            </ol>
        </nav>
        <hr />
        <h3>Custome Hooks</h3>
        { /* Categorías */}
        <div className="form-group">
            <label htmlFor="category" className='mb-2'>Categorías</label>
            <select value={category} onChange={(e) => {handleSelect(e.target.value)}} id="category" className='form-control'>
                <option value="0">Selecciona</option>
                {categorys.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
            </select>
        </div>
        { /* Productos */}
        <div className="form-group mt-2">
            <label htmlFor="product" className='mb-2'>Productos</label>
            <select value={product} onChange={(e) => {setProduct(e.target.value)}} id="category" className='form-control'>
                <option value="0">Selecciona</option>
                {vegetable.map((prod) => (
                    <option key={prod.id} value={prod.id}>{prod.name}</option>
                ))}
            </select>
        </div>
        
    </>
  )
}

export default HookCustom