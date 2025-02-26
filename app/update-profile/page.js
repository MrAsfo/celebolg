import Image from 'next/image'
import styles from '../create-account/page.module.css'
import Link from 'next/link'
import css from './page.module.css'

function page() {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src='/logo.jpg' width={200} height={200} alt='logo' />
            </div>
            <div className={css.container}>
                <div className={css.cover}></div>
                <div className={css.avatar}>
                    <div className={css.avatarContainer}>
                        <Image objectFit='cover' width={100} height={100} src='/user.webp' alt='logo' />
                    </div>
                </div>
            </div>
            <div className={styles.input}>
                <input className="input" type="text" placeholder='Your Name' />
            </div>
            <div className={styles.input}>
                <input className="input" type="email" placeholder='Your Gender' />
            </div>
            <Link href='./verify-code' className='link'><div className='primaryButton'>
                Update
            </div></Link>
            <br />
        </div>
    )
}

export default page
