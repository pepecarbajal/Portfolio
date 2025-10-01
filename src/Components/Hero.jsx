const Hero = ({ info, social }) => {
    const { image, name, profession } = info;
    const { github, linkedin, email, phone, location } = social;

    return (
        <header className="w-full h-full lg:fixed lg:top-0 lg:left-0 lg:w-[45%] p-8 sm:p-12 md:p-16">
            <div className="md:ml-[20%] lg:ml-[30%]">
                <div className="w-36 h-36 mb-8 lg:mb-12">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full rounded-full object-cover"
                    />
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold text-textmain mb-2">{name}</h1>
                <h2 className="text-xl lg:text-2xl text-textmain mb-4">{profession}</h2>

                <ul className="mt-14 mb-14 space-y-2">
                    <li className="text-subtext hover:text-textmain">____ <a href="#about" className="text-subtext hover:text-textmain">Sobre mí</a></li>
                    <li className="text-subtext hover:text-textmain">____ <a href="#projects" className="text-subtext hover:text-textmain">Proyectos</a></li>
                    <li className="text-subtext hover:text-textmain">____ <a href="#skills" className="text-subtext hover:text-textmain">Habilidades</a></li>
                </ul>
                <hr className="my-8 border-t border-subtext" />
                <ul className="mt-14 mb-14 space-y-2">
                    <li className="text-subtext flex items-center hover:text-textmain">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail w-4 h-4" bis_size="{&quot;x&quot;:313,&quot;y&quot;:2173,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:313,&quot;abs_y&quot;:2221}"><rect width="20" height="16" x="2" y="4" rx="2" bis_size="{&quot;x&quot;:314,&quot;y&quot;:2175,&quot;w&quot;:13,&quot;h&quot;:10,&quot;abs_x&quot;:314,&quot;abs_y&quot;:2223}"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" bis_size="{&quot;x&quot;:314,&quot;y&quot;:2177,&quot;w&quot;:13,&quot;h&quot;:3,&quot;abs_x&quot;:314,&quot;abs_y&quot;:2225}"></path></svg>
                        <a href={`mailto:${email}`} className="text-subtext ml-2 hover:text-textmain">{email}</a>
                    </li>
                    <li className="text-subtext flex items-center hover:text-textmain">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone w-4 h-4" bis_size="{&quot;x&quot;:313,&quot;y&quot;:2209,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:313,&quot;abs_y&quot;:2257}"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" bis_size="{&quot;x&quot;:314,&quot;y&quot;:2210,&quot;w&quot;:13,&quot;h&quot;:13,&quot;abs_x&quot;:314,&quot;abs_y&quot;:2258}"></path></svg>
                        <a href="http://wa.me/527561270452" target="_blank" className="text-subtext ml-2 hover:text-textmain">{phone}</a>
                    </li>
                    <li className="text-subtext flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin w-4 h-4" bis_size="{&quot;x&quot;:313,&quot;y&quot;:2245,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:313,&quot;abs_y&quot;:2293}"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" bis_size="{&quot;x&quot;:315,&quot;y&quot;:2246,&quot;w&quot;:10,&quot;h&quot;:13,&quot;abs_x&quot;:315,&quot;abs_y&quot;:2294}"></path><circle cx="12" cy="10" r="3" bis_size="{&quot;x&quot;:319,&quot;y&quot;:2249,&quot;w&quot;:4,&quot;h&quot;:4,&quot;abs_x&quot;:319,&quot;abs_y&quot;:2297}"></circle></svg>
                        <p className="text-subtext ml-2">{location}</p>
                    </li>
                </ul>
                <div className="flex mt-4">
                    <a href={linkedin} target="_blank">
                        <img src="/logos/linkedin.png" alt="LinkedIn Logo"  className="w-16 pr-4"/>
                    </a>
                    <a href={github} target="_blank" >
                        <img src="/logos/github.png" alt="GitHub Logo" className="w-16 pr-4" />
                    </a>
                </div>

            </div>

        </header>
    );
}

export default Hero;