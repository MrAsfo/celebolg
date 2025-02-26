import Link from 'next/link';
import styles from '../create-account/page.module.css';
import Image from 'next/image';

function page() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/logo.jpg' width={200} height={200} alt='logo' />
      </div>
      <div className={styles.input}>
        <input className="input" type="text" placeholder='Your code' />
      </div>
      <Link href='./update-profile' className='link'><div className='primaryButton'>
        Verify
      </div></Link>
      <p>Didn't get the code? <u>Send again</u></p>
    </div>
  )
}

export default page
