function FAQItem({ question, answer }) {
  return (
    <details className="group bg-gray-50 rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 transition-colors">
      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
        <h3 className="text-lg font-semibold text-gray-900 flex-1 pr-4">
          {question}
        </h3>
        <svg 
          className="w-5 h-5 text-gray-500 flex-shrink-0 transform transition-transform group-open:rotate-180" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-6 pt-4 pb-6 border-t border-gray-200">
        <p className="text-body text-gray-700 leading-relaxed">
          {answer}
        </p>
      </div>
    </details>
  )
}

export default FAQItem

