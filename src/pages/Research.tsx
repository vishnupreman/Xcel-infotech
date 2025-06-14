import { Card, CardContent } from "@/components/ui/card"

export default function Research() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Header */}
      <header className="bg-slate-800 text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 w-full">
        <div className="w-full text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-tight max-w-4xl mx-auto">
            AI-Driven IT & Research Support for PhD and Industry Researchers
          </h1>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="bg-gray-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 w-full">
        <div className="max-w-7xl mx-auto">
          {/* What We Do Section */}
          <div className="mb-12 sm:mb-16 flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-6 sm:mb-8">What We Do</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-5xl ">
              At XCELinfotech's Research Division, we offer specialized internal IT and research support services
                tailored for academic and industrial researchers. We help scholars, PhD candidates, and corporate R&D
              teams with cutting-edge tools and end-to-end support.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Research Proposal Development */}
            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4">Research Proposal Development</h3>
                <p className="text-gray-700 leading-relaxed">
                  Craft high-quality, fundable research proposals aligned with{" "}
                  <span className="text-blue-600 font-medium">Scopus</span>,{" "}
                  <span className="text-blue-600 font-medium">SCI</span>, and high-impact journal criteria.
                </p>
              </CardContent>
            </Card>

            {/* Literature Review Support */}
            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4">Literature Review Support</h3>
                <p className="text-gray-700 leading-relaxed">
                  Detailed, comprehensive literature reviews using AI-based research mining tools and systematic review
                  methods.
                </p>
              </CardContent>
            </Card>

            {/* Paper Writing & Publication */}
            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4">Paper Writing & Publication</h3>
                <p className="text-gray-700 leading-relaxed">
                  Guidance and technical writing support for <span className="text-blue-600 font-medium">Scopus</span>,{" "}
                  <span className="text-blue-600 font-medium">SCI</span>,{" "}
                  <span className="text-blue-600 font-medium">Springer</span>,{" "}
                  <span className="text-blue-600 font-medium">IEEE</span>, and{" "}
                  <span className="text-blue-600 font-medium">Elsevier</span> journal submissions.
                </p>
              </CardContent>
            </Card>

            {/* Technical Implementation */}
            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4">Technical Implementation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our IT team helps build models, prototypes, and proof-of-concept systems using latest AI & cloud
                  tools.
                </p>
              </CardContent>
            </Card>

            {/* Plagiarism Checking */}
            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4">Plagiarism Checking</h3>
                <p className="text-gray-700 leading-relaxed">
                  Advanced tools for similarity checking and content enhancement with support for academic standards.
                </p>
              </CardContent>
            </Card>

            {/* End-to-End PhD Support */}
            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4">End-to-End PhD Support</h3>
                <p className="text-gray-700 leading-relaxed">
                  Complete research support — from topic selection to thesis writing and viva presentation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-6 sm:py-8 px-4 sm:px-6 w-full">
        <div className="w-full text-center">
          <p className="text-sm sm:text-base text-gray-300">
            © 2025 XCELinfotech Research Division | Inspired by Griantek
          </p>
        </div>
      </footer>
    </div>
  )
}
