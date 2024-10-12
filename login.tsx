"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Phone } from "lucide-react"
import React from "react"

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [otp, setOtp] = useState("")
  const [step, setStep] = useState("phone") // "phone" or "otp"

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the phone number to your backend
    // and trigger an OTP to be sent to the user
    setStep("otp")
  }

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would verify the OTP with your backend
    console.log("OTP submitted:", otp)
  }

  return (
    <div className="min-h-screen bg-[#FDF4E3] flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#4A3933] text-center">Login to Gwork</CardTitle>
          <CardDescription className="text-center">
            Enter your phone number to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === "phone" ? (
            <form onSubmit={handlePhoneSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="sr-only">
                  Phone Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full bg-[#D2691E] hover:bg-[#E6B800]">
                Send OTP
              </Button>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="otp" className="sr-only">
                  OTP
                </Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="Enter the OTP sent to your phone"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-[#D2691E] hover:bg-[#E6B800]">
                Verify OTP
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}