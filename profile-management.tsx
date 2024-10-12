"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { User, Phone, MapPin, Briefcase, Camera } from "lucide-react"
import React from "react"

export default function ProfileManagement() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    phone: "+1234567890",
    address: "123 Main St, City",
    skills: "Cleaning, Gardening",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the updated profile to your backend
    console.log("Updated profile:", profile)
  }

  return (
    <div className="min-h-screen bg-[#FDF4E3] flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#4A3933] text-center">Your Profile</CardTitle>
          <CardDescription className="text-center">Update your information</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center">
                <User className="mr-2" /> Name
              </Label>
              <Input
                id="name"
                name="name"
                value={profile.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center">
                <Phone className="mr-2" /> Phone
              </Label>
              <Input
                id="phone"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address" className="flex items-center">
                <MapPin className="mr-2" /> Address
              </Label>
              <Input
                id="address"
                name="address"
                value={profile.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="skills" className="flex items-center">
                <Briefcase className="mr-2" /> Skills
              </Label>
              <Input
                id="skills"
                name="skills"
                value={profile.skills}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="photo" className="flex items-center">
                <Camera className="mr-2" /> Profile Photo
              </Label>
              <Input id="photo" type="file" accept="image/*" />
            </div>
            <Button type="submit" className="w-full bg-[#D2691E] hover:bg-[#E6B800]">
              Update Profile
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}