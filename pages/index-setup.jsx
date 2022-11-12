import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>
        Hello Monochrome <i className="fa-solid fa-house"></i>
      </h1>
      <button className="button button-primary">view all</button>
      <button className="button button-secondary">submit</button>

      <img src="/images/dekstop/banner.png" alt="Alt" />
    </div>
  );
}
