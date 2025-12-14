import FAQItem from './components/FAQItem'

function App() {
  const faqs = [
    {
      question: "What's the difference between Workshop Only, Coaching Only, and Full Package?",
      answer: "Workshop Only (₱9,900 early bird) is a full-day session where you build a prototype and test it with real people. Coaching Only (₱19,900 early bird) includes 12 weeks of live coaching, tools, templates, AI support, and Discord community—perfect if you've already attended a workshop or want ongoing support. Full Package (₱24,900 early bird) combines both: the workshop plus 12 weeks of coaching, taking you from prototype to revenue in 3 months. It's the best value and our recommended path for serious founders."
    },
    {
      question: "Can I upgrade from Workshop Only to Full Package after Day 1?",
      answer: "Yes! If you attend the workshop and want to continue with the 12-week coaching program, you can upgrade to the Full Package. We'll credit your workshop payment toward the Full Package, so you'll only pay the difference. This is a great way to start with lower commitment and then invest in the complete journey once you see the value."
    },
    {
      question: "What payment plans are available for the Full Package?",
      answer: "We offer three payment options for the Full Package: Full payment of ₱22,900 (one-time, best value), Two payments of ₱24,800 total (₱9,900 upon registration + ₱14,900 due Feb 1), or Three payments of ₱29,700 total (₱9,900 x 3, due upon registration, Feb 1, and Mar 1). All payments can be made via BPI, Maya/GCash, or PayPal."
    },
    {
      question: "What happens after the workshop in the Full Package?",
      answer: "The Full Package includes a complete 3-month journey: Month 1 focuses on validation (refined MVP, paying customers), Month 2 on sales (sales funnel creation), Month 3 on marketing (strategy, content calendar), with Month 4 as a bonus for pitching (optional pitch deck). You'll have 12 weeks of live coaching, access to tools and templates, AI-powered support, and a Discord community of peers and experts throughout."
    },
    {
      question: "Is the Discord community included in all options?",
      answer: "The Discord community is included in Coaching Only and Full Package options. Workshop Only participants get access to a community for ongoing support where past participants share insights, but the full Discord community with peers and experts is part of the coaching programs."
    },
    {
      question: "What if I already know my idea is good? Why do I need this?",
      answer: "This program will help you save time and money by validating before launching something that may not be worth building. Even great ideas need real customer validation—this ensures you're building something people actually want and will pay for, not just something that sounds good in theory. The Full Package takes you from validation to revenue, ensuring you're building the right thing."
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
      question: "How much individual attention will I get in a group setting? Can I ask questions about my specific situation?",
      answer: "Yes, yes, yes. Questions are encouraged throughout the workshop. This is a working session, not a lecture. You can ask questions about your specific situation, and we'll work through challenges together. The group size is kept small (only 20 seats) specifically to ensure you get the attention and guidance you need. In the coaching programs, you get even more personalized attention through live coaching sessions."
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
                className="flex items-center"
              >
                <img 
                  src="/logo.jpg" 
                  alt="Logo" 
                  className="h-8 w-8 lg:h-10 lg:w-10 object-contain"
                />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('choose-your-path')}
                className="text-base font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Programs
              </button>
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
              <h1 className="text-h1 text-gray-900 leading-tight hero-animate hero-fade-in-up">
                <span className="text-primary">Validate Before You Waste Six Months</span>
              </h1>

              {/* Description */}
              <p className="text-lead text-gray-700 max-w-2xl hero-animate hero-fade-in-up-delay-1">
                From prototype to revenue in 3 months. A full-day workshop plus 12 weeks of coaching to validate your idea, build your MVP, and generate revenue at the earliest possible time.
              </p>

              {/* First Aside - Benefits */}
              <aside className="bg-white/80 backdrop-blur-sm border-l-4 border-primary rounded-lg p-6 shadow-sm hero-animate hero-fade-in-up-delay-2">
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

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 hero-animate hero-fade-in-up-delay-3">
                <div className="flex-1">
                  <button 
                    onClick={() => scrollToSection('choose-your-path')}
                    className="btn btn-primary w-full sm:w-auto"
                  >
                    Get Full Package - ₱24,900
                  </button>
                </div>
                <div className="flex-1">
                  <button 
                    onClick={() => scrollToSection('choose-your-path')}
                    className="btn btn-secondary w-full sm:w-auto"
                  >
                    View All Options
                  </button>
                </div>
              </div>
              <div className="pt-2 hero-animate hero-fade-in-up-delay-3">
                <button 
                  onClick={() => scrollToSection('choose-your-path')}
                  className="text-sm text-gray-600 hover:text-primary transition-colors underline"
                >
                  Or start with Workshop Only (₱9,900)
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative lg:pl-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hero-image-reveal">
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
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="space-y-12">
            {/* Section Header */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">The $200K Lesson</h2>
            </div>

            {/* Content with Image */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1000&fit=crop&q=80" 
                  alt="Founder reflecting on lessons learned" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
              </div>

              {/* Text Content */}
              <div className="space-y-6">
                <p className="text-lead text-gray-200 leading-relaxed">
                  <strong className="text-white">My name is Carlo. For over 10 years, I've watched hundreds of founders across industries burn years and millions building the wrong thing</strong> — because they validated with friends, not customers. They'd hear "great idea," raise money, build for months, then launch to silence.
                </p>
                
                <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                  I burned <span className="text-primary-400 font-bold">$200K</span> doing exactly that. Now I'll teach you how to avoid the same mistake.
                </p>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="space-y-4 pt-6">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                That <span className="text-primary-400 font-bold">$200K</span> mistake taught me the <span className="text-primary-400 font-bold">validation process</span> that could have saved it. I've refined it over <span className="text-primary-400 font-bold">10 years</span> of coaching founders across industries. Now I'm teaching it in <span className="text-primary-400 font-bold">one focused day</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Path Section */}
      <section id="choose-your-path" className="relative overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="space-y-12">
            {/* Section Heading */}
            <div className="text-center">
              <h2 className="text-h2 text-gray-900">Choose Your Path</h2>
              <p className="text-lead text-gray-600 mt-4 max-w-3xl mx-auto">
                Three ways to validate and launch your idea. Pick the path that fits your needs and budget.
              </p>
            </div>

            {/* Three Column Comparison */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {/* Workshop Only */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Workshop Only</h3>
                    <p className="text-body text-gray-600">Perfect for quick validation</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-primary">₱9,900</span>
                      <span className="text-sm text-gray-500">Early Bird</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-semibold text-gray-400 line-through">₱14,900</span>
                      <span className="text-sm text-gray-500">Regular</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 space-y-4">
                    <p className="font-semibold text-gray-900">What's Included:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Full-day Build Your MVP workshop</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Prototype building & validation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Community access</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <button className="btn btn-secondary w-full">
                      Reserve Workshop Seat
                    </button>
                  </div>
                </div>
              </div>

              {/* Coaching Only */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Coaching Only</h3>
                    <p className="text-body text-gray-600">12 weeks of ongoing support</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-primary">₱19,900</span>
                      <span className="text-sm text-gray-500">Early Bird</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-semibold text-gray-400 line-through">₱29,900</span>
                      <span className="text-sm text-gray-500">Regular</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 space-y-4">
                    <p className="font-semibold text-gray-900">What's Included:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">12 weeks of live coaching</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Tools, templates, AI-powered support</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Discord community</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Feedback, validation, go-to-market prep</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <button className="btn btn-secondary w-full">
                      Book Discovery Call
                    </button>
                  </div>
                </div>
              </div>

              {/* Full Package - Featured */}
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary rounded-2xl p-8 shadow-lg relative">
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Best Value</span>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Full Package</h3>
                    <p className="text-body text-gray-700">From prototype to revenue in 3 months</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-primary">₱24,900</span>
                      <span className="text-sm text-gray-600">Early Bird</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-semibold text-gray-400 line-through">₱34,900</span>
                      <span className="text-sm text-gray-600">Regular</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Save ₱10,000 vs buying separately</p>
                  </div>

                  <div className="border-t border-primary-200 pt-6 space-y-4">
                    <p className="font-semibold text-gray-900">Everything Included:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Full-day Build Your MVP workshop</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">12 weeks of live coaching</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Tools, templates, AI-powered support</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Discord community of peers & experts</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">3-month journey: Validation → Sales → Marketing</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <button className="btn btn-primary w-full">
                      Reserve Full Package
                    </button>
                    <p className="text-xs text-gray-600 mt-2 text-center">Payment plans available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section id="what-to-expect" className="relative overflow-hidden bg-gray-50">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="space-y-8">
            {/* Section Heading */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Get Potential Customers in One Day
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
                Build your prototype. Find real people who have your problem. Talk to them. By 5pm, you'll have potential customers ready to pay.
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&q=80" 
                alt="Workshop participants building prototypes and talking to customers" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
            </div>

            {/* Morning and Afternoon - Two Columns */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Morning Section */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="relative rounded-lg overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&q=80" 
                    alt="Building prototype with AI tools" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Morning (9am-12pm)</h3>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Build Something Customers Can See</h4>
                <ul className="space-y-3 text-body text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Define your target customer & their problem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Build a clickable prototype with AI tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-gray-900">No code needed.</strong> By lunch, you'll have something real to show potential customers</span>
                  </li>
                </ul>
              </div>

              {/* Afternoon Section */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="relative rounded-lg overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop&q=80" 
                    alt="Finding and talking to real customers online" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Afternoon (1pm-5pm)</h3>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Find & Talk to People Who Will Pay</h4>
                <ul className="space-y-3 text-body text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Use AI to find 10+ people actively complaining about your exact problem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Learn how to start conversations that lead to sales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Get real responses from people who might pay—or clear signals they won't</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">
                  (Reddit, Twitter, FB groups, LinkedIn posts)
                </p>
              </div>
            </div>

            {/* Outcomes Section */}
            <div className="space-y-8 max-w-4xl mx-auto">
              {/* Headline */}
              <div className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  By 5pm, You'll Have:
                </h3>
              </div>

              {/* Outcomes List */}
              <div className="space-y-4 text-center">
                <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed">
                  <span className="font-bold text-primary">A prototype</span> you can show to real people
                </p>
                <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed">
                  <span className="font-bold text-primary">10+ potential customers</span> who want your solution
                </p>
                <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed">
                  <span className="font-bold text-primary">Real conversations</span> with people who might pay
                </p>
                <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed">
                  <span className="font-bold text-primary">Clear next steps:</span> what to change, who to target, or when to pivot
                </p>
              </div>

              {/* Bottom Message */}
              <div className="text-center space-y-6 pt-8">
                <p className="text-xl md:text-2xl text-gray-700 font-semibold leading-relaxed">
                  <span className="text-gray-900">Real people with real problems</span> who might pay you—<span className="text-gray-500 italic">not friends saying "that sounds interesting."</span>
                </p>
                <div className="pt-6 border-t-2 border-gray-300">
                  <p className="text-lg md:text-xl text-gray-700 mb-3 font-medium">
                    Want to turn <span className="text-primary font-bold">potential customers</span> into <span className="text-primary font-bold">paying customers</span>?
                  </p>
                  <p className="text-lg text-gray-700">
                    The Full Package includes 12 weeks of coaching to take you from prototype to revenue in 3 months. <button 
                      onClick={() => scrollToSection('full-package')}
                      className="text-primary hover:text-primary-700 underline font-bold text-lg"
                    >
                      Learn more →
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Package Program Section */}
      <section id="full-package" className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="space-y-12">
            {/* Section Heading */}
            <div className="text-center">
              <h2 className="text-h2 text-gray-900">From Prototype to Revenue in 3 Months</h2>
              <p className="text-lead text-gray-600 mt-4 max-w-3xl mx-auto">
                The Full Package combines the workshop with 12 weeks of live coaching to take you from validation to revenue.
              </p>
            </div>

            {/* Program Timeline */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-l-4 border-primary">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Program Schedule</h3>
              
              <div className="space-y-6">
                {/* Prework */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-24">
                    <div className="bg-primary-100 text-primary font-bold text-sm px-3 py-2 rounded-lg text-center">
                      On Signup
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Prework</h4>
                    <p className="text-body text-gray-700">Design artifacts & AI setup</p>
                  </div>
                </div>

                {/* Day 1 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-24">
                    <div className="bg-primary text-white font-bold text-sm px-3 py-2 rounded-lg text-center">
                      Day 1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Prototyping Workshop</h4>
                    <p className="text-body text-gray-700">Prototype, feedback and insights!</p>
                    <p className="text-sm text-gray-600 mt-1">📍 Launchgarage, January 23, 2026</p>
                  </div>
                </div>

                {/* Month 1 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-24">
                    <div className="bg-primary-600 text-white font-bold text-sm px-3 py-2 rounded-lg text-center">
                      Month 1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Validation</h4>
                    <p className="text-body text-gray-700">Refined MVP. Paying customer(s)</p>
                  </div>
                </div>

                {/* Month 2 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-24">
                    <div className="bg-primary-600 text-white font-bold text-sm px-3 py-2 rounded-lg text-center">
                      Month 2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Sales</h4>
                    <p className="text-body text-gray-700">Sales funnel creation</p>
                  </div>
                </div>

                {/* Month 3 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-24">
                    <div className="bg-primary-600 text-white font-bold text-sm px-3 py-2 rounded-lg text-center">
                      Month 3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Marketing</h4>
                    <p className="text-body text-gray-700">Marketing strategy. Content calendar</p>
                  </div>
                </div>

                {/* Month 4 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-24">
                    <div className="bg-gray-200 text-gray-700 font-bold text-sm px-3 py-2 rounded-lg text-center">
                      Month 4
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Pitching</h4>
                    <p className="text-body text-gray-700">Bonus! Pitch Deck (optional)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6">What's Included</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body text-gray-700">Full-day Build Your MVP workshop</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body text-gray-700">12 weeks of live coaching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body text-gray-700">Tools, templates, AI-powered support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body text-gray-700">Discord community of peers and experts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body text-gray-700">Feedback, validation, go-to-market prep</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Payment Plans</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">Full Payment</span>
                      <span className="text-lg font-bold text-primary">₱22,900</span>
                    </div>
                    <p className="text-sm text-gray-600">One-time payment (best value)</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">Two Payments</span>
                      <span className="text-lg font-bold text-primary">₱24,800</span>
                    </div>
                    <p className="text-sm text-gray-600">₱9,900 upon registration + ₱14,900 due Feb 1</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">Three Payments</span>
                      <span className="text-lg font-bold text-primary">₱29,700</span>
                    </div>
                    <p className="text-sm text-gray-600">₱9,900 x 3 (upon registration, Feb 1, Mar 1)</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-4">Payment Methods:</p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>• BPI Savings Account # 2609238286</p>
                    <p>• Maya/GCash: 09399203466</p>
                    <p>• PayPal: paypal.me/carlopvalencia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-8">
              <button className="btn btn-primary text-lg px-8 py-4">
                Reserve Full Package - ₱24,900
              </button>
              <p className="text-sm text-gray-600 mt-4">Or <button className="text-primary hover:underline font-semibold">book a discovery call</button> to learn more</p>
            </div>
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

            {/* Three Paths Grid */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {/* Workshop Only */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🎯</span>
                  <h3 className="text-lg font-bold text-gray-900">Workshop Only</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">Perfect for quick validation</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Entrepreneurs testing new offerings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Want to validate before investing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Lower commitment entry point</span>
                  </li>
                </ul>
              </div>

              {/* Full Package - Featured */}
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🚀</span>
                  <h3 className="text-lg font-bold text-gray-900">Full Package</h3>
                  <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full">Best Value</span>
                </div>
                <p className="text-sm text-gray-700 mb-4 font-semibold">Complete journey from prototype to revenue</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Serious founders ready to commit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Want ongoing support & coaching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Corporate innovators & funded startups</span>
                  </li>
                </ul>
              </div>

              {/* Coaching Only */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">💼</span>
                  <h3 className="text-lg font-bold text-gray-900">Coaching Only</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">12 weeks of ongoing support</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Already attended a workshop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Need ongoing guidance & support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Want community & expert access</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Who This Isn't For */}
            <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-gray-200 max-w-2xl mx-auto mt-8">
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
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center space-y-8">
            {/* Header */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Stop Guessing. Start Validating.
            </h2>
            
            {/* Subheader */}
            <p className="text-xl md:text-2xl text-primary-100 max-w-2xl mx-auto leading-relaxed">
              Don't let "that's a great idea" turn into another failed launch. Get actual validation data from real customers who will pay.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button className="btn btn-primary text-lg px-8 py-4">
                Get Your Slot for the Workshop
              </button>
              <button className="btn btn-secondary text-lg px-8 py-4">
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App

