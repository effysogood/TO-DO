export default function StateButton({ name }) {
  return (
    <button
      type='button'
      className='hover:text-orange-600 transition-all duration-300'
    >
      {name}
    </button>
  );
}
