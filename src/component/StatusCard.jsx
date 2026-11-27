export const StatusCard = ({ title, value }) => {
  return (
    <div className="border border-gray-200 bg-white p-4">
      <p className="text-sm text-gray-600">{title}</p>
      <p className="mt-1 text-xl font-bold text-black">{value}</p>
    </div>
  );
};
