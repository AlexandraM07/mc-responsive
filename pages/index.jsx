import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hello Monochrome <i className="fa-solid fa-house"></i></h1>
      <button className="button button-primary button-large">view all</button>
      <button className="button button-inverted">view all</button>
      <button className="button button-small">view all</button>

      <img src="/images/banner.png" alt="Alt" />
    </div>

  )
}


