import { FaCog } from 'react-icons/fa';

type Props = {};

export default function settings({}: Props) {
  return (
    <button>
      <FaCog className="text-2xl" />
    </button>
  );
}
