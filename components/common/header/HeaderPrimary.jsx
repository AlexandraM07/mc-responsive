import Link from 'next/link';

export default function HeaderPrimary() {
  return (
    <>
      <div className="container">
        <ul className="d-lg-none">
          <li>
            <Link href="/" title="Menu">
              <i className="fa-solid fa-bars"></i>
            </Link>
          </li>

          <li>
            <form className="header-search">
              <input type="text" placeholder="Search" name="search" />
              <button type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </li>
        </ul>

        <nav className="class d-none d-lg-block">
          <ul>
            <li>
              <Link href="/" title="New arrivals">
                New arrivals
              </Link>
            </li>

            <li>
              <Link href="Brands">Brands</Link>
            </li>

            <li>
              <Link href="/" title="Mens">
                Mens
              </Link>
            </li>

            <li>
              <Link href="/" title="Womens">
                Womens
              </Link>
            </li>

            <li>
              <Link href="/" title="Accessories">
                Accessories
              </Link>
            </li>

            <li>
              <Link href="/" title="Lookbook">
                Lookbook
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
