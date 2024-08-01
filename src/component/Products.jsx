import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectProduct } from '../redux/actions/productAction'; // Redux action file
import styles from './main.module.css'; // CSS file

const Products = ({ showFilter, setShowFilter, item1 }) => {
    const [ideal, setIdeal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [occasion, setOcassion] = useState(false);
    const [work, setWork] = useState(false);
    const [fabrik, setFabrik] = useState(false);
    const [segment, setSegment] = useState(false);
    const [suitable, setSuitable] = useState(false);
    const [raw, setRaw] = useState(false);
    const [pattern, setPattern] = useState(false);
    const [item, setItem] = useState([]);
    const [filtermultipel, setFiltermultipel] = useState([]);
    
    // Get data from Redux store using useSelector hook.
    const products = useSelector((state) => state.allProducts.products);

    // Check data is available or not
    console.log('homedata', products);

    // Show and hide ideal
    const showIdeal = () => setIdeal(!ideal);
    // Show and hide occasion
    const showOcassion = () => setOcassion(!occasion);
    // Show and hide work
    const showWork = () => setWork(!work);
    // Show and hide fabrik
    const showFabrik = () => setFabrik(!fabrik);
    // Show and hide segment
    const showSegment = () => setSegment(!segment);
    // Show and hide suitable
    const showSuitable = () => setSuitable(!suitable);
    // Show and hide raw material
    const showRaw = () => setRaw(!raw);
    // Show and hide pattern
    const showPattern = () => setPattern(!pattern);

    // Use Dispatch hook for storing data in Redux store.
    const dispatch = useDispatch();

    // Store data in Redux store when data come or change in item.
    useEffect(() => {
        dispatch(selectProduct(item));
    }, [item]);

    // Set data when item1 changes
    useEffect(() => {
        setItem(item1);
    }, [item1]);

    // Set loading state when products are available
    useEffect(() => {
        if (products.length > 0) {
            setLoading(true);
        }
    }, [products]);

    // Set item state with the products
    useEffect(() => {
        setItem(products);
    }, [products]);

    // Handle multiple filtering
    const handleCheckboxChange = (cat) => {
        const isCategoryPresent = filtermultipel.includes(cat);

        // If the category is present, remove it; otherwise, add it
        setFiltermultipel((prevstate) =>
            isCategoryPresent
                ? prevstate.filter((val) => val !== cat)
                : [...prevstate, cat]
        );
    };

    // Filter categories stored in filtermultipel array with item (main data)
    const filterItems = () => {
        if (filtermultipel.length > 0) {
            let tempItems = filtermultipel.map((selectedcat) => {
                let temp = products.filter((i) => i.category === selectedcat);
                return temp;
            });
            setItem(tempItems.flat());
        } else {
            setItem([...products]);
        }
    };

    // Execute only when filtermultipel changes
    useEffect(() => {
        filterItems();
    }, [filtermultipel]);

    console.log("filtering", filtermultipel);

    // Render all data from API using map method.
    const renderList = item.map((product) => {
        // Destructure product properties
        const {
            id,
            brand,
            title,
            image,
            rating,
            price,
        } = product;
        return (
            <div key={id} className={styles.card}>
                <div className={styles.imgin}>
                    <img src={image} className={styles.img} alt={brand}></img>
                </div>
                <ul className={styles.textbox}>
                    <li className={styles.texttitle}>{title}</li>
                    <li className={styles.textprice}>PRICE: ${price}</li>
                    <li className={styles.rating}>RATING: {rating.rate} (Count: {rating.count})</li>
                </ul>
            </div>
        );
    });

    return (
        <>
            {loading ? (
                <div className={styles.container}>
                    <div className={showFilter ? `${styles.side}` : `${styles.hidden}`}>
                        <div className={styles.idealbox}>
                            <div className={styles.costomize}>
                                <input value="test" type="checkbox" onChange={() => handleCheckboxChange('laptops')} />
                                <label htmlFor="">COSTOMIZE</label><br />
                            </div>
                            <p className={styles.hedingideal} onClick={showIdeal}>IDEAL FOR</p>
                            <p>All</p>
                            <div className={ideal ? `${styles.ideal}` : `${styles.hidden}`}>
                                <input value="test" type="checkbox" onChange={() => handleCheckboxChange('laptops')} />
                                <label htmlFor="">Laptop</label><br />
                                <input value="test" type="checkbox" onChange={() => handleCheckboxChange('smartphones')} />
                                <label htmlFor="">Mobiles</label><br />
                                <input value="test" type="checkbox" onChange={() => handleCheckboxChange('fragrances')} />
                                <label htmlFor="">Fragrances</label><br />
                                <input value="test" type="checkbox" onChange={() => handleCheckboxChange('groceries')} />
                                <label htmlFor="">Groceries</label><br />
                            </div>
                        </div>
                        <div className={styles.ocassionbox}>
                            <p className={styles.hedingideal} onClick={showOcassion}>OCASSION</p>
                            <p>All</p>
                            <div className={occasion ? `${styles.ideal}` : `${styles.hidden}`}>
                                <input value="test" type="checkbox" />
                                <label htmlFor="">Men</label><br />
                                <input value="test" type="checkbox" />
                                <label htmlFor="">Women</label><br />
                                <input value="test" type="checkbox" />
                                <label htmlFor="">Baby & Kids</label><br />
                            </div>
                        </div>
                        <div className={styles.ocassionbox}>
                            <p className={styles.hedingideal} onClick={showWork}>WORK</p>
                            <p>All</p>
                            <div className={work ? `${styles.ideal}` : `${styles.hidden}`}>
                                <input value="test" type="checkbox" />
                                <label htmlFor="">Men</label><br />
                                <input value="test" type="checkbox" />
                                <label htmlFor="">Women</label><br />
                                <input value="test" type="checkbox" />
                                <label htmlFor="">Baby & Kids</label><br />
                            </div>
                        </div>
                        <div className={styles.ocassionbox}>
                            <p className={styles.hedingideal} onClick={showFabrik}>FABRIK</p>
                            <p>All</p>
                            <div className={fabrik ? `${styles.ideal}` : `${styles.hidden}`}>
                                <input value="test" type="checkbox" />
                                <label htmlFor="">Men</label><br />
                                <input value="test" type="checkbox" />
                                <label htmlFor="">Women</label><br />
                                <input value="test" type="checkbox" />
                                <label htmlFor="">Baby & Kids</label><br />
                            </div>
                        </div>
                        <div className={styles.ocassionbox}>
                            <p className={styles.hedingideal} onClick={showSegment}>SEGMENT</p>
                            <p>All</p>
                            <div className={segment ? `${styles.ideal}` : `${styles.hidden}`}>
                                <input value="test" type="checkbox" />
                                <label htmlFor="">Men</label><br />
                                <input value="test" type="checkbox" />
                                <label htmlFor="">Women</label><br />
                                <input value="test" type="checkbox" />
                                <label htmlFor="">Baby & Kids</label><br />
                            </div>
                        </div>
                        <div className={styles.ocassionbox}>
                            <p className={styles.hedingideal} onClick={showSuitable}>SUITABLE FOR</p>
                            <p>All</p>
                            <div className={suitable ? `${styles.ideal}` : `${styles.hidden}`}>
                                <input value="test" type="checkbox" />
                                <label htmlFor="">Men</label><br />
                                <input value="test" type="checkbox" />
                                <label htmlFor="">Women</label><br />
                                <input value="test" type="checkbox" />
                                <label htmlFor="">Baby & Kids</label><br />
                            </div>
                        </div>
                        <div className={styles.ocassionbox}>
                            <p className={styles.hedingideal} onClick={showRaw}>RAW MATERIALS</p>
                            <p>All</p>
                            <div className={raw ? `${styles.ideal}` : `${styles.hidden}`}>
                                <input value="test" type="checkbox" />
                                <label htmlFor="">Men</label><br />
                                <input value="test" type="checkbox" />
                                <label htmlFor="">Women</label><br />
                                <input value="test" type="checkbox" />
                                <label htmlFor="">Baby & Kids</label><br />
                            </div>
                        </div>
                        <div className={styles.ocassionbox}>
                            <p className={styles.hedingideal} onClick={showPattern}>PATTERN</p>
                            <p>All</p>
                            <div className={pattern ? `${styles.ideal}` : `${styles.hidden}`}>
                                <input value="test" type="checkbox" />
                                <label htmlFor="">Men</label><br />
                                <input value="test" type="checkbox" />
                                <label htmlFor="">Women</label><br />
                                <input value="test" type="checkbox" />
                                <label htmlFor="">Baby & Kids</label><br />
                            </div>
                        </div>
                    </div>
                    <div className={styles.main}>
                        {renderList}
                    </div>
                </div>
            ) : (
                <div className={styles.loadingmain}>
                    <p className={styles.loading}>Loading</p>
                </div>
            )}
        </>
    );
}

export default Products;
