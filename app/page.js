import React from 'react'
import Link from 'next/link';

function page() {
  return (
    <div>
      <h1>This is homepage</h1>
      <Link href='/sign-in'>Sign In</Link>
    </div>
  )
}

export default page
