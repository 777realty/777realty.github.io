"use client"

import { useState } from "react"
import { MessageSquare } from "lucide-react"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4 w-72 h-96 flex flex-col">
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h3 className="font-medium">Chat with us</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
              &times;
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="p-2 bg-gray-100 rounded-lg mb-2 max-w-[80%]">Hello! How can we help you today?</div>
          </div>
          <div className="border-t pt-2">
            <input type="text" placeholder="Type your message..." className="w-full p-2 border rounded-lg" />
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition-colors"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    </div>
  )
}

