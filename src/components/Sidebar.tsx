import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { signOut } from 'next-auth/client'

import Logo from '../assets/logo.svg'

import styles from '../styles/components/Sidebar.module.css'
import { FiHome, FiAward, FiLogOut } from 'react-icons/fi'

const Sidebar: React.FC = () => {
  const router = useRouter()

  return (
    <aside className={styles.container}>
      <Link href="/">
        <Logo />
      </Link>

      <nav>
        <Link href="/">
          <button aria-label="Início" disabled={router.pathname === '/'}>
            <FiHome />
          </button>
        </Link>

        <button aria-label="Logout" onClick={() => signOut()}>
          <FiLogOut />
        </button>
      </nav>
    </aside>
  )
}

export default Sidebar
