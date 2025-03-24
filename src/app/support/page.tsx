import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Coffee, DollarSign, Users, ArrowRight } from "lucide-react"

export default function SupportPage() {
  // Support platform data
  const supportPlatforms = [
    {
      name: "Patreon",
      description: "Become a monthly supporter and get exclusive benefits",
      icon: "/placeholder.svg?height=60&width=60",
      color: "#FF424D",
      url: "https://www.patreon.com/",
      benefits: [
        "Early access to event registrations",
        "Monthly supporter newsletter",
        "Recognition on our supporter wall",
        "Exclusive community center merchandise",
      ],
    },
    {
      name: "Buy Me a Coffee",
      description: "Make a one-time donation to support our programs",
      icon: "/placeholder.svg?height=60&width=60",
      color: "#FFDD00",
      url: "https://www.buymeacoffee.com/",
      benefits: [
        "Quick and easy one-time donations",
        "No account required",
        "100% of donations go to community programs",
        "Option to leave a supportive message",
      ],
    },
    {
      name: "Apoia.se",
      description: "Support us through Brazil's leading crowdfunding platform",
      icon: "/placeholder.svg?height=60&width=60",
      color: "#28A745",
      url: "https://apoia.se/",
      benefits: [
        "Support in Brazilian Real (R$)",
        "Local payment methods accepted",
        "Tax benefits for Brazilian supporters",
        "Portuguese language support",
      ],
    },
  ]

  // Impact statistics
  const impactStats = [
    {
      title: "Youth Programs",
      value: "12",
      description: "Weekly programs for children and teens",
    },
    {
      title: "Senior Services",
      value: "8",
      description: "Regular activities for elderly community members",
    },
    {
      title: "Community Events",
      value: "24",
      description: "Free events organized annually",
    },
    {
      title: "Volunteer Hours",
      value: "5,000+",
      description: "Contributed by our dedicated volunteers each year",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col py-12 px-4 md:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center flex flex-col">
          <h1 className="text-2xl font-bold tracking-tight" style={{ color: "#65844A" }}>Support Our Community Center</h1>
          <p className="text-md text-gray-500 max-w-3xl mx-auto">
            Your generous support helps us continue providing valuable programs and services to our community.
          </p>
        </div>

        <Tabs defaultValue="donate" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 my-8">
            <TabsTrigger value="donate">Donate</TabsTrigger>
            <TabsTrigger value="impact">Your Impact</TabsTrigger>
            <TabsTrigger value="sponsors">Our Sponsors</TabsTrigger>
          </TabsList>

          <TabsContent value="donate" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supportPlatforms.map((platform) => (
                <Card key={platform.name} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: platform.color + "20" }}
                      >
                        {platform.name === "Patreon" && <Heart className="h-6 w-6" style={{ color: platform.color }} />}
                        {platform.name === "Buy Me a Coffee" && (
                          <Coffee className="h-6 w-6" style={{ color: platform.color }} />
                        )}
                        {platform.name === "Apoia.se" && (
                          <DollarSign className="h-6 w-6" style={{ color: platform.color }} />
                        )}
                      </div>
                      <div>
                        <CardTitle>{platform.name}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{platform.description}</CardDescription>
                    <div className="space-y-2">
                      {platform.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <div className="mr-2 mt-1 h-4 w-4 flex-shrink-0 rounded-full bg-primary" />
                          <p className="text-sm">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      style={{
                        backgroundColor: platform.color,
                        color: platform.name === "Buy Me a Coffee" ? "#000" : "#fff",
                      }}
                      asChild
                    >
                      <Link href={platform.url} target="_blank" rel="noopener noreferrer">
                        Support on {platform.name}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Other Ways to Support</CardTitle>
                <CardDescription>There are many ways to contribute beyond financial donations</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2 text-center p-4 border rounded-lg">
                  <Users className="h-8 w-8 mx-auto text-primary" />
                  <h3 className="font-medium">Volunteer</h3>
                  <p className="text-sm text-muted-foreground">
                    Share your time and skills to help with our programs and events
                  </p>
                  <Button variant="outline" size="sm" className="mt-2" asChild>
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </div>
                <div className="space-y-2 text-center p-4 border rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mx-auto text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                  <h3 className="font-medium">In-Kind Donations</h3>
                  <p className="text-sm text-muted-foreground">
                    Donate supplies, equipment, or services that our center needs
                  </p>
                  <Button variant="outline" size="sm" className="mt-2" asChild>
                    <Link href="/contact">See Our Wishlist</Link>
                  </Button>
                </div>
                <div className="space-y-2 text-center p-4 border rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mx-auto text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 14V2" />
                    <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
                  </svg>
                  <h3 className="font-medium">Spread the Word</h3>
                  <p className="text-sm text-muted-foreground">
                    Follow us on social media and share our mission with others
                  </p>
                  <Button variant="outline" size="sm" className="mt-2" asChild>
                    <Link href="#">Follow Us</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="impact" className="space-y-8">
            <div className="relative h-[300px] w-full rounded-lg overflow-hidden mb-8">
              <Image
                src="/placeholder.svg?height=300&width=1200"
                alt="Community center impact"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {impactStats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold text-primary">{stat.value}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-medium">{stat.title}</h3>
                    <CardDescription className="mt-2">{stat.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>How Your Support Makes a Difference</CardTitle>
                <CardDescription>Your donations directly fund these important community initiatives</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Youth Development Programs</h3>
                  <p className="text-muted-foreground">
                    Providing after-school activities, mentorship, and educational support for local youth.
                  </p>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "75%" }}></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>$15,000 raised</span>
                    <span>$20,000 goal</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Senior Wellness Initiative</h3>
                  <p className="text-muted-foreground">
                    Supporting health programs, social activities, and resources for elderly community members.
                  </p>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "60%" }}></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>$12,000 raised</span>
                    <span>$20,000 goal</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Community Garden Expansion</h3>
                  <p className="text-muted-foreground">
                    Expanding our community garden to provide fresh produce and gardening education.
                  </p>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "40%" }}></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>$4,000 raised</span>
                    <span>$10,000 goal</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="#" className="flex items-center">
                    View Impact Report
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="sponsors" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Our Corporate Sponsors</CardTitle>
                <CardDescription>These organizations provide vital support to our community center</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center justify-center">
                      <div className="h-20 w-40 bg-muted rounded flex items-center justify-center text-muted-foreground">
                        Sponsor Logo
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Become a Sponsor</CardTitle>
                <CardDescription>Partner with us to make a difference in our community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p>
                    Our corporate sponsorship program offers various levels of partnership, each with unique benefits
                    and recognition opportunities. By becoming a sponsor, your organization can:
                  </p>
                  <ul>
                    <li>Demonstrate your commitment to community development</li>
                    <li>Increase your brand visibility among community members</li>
                    <li>Engage your employees in meaningful volunteer opportunities</li>
                    <li>Support specific programs aligned with your corporate values</li>
                  </ul>
                  <p>
                    We offer sponsorship packages ranging from $1,000 to $25,000 annually, with custom packages
                    available for larger partnerships.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/contact">Contact Us About Sponsorship</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

