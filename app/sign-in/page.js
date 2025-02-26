import Link from 'next/link'
import styles from './page.module.css'

function page() {
    return (
        <div className={styles.container}>
            <section className={styles.sectionLeft}>
                <h1>Welcome To <br /> Celebolg</h1>
            </section>
            <section className={styles.sectionRight}>
                <div className={styles.input}>
                    <input className="input" type="text" placeholder='username or email' />
                </div>
                <div className={styles.input}>
                    <input className="input" type="password" placeholder='password' />
                </div>
                <div className={styles.primaryButton + " primaryButton"}>Signin</div>
                <p className='secondarytext'>Don't have any account? <Link href='/create-account' className='link'><u>Create an account</u></Link></p>
            </section>
        </div>
    )
}

export default page
