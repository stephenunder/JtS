import Link from "next/link";

const Index = () => (
  <div style={{fontSize: "20px", color: "red"}}>
    <h1>SSR Magician</h1>
    <Link href="/about">
      <a>About</a>
    </Link>
    {/* <a href="/about">About</a> */}
  </div>
);

export default Index;