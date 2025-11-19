import Header from './components/Header'
import CarList from './components/CarList'
import CarForm from './components/CarForm'
import LeadForm from './components/LeadForm'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.08),transparent_25%)]" />
      <div className="relative">
        <Header />

        <main className="max-w-6xl mx-auto px-6 pb-20 space-y-8">
          <CarList />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CarForm onSubmitted={() => { /* no-op, list has refresh */ }} />
            <LeadForm />
          </div>

          <div className="text-center text-blue-200/70">
            <p>Store name: <span className="font-semibold text-white">shopwithhassan</span></p>
            <p className="mt-1">Place orders or service: <a className="underline hover:text-white" href="tel:+254748898310">+254 748 898 310</a></p>
            <p className="mt-1">Email: <a className="underline hover:text-white" href="mailto:hassannuur2018@gmail.com">hassannuur2018@gmail.com</a></p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
