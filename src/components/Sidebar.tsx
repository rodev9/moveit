import Link from 'next/link'
import { useRouter } from 'next/router'

import { signOut } from 'next-auth/client'

import Logo from '../assets/logo.svg'

import { Container, Button } from '../styles/components/Sidebar'
import { FiHome, FiAward, FiLogOut } from 'react-icons/fi'

const Sidebar: React.FC = () => {
  const router = useRouter()

  return (
    <Container>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      <nav>
        <Link href="/">
          <Button aria-label="Início" disabled={router.pathname === '/'}>
            <FiHome />
          </Button>
        </Link>

        <Link href="/leaderboard">
          <Button
            aria-label="Leaderboard"
            disabled={router.pathname === '/leaderboard'}
          >
            <FiAward />
          </Button>
        </Link>
      </nav>

      <Button aria-label="Logout" onClick={() => signOut()}>
        <FiLogOut />
      </Button>
    </Container>
  )
}

export default Sidebar
