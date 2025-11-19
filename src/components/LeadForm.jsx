import { useState } from 'react'
import { Send, Truck, CarFront } from 'lucide-react'

const LeadForm = () => {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '+254748898310',
    service_type: 'car-sale',
    preferred_car: '',
    location: 'Mombasa',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')
    try {
      const res = await fetch(`${baseUrl}/api/requests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to submit request')
      setStatus('We received your request. We will contact you shortly.')
      setForm({ name:'', email:'', phone:'+254748898310', service_type:'car-sale', preferred_car:'', location:'Mombasa', message:'' })
    } catch (err) {
      setStatus(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <Send className="w-5 h-5 text-blue-300" />
        <h3 className="text-white font-semibold">Place an order or request a service</h3>
      </div>
      <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="input" placeholder="Your name" value={form.name} onChange={(e)=>setForm(f=>({...f, name:e.target.value}))} required />
        <input className="input" placeholder="Email (optional)" value={form.email} onChange={(e)=>setForm(f=>({...f, email:e.target.value}))} />
        <input className="input" placeholder="Phone" value={form.phone} onChange={(e)=>setForm(f=>({...f, phone:e.target.value}))} required />
        <select className="input" value={form.service_type} onChange={(e)=>setForm(f=>({...f, service_type:e.target.value}))}>
          <option value="car-sale">Buy a car</option>
          <option value="delivery-service">Delivery service</option>
        </select>
        <input className="input" placeholder="Preferred car (make/model)" value={form.preferred_car} onChange={(e)=>setForm(f=>({...f, preferred_car:e.target.value}))} />
        <input className="input" placeholder="Location" value={form.location} onChange={(e)=>setForm(f=>({...f, location:e.target.value}))} />
        <div className="md:col-span-2">
          <textarea className="input" placeholder="Message" value={form.message} onChange={(e)=>setForm(f=>({...f, message:e.target.value}))} />
        </div>
        <div className="md:col-span-2 flex items-center gap-3">
          <button disabled={loading} className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition disabled:opacity-60">
            {loading ? 'Sending...' : 'Send request'}
          </button>
          {status && <span className="text-blue-200">{status}</span>}
        </div>
      </form>
      <style>{`
        .input{width:100%; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); color:white; padding:10px 12px; border-radius:10px; outline:none}
        .input:focus{border-color:rgba(59,130,246,0.6)}
      `}</style>
    </div>
  )
}

export default LeadForm
