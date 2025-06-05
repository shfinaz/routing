import Link from 'next/link'
import styles from './projects.module.css'

export default function ProjectList(){
return (
    <main>
        <h1>ProjectList</h1>

        <ul className={styles.ul}>
            <li>
                <Link href='/projects/jobit'>Jobit
                </Link>
            </li>

            <li>
                <Link href='/projects/carrent'>Car Rent
                </Link>
            </li>

            <li>
                <Link href='/projects/hipnode'>Hipnode
                </Link>
            </li>

        </ul>
    </main>
  ) 
}
  