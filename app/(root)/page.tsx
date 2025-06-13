// import Link from "next/link";

import { auth} from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

// export default function Home() {
//   return (
//     <main>
//       <Link href='projects/list'>ProjectList</Link>
//       <h1>Home</h1>
//     </main>
//   );
// }

const Home = async () => {
  const session = await auth();

  console.log(session);

  return(
  <>
    <h1 className="h1-bold">Welcome to the world of Next.js</h1>

    <form className="px-10 pt-[100px]" 
      action={async () => {
      "use server";

      await signOut({redirectTo: ROUTES.SIGN_IN})
    }}
    >
    </form>
  </>
);
}

export default Home;