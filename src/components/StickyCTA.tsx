import { useEffect, useState } from 'react'

export default function StickyCTA() {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <>
      {show && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-full bg-brand-600 hover:bg-brand-500 shadow-glow"
        >
          Hire Me
        </button>
      )}
      {open && (
        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center">
          <form
            className="glass rounded-2xl p-6 w-full max-w-md"
            onSubmit={(e) => { e.preventDefault(); setOpen(false) }}
          >
            <h3 className="text-lg font-semibold mb-3">Quick contact</h3>
            <input placeholder="Name" className="w-full mb-2 bg-white/5 border border-white/10 rounded-md px-3 py-2" required />
            <input placeholder="Email" type="email" className="w-full mb-2 bg-white/5 border border-white/10 rounded-md px-3 py-2" required />
            <textarea placeholder="Message" className="w-full mb-4 bg-white/5 border border-white/10 rounded-md px-3 py-2" rows={4} required />
            <div className="flex justify-end gap-2">
              <button type="button" className="px-3 py-2 border border-white/10 rounded-md" onClick={() => setOpen(false)}>Cancel</button>
              <button className="px-4 py-2 bg-brand-600 rounded-md">Send</button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
