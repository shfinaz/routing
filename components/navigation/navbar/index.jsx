import Link from "next/link"
import Image from 'next/image';
import Theme from "./Theme";
// import styles from "./navbar.module.css"
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
        // <header>
        //     <nav className={styles.nav}>
        //         <Image
        //         src="/images/site-logo.svg"
        //         width={23}
        //         height={23}
        //         alt="DevFlow Logo"
        //       />
        // <br></br>
        //  <p>Dev<span className="text-primary-500">Flow</span>
        // </p>

        //         <ul className={styles.links}>
        //             <Link href='/'>
        //             <li>Home</li>
        //             </Link>

        //             <Link href='/about'>
        //             <li>About</li>
        //             </Link>

        //             <Link href='/contact'>
        //             <li>Contact</li>
        //             </Link>

        //             <div className="flex-between">
        //               <Theme />
        //             </div>

        //                   <DropdownMenu>
        //                     <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                    
        //                     <DropdownMenuContent>
        //                       <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    
        //                       <DropdownMenuSeparator />
                    
        //                       <DropdownMenuItem>Profile</DropdownMenuItem>
        //                       <DropdownMenuItem>Billing</DropdownMenuItem>
        //                       <DropdownMenuItem>Team</DropdownMenuItem>
        //                       <DropdownMenuItem>Subscription</DropdownMenuItem>
        //                     </DropdownMenuContent>
        //                   </DropdownMenu>
        //             <br></br>
        //         </ul>
        //     </nav>
        // </header>

      <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/site-logo.svg"
            width={23}
            height={23}
            alt="DevFlow Logo"
          />

          <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
            Dev<span className="text-primary-500">Flow</span>
          </p>
        </Link>

        <p>Global Search</p>

        <div className="flex-between gap-5">
          <Theme />
        </div>
      </nav>
        

    )
}

export default Navbar