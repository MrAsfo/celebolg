import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

function page() {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src='/logo.jpg' width={200} height={200} alt='logo' />
            </div>
            <div className={styles.input}>
                <input className="input" type="text" placeholder='@username' />
            </div>
            <div className={styles.input}>
                <input className="input" type="email" placeholder='email' />
            </div>
            <form className={styles.form}>
                <p>Account Type</p>
                <label className={styles.label}>
                    <input type="radio" name="choice" value="personal" />
                    Personal
                </label>

                <label className={styles.label}>
                    <input type="radio" name="choice" value="store" />
                    Store
                </label>
            </form>

            <div className={styles.input}>
                <input className="input" type="text" placeholder='How do you want to describe yourself?' />
            </div>

            <Link href='./verify-code' className='link'><div className='primaryButton'>
                Create your account
            </div></Link>
            <br />
            <p>Already have an account? <Link href='/sign-in' className='link'><u>Signin</u></Link></p>
        </div>
    )
}

export default page
