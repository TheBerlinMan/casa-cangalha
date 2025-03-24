import React from "react";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="container mx-auto py-12 px-4 flex flex-col gap-6 max-w-5xl">
      <div>
        <h1
          className="text-2xl font-bold text-center"
          style={{ color: "#65844A" }}
        >
          Join The Casa Cangalha Newsletter
        </h1>
        {/* move form into it's own component */}
        <p className="text-center text-gray-500">
          Stay updated with the latest news and events from our community.
        </p>
      </div>
      <Card className="p-10">
        {/* <CardHeader className="mb-3"> */}
        {/* <CardTitle className="text-xl">Join Our Newsletter!</CardTitle> */}
        {/* <CardDescription>
            Stay updated with the latest news and events from our community.
          </CardDescription> */}
        {/* </CardHeader> */}
        <CardContent className="p-0">
          <div className="flex items-start gap-2">
            <div className="flex justify-start">
              <div className="h-full">
                <div className="flex flex-col justify-around rounded-md h-full gap-16">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex gap-2 items-start">
                      <Check className="w-6 h-6 shrink-0" strokeWidth={1} />
                      <p>
                        <span className="font-bold">
                          Monthly Event Calendar
                        </span>{" "}
                        Complete listing of upcoming events and activities
                      </p>
                    </div>
                    <div className="flex gap-2 items-start">
                      <Check className="w-6 h-6 shrink-0" strokeWidth={1} />
                      <p>
                        <span className="font-bold">Program Announcements</span>{" "}
                        Be the first to know about new programs and classes
                      </p>
                    </div>
                    <div className="flex gap-2 items-start">
                      <Check className="w-6 h-6 shrink-0" strokeWidth={1} />
                      <p>
                        <span className="font-bold">Community Spotlights</span>{" "}
                        Stories highlighting community members and achievements
                      </p>
                    </div>
                    <div className="flex gap-2 items-start">
                      <Check className="w-6 h-6 shrink-0" strokeWidth={1} />
                      <p>
                        <span className="font-bold">
                          Volunteer Opportunities
                        </span>{" "}
                        Ways to get involved and give back to the community
                      </p>
                    </div>
                  </div>
                  <div id="form" className="ml-8">
                    <form className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email" className="sr-only">
                          Email
                        </Label>
                        <div className="flex w-full max-w-sm items-center space-x-4">
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            required
                            className="flex-1 border-gray-500"
                          />
                          <Button type="submit">Subscribe</Button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="ml-8 flex flex-col gap-1 -mt-12">
                    <div className="text-sm text-gray-400">
                      By subscribing, you allow us to send you emails.
                    </div>
                    <div className="text-sm text-gray-400">
                      But, you can unsubscribe at any moment.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%] h-[100%] max-w-[400px]">
              <Image
                src="/Assets-07.png"
                alt="Casa Cangalha"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Blog;
