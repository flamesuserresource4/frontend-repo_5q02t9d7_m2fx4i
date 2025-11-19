import { Phone, Mail, Truck, CarFront } from 'lucide-react'

const Header = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-sky-500/10 to-teal-400/10" />
      <div className="max-w-6xl mx-auto px-6 py-10 relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-600/20 text-blue-300">
                <CarFront className="w-7 h-7" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                ShopWithHassan
              </h1>
            </div>
            <p className="text-blue-200/90 mt-2">
              Selling cars & delivery service in Mombasa
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href="tel:+254748898310"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition"
            >
              <Phone className="w-4 h-4" /> +254 748 898 310
            </a>
            <a
              href="mailto:hassannuur2018@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-blue-100 hover:bg-white/20 transition"
            >
              <Mail className="w-4 h-4" /> hassannuur2018@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CarFront className="w-5 h-5 text-blue-300" />
            <div>
              <p className="text-white font-semibold">Quality cars for sale</p>
              <p className="text-blue-200/80 text-sm">Trusted selection, ready for viewing in Mombasa</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <Truck className="w-5 h-5 text-blue-300" />
            <div>
              <p className="text-white font-semibold">Fast delivery service</p>
              <p className="text-blue-200/80 text-sm">Reliable local delivery across Mombasa</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
