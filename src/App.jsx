import FAQItem from './components/FAQItem'

function App() {
  const faqs = [
    {
      question: "What will I leave with after the Workshop (Day 1)?",
      answer: "You'll leave with (1) a working prototype or demo you can show, (2) a validation plan (who to test, what to ask, what \"good\" looks like), and (3) a 14-day execution roadmap with prioritized next actions."
    },
    {
      question: "What's the difference between Workshop Only, Coaching Only, and Full Package?",
      answer: "Workshop Only is the full-day build + validation sprint to get to a prototype and a real-world test plan. Coaching Only is a 12-week implementation support track (live sessions, templates/tools, structured accountability, and community) for people who already have a prototype or clear direction. Full Package combines the Workshop plus the 12-week coaching track so you can go from prototype to implementation with guidance."
    },
    {
      question: "Can I upgrade from Workshop Only to Full Package after Day 1?",
      answer: "Yes. If you join the workshop and decide you want the 12-week coaching track, you can upgrade and your workshop payment is credited toward the Full Package. You'll only pay the difference."
    },
    {
      question: "How does the 12-week coaching work, and what's expected from me?",
      answer: "Coaching runs for 12 weeks with a weekly cadence and structured assignments. Expect to spend a few focused hours per week executing the plan (customer conversations, iteration, and rollout steps). You'll get guidance, feedback, tools/templates, and community support to keep momentum and avoid \"stuck\" weeks."
    },
    {
      question: "I'm not technical. Can I still build a prototype without coding?",
      answer: "Yes. The workshop uses no-code and AI-assisted tools to create a prototype you can show and test. The goal is not perfect engineering—the goal is a believable demo that lets you validate demand and de-risk bigger builds."
    },
    {
      question: "What if validation is weak or negative—does that mean my idea is dead?",
      answer: "Not necessarily. Weak signals are still useful data. You'll use the results to decide whether to iterate the offer, change the audience, adjust pricing/packaging, or stop before wasting time and money. The point is to make a clear decision based on evidence, not guesses."
    },
    {
      question: "What's your refund or transfer policy if I can't attend?",
      answer: "If you cancel at least 7 days before the workshop date, you can request a full refund. Within 7 days, you can transfer your seat to a future workshop or request a partial refund per the stated policy on the checkout/registration page."
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
                onClick={() => scrollToSection('full-package')}
                className="text-base font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Full Package
              </button>
              <button
                onClick={() => scrollToSection('target')}
                className="text-base font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Who It's For
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
              <a 
                href="https://api.ghlsandbox.net/widget/booking/B7cMXh3yR0sMoOaaHiwV"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary hidden sm:inline-flex"
              >
                Book a Call
              </a>
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
              <div className="flex flex-col sm:flex-row gap-2 pt-4 hero-animate hero-fade-in-up-delay-3">
                <a 
                  href="https://api.ghlsandbox.net/widget/booking/B7cMXh3yR0sMoOaaHiwV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full sm:w-auto"
                >
                  Book a Call
                </a>
                <button 
                  onClick={() => scrollToSection('choose-your-path')}
                  className="btn btn-secondary w-full sm:w-auto"
                >
                  View Programs
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
                  src="/Carlo P Valencia.jpg" 
                  alt="Carlo P Valencia, founder and coach" 
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
              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-200 leading-relaxed">
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
                    <a 
                      href="https://api.ghlsandbox.net/widget/form/VUBtDYBNuZuc9tttDPUS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary w-full"
                    >
                      Reserve Workshop Seat
                    </a>
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
                    <a 
                      href="https://api.ghlsandbox.net/widget/form/VUBtDYBNuZuc9tttDPUS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary w-full"
                    >
                      Book Discovery Call
                    </a>
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
                    <a 
                      href="https://api.ghlsandbox.net/widget/form/VUBtDYBNuZuc9tttDPUS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full"
                    >
                      Reserve Full Package
                    </a>
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
                src="/20251127_133335.jpg" 
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

              {/* CTA Button */}
              <div className="text-center pt-6">
                <a 
                  href="https://api.ghlsandbox.net/widget/form/VUBtDYBNuZuc9tttDPUS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-lg px-8 py-4 font-bold"
                >
                  Get Your Slot for the Workshop
                </a>
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
      <section id="full-package" className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&q=80" 
            alt="Entrepreneurs collaborating and building prototypes" 
            className="w-full h-full object-cover opacity-25"
            style={{ filter: 'sepia(40%) saturate(60%)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/75 to-blue-900/85"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="space-y-16">
            {/* Section Heading */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Turn Your Idea Into Paying Customers in 3 Months
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 mt-6 max-w-3xl mx-auto leading-relaxed">
                Stop building in the dark. The Full Package gives you the workshop plus 12 weeks of live coaching to take you from prototype to revenue.
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left Column - Opening Promise */}
              <div className="space-y-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                  <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Stop Guessing. Start Selling.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    From struggling founder to revenue-generating business. Get 12 weeks of 1-on-1 support, tools, templates, and a community of peers—everything you need to turn potential customers into paying customers.
                  </p>
                </div>

                {/* CTA */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-white/20">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Your 3-Month Journey</h3>
                  <p className="text-lg mb-6 text-gray-700">Get the Full Package for <span className="font-bold text-primary">₱24,900</span></p>
                  <a 
                    href="https://api.ghlsandbox.net/widget/form/VUBtDYBNuZuc9tttDPUS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full text-lg py-4 font-bold"
                  >
                    Reserve Full Package
                  </a>
                  <p className="text-sm text-gray-600 mt-4 text-center">Or <button className="text-primary hover:underline font-semibold">book a discovery call</button> to learn more</p>
                </div>
              </div>

              {/* Right Column - Timeline */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Your Journey to Revenue</h3>
                
                <div className="relative">
                  {/* Vertical Timeline Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-300"></div>
                  
                  <div className="space-y-8">
                    {/* Day 1 */}
                    <div className="relative flex gap-6">
                      <div className="flex-shrink-0 z-10">
                        <div className="bg-blue-600 text-white font-bold text-sm px-4 py-2 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                          D1
                        </div>
                      </div>
                      <div className="flex-1 pb-8">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Build Your Prototype & Find Potential Customers</h4>
                        <p className="text-body text-gray-700">Full-day workshop where you build a prototype and talk to 10+ real people who have your problem</p>
                        <p className="text-sm text-gray-600 mt-2">📍 Launchgarage, January 23, 2026</p>
                      </div>
                    </div>

                    {/* Month 1 */}
                    <div className="relative flex gap-6">
                      <div className="flex-shrink-0 z-10">
                        <div className="bg-blue-600 text-white font-bold text-sm px-4 py-2 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                          M1
                        </div>
                      </div>
                      <div className="flex-1 pb-8">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Your First Paying Customer</h4>
                        <p className="text-body text-gray-700">Refine your MVP based on real feedback. Get your first paying customer. Validate that people will actually pay for your solution.</p>
                      </div>
                    </div>

                    {/* Month 2 */}
                    <div className="relative flex gap-6">
                      <div className="flex-shrink-0 z-10">
                        <div className="bg-blue-600 text-white font-bold text-sm px-4 py-2 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                          M2
                        </div>
                      </div>
                      <div className="flex-1 pb-8">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Build Your Sales Funnel</h4>
                        <p className="text-body text-gray-700">Create a repeatable system to turn potential customers into paying customers. Scale beyond your first sale.</p>
                      </div>
                    </div>

                    {/* Month 3 */}
                    <div className="relative flex gap-6">
                      <div className="flex-shrink-0 z-10">
                        <div className="bg-blue-600 text-white font-bold text-sm px-4 py-2 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                          M3
                        </div>
                      </div>
                      <div className="flex-1 pb-8">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Generate Consistent Revenue</h4>
                        <p className="text-body text-gray-700">Launch your marketing strategy. Build a content calendar. Turn your validation into a sustainable revenue stream.</p>
                      </div>
                    </div>

                    {/* Month 4 */}
                    <div className="relative flex gap-6">
                      <div className="flex-shrink-0 z-10">
                        <div className="bg-gray-400 text-white font-bold text-sm px-4 py-2 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                          M4
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Pitch to Investors (Optional)</h4>
                        <p className="text-body text-gray-700">Bonus! Create your pitch deck and prepare to raise funding if that's your goal.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                            src="/francis-simisim.jpeg" 
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
                            src="/maria-korina-bertulfo.jpeg" 
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
                            src="/alex-alabiso.jpeg" 
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

      {/* Who It's For Section */}
      <section id="target" className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&q=80" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
            style={{ filter: 'sepia(30%) saturate(80%)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-900/80"></div>
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="space-y-12">
            {/* Section Heading */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Is This Right for You?
              </h2>
              <p className="text-xl text-blue-100 mt-4 max-w-2xl mx-auto">
                If you're tired of building in the dark, this is for you.
              </p>
            </div>

            {/* Who This Is For - Problem/Solution Format */}
            <div className="space-y-8">
              {/* Problem Statement */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-10 border-l-4 border-primary shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">You're Here Because:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <p className="text-lg text-gray-700">
                      <strong className="text-gray-900">You have an idea</strong> but don't know if people will pay for it
                    </p>
                    <p className="text-lg text-gray-700">
                      <strong className="text-gray-900">You've built before</strong> and launched to silence
                    </p>
                    <p className="text-lg text-gray-700">
                      <strong className="text-gray-900">You're spending months</strong> building something nobody wants
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-lg text-gray-700">
                      <strong className="text-gray-900">You need validation</strong> before investing more time and money
                    </p>
                    <p className="text-lg text-gray-700">
                      <strong className="text-gray-900">You want real feedback</strong> from actual customers, not friends
                    </p>
                    <p className="text-lg text-gray-700">
                      <strong className="text-gray-900">You're ready to commit</strong> to turning your idea into revenue
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution - Two Paths */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Workshop Only */}
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl border-2 border-white/30">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Start with the Workshop</h3>
                  <p className="text-body text-gray-700 mb-6">
                    Perfect if you want to validate quickly and see if this approach works for you.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-body text-gray-700">Get potential customers in one day</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-body text-gray-700">Lower commitment, test the waters</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-body text-gray-700">Upgrade to Full Package anytime</span>
                    </li>
                  </ul>
                  <button 
                    onClick={() => scrollToSection('choose-your-path')}
                    className="btn btn-primary w-full"
                  >
                    Learn More
                  </button>
                </div>

                {/* Full Package */}
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl border-2 border-primary relative">
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Best Value</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Go All In with Full Package</h3>
                  <p className="text-body text-gray-700 mb-6">
                    For serious founders who want to go from idea to revenue in 3 months.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-body text-gray-700">Workshop + 12 weeks of coaching</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-body text-gray-700">Turn potential customers into paying customers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-body text-gray-700">Complete journey to revenue</span>
                    </li>
                  </ul>
                  <button 
                    onClick={() => scrollToSection('full-package')}
                    className="btn btn-primary w-full"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Who This Isn't For - Simplified */}
              <div className="text-center">
                <p className="text-lg text-blue-100">
                  <strong className="text-white">Not for:</strong> People still looking for ideas, those who won't do the work, or certificate collectors.
                </p>
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
              <a 
                href="https://api.ghlsandbox.net/widget/form/VUBtDYBNuZuc9tttDPUS"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-lg px-8 py-4"
              >
                Get Your Slot for the Workshop
              </a>
              <a 
                href="https://api.ghlsandbox.net/widget/booking/B7cMXh3yR0sMoOaaHiwV"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary text-lg px-8 py-4"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App

