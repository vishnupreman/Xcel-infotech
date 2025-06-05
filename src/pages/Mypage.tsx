import { Construction, Home, Mail } from "lucide-react"

export default function UnderConstructionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center bg-white rounded-lg shadow-lg border border-gray-200">
        <div className="pt-8 pb-8 px-6">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-4">
              <Construction className="w-10 h-10 text-orange-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Under Construction</h1>
            <p className="text-gray-600 mb-6">
              We're working hard to bring you something amazing. Please check back soon!
            </p>
          </div>


          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">Expected completion: Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  )
}
