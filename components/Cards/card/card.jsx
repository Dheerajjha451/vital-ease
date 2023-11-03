'use client';
const Card = ({ title, children, shadowEffect }) => (
  <div
    className={`bg-teal-500 p-1 rounded-lg ${shadowEffect ? 'shadow-md' : ''} mb-2`}
  >
    <h3 className="text-sm font-semibold mb-1">{title}</h3>
    {children}
  </div>
);

export default Card;
