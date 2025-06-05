import Link from "next/link"
import Image from 'next/image';
import Theme from "./Theme";
import styles from "./navbar.module.css"
//shadcn
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
    return (
        <header>
            <nav className={styles.nav}>
                <Image
          src="/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevFlow Logo"
        />
        <br></br>
         <p>Dev<span className="text-primary-500">Flow</span>
        </p>

                <ul className={styles.links}>
                    <Link href='/'>
                    <li>Home</li>
                    </Link>

                    <Link href='/about'>
                    <li>About</li>
                    </Link>

                    <Link href='/contact'>
                    <li>Contact</li>
                    </Link>

                    <div className="flex-between">
                      <Theme />
                    </div>

                          <DropdownMenu>
                            <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                    
                            <DropdownMenuContent>
                              <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    
                              <DropdownMenuSeparator />
                    
                              <DropdownMenuItem>Profile</DropdownMenuItem>
                              <DropdownMenuItem>Billing</DropdownMenuItem>
                              <DropdownMenuItem>Team</DropdownMenuItem>
                              <DropdownMenuItem>Subscription</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                    <br></br>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar