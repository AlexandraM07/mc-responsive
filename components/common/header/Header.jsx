import HeaderPrimary from './HeaderPrimary';
import HeaderSecondary from './HeaderSecondary';

export default function Home() {
  return (
    <>
      <div className="header-secondary">
        <HeaderSecondary></HeaderSecondary>
      </div>

      <div className="header-primary">
        <HeaderPrimary></HeaderPrimary>
      </div>
    </>
  );
}
