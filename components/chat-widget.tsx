"use client"

import { useState } from "react"
import { MessageSquare, X, Paperclip } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/20" onClick={() => setIsOpen(false)} />
          <div className="relative bg-white rounded-lg shadow-lg p-4 mb-4 w-[350px] h-[450px] flex flex-col animate-in slide-in-from-bottom-5">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h3 className="font-semibold text-lg">Chat with us</h3>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                <p className="text-sm text-muted-foreground">Hello! How can we help you today?</p>
              </div>
            </div>
            <div className="border-t pt-3">
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
                <Button 
                  type="button" 
                  size="icon" 
                  variant="ghost" 
                  className="h-8 w-8 text-muted-foreground hover:text-foreground"
                >
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button type="submit" size="sm">
                  Send
                </Button>
              </form>
            </div>
          </div>
        </>
      )}

      {!isOpen && (
        <div className="flex items-center">
          <div className="chat-bubble bg-white shadow-md rounded-lg px-4 py-2 mr-4 animate-in fade-in-50 duration-300">
            Chat with us
          </div>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            size="icon"
            className="h-14 w-14 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 text-white"
          >
            <MessageSquare className="h-8 w-8" />
          </Button>
        </div>
      )}
    </div>
  )
}
