import React from 'react'
import styles from './footer.module.css'
import usa from '../image/usa.svg'
import gpay from '../image/gpay.svg'
import opay from '../image/opay.svg'
import paypal from '../image/paypal.svg'
import apple from '../image/applepay.svg'
import amex from '../image/amex.svg'
import insta from '../image/insta.svg'
import linkden from '../image/linkden.svg'
import voda from '../image/voda.svg'
const Footer = () => {
  return (
    <>
    <div className={styles.footer}>
        <div className={styles.upbox}>
            <div className={styles.emailpart}>
                <p className={styles.font1}>BE THE FIRST TO KNOW</p>
                <p className={styles.mt1}>Sign up to updatefrom meta mouse</p>
                <div className={styles.inputbox}>
                    <input type="text" className={styles.inputtag}/>
                    <button className={styles.inputbtn}><span className={styles.inputspan}>Subscribe</span></button>
                </div>
            </div>
            <div className={styles.infopart}>
                <p className={styles.font1}>CONTACT US</p>
                <p className={styles.mt}>+11 52565574</p>
                <p className={styles.mt}>Rahulbhopte@gmail.com</p>
                <p className={styles.currency}>CURRENCY</p>
                <div className={`${styles.usabox}`}>
                    <img src={usa} alt="apple pay" />
                    <p className={`${styles.font1} ${styles.mt}`}>+ USA</p>
                </div>
                <p className={styles.mt}>transaction completed in Euros and a currency reference is available in hover.</p>
            </div>
        </div>
        <div className={styles.horizontal}></div>
        <div className={styles.lowerbox}>
            <div className={styles.metta}>
                <p className={styles.font1}>mettā muse</p>
                <p className={styles.mt}>About Us</p>
                <p className={styles.mt}>Stories</p>
                <p className={styles.mt}>Artisans</p>
                <p className={styles.mt}>Boutiques</p>
                <p className={styles.mt}>Contact Us</p>
                <p className={styles.mt}>EU Compliences Docs</p>
            </div>
            <div className={styles.quick}>
                <p className={styles.font1}>QUICK LINK</p>
                <p className={styles.mt}>Order & Shipping</p>
                <p className={styles.mt}>Join/Login as a Setter</p>
                <p className={styles.mt}>Payment & Pricing</p>
                <p className={styles.mt}>Return & Refunds</p>
                <p className={styles.mt}>FAQs</p>
                <p className={styles.mt}>Privacy Policy</p>
                <p className={styles.mt}>Terms & Conditions</p>

            </div>
            <div className={styles.follow}>
                <p className={styles.font1}>FOLLOW US</p>
                <div className={`${styles.instabox}`}>
                    <img src={insta} alt="insta icon" />
                    <img src={linkden} alt="lnikdin icon" />
                </div>
                <p>metta muse</p>
                <div className={styles.paybox}>
                    <img src={gpay} alt="google pay icon" />
                    <img src={voda} alt=" voda phone" />
                    <img src={paypal} alt="paypal icon" />
                    <img src={amex} alt="amex icon" />
                    <img src={apple} alt="applepay icon" />
                    <img src={opay} alt="opay icon" />
                </div>
            </div>
        </div>
        <p style={{justifyContent:"center", marginLeft:'40%', marginTop:'10px'}}>copyright @mettā muse all rights reseved.</p>
    </div>
    </>
  )
}

export default Footer