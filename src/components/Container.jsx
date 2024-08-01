import Header from '@/components/Header';
import Main from '@/components/Main';

export default function Container() {
  return (
    <div className='container rounded-xl bg-slate-100 shadow-xl max-w-xl'>
      <Header />
      <Main />
    </div>
  );
}
