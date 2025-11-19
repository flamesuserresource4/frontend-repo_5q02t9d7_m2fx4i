import { useEffect, useState } from 'react'

const CarCard = ({ car }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
      {car.image_url ? (
        <img src={car.image_url} alt={`${car.make} ${car.model}`} className="w-full h-40 object-cover" />
      ) : (
        <div className="w-full h-40 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-blue-200">No image</div>
      )}
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-white font-semibold">{car.make} {car.model}</h4>
          <span className="text-blue-300 font-semibold">KES {Number(car.price).toLocaleString()}</span>
        </div>
        <p className="text-blue-200/80 text-sm">{car.year} • {car.transmission || '—'} • {car.fuel || '—'}</p>
        {car.mileage_km != null && (
          <p className="text-blue-200/60 text-sm">{car.mileage_km.toLocaleString()} km</p>
        )}
        {car.location && (
          <p className="text-blue-200/60 text-sm mt-1">Location: {car.location}</p>
        )}
      </div>
    </div>
  )
}

const CarList = () => {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)

  const load = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${baseUrl}/api/cars`)
      const data = await res.json()
      setCars(Array.isArray(data) ? data : [])
    } catch (e) {
      setCars([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold">Available Cars</h3>
        <button onClick={load} className="text-blue-300 hover:text-white transition">Refresh</button>
      </div>
      {loading ? (
        <p className="text-blue-200">Loading...</p>
      ) : cars.length === 0 ? (
        <p className="text-blue-200">No cars yet. Add one below.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CarList
