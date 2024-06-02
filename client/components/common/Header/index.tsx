import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="conatiner mx-auto">
        <div className="py-4 flex items-center justify-center">
          <Link className="flex items-center justify-center gap-2" href="/">
            <Image src="/ethereum-eth-logo.png" alt="logo" width={40} height={40} />
            <h1 className="text-2xl font-bold">Web 3.0 Todo dApp</h1>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;
