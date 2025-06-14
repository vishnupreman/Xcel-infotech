import { Card, CardContent } from "@/components/ui/card"

export default function XCELinfotech() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-800 text-white px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">XCELinfotech</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-gray-300 transition-colors duration-200">
              Services
            </a>
            <a href="#about" className="hover:text-gray-300 transition-colors duration-200">
              About
            </a>
            <a href="#contact" className="hover:text-gray-300 transition-colors duration-200">
              Contact 
            </a>
          </nav>
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-200 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8 leading-tight">
            AI-Powered IT Solutions for the Future
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Empowering businesses with intelligent automation, data analytics, and cloud solutions.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI-driven solutions tailored to transform your business operations
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-50 border-0 hover:shadow-lg transition-shadow duration-300 h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">AI Automation</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  Leverage machine learning and NLP to optimize workflows and customer engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-0 hover:shadow-lg transition-shadow duration-300 h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Cloud Integration</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  Scalable and secure cloud platforms tailored to your business needs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-0 hover:shadow-lg transition-shadow duration-300 h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Analytics</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  Transform raw data into actionable insights with advanced analytics tools.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-0 hover:shadow-lg transition-shadow duration-300 h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Chatbot Development</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  Custom AI chatbots for support, sales, and operations across multiple platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-6 bg-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-gray-600 leading-relaxed text-lg text-center max-w-4xl mx-auto">
              XCELinfotech is a cutting-edge IT company based in India, focused on delivering AI-driven digital
              transformation. We help startups and enterprises build smarter systems that scale.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-8">Get in touch with us to discuss your project requirements</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
            <div className="space-y-6 text-center">
              <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-2">
                <span className="font-semibold text-gray-800">Email:</span>
                <a href="mailto:info@xcelinfotech.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                  info@xcelinfotech.com
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-2">
                <span className="font-semibold text-gray-800">Phone:</span>
                <a href="tel:+918870002000" className="text-blue-600 hover:text-blue-800 transition-colors">
                  +91-8870002000
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-2">
                <span className="font-semibold text-gray-800">Address:</span>
                <span className="text-gray-600">Kochi, Kerala, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-6 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-300">© 2025 XCELinfotech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
