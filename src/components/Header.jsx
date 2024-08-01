import DarkModeButton from '@/components/DarkModeButton';
import StateButton from '@/components/StateButton';

export default function Header() {
  return (
    <header className='flex justify-between p-4'>
      <DarkModeButton />
      <ul className='flex flex-row gap-6'>
        <li>
          <StateButton name='ALL' />
        </li>
        <li>
          <StateButton name='WORK ON' />
        </li>
        <li>
          <StateButton name='DONE' />
        </li>
      </ul>
    </header>
  );
}
