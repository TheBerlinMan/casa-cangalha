import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">Casa Cangalha Newsletter</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Join Our Newsletter.</CardTitle>
          <CardDescription>
            Stay updated with the latest news and events from our community.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* move form into it's own component */}
          <form className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="sr-only">
                Email
              </Label>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit">Subscribe</Button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm text-gray-500">
                I agree to receive the community newsletter and can unsubscribe
                at any time.
              </Label>
            </div>
          </form>          
        </CardContent>
      </Card>
    </div>
  );
};

export default Blog;
