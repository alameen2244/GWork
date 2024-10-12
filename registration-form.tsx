"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import React from "react"

export default function RegistrationForm() {
  const [isWorker, setIsWorker] = useState(true)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission here
    console.log("Form submitted")
  }

  return (
    <div className="min-h-screen bg-[#FDF4E3] flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#4A3933]">Register for Gwork</CardTitle>
          <CardDescription>
            Join our community of skilled workers and employers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center space-x-2">
              <Switch
                id="user-type"
                checked={isWorker}
                onCheckedChange={setIsWorker}
              />
              <Label htmlFor="user-type">Register as a {isWorker ? "Worker" : "Employer"}</Label>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" placeholder="Enter your full name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobileNumber">Mobile Number</Label>
              <Input id="mobileNumber" type="tel" placeholder="Enter your mobile number" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="Enter your address" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="idNumber">ID Number</Label>
              <Input id="idNumber" placeholder="Enter your ID number" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="idType">ID Type</Label>
              <Select required>
                <SelectTrigger id="idType">
                  <SelectValue placeholder="Select ID type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nin">National Identification Number (NIN)</SelectItem>
                  <SelectItem value="driversLicense">Driver's License</SelectItem>
                  <SelectItem value="votersCard">Voter's Card</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {isWorker && (
              <div className="space-y-2">
                <Label>Skills</Label>
                <RadioGroup defaultValue="cleaning">
                  <div className="flex flex-wrap gap-4">
                    {["Cleaning", "Gardening", "Carpentry", "Plumbing", "Painting", "Electrical", "Cooking", "Childcare"].map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <RadioGroupItem value={skill.toLowerCase()} id={skill.toLowerCase()} />
                        <Label htmlFor={skill.toLowerCase()}>{skill}</Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            )}

            {!isWorker && (
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name (Optional)</Label>
                <Input id="companyName" placeholder="Enter your company name" />
              </div>
            )}

            <Button type="submit" className="w-full bg-[#D2691E] hover:bg-[#E6B800] text-white">
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}