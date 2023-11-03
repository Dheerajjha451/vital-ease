'use client';
const Card = ({ title, children, shadowEffect }) => (
  <div>
    <h3 className="text-xl text-center py-4 font-semibold mb-1">{title}</h3>
    <div
    className={`bg-teal text-left py-12 px-6 rounded-2xl ${shadowEffect ? 'shadow-md' : ''} mb-2`}
  >
    {children}
  </div>
  </div>
  
);

export default Card;
