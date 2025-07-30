
const contact = ()  =>{
    return(
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">

           <div className="px-4 w-150">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r  from bg-purple-500  to-purple-800 bg-clip-text 
                              text-transparent text-center">Get In Touch</h2>
         

           <form action="" className="space-y-6">
            <div className="relative">
                <input type="text" id="name" name="name" placeholder="name" required 
                className="w-full bg-white/5 borrder border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-blue-500/5" />
            
            </div>
            <div>
                <input type="email" id="email" name="email" placeholder="Email"required 
                className="w-full bg-white/5 borrder border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-blue-500/5"/>
            </div>
            <div>
                <textarea type="Message" id="Message" name="Message" placeholder="Message" row ="8" required 
                className="w-full bg-white/5 borrder border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-blue-500/5"/>
            </div>
            <button type="submit" className="w-full bg-purple-500 text-white py-3 px-6 rounded font-medium  relative overflow-hidden hover:translate-y-1 hover:shadow-[0_15px_8px_rgba(59,130,246,0.2)] transition focus:border-purple-600">submit</button>
           </form>
           </div>

        </section>
    )
}

export default contact