import {useEffect, useState} from 'react';

export const useProductHook = () => {
    const [vegetable, setVegetable] = useState([]);
    return [vegetable, setVegetable];
};