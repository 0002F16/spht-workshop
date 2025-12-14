import FAQItem from './components/FAQItem'

function App() {
  const faqs = [
    {
      question: "What if I already know my idea is good? Why do I need this?",
      answer: "This workshop will help you save time and money by validating before launching something that may not be worth building. Even great ideas need real customer validation—this ensures you're building something people actually want and will pay for, not just something that sounds good in theory."
    },
    {
      question: "I'm not technical. Can I really build a prototype without coding experience?",
      answer: "Yes, absolutely. We'll use AI tools, and they're more than enough to get sales and test your idea—which is what matters most. If validation is positive, you'll know with certainty that hiring developers and investing time will be the right decision. You don't need to be technical to validate."
    },
    {
      question: "What if I can't finish building my prototype by lunch? Will I still get value?",
      answer: "Yes. Even if you don't finish building your complete prototype by lunch, you'll still learn the process and methodology. The afternoon session on finding and testing with real customers is equally valuable—if not more so—than the building phase. You'll walk away with a repeatable validation process you can apply anytime."
    },
    {
      question: "What if I don't get positive feedback from the 10+ people? Does that mean my idea is bad?",
      answer: "Not getting positive feedback is still valuable data. You'll learn from the conversations—their actual pain points, what they're really looking for, and opportunities to pivot. This insight is something you'll never get otherwise, and it could lead you to a better solution than your original idea. No response is still data you can act on."
    },
    {
      question: "Will this work for my industry/niche, or is it only for certain types of products?",
      answer: "Yes, any idea is welcome. We'll advise you on the best steps based on what you're working on. Carlo has experience coaching hundreds of startups across various industries—B2B SaaS, e-commerce, services, consumer products, and more. The validation principles apply universally, and we'll help you adapt them to your specific situation."
    },
    {
      question: "What happens after the workshop? Do I get ongoing support or am I on my own?",
      answer: "After the workshop, you can choose to book us for our coaching program for deeper, ongoing support. We also have a community for ongoing support where past participants continue to share insights and get help. You're not alone after this session ends—we're here to support your journey."
    },
    {
      question: "How much individual attention will I get in a group setting? Can I ask questions about my specific situation?",
      answer: "Yes, yes, yes. Questions are encouraged throughout the workshop. This is a working session, not a lecture. You can ask questions about your specific situation, and we'll work through challenges together. The group size is kept small (only 20 seats) specifically to ensure you get the attention and guidance you need."
    },
    {
      question: "What's your refund policy? What if I can't attend after booking?",
      answer: "We offer full refunds if you cancel at least 7 days before the workshop date. For cancellations within 7 days, we can transfer your seat to a future workshop or provide a 50% refund. Please contact us as soon as possible if your plans change, and we'll work with you to find the best solution."
    }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-xl lg:text-2xl font-bold text-gray-900 hover:text-primary transition-colors"
              >
                Validate<span className="text-primary">Workshop</span>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('what-to-expect')}
                className="text-base font-medium text-gray-700 hover:text-primary transition-colors"
              >
                What to Expect
              </button>
              <button
                onClick={() => scrollToSection('target')}
                className="text-base font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Target
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-base font-medium text-gray-700 hover:text-primary transition-colors"
              >
                FAQ
              </button>
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <button className="btn btn-primary hidden sm:inline-flex">
                Book a Call
              </button>
              {/* Mobile menu button (optional for future) */}
              <button className="md:hidden text-gray-700 hover:text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-white pt-16 lg:pt-20">
        {/* Background Pattern/Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Main Heading */}
              <h1 className="text-h1 text-gray-900 leading-tight">
                <span className="text-primary">Validate Before You Waste Six Months</span>
              </h1>

              {/* Description */}
              <p className="text-lead text-gray-700 max-w-2xl">
                A full-day working session where you build a usable prototype and put it in front of real people—so you go home with actual responses (or clear non-response you can act on).
              </p>

              {/* First Aside - Benefits */}
              <aside className="bg-white/80 backdrop-blur-sm border-l-4 border-primary rounded-lg p-6 shadow-sm">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-body text-gray-700">Build a usable prototype you can show to real people (not just slides)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-body text-gray-700">Start your feedback loop the same day (responses count; non-response is still data)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-body text-gray-700">Leave with next-step clarity: what to change, test, or drop</span>
                  </li>
                </ul>
              </aside>

              {/* Second Aside - Event Details */}
              <aside className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <span className="text-sm font-semibold text-gray-900">Date:</span>
                      <span className="text-sm text-gray-700 ml-2">Jan 23, 2026</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <span className="text-sm font-semibold text-gray-900">Location:</span>
                      <span className="text-sm text-gray-700 ml-2">Launchgarage, Quezon City</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <span className="text-sm font-semibold text-gray-900">Format:</span>
                      <span className="text-sm text-gray-700 ml-2">Full-day working session (the opposite of a lecture. Bring your laptops)</span>
                    </div>
                  </div>
                </div>
              </aside>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex-1">
                  <button className="btn btn-primary w-full sm:w-auto">
                    Register for Jan 23 Workshop
                  </button>
                  <p className="text-sm text-gray-600 mt-2">
                    Ready to build? Save your seat now <span className="font-semibold text-primary">only 12 left</span>
                  </p>
                </div>
                <div className="flex-1">
                  <button className="btn btn-secondary w-full sm:w-auto">
                    Book a Discovery Call
                  </button>
                  <p className="text-sm text-gray-600 mt-2">
                    Unsure? Book us a call!
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative lg:pl-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Main Image */}
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1000&fit=crop&q=80" 
                  alt="Workshop participants collaborating" 
                  className="w-full h-auto object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -z-10 -top-6 -right-6 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
              <div className="absolute -z-10 -bottom-6 -left-6 w-64 h-64 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative overflow-hidden bg-gray-900 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-950"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="space-y-8">
            {/* Opening Statement */}
            <div className="space-y-6">
              <p className="text-lead text-gray-200 leading-relaxed">
                Most founders waste months and spend millions building - or paying people to build the wrong thing. They talk to people, hear "that's a great idea," then launch to crickets.
              </p>
              
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                I burned <span className="text-primary-400 font-bold">$200K</span> doing exactly that. Now I want to teach you how to avoid making the same mistake.
              </p>
            </div>

            {/* Value Proposition */}
            <div className="space-y-4 pt-6">
              <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                <span className="text-primary-400">On January 23, you'll compress that 6 months into one day.</span> Build a clickable prototype by lunch. Test it with 10+ real people by 5pm. Walk out knowing if your idea has legs or needs to pivot.
              </p>
              
              <p className="text-lg md:text-xl text-gray-300 font-medium pt-2">
                No developers. No investors. Just ChatGPT, a laptop, and one focused day.
              </p>
            </div>

            {/* Pricing Aside */}
            <aside className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl mt-12">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🎯</div>
                <div className="flex-1 space-y-6">
                  <div>
                    <a href="#" className="inline-block">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 hover:text-primary transition-colors">
                        Save Your Seat - Jan 23
                      </h3>
                    </a>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="text-lg md:text-xl font-semibold text-gray-700">Early Bird:</span>
                      <span className="text-2xl md:text-3xl font-bold text-primary">₱9,900</span>
                      <span className="text-sm text-gray-500">(ends Jan 10)</span>
                    </div>
                    
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg md:text-xl font-semibold text-gray-700">Regular:</span>
                      <span className="text-xl md:text-2xl font-bold text-gray-900 line-through">₱14,900</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-base md:text-lg font-semibold text-gray-900">
                      Only <span className="text-primary">20 seats</span> available
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <button className="btn btn-primary w-full md:w-auto">
                      Reserve Your Spot
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section id="what-to-expect" className="relative overflow-hidden bg-gray-50">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="space-y-16">
            {/* Section Heading */}
            <div className="text-center">
              <h2 className="text-h2 text-gray-900">What to Expect</h2>
            </div>

            {/* Morning Section */}
            <div className="space-y-8">
              {/* Morning Heading */}
              <div className="flex items-center gap-3">
                <span className="text-3xl">🌅</span>
                <h3 className="text-h3 text-gray-900">Morning (9am-12pm)</h3>
              </div>

              {/* Morning Image */}
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&q=80" 
                  alt="Clickable prototype being built with AI tools" 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Morning Content */}
              <div className="space-y-4 max-w-3xl">
                <h4 className="text-h4 text-gray-900">Build Your Prototype</h4>
                <p className="text-body text-gray-700">
                  Define who you're building for and what problem you're solving. Sketch your solution. Then build a clickable prototype using ChatGPT and AI tools like v0 or Lovable.
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  <strong>No code. No design skills.</strong> By lunch, you'll have something you can show people.
                </p>
              </div>
            </div>

            {/* Afternoon Section */}
            <div className="space-y-8">
              {/* Afternoon Heading */}
              <div className="flex items-center gap-3">
                <span className="text-3xl">🔍</span>
                <h3 className="text-h3 text-gray-900">Afternoon (1pm-5pm)</h3>
              </div>

              {/* Afternoon Content */}
              <div className="space-y-4 max-w-3xl">
                <h4 className="text-h4 text-gray-900">Test With Real People</h4>
                <p className="text-body text-gray-700">
                  Here's the part most founders skip: we'll show you how to use AI to find 10+ people online who are complaining about the exact problem you're solving.
                </p>
                <div className="flex flex-wrap gap-3 text-body text-gray-700">
                  <span className="font-semibold text-gray-900">Reddit threads.</span>
                  <span className="font-semibold text-gray-900">Twitter rants.</span>
                  <span className="font-semibold text-gray-900">FB groups.</span>
                  <span className="font-semibold text-gray-900">LinkedIn posts.</span>
                </div>
                <p className="text-body text-gray-700">
                  We'll teach you how to search for them, what questions to ask, and how to tell if they actually care.
                </p>
              </div>

              {/* Afternoon Image */}
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop&q=80" 
                  alt="Reddit thread showing real customer complaints" 
                  className="w-full h-auto object-cover"
                />
                {/* Blur overlay to suggest anonymization */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/10 to-gray-900/20"></div>
              </div>
            </div>

            {/* Aside Card */}
            <aside className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-l-4 border-primary max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">✅</div>
                <div className="space-y-4">
                  <p className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                    By 5pm, you'll have real feedback from real people.
                  </p>
                  <p className="text-lg text-gray-700">
                    Not your friends. Not "that sounds interesting" replies. <strong className="text-gray-900">Actual validation data.</strong>
                  </p>
                  <p className="text-body text-gray-700 pt-2">
                    You follow along, or just watch. Up to you. But by the end, you'll know how to do this yourself.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="space-y-16">
            {/* Section Heading */}
            <div className="text-center">
              <h2 className="text-h2 text-gray-900">Words for Carlo</h2>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              {/* Testimonial 1 - Francis Simisim */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <blockquote className="space-y-6">
                  <p className="text-body text-gray-700 leading-relaxed">
                    "We see pitches everyday and we feel that most have not validated their idea and have proceeded to create the product and that's our main issue. Attending Carlo's workshop prevents founders from just creating products and spending money. It also allows them to be more efficient with their products and ideas."
                  </p>
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80" 
                            alt="Francis Simisim" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-base font-bold text-gray-900">Francis Simisim</p>
                        <p className="text-sm text-gray-600 mt-1">Social Light, Blogapalooza and When in Manila</p>
                        <p className="text-sm text-gray-500 mt-1">Co-founder, Venture Capitalist and Startup Advocate</p>
                      </div>
                    </div>
                  </div>
                </blockquote>
              </div>

              {/* Testimonial 2 - Maria Korina Bertulfo */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <blockquote className="space-y-6">
                  <p className="text-body text-gray-700 leading-relaxed">
                    "You will always be part of my startup story, I tell people na I met you prior sa Final Pitch. Continue to be a blessing to others. Tanda ko pa rin lahat ng mga naturo mo. Thanks Carlo for everything!"
                  </p>
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80" 
                            alt="Maria Korina Bertulfo" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-base font-bold text-gray-900">Maria Korina Bertulfo</p>
                        <p className="text-sm text-gray-600 mt-1">Filipina Homebased Moms (FHMoms)</p>
                        <p className="text-sm text-gray-500 mt-1">CEO and Founder, Final Pitch Finalist</p>
                      </div>
                    </div>
                  </div>
                </blockquote>
              </div>

              {/* Testimonial 3 - Alex Alabiso */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <blockquote className="space-y-6">
                  <p className="text-body text-gray-700 leading-relaxed">
                    "Super important to determine ahead of time whether or not there is a market for your product. So getting input from your target audience, your target customer base on the assumptions that you've made is critical. Ultimately they are going to be the customers that will pay you."
                  </p>
                  <p className="text-body text-gray-700 leading-relaxed font-medium">
                    "If you don't do it, you end up with a product with no customers."
                  </p>
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80" 
                            alt="Alex Alabiso" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-base font-bold text-gray-900">Alex Alabiso</p>
                        <p className="text-sm text-gray-600 mt-1">Sprout Solutions</p>
                        <p className="text-sm text-gray-500 mt-1">Chief Technology Officer</p>
                      </div>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Section */}
      <section id="target" className="relative overflow-hidden bg-gray-100">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="space-y-12">
            {/* Section Heading */}
            <div className="text-center">
              <h2 className="text-h2 text-gray-900">Target</h2>
            </div>

            {/* Two Column Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Who This Is For */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">✅</span>
                  <h3 className="text-h4 text-gray-900">Who This Is For</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body text-gray-700">Entrepreneurs testing new offerings before investing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body text-gray-700">Corporate innovators who need proof before building</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body text-gray-700">Serious founders tired of guessing what customers want</span>
                  </li>
                </ul>
              </div>

              {/* Who This Isn't For */}
              <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">❌</span>
                  <h3 className="text-h4 text-gray-900">Who This Isn't For</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-body text-gray-600">Junior founders still looking for ideas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-body text-gray-600">People who won't do the work during the workshop</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-body text-gray-600">Certificate collectors</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative overflow-hidden bg-white">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="space-y-12">
            {/* Section Heading */}
            <div className="text-center">
              <h2 className="text-h2 text-gray-900">Frequently Asked Questions</h2>
            </div>

            {/* FAQ Items */}
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Stop Guessing. Start Validating.
              </h2>
              <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
                Save 6 months and avoid wasting $200K. Get real feedback from real people in one focused day—not empty promises from friends.
              </p>
            </div>

            {/* Value Props */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl mb-3">⚡</div>
                <p className="text-lg font-semibold text-white">Build by Lunch</p>
                <p className="text-sm text-primary-100 mt-2">Clickable prototype ready in 3 hours</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl mb-3">🎯</div>
                <p className="text-lg font-semibold text-white">Test by 5pm</p>
                <p className="text-sm text-primary-100 mt-2">10+ real responses the same day</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl mb-3">💰</div>
                <p className="text-lg font-semibold text-white">Save Everything</p>
                <p className="text-sm text-primary-100 mt-2">Time, money, and the wrong direction</p>
              </div>
            </div>

            {/* Pricing & Urgency */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl max-w-2xl mx-auto mt-8">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Early Bird Pricing</p>
                  <div className="flex items-baseline justify-center gap-3 flex-wrap">
                    <span className="text-4xl md:text-5xl font-bold text-primary">₱9,900</span>
                    <span className="text-xl md:text-2xl font-bold text-gray-400 line-through">₱14,900</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Ends January 10 • Jan 23, 2026 Workshop</p>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-lg font-bold text-gray-900">
                      Only <span className="text-primary">12 seats left</span>
                    </p>
                  </div>
                  
                  <button className="btn btn-primary w-full text-lg py-4 text-xl font-bold">
                    Reserve Your Seat Now
                  </button>
                  
                  <p className="text-sm text-gray-600 mt-4">
                    Full refund if you cancel 7+ days before • Launchgarage, Quezon City
                  </p>
                </div>
              </div>
            </div>

            {/* Final Push */}
            <p className="text-lg md:text-xl text-primary-100 max-w-2xl mx-auto pt-4">
              Don't let "that's a great idea" turn into another failed launch. Get validation data that matters.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App

