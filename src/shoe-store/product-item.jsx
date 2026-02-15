export default function ProductItem(props) {
  const { item, setStateModal } = props;

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 bg-white">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-auto object-cover mb-4" 
      />
      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
      <p className="text-gray-600 mb-4">${item.price}</p>
      
      <button
        onClick={() => setStateModal(item)}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
        data-bs-toggle="modal"
        data-bs-target="#shoeModal"
      >
        View Detail
      </button>
    </div>
  );
}