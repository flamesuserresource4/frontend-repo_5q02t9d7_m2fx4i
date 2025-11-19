import { useState } from 'react'
import { CarFront, Upload } from 'lucide-react'

const CarForm = ({ onSubmitted }) => {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [form, setForm] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    mileage_km: '',
    transmission: 'Automatic',
    fuel: 'Petrol',
    color: '',
    location: 'Mombasa',
    image_url: '',
    description: '',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const payload = {
        ...form,
        year: Number(form.year),
        price: Number(form.price),
        mileage_km: form.mileage_km ? Number(form.mileage_km) : undefined,
      }
      const res = await fetch(`${baseUrl}/api/cars`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to save car')
      setMessage('Car added successfully')
      setForm({
        make: '', model: '', year: '', price: '', mileage_km: '', transmission: 'Automatic', fuel: 'Petrol', color: '', location: 'Mombasa', image_url: '', description: ''
      })
      onSubmitted?.()
    } catch (err) {
      setMessage(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <CarFront className="w-5 h-5 text-blue-300" />
        <h3 className="text-white font-semibold">Add a car</h3>
      </div>
      <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="input" placeholder="Make" value={form.make} onChange={(e)=>setForm(f=>({...f, make:e.target.value}))} required />
        <input className="input" placeholder="Model" value={form.model} onChange={(e)=>setForm(f=>({...f, model:e.target.value}))} required />
        <input className="input" placeholder="Year" type="number" value={form.year} onChange={(e)=>setForm(f=>({...f, year:e.target.value}))} required />
        <input className="input" placeholder="Price (KES)" type="number" value={form.price} onChange={(e)=>setForm(f=>({...f, price:e.target.value}))} required />
        <input className="input" placeholder="Mileage (km)" type="number" value={form.mileage_km} onChange={(e)=>setForm(f=>({...f, mileage_km:e.target.value}))} />
        <select className="input" value={form.transmission} onChange={(e)=>setForm(f=>({...f, transmission:e.target.value}))}>
          <option>Automatic</option>
          <option>Manual</option>
        </select>
        <select className="input" value={form.fuel} onChange={(e)=>setForm(f=>({...f, fuel:e.target.value}))}>
          <option>Petrol</option>
          <option>Diesel</option>
          <option>Hybrid</option>
          <option>Electric</option>
        </select>
        <input className="input" placeholder="Color" value={form.color} onChange={(e)=>setForm(f=>({...f, color:e.target.value}))} />
        <input className="input" placeholder="Location" value={form.location} onChange={(e)=>setForm(f=>({...f, location:e.target.value}))} />
        <input className="input" placeholder="Image URL" value={form.image_url} onChange={(e)=>setForm(f=>({...f, image_url:e.target.value}))} />
        <div className="md:col-span-2">
          <textarea className="input" placeholder="Description" value={form.description} onChange={(e)=>setForm(f=>({...f, description:e.target.value}))} />
        </div>
        <div className="md:col-span-2 flex items-center gap-3">
          <button disabled={loading} className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition disabled:opacity-60">
            {loading ? 'Saving...' : 'Save car'}
          </button>
          {message && <span className="text-blue-200">{message}</span>}
        </div>
      </form>
      <style>{`
        .input{width:100%; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); color:white; padding:10px 12px; border-radius:10px; outline:none}
        .input:focus{border-color:rgba(59,130,246,0.6)}
      `}</style>
    </div>
  )
}

export default CarForm
